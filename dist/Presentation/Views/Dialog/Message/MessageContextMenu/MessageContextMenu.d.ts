import './MessageContextMenu.scss';
import UiKitTheme from '../../../../themes/UiKitTheme';
import { MessageEntity } from '../../../../../Domain/entity/MessageEntity';
import { FunctionTypeMessageEntityToVoid } from '../../../../../CommonTypes/BaseViewModel';
interface MessageContextMenuProps {
    theme?: UiKitTheme;
    message: MessageEntity;
    onReply: FunctionTypeMessageEntityToVoid;
    onForward: FunctionTypeMessageEntityToVoid;
    enableForwarding: boolean;
    enableReplying: boolean;
}
export default function MessageContextMenu(props: MessageContextMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
