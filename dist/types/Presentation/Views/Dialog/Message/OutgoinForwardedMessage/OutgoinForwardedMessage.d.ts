import React from 'react';
import './OutgoinForwardedMessage.scss';
import UiKitTheme from '../../../../themes/UiKitTheme';
import { MessageEntity } from '../../../../../Domain/entity/MessageEntity';
import { FunctionTypeMessageEntityToVoid } from '../../../../../CommonTypes/BaseViewModel';
declare function OutgoingForwardedMessage(props: {
    theme: UiKitTheme | undefined;
    messages: MessageEntity[];
    onReply: FunctionTypeMessageEntityToVoid;
    onForward: FunctionTypeMessageEntityToVoid;
    repliedUserName: string;
    renderOriginalMessage: React.ReactNode;
    date_sent: string;
    status_message: number;
    enableForwarding: boolean;
    enableReplying: boolean;
}): import("react/jsx-runtime").JSX.Element;
export default OutgoingForwardedMessage;
