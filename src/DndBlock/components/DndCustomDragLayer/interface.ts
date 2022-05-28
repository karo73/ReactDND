import { CSSProperties } from 'react';

export interface IItemCurrentProps {
    x: number;
    y: number;
}

export interface IGetItemStylesProps {
    (
        initialOffset: IItemCurrentProps | null,
        currentOffset: IItemCurrentProps | null
    ): CSSProperties;
}
