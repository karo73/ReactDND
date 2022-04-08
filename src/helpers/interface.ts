import { IDataItems, IDataChildrenItems } from '../MotoBlock/components/Drop/interface';

export type FindItem = (id: number, dropData: IDataItems[]) => { index: number, dropItem: IDataItems };
export type FindChildrenItem = (id: number, dropData: IDataChildrenItems[]) => { index: number, dropItem: IDataChildrenItems };

export type MoveItem = (prevState: IDataItems[], dragId: number, dropId: number) => IDataItems[];
export type MoveChildrenItem = (prevState: IDataChildrenItems[], dragId: number, dropId: number) => IDataChildrenItems[];