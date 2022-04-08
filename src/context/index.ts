import { createContext } from 'react';

import { IDndContextProps } from './interface';

const DndContext = createContext<IDndContextProps>({
	moveDndItems: (currentId, id) => {},
    moveDndChildItems: (parentId, index, originalIndex) => {},
    addDndItems: (fromParentId, fromItemId, toParentId, toItemId) => {},
    removeDndItem: (parentId, itemId) => {},
    updateDndItemParentId: (parentId, itemId) => {},
    firstHoveredId: 0,
    setFirstHoveredId: () => {},
    lastHoveredId: 0,
    setLastHoveredId: () => {},
});

export default DndContext;