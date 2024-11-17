import './ItemDropDownMenu.scss';
import React from 'react';
import { FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';
type ItemDropDownMenuProps = {
    item: string;
    icon?: React.ReactNode;
    touchAction?: FunctionTypeVoidToVoid;
    clickAction?: FunctionTypeVoidToVoid;
};
export declare const ItemDropDownMenu: React.FC<ItemDropDownMenuProps>;
export {};
