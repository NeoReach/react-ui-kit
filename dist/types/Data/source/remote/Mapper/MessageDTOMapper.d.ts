import { ChatMessageAttachment, QBChatMessage } from 'quickblox/quickblox';
import { IDTOMapper } from './IDTOMapper';
import { RemoteMessageDTO } from '../../../dto/message/RemoteMessageDTO';
import ChatMessageAttachmentEntity from '../../../../Domain/entity/ChatMessageAttachmentEntity';
export declare class MessageDTOMapper implements IDTOMapper {
    fromDTO<TArg, TResult>(dto: TArg): Promise<TResult>;
    static transformAttachment(qbMessage: string, qbAtts: ChatMessageAttachment[]): ChatMessageAttachmentEntity[];
    toTDO<TArg, TResult>(entity: TArg): Promise<TResult>;
    private QBChatMessageToRemoteMessageDTO;
    static convertAttachment(attachment: ChatMessageAttachmentEntity): ChatMessageAttachment;
    static convertToQBChatNewMessage(messages: RemoteMessageDTO[]): QBChatMessage[];
    static translateOriginalDataToJSON(qb_original_message?: QBChatMessage[]): string;
    static translateJSONToOriginalData(json_data?: string): QBChatMessage[] | undefined;
    static FORWARD_MESSAGE_PREFIX: string;
    static REPLY_MESSAGE_PREFIX: string;
    static ATTACHMENT_PREFIX: string;
    static MEDIA_CONTENT_ENTITY_PREFIX: string;
    private static isForwardedOrRepliedMessage;
    private static isMediaOrAttachmentMessage;
    static formatMessage(qbMessage: string): string;
    static getMessageParts(qbMessage: string): string[];
    private static splitMessageParts;
    private static validateDTO;
    private static validateQBMessage;
}
