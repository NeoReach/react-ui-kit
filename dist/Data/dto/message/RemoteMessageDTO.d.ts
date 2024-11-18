import ChatMessageAttachmentEntity from '../../../Domain/entity/ChatMessageAttachmentEntity';
import { DialogType } from '../../../Domain/entity/DialogTypes';
export declare class RemoteMessageDTO {
    id: string;
    dialogId: string;
    message: string | null;
    created_at: string;
    date_sent: number;
    delivered_ids: Array<number>;
    read_ids: Array<number>;
    read: 0 | 1;
    recipient_id: number;
    sender_id: number;
    updated_at: string;
    notification_type?: string;
    dialog_type?: DialogType;
    markable?: string;
    attachments: ChatMessageAttachmentEntity[];
    qb_message_action?: 'forward' | 'reply';
    origin_sender_name?: string;
    qb_original_messages?: RemoteMessageDTO[];
    constructor();
}
