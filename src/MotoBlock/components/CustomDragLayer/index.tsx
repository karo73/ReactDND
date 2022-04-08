import React, { FC } from 'react';
import { useDragLayer } from 'react-dnd';

import { IGetItemStylesProps } from './interface';
import { ItemTypes } from '../../constants';

import DragHandle from '../Fragments/DragHandle';
import NestedList from '../NestedList';

import './index.css';

const CustomDragLayer: FC = () => {

  const getItemStyles: IGetItemStylesProps = ( initialOffset, currentOffset ) => {

    if ( !initialOffset || !currentOffset ) {
      return {
        display: 'none'
      };
    }

    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;

    return {
      transform,
      WebkitTransform: transform
    };

  };

  const {
    item,
    itemType,
    initialOffset,
    currentOffset
  } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return (
    <>
      { itemType && itemType !== ItemTypes.CARD &&
        <div className="custom-drag-layer custom-drag-layer--nested">
          <div
              style={getItemStyles(initialOffset, currentOffset)}
          >
              <div className="nested-list">
                <div className="nested-list__item">
                  <div className="nested-list__item-inner">
                    <div
                        className="nested-list__title"
                    >{item.title}</div>
                    <DragHandle
                        clsName="nested-list__drag"
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      }
      { itemType && itemType === ItemTypes.CARD &&
        <div className="custom-drag-layer">
          <div
            style={getItemStyles(initialOffset, currentOffset)}
          >
              <div className="drop-box">
                <div
                    style={{ backgroundColor: item.backgroundColor }}
                    className="drop-box__inner"
                  >
                  <h2 className="drop-box__title">{item.title}</h2>
                  <NestedList
                    accept={item.accept}
                    data={item.children}
                  />
                  <DragHandle
                    clsName="drop-box__drag"
                  />
                </div>
              </div>
          </div>
        </div>
      }
    </>
  );
};

export default CustomDragLayer;