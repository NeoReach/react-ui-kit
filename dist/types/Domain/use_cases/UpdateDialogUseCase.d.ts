import { DialogEntity } from '../entity/DialogEntity';
import DialogsRepository from '../../Data/repository/DialogsRepository';
import { IUseCase } from './base/IUseCase';
import { GroupDialogEntity } from '../entity/GroupDialogEntity';
import EventMessagesRepository from '../../Data/repository/EventMessagesRepository';
export declare class UpdateDialogUseCase implements IUseCase<void, DialogEntity> {
    private dialogRepository;
    private eventMessagesRepository;
    private updateDialog;
    private textInformationMessage;
    constructor(eventMessagesRepository: EventMessagesRepository, dialogRepository: DialogsRepository, updateDialog: GroupDialogEntity, textInformationMessage: string);
    execute(): Promise<DialogEntity>;
}
