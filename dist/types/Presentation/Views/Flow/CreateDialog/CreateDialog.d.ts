import React from 'react';
import './CreateDialog.scss';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
type CreateDialogProps = {
    createPrivateDialogOnClick: FunctionTypeVoidToVoid;
    createPrivateDialogOnTouch: FunctionTypeVoidToVoid;
    createGroupDialogOnClick: FunctionTypeVoidToVoid;
    createGroupDialogOnTouch: FunctionTypeVoidToVoid;
    createPublicDialogOnClick: FunctionTypeVoidToVoid;
    createPublicDialogOnTouch: FunctionTypeVoidToVoid;
};
declare const CreateDialog: React.FC<CreateDialogProps>;
export default CreateDialog;
