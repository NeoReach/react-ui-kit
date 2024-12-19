import React from 'react';
import './DialogListItem.scss';
import { FunctionTypeStringToVoid } from '../../../../../../CommonTypes/BaseViewModel';
import { DialogType } from '../../../../../../Domain/entity/DialogTypes';
type DialogListItemProps = {
    name: string;
    avatar: string;
    typeDialog: DialogType;
    id: string;
    checked: boolean;
    onSelect: FunctionTypeStringToVoid;
};
declare const DialogListItem: React.FC<DialogListItemProps>;
export default DialogListItem;
