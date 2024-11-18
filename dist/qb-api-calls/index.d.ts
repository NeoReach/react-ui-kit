import { AIAnswerResponse, AIChatHistory, ChatConnectParams, GetMessagesResult, GetUserParams, ListUserParams, ListUserResponse, QBBlob, QBBlobCreateUploadParams, QBCustomObject, QBDataDeletedResponse, QBGetDialogResult, QBLoginParams, QBMediaParams, QBMessageStatusParams, QBSession, QBSystemMessage, QBUser, QBUserCreateParams, QBWebRTCSession } from 'quickblox/quickblox';
import { QBUIKitChatDialog, QBUIKitChatNewMessage, QBUIKitConfig } from '../CommonTypes/CommonTypes';
export type QBInitParams = {
    appIdOrToken: string | number;
    authKeyOrAppId: string | number;
    authSecret?: string;
    accountKey: string;
    config?: QBUIKitConfig;
};
export declare function QBInit(params: QBInitParams): void;
export declare function QBCreateSession(params?: QBLoginParams): Promise<QBSession>;
export declare function QBGetSession(): Promise<QBSession>;
export declare function loginToQuickBlox(params: QBLoginParams): Promise<QBUser>;
export declare function QBLogin(params: QBLoginParams): Promise<{
    user: QBUser;
    session: QBSession;
}>;
export declare function QBLogout(): Promise<unknown>;
export declare function QBChatConnect(params: ChatConnectParams): Promise<unknown>;
export declare function QBChatDisconnect(): void;
export declare function registrationAccount(params: QBUserCreateParams): Promise<QBUser>;
export declare function QBUserCreate(params: QBUserCreateParams): Promise<{
    user: QBUser;
    session: QBSession;
}>;
export declare function QBUserUpdate(userId: QBUser['id'], user: Partial<QBUser>): Promise<QBUser>;
export declare function QBUserGet(params: GetUserParams | number): Promise<QBUser | undefined> | Promise<ListUserResponse>;
export declare function QBUsersGet(params: GetUserParams): Promise<ListUserResponse>;
export declare function QBUsersGetById(params: number): Promise<QBUser | undefined>;
export declare function QBUserList(params: ListUserParams): Promise<ListUserResponse | undefined>;
export declare function QBDataGet<T extends QBCustomObject>(className: string, filters: Dictionary<unknown>): Promise<{
    class_name: string;
    items: T[];
    limit: number;
    skip: number;
}>;
export declare function QBDataCreate<T extends QBCustomObject>(className: string, data: Dictionary<unknown>): Promise<T>;
export declare function QBDataDelete(className: string, ids: QBCustomObject['_id'] | Array<QBCustomObject['_id']>): Promise<QBDataDeletedResponse>;
export declare function QBDataUpdate<T extends QBCustomObject>(className: string, _id: T['_id'], data: Dictionary<unknown>): Promise<T>;
export declare function QBGetDialogs(filters: Dictionary<any>): Promise<QBGetDialogResult | undefined>;
export declare function QBGetDialogById(id: string): Promise<QBGetDialogResult | undefined>;
export declare function QBCreatePrivateDialog(userId: QBUser['id'], dialogName?: string, data?: Dictionary<unknown>): Promise<QBUIKitChatDialog>;
export declare function QBCreateGroupDialog(userIds: Array<QBUser['id']>, dialogName?: string, data?: Dictionary<unknown>): Promise<QBUIKitChatDialog>;
export declare function QBUpdateDialog(dialogId: QBUIKitChatDialog['_id'], data: Dictionary<unknown>): Promise<QBUIKitChatDialog>;
export declare function QBJoinGroupDialog(dialogId: QBUIKitChatDialog['_id']): Promise<unknown>;
export declare function QBDeleteDialog(dialogIds: Array<QBUIKitChatDialog['_id']>): Promise<void>;
export declare function QBLeaveDialog(dialogId: QBUIKitChatDialog['_id']): Promise<unknown>;
export declare function QBGetInfoFile(fileId: QBBlob['id']): Promise<unknown>;
export declare function QBDeleteContent(contentId: QBBlob['id']): Promise<unknown>;
export declare function QBCreateAndUploadContent(paramContent: QBBlobCreateUploadParams): Promise<unknown>;
export declare function qbChatGetMessagesExtended(dialogId: QBUIKitChatDialog['_id'], params?: Partial<{
    skip: number;
    limit: number;
    sort_desc: 'date_sent' | 'created_at' | 'updated_at';
    sort_asc: 'date_sent' | 'created_at' | 'updated_at';
    _id: string;
    mark_as_read: 0 | 1;
    date_sent: Partial<{
        lt: number;
        lte: number;
        gt: number;
        gte: number;
    }>;
}>): Promise<GetMessagesResult>;
export declare function QBSendIsTypingStatus(dialog: QBUIKitChatDialog, senderId: QBUser['id']): void;
export declare function QBSendIsStopTypingStatus(dialog: QBUIKitChatDialog, senderId: QBUser['id']): void;
export declare function QBChatSendMessage(to: string | number, // artan 22.06.23
message: QBUIKitChatNewMessage): Promise<string>;
export declare function QBChatSendSystemMessage(to: QBUser['id'] | string, message: {
    extension: QBSystemMessage['extension'];
}): Promise<string>;
export declare function QBChatMarkMessageRead(params: QBMessageStatusParams): void;
export declare function QBChatMarkMessageDelivered(params: QBMessageStatusParams): void;
export declare function QBWebRTCSessionGetUserMedia(session: QBWebRTCSession, params: QBMediaParams): Promise<MediaStream | undefined>;
export declare function QBAnswerAssist(smartChatAssistantId: string, messageToAssist: string, history: AIChatHistory): Promise<AIAnswerResponse>;
export declare function QBTranslate(smartChatAssistantId: string, textToTranslate: string, languageCode: string): Promise<AIAnswerResponse>;
