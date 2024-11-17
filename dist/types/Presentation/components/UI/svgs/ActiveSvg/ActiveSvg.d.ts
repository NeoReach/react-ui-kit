import React from 'react';
import { FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';
import './ActiveSvg.scss';
type ActiveSvgContainerProps = {
    content: React.ReactNode;
    onTouch?: FunctionTypeVoidToVoid;
    onClick?: FunctionTypeVoidToVoid;
    disabled?: boolean;
};
declare const ActiveSvg: React.FC<ActiveSvgContainerProps>;
export default ActiveSvg;
