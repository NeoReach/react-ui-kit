import './ErrorComponent.scss';
import React from 'react';
import { IconTheme } from '../../svgs/Icons/IconsCommonTypes';
import { FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';
type ErrorComponentProps = {
    title?: string;
    ClickActionHandler?: FunctionTypeVoidToVoid;
    TouchActionHandler?: FunctionTypeVoidToVoid;
    theme?: IconTheme;
};
declare const ErrorComponent: React.FC<ErrorComponentProps>;
export default ErrorComponent;
