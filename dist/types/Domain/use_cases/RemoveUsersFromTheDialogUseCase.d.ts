import { IUseCase } from './base/IUseCase';
import DialogsRepository from '../../Data/repository/DialogsRepository';
import EventMessagesRepository from '../../Data/repository/EventMessagesRepository';
import { DialogEntity } from '../entity/DialogEntity';
export declare class RemoveUsersFromTheDialogUseCase implements IUseCase<void, boolean> {
    private dialogRepository;
    private eventMessagesRepository;
    private dialogToLeave;
    private usersIds;
    private textInformationMessage;
    constructor(eventMessagesRepository: EventMessagesRepository, dialogRepository: DialogsRepository, dialog: DialogEntity, usersIds: Array<number>, textInformationMessage: string);
    execute(): Promise<boolean>;
}
