import { DialogEntity } from '../entity/DialogEntity';
import DialogsRepository from '../../Data/repository/DialogsRepository';
import { IUseCase } from './base/IUseCase';
import { GroupDialogEntity } from '../entity/GroupDialogEntity';
export declare class UpdateCurrentDialogInDataSourceUseCase implements IUseCase<void, DialogEntity> {
    private dialogRepository;
    private updateDialog;
    constructor(dialogRepository: DialogsRepository, updateDialog: GroupDialogEntity);
    execute(): Promise<DialogEntity>;
}
