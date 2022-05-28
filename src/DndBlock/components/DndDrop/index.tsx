import React, { FC, useEffect, useContext } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import DndContext from '../../../context';
import { ItemTypes } from '../../constants';
import { IDataItems } from './interface';

import DndCustomDragLayer from '../DndCustomDragLayer';
import DragHandle from '../DndFragments/DndDragHandle';
import NestedList from '../DndNestedList';

import './index.css';

const DndDrop: FC<IDataItems> = (props) => {
    const { id, title, backgroundColor, accept, children } = props;
    const { moveDndItems } = useContext(DndContext);

    const [{ isDragging }, dragRef, preview] = useDrag(
        () => ({
            type: ItemTypes.CARD,
            item: { id, title, backgroundColor, accept, children },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, title, backgroundColor, accept, children]
    );

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ItemTypes.CARD,
            drop: (props: IDataItems) => moveDndItems(props.id, id),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
            }),
        }),
        [id]
    );

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);

    const clsName: string = isDragging
        ? ' drop-box--dragging'
        : isOver
        ? ' drop-box--hover'
        : canDrop
        ? ' drop-box--active'
        : '';

    return (
        <>
            <div className={`drop-box${clsName}`} ref={dragRef}>
                <div
                    style={{ backgroundColor }}
                    className="drop-box__inner"
                    ref={drop}
                >
                    <h2 className="drop-box__title">{title}</h2>
                    <NestedList accept={accept} data={children} />
                </div>
                <DragHandle reference={dragRef} clsName="drop-box__drag" />
            </div>
            {isDragging && <DndCustomDragLayer />}
        </>
    );
};

export default DndDrop;
