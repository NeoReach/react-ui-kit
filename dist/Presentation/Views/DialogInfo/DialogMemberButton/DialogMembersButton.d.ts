import React from 'react';
import './DialogMembersButton.scss';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
type DialogMembersButtonProps = {
    content: string;
    clickHandler: FunctionTypeVoidToVoid;
    touchHandler: FunctionTypeVoidToVoid;
};
declare const DialogMembersButton: React.FC<DialogMembersButtonProps>;
export default DialogMembersButton;
