import React from 'react';
import './DesktopLayout.scss';
import UiKitTheme from '../../themes/UiKitTheme';
type LayoutItems = {
    dialogsView: React.ReactNode;
    dialogMessagesView: React.ReactNode;
    dialogInfoView: React.ReactNode;
    theme?: UiKitTheme;
    mainContainerStyles?: React.CSSProperties;
    onHeightChange?: (height: number) => void;
};
declare function DesktopLayout({ dialogsView, dialogMessagesView, dialogInfoView, theme, onHeightChange, mainContainerStyles, }: LayoutItems): import("react/jsx-runtime").JSX.Element;
export default DesktopLayout;
