import { IUseCase } from './base/IUseCase';
import { MessageEntity } from '../entity/MessageEntity';
import MessagesRepository from '../../Data/repository/MessagesRepository';
import { DialogEntity } from '../entity/DialogEntity';
export declare class ForwardMessagesUseCase implements IUseCase<void, boolean> {
    private messagesRepository;
    private targetDialogs;
    private messagesToForward;
    private relatedMessage;
    private userName;
    constructor(messagesRepository: MessagesRepository, targetDialogs: DialogEntity[], messagesToForward: MessageEntity[], relatedMessage: MessageEntity, userName: string);
    execute(): Promise<boolean>;
}
