/// <reference types="react" />
import './AIWidgetActions.scss';
export type MenuItem = {
    title: string;
    icon?: JSX.Element;
    action: () => void;
};
type ContextMenuProps = {
    widgetToRender?: JSX.Element;
    items?: MenuItem[];
    title?: string | null;
    disabled?: boolean;
};
declare function AIWidgetActions({ items, widgetToRender, title, disabled, }: ContextMenuProps): import("react/jsx-runtime").JSX.Element;
export default AIWidgetActions;
