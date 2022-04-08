import { LegacyRef, MouseEvent } from 'react';

export interface DragHandleProps {
	reference?: LegacyRef<HTMLDivElement>;
	// onDragStart?: ( e: MouseEvent ) => void;
	clsName: string;
};