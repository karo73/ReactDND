import React, { FC, useEffect, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import DndContext from '../../../../context';
import { DndDropItemProps } from './interface';
import DndDragHandle from '../DndDragHandle';
import DndCustomDragLayer from '../../DndCustomDragLayer';
import { dndFindChildrenItem } from '../../../../helpers';

const DndDropItem: FC<DndDropItemProps> = (props) => {
    const { id, title, accept, parentId, data } = props;
    const {
        moveDndChildItems,
        addDndItems,
        removeDndItem,
        firstHoveredId,
        setFirstHoveredId,
        lastHoveredId,
        setLastHoveredId,
    } = useContext(DndContext);

    const child =
        data.length > 0
            ? dndFindChildrenItem(id, data).dropItem
            : { parentId: 0 };
    const originalParentId = child.parentId;

    const [{ isDragging }, dragRef, preview] = useDrag(
        () => ({
            type: accept,
            item: { id, title, parentId, originalParentId, data },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
            end: (item) => {
                if (firstHoveredId && lastHoveredId) {
                    if (firstHoveredId === lastHoveredId) {
                        removeDndItem(parentId, item.id);
                    } else {
                        removeDndItem(lastHoveredId, item.id);
                    }

                    setFirstHoveredId(0);
                    setLastHoveredId(0);
                }
            },
        }),
        [firstHoveredId, lastHoveredId]
    );

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept,
            hover(props: {
                id: number;
                parentId: number;
                originalParentId: number;
            }) {
                setFirstHoveredId(parentId);

                if (parentId !== props.parentId) {
                    const { index: oldIndex } = dndFindChildrenItem(id, data);
                    const { index: newIndex } = dndFindChildrenItem(
                        props.id,
                        data
                    );

                    if (newIndex > -1) {
                        moveDndChildItems(parentId, oldIndex, newIndex);
                    } else {
                        addDndItems(props.parentId, props.id, parentId, id);

                        if (lastHoveredId !== 0) {
                            removeDndItem(lastHoveredId, props.id);
                        }

                        setLastHoveredId(parentId);
                    }

                    return;
                }

                if (props.id !== id) {
                    const { index: oldIndex } = dndFindChildrenItem(
                        props.id,
                        data
                    );
                    const { index: newIndex } = dndFindChildrenItem(id, data);

                    if (oldIndex === -1) {
                        addDndItems(lastHoveredId, props.id, parentId, id);
                    } else {
                        moveDndChildItems(parentId, oldIndex, newIndex);
                    }
                }
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
            }),
        }),
        [lastHoveredId]
    );

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);

    const clsName: string = isDragging
        ? ' nested-list__item--dragging'
        : isOver
        ? ' nested-list__item--hover'
        : canDrop
        ? ' nested-list__item--active'
        : '';

    return (
        <>
            <div className={`nested-list__item${clsName}`} ref={drop}>
                <div className="nested-list__item-inner">
                    <div className="nested-list__title">{title}</div>
                    <DndDragHandle
                        reference={dragRef}
                        clsName="nested-list__drag"
                    />
                </div>
            </div>
            {isDragging && <DndCustomDragLayer />}
        </>
    );
};

export default DndDropItem;
