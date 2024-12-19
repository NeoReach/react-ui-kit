import React from 'react';
import './Dialog.scss';
import { DialogViewModel } from './DialogViewModel';
import UiKitTheme from '../../themes/UiKitTheme';
type DialogProps = {
    messagesViewModel: DialogViewModel;
    maxWidthToResize?: string;
    warningErrorText: string;
    renderHeader: React.ReactNode;
    renderMessageList: React.ReactNode;
    renderMessageInput: React.ReactNode;
    theme?: UiKitTheme;
    headerContent?: React.ReactNode;
    rootStyles?: React.CSSProperties;
    messagesContainerStyles?: React.CSSProperties;
};
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
