import React from 'react';
import './PreviewDialog.scss';
import { DialogType } from '../../../Domain/entity/DialogTypes';
import PreviewDialogViewModel from './PreviewDialogViewModel';
import UiKitTheme from '../../themes/UiKitTheme';
import { FunctionTypeDialogEntityToVoid } from '../../../CommonTypes/BaseViewModel';
export type ThemeNames = 'light' | 'dark' | 'custom';
type PreviewDialogsTheme = {
    themeName?: ThemeNames;
    colorTheme?: UiKitTheme;
    selected: boolean;
    muted: boolean;
};
type PreviewDialogSettings = {
    showAvatarSection: boolean;
    showTitleSection: boolean;
    showMessageSection: boolean;
    showPublicIconInTitle: boolean;
    showNotifyIconInTitle: boolean;
    showTimeInTitle: boolean;
    showBadgePlaceholderInMessage: boolean;
};
type PreviewDialogsProps = {
    typeDialog: DialogType;
    dialogAvatar?: JSX.Element;
    dialogViewModel?: PreviewDialogViewModel;
    title?: string;
    previewMessage?: string;
    unreadMessageCount?: number;
    message_date_time_sent?: string;
    theme?: PreviewDialogsTheme;
    onLeaveDialog: FunctionTypeDialogEntityToVoid;
    additionalSettings?: PreviewDialogSettings;
    disableActions?: boolean;
};
declare const PreviewDialog: React.FC<PreviewDialogsProps>;
export default PreviewDialog;
