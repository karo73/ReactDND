export interface IDataChildrenItems extends Pick<IDataItems, 'id' | 'title'> {
    parentId: number;
}

export interface IDataItems {
    backgroundColor: string;
    id: number;
    title: string;
    accept: string;
    children: IDataChildrenItems[];
}
