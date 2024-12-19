import ChatMessageAttachmentEntity from '../Domain/entity/ChatMessageAttachmentEntity';
import { DialogType } from '../Domain/entity/DialogTypes';
import { MessageEntity } from '../Domain/entity/MessageEntity';
import { FileEntity } from '../Domain/entity/FileEntity';
export type MessageEntityParams = {
    id?: string;
    dialogId: string;
    message: string;
    created_at?: string;
    date_sent?: number;
    updated_at?: string;
    delivered_ids?: Array<number>;
    read_ids?: Array<number>;
    read?: number;
    sender_id: number;
    recipient_id: number;
    attachments?: ChatMessageAttachmentEntity[];
    notification_type?: string;
    dialog_type?: DialogType;
};
export declare class Creator {
    static createPhotoByBlob: (blob_id: number | string | null) => Promise<string>;
    static createBlobFromUrl(imageSrc: string): Promise<{
        imgSrc: string;
        blobFile: Blob | undefined;
    }>;
    private static getInfoPromise;
    static createMessageEntity(params: MessageEntityParams): MessageEntity;
    static createFileEntity(): FileEntity;
}
