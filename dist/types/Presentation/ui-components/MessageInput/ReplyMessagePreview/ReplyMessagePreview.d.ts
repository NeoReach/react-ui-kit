import React from 'react';
import { MessageEntity } from '../../../../Domain/entity/MessageEntity';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
import './ReplyMessagePreview.scss';
type ReplyMessagePreviewProps = {
    messages: MessageEntity[];
    userNameSentMessage: string;
    onClose: FunctionTypeVoidToVoid;
};
declare const ReplyMessagePreview: React.FC<ReplyMessagePreviewProps>;
export default ReplyMessagePreview;
