import { IUseCase } from './base/IUseCase';
import { MessageEntity } from '../entity/MessageEntity';
import MessagesRepository from '../../Data/repository/MessagesRepository';
export declare class ReplyMessagesUseCase implements IUseCase<void, MessageEntity> {
    private messagesRepository;
    private messagesToReply;
    private relatedMessage;
    constructor(messagesRepository: MessagesRepository, messagesToReply: MessageEntity[], relatedMessage: MessageEntity);
    execute(): Promise<MessageEntity>;
}
