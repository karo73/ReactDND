import { Dispatch, SetStateAction } from 'react';

export type IFirstHoveredItems = number;
export type ILastHoveredItems = number;

export interface IDndContextProps {
    moveDndItems: (currentId: number, id: number) => void;
    moveDndChildItems: (
        parentId: number,
        index: number,
        originalIndex: number
    ) => void;
    addDndItems: (
        fromParentId: number,
        fromItemId: number,
        toParentId: number,
        toItemId: number
    ) => void;
    removeDndItem: (parentId: number, itemId: number) => void;
    updateDndItemParentId: (parentId: number, itemId: number) => void;
    firstHoveredId: IFirstHoveredItems;
    setFirstHoveredId: Dispatch<SetStateAction<IFirstHoveredItems>>;
    lastHoveredId: ILastHoveredItems;
    setLastHoveredId: Dispatch<SetStateAction<ILastHoveredItems>>;
}
