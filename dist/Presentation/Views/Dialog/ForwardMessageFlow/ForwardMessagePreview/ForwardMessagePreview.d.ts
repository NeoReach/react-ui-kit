import React from 'react';
import './ForwardMessagePreview.scss';
import { MessageEntity } from '../../../../../Domain/entity/MessageEntity';
type ForwardMessagePreviewProps = {
    messages: MessageEntity[];
    userNameSentMessage: string;
};
declare const ForwardMessagePreview: React.FC<ForwardMessagePreviewProps>;
export default ForwardMessagePreview;
