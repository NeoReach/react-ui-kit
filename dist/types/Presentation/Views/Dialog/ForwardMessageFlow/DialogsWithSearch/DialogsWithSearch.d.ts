import React from 'react';
import './DialogsWithSearch.scss';
import { DialogEntity } from '../../../../../Domain/entity/DialogEntity';
import { FunctionTypeStringToVoid } from '../../../../../CommonTypes/BaseViewModel';
type DialogsWithSearchProps = {
    dialogs: DialogEntity[];
    currentDialog: DialogEntity;
    selectedDialogs: string[];
    onSelect: FunctionTypeStringToVoid;
};
declare const DialogsWithSearch: React.FC<DialogsWithSearchProps>;
export default DialogsWithSearch;
