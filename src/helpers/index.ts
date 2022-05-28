import {
    DndFindItem,
    DndFindChildrenItem,
    DndMoveItem,
    DndMoveChildrenItem,
} from './interface';

export const dndFindItem: DndFindItem = (id, dropData) => {
    const dropItem = dropData.filter((d) => d.id === id)[0];
    return {
        dropItem: { ...dropItem },
        index: dropData.indexOf(dropItem),
    };
};

export const dndFindChildrenItem: DndFindChildrenItem = (id, childrenData) => {
    const dropItem = childrenData.filter((d) => d.id === id)[0];
    return {
        dropItem: { ...dropItem },
        index: childrenData.indexOf(dropItem),
    };
};

export const dndMoveItem: DndMoveItem = (prevState, dragId, dropId) => {
    const newState = [...prevState];
    const dragItem = dndFindItem(dragId, newState);
    const dropItem = dndFindItem(dropId, newState);

    newState.splice(dragItem.index, 1, dropItem.dropItem);
    newState.splice(dropItem.index, 1, dragItem.dropItem);

    return newState;
};

export const dndMoveChildrenItem: DndMoveChildrenItem = (
    prevState,
    dragId,
    dropId
) => {
    const dragItem = prevState[dragId];
    const dropItem = prevState[dropId];

    prevState.splice(dragId, 1, dropItem);
    prevState.splice(dropId, 1, dragItem);

    return prevState;
};
