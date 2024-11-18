/// <reference types="react" />
import './OutgoingMessage.scss';
import { MessageEntity } from '../../../../../Domain/entity/MessageEntity';
import UiKitTheme from '../../../../themes/UiKitTheme';
import { FunctionTypeMessageEntityToVoid } from '../../../../../CommonTypes/BaseViewModel';
export declare function OutgoingMessage(props: {
    message: MessageEntity;
    date_sent: string;
    onReply: FunctionTypeMessageEntityToVoid;
    onForward: FunctionTypeMessageEntityToVoid;
    theme: UiKitTheme | undefined;
    element: JSX.Element;
    enableForwarding: boolean;
    enableReplying: boolean;
}): import("react/jsx-runtime").JSX.Element;
