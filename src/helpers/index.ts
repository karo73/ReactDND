import { FindItem, FindChildrenItem, MoveItem, MoveChildrenItem } from './interface';

export const findItem: FindItem = (id, dropData) => {
  const dropItem = dropData.filter((d) => d.id === id)[0];
  return {
    dropItem: {...dropItem},
    index: dropData.indexOf(dropItem),
  }
};

export const findChildrenItem: FindChildrenItem = (id, childrenData) => {
  const dropItem = childrenData.filter((d) => d.id === id)[0];
  return {
    dropItem: {...dropItem},
    index: childrenData.indexOf(dropItem),
  }
};

export const moveItem: MoveItem = ( prevState, dragId, dropId ) => {

  const newState = [...prevState];
  const dragItem = findItem( dragId, newState );
  const dropItem = findItem( dropId, newState );

  newState.splice( dragItem.index, 1, dropItem.dropItem );
  newState.splice( dropItem.index, 1, dragItem.dropItem );

  return newState;

};

export const moveChildrenItem: MoveChildrenItem = ( prevState, dragId, dropId ) => {

  const dragItem = prevState[dragId];
  const dropItem = prevState[dropId];

  prevState.splice( dragId, 1, dropItem );
  prevState.splice( dropId, 1, dragItem );

  return prevState;

};