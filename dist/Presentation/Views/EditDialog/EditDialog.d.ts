import React from 'react';
import { FunctionTypeEditDialogParamsToVoid, FunctionTypeVoidToVoid } from '../../../CommonTypes/BaseViewModel';
import { DialogType } from '../../../Domain/entity/DialogTypes';
import './EditDialog.scss';
export declare const TypeOpenDialog: {
    readonly edit: "edit";
    readonly create: "create";
};
export type OpenDialogArcheType = keyof typeof TypeOpenDialog;
type EditDialogProps = {
    nameDialog: string;
    typeDialog: DialogType;
    ulrIcon?: string;
    typeAddEditDialog: OpenDialogArcheType;
    clickUpdatedHandler?: FunctionTypeEditDialogParamsToVoid;
    clickCancelHandler?: FunctionTypeVoidToVoid;
    disableActions?: boolean;
};
declare const EditDialog: React.FC<EditDialogProps>;
export default EditDialog;
