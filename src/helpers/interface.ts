import {
    IDataItems,
    IDataChildrenItems,
} from '../DndBlock/components/DndDrop/interface';

export type DndFindItem = (
    id: number,
    dropData: IDataItems[]
) => { index: number; dropItem: IDataItems };
export type DndFindChildrenItem = (
    id: number,
    dropData: IDataChildrenItems[]
) => { index: number; dropItem: IDataChildrenItems };

export type DndMoveItem = (
    prevState: IDataItems[],
    dragId: number,
    dropId: number
) => IDataItems[];
export type DndMoveChildrenItem = (
    prevState: IDataChildrenItems[],
    dragId: number,
    dropId: number
) => IDataChildrenItems[];
