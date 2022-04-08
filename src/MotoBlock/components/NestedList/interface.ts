import { Dispatch, SetStateAction } from 'react';
import { IDataChildrenItems } from '../Drop/interface';

export interface NestedListProps {
	accept: string;
	data: IDataChildrenItems[];
}