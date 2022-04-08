import React, { FC } from 'react';

import { NestedListProps } from './interface';
import DropItem from '../Fragments/DropItem';

import './index.css';

const NestedList: FC<NestedListProps> = (props): JSX.Element => {

	const { accept, data } = props;

	return (
		<div className="nested-list">
			{data.map(({ id, title, parentId }) => (
				<DropItem
					id={id}
					parentId={parentId}
					key={id}
					title={title}
					accept={accept}
					data={data}
				/>)
			)}
		</div>
	);

};

export default NestedList;