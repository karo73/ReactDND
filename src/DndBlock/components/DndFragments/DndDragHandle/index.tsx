import React, { FC } from 'react';

import { DndDragHandleProps } from './interface';

const DndDragHandle: FC<DndDragHandleProps> = ({ reference, clsName }) => {
    return (
        <div className={clsName} ref={reference}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="10px"
                height="16px"
            >
                <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M8.000,10.000 C6.895,10.000 6.000,9.105 6.000,8.000 C6.000,6.895 6.895,6.000 8.000,6.000 C9.105,6.000 10.000,6.895 10.000,8.000 C10.000,9.105 9.105,10.000 8.000,10.000 ZM8.000,4.000 C6.895,4.000 6.000,3.105 6.000,2.000 C6.000,0.895 6.895,-0.000 8.000,-0.000 C9.105,-0.000 10.000,0.895 10.000,2.000 C10.000,3.105 9.105,4.000 8.000,4.000 ZM2.000,16.000 C0.895,16.000 -0.000,15.105 -0.000,14.000 C-0.000,12.895 0.895,12.000 2.000,12.000 C3.105,12.000 4.000,12.895 4.000,14.000 C4.000,15.105 3.105,16.000 2.000,16.000 ZM2.000,10.000 C0.895,10.000 -0.000,9.105 -0.000,8.000 C-0.000,6.895 0.895,6.000 2.000,6.000 C3.105,6.000 4.000,6.895 4.000,8.000 C4.000,9.105 3.105,10.000 2.000,10.000 ZM2.000,4.000 C0.895,4.000 -0.000,3.105 -0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 C3.105,-0.000 4.000,0.895 4.000,2.000 C4.000,3.105 3.105,4.000 2.000,4.000 ZM8.000,12.000 C9.105,12.000 10.000,12.895 10.000,14.000 C10.000,15.105 9.105,16.000 8.000,16.000 C6.895,16.000 6.000,15.105 6.000,14.000 C6.000,12.895 6.895,12.000 8.000,12.000 Z"
                />
            </svg>
        </div>
    );
};

export default DndDragHandle;