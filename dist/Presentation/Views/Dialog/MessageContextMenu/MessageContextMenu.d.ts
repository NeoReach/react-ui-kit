import { MessageEntity } from '../../../../Domain/entity/MessageEntity';
import { FunctionTypeMessageEntityToVoid } from '../../../../CommonTypes/BaseViewModel';
import './MessageContextMenu.scss';
export type MessageContextMenuProps = {
    message: MessageEntity;
    enableForwarding: boolean;
    enableReplying: boolean;
    onReply: FunctionTypeMessageEntityToVoid;
    onForward: FunctionTypeMessageEntityToVoid;
    disableActions?: boolean;
};
export default function MessageContextMenu({ message, enableReplying, enableForwarding, onReply, onForward, disableActions, }: MessageContextMenuProps): import("react/jsx-runtime").JSX.Element;
