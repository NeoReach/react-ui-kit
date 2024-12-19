/// <reference types="react" />
import './ContextMenu.scss';
type MenuItem = {
    title: string;
    action: () => void;
};
type ContextMenuProps = {
    widgetToRender?: JSX.Element;
    items?: MenuItem[];
};
declare function ContextMenu({ items, widgetToRender }: ContextMenuProps): import("react/jsx-runtime").JSX.Element;
export default ContextMenu;
