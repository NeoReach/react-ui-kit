import React from 'react';
import '../../Views/Dialog/Dialog.scss';
import '../../Views/Dialog/DialogHeader/DialogInfoIcon/DialogInfoIcon.scss';
import UiKitTheme from '../../themes/UiKitTheme';
import { AIMessageWidget } from '../../Views/Dialog/AIWidgets/AIMessageWidget';
type AIWidgetPlaceHolder = {
    enabled: boolean;
    default: boolean;
    AIWidget?: AIMessageWidget;
};
type QuickBloxUIKitDesktopLayoutProps = {
    theme?: UiKitTheme;
    AIRephrase?: AIWidgetPlaceHolder;
    AITranslate?: AIWidgetPlaceHolder;
    AIAssist?: AIWidgetPlaceHolder;
    uikitHeightOffset?: string;
};
declare const QuickBloxUIKitDesktopLayout: React.FC<QuickBloxUIKitDesktopLayoutProps>;
export default QuickBloxUIKitDesktopLayout;
