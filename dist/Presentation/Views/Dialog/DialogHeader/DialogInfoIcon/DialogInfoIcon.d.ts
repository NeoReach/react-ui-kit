import React from 'react';
import './DialogInfoIcon.scss';
import { FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';
import UiKitTheme from '../../../../themes/UiKitTheme';
type RenderRightActionsProps = {
    onClickInfo: FunctionTypeVoidToVoid;
    theme?: UiKitTheme;
};
declare const DialogInfoIcon: React.FC<RenderRightActionsProps>;
export default DialogInfoIcon;
