import React from 'react';
import './OutgoingRepliedMessage.scss';
import UiKitTheme from '../../../../themes/UiKitTheme';
import { MessageEntity } from '../../../../../Domain/entity/MessageEntity';
import { FunctionTypeMessageEntityToVoid } from '../../../../../CommonTypes/BaseViewModel';
declare function OutgoingRepliedMessage(props: {
    theme: UiKitTheme | undefined;
    messages: MessageEntity[];
    onReply: FunctionTypeMessageEntityToVoid;
    onForward: FunctionTypeMessageEntityToVoid;
    repliedUserName: string;
    renderOringinalMessage: React.ReactNode;
    enableForwarding: boolean;
    enableReplying: boolean;
}): import("react/jsx-runtime").JSX.Element;
export default OutgoingRepliedMessage;
