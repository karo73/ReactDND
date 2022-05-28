import { IDataChildrenItems } from '../../DndDrop/interface';

export interface DndDropItemProps {
    id: number;
    title: string;
    accept: string;
    parentId: number;
    data: IDataChildrenItems[];
}
