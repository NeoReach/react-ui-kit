import { IUseCase } from './base/IUseCase';
import { MessageEntity } from '../entity/MessageEntity';
import { IMessagesRepository } from '../repository/IMessagesRepository';
import { PaginatedResult, Pagination } from '../repository/Pagination';
export declare class GetAllMessagesForDialogMock implements IUseCase<void, PaginatedResult<MessageEntity>> {
    private messagesRepository;
    private readonly dialogId;
    private currentPagination;
    constructor(messagesRepository: IMessagesRepository, dialogId: string, currentPagination: Pagination);
    execute(): Promise<PaginatedResult<MessageEntity>>;
}
