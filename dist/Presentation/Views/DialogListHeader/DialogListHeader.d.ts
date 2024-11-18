import React from 'react';
import './DialogListHeader.scss';
import { FunctionTypeVoidToVoid } from '../../../CommonTypes/BaseViewModel';
import UiKitTheme from '../../themes/UiKitTheme';
type DialogListHeaderProps = {
    title?: string;
    clickSearchHandler?: FunctionTypeVoidToVoid;
    touchSearchHandler?: FunctionTypeVoidToVoid;
    clickActionHandler?: FunctionTypeVoidToVoid;
    touchActionHandler?: FunctionTypeVoidToVoid;
    theme?: UiKitTheme;
    settings?: any;
};
declare const DialogListHeader: React.FC<DialogListHeaderProps>;
export default DialogListHeader;
