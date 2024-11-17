import './ForwardMessageFlow.scss';
import React from 'react';
import { DialogEntity } from '../../../../Domain/entity/DialogEntity';
import { MessageEntity } from '../../../../Domain/entity/MessageEntity';
type ForwardMessageFlowProps = {
    messages: MessageEntity[];
    dialogs: DialogEntity[];
    currentDialog: DialogEntity;
    currentUserName: string;
    onSendData: (dialogs: DialogEntity[], messages: MessageEntity[], relatedText: string) => void;
    disableActions: boolean;
};
declare const ForwardMessageFlow: React.FC<ForwardMessageFlowProps>;
export default ForwardMessageFlow;
