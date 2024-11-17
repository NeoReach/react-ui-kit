import './PreviewDialogContextMenu.scss';
import UiKitTheme from '../../../themes/UiKitTheme';
import { DialogEntity } from '../../../../Domain/entity/DialogEntity';
import { FunctionDialogEntityToVoid } from '../../../../CommonTypes/BaseViewModel';
interface PreviewDialogContextMenuProps {
    theme?: UiKitTheme;
    dialog: DialogEntity;
    onLeave: FunctionDialogEntityToVoid;
    enableLeaveDialog: boolean;
}
export default function PreviewDialogContextMenu(props: PreviewDialogContextMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
