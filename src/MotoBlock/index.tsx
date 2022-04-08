import React, { FC, useState, useMemo, useCallback } from 'react';

import { IDataItems } from './components/Drop/interface';
import Drop from './components/Drop';
import { findItem, findChildrenItem, moveItem, moveChildrenItem } from '../helpers';
import DndContext from '../context';
import { IFirstHoveredItems, ILastHoveredItems } from '../context/interface';
import data from '../data';

import './index.css';

const MotoBlock: FC = () => {

  const [dropData, setDropData] = useState<Array<IDataItems>>(data);
  const [lastHoveredId, setLastHoveredId] = useState<ILastHoveredItems>(0);
  const [firstHoveredId, setFirstHoveredId] = useState<IFirstHoveredItems>(0);

  const getItemByParentId = ( parentId: number, newDropData: IDataItems[] ) => findItem(parentId, newDropData);

  const moveDndItems = ( currentId: number, id: number ) => setDropData( prevState => moveItem(prevState, currentId, id) );
  const moveDndChildItems = ( parentId: number, oldIndex: number, newIndex: number ) => setDropData( prevState => {

    const newDropData = [...prevState];
    const { dropItem } = findItem(parentId, newDropData);
    dropItem.children = moveChildrenItem( dropItem.children, oldIndex, newIndex );

    return newDropData;
  });

  const addDndItems = useCallback(( fromParentId: number, fromItemId: number, toParentId: number, toItemId: number ) => setDropData( prevState => {

    const newDropData = [...prevState];

    const { dropItem: inputDropItem } = getItemByParentId(fromParentId, newDropData);
    const { index: inputChildIndex, dropItem: inputChildDropItem } = findChildrenItem(fromItemId, inputDropItem.children);

    if ( inputChildDropItem ) {

      const { dropItem: outputDropItem } = getItemByParentId(toParentId, newDropData);

      const { index: isExistInCurrentList } = findChildrenItem(inputChildDropItem.id, outputDropItem.children);

      if ( isExistInCurrentList === -1 ) {

        inputChildDropItem.parentId = toParentId;
        outputDropItem.children.splice( inputChildIndex, 0, inputChildDropItem );

      }

    }

    return newDropData;
  }), []);

  const removeDndItem = useCallback(( parentId: number, itemId: number ) => setDropData( prevState => {

    const newDropData = [...prevState];

    const { dropItem } = getItemByParentId(parentId, newDropData);
    const { index } = findChildrenItem(itemId, dropItem.children);

    dropItem.children.splice( index, 1 );

    return newDropData;

  }), []);

  const updateDndItemParentId = useCallback(( parentId: number, itemId: number ) => setDropData( prevState => {

    const newDropData = [...prevState];

    const { dropItem } = getItemByParentId(parentId, newDropData);
    const { dropItem: dropItemChild } = findChildrenItem(itemId, dropItem.children);

    if ( dropItemChild ) {
      dropItemChild.parentId = parentId;
    }

    return newDropData;

  }), []);

  const value = useMemo(
    () => ({
      moveDndItems,
      moveDndChildItems,
      addDndItems,
      removeDndItem,
      firstHoveredId,
      setFirstHoveredId,
      lastHoveredId,
      setLastHoveredId,
      updateDndItemParentId,
    }), 
    [firstHoveredId, lastHoveredId, addDndItems, removeDndItem, updateDndItemParentId]
  );

  return (
    <DndContext.Provider value={value}>
      <div className="grid">
        <div className="grid__box">
          { dropData.map( props =>
            <Drop
              {...props}
              key={props.id}
            />
          ) }
        </div>
      </div>
    </DndContext.Provider>
  )
};

export default MotoBlock;