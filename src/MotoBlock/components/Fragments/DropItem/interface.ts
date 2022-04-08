import { Dispatch, SetStateAction } from 'react';

import { IDataChildrenItems } from '../../Drop/interface';

export interface DropItemProps {
	id: number;
	title: string;
	accept: string;
	parentId: number;
	data: IDataChildrenItems[];
}