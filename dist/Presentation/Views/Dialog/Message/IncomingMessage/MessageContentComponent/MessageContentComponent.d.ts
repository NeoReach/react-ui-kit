import { FC } from 'react';
import './MessageContentComponent.scss';
import { MessageEntity } from '../../../../../../Domain/entity/MessageEntity';
import UiKitTheme from '../../../../../themes/UiKitTheme';
type MessageContentComponentProps = {
    messageEntity: MessageEntity;
    originalTextMessage: boolean;
    widgetTextContent: string;
    theme?: UiKitTheme;
};
declare const MessageContentComponent: FC<MessageContentComponentProps>;
export default MessageContentComponent;
