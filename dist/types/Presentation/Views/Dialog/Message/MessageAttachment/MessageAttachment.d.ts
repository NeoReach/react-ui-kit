/// <reference types="react" />
import ChatMessageAttachmentEntity from '../../../../../Domain/entity/ChatMessageAttachmentEntity';
import UiKitTheme from '../../../../themes/UiKitTheme';
type AttachmentProps = {
    attachment: ChatMessageAttachmentEntity;
};
type AttachmentContentComponentProps = AttachmentProps & {
    theme?: UiKitTheme;
};
declare function MessageAttachment({ attachment, theme, }: AttachmentContentComponentProps): JSX.Element;
export default MessageAttachment;
