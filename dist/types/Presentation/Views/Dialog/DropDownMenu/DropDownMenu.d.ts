import './DropDownMenu.scss';
import React from 'react';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
import { MessageEntity } from '../../../../Domain/entity/MessageEntity';
export type ContextMessageMenu = {
    title: string;
    message?: MessageEntity;
    icon?: React.ReactNode;
    clickHandler?: FunctionTypeVoidToVoid;
    touchHandler?: FunctionTypeVoidToVoid;
};
export type ContextMessageMenuAI = {
    title: string;
    message?: MessageEntity;
    icon?: React.ReactNode;
    clickHandler?: FunctionTypeVoidToVoid;
    touchHandler?: FunctionTypeVoidToVoid;
};
export declare const contextMessageMenu: ContextMessageMenu[];
export declare const contextMessageMenuAI: ContextMessageMenuAI[];
type DropDownMenuProps = {
    items: ContextMessageMenu[];
};
export declare const DropDownMenu: React.FC<DropDownMenuProps>;
export {};
