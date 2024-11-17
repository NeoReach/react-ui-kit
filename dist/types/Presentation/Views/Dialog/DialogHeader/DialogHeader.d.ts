import './DialogHeader.scss';
import React from 'react';
import UiKitTheme from '../../../themes/UiKitTheme';
type DialogHeaderProps = {
    dialogName: string;
    renderAvatar: React.ReactNode;
    renderLeftActions: React.ReactNode;
    renderRightActions: React.ReactNode;
    countMembers?: number;
    theme?: UiKitTheme;
};
declare const DialogHeader: React.FC<DialogHeaderProps>;
export default DialogHeader;
