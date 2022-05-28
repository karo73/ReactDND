import React, { FC } from 'react';

import { DndNestedListProps } from './interface';
import DropItem from '../DndFragments/DndDropItem';

import './index.css';

const DndNestedList: FC<DndNestedListProps> = (props): JSX.Element => {
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
                />
            ))}
        </div>
    );
};

export default DndNestedList;
