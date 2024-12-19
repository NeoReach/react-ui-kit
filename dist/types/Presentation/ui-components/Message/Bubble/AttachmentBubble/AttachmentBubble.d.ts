import ChatMessageAttachmentEntity from '../../../../../Domain/entity/ChatMessageAttachmentEntity';
interface AttachmentBubbleProps {
    attachment: ChatMessageAttachmentEntity;
    typeMessage: 'incoming' | 'outgoing';
}
export default function AttachmentBubble({ attachment, typeMessage, }: AttachmentBubbleProps): import("react/jsx-runtime").JSX.Element;
export {};
