import { IUseCase } from './base/IUseCase';
import { DialogEntity } from '../entity/DialogEntity';
import DialogsRepository from '../../Data/repository/DialogsRepository';
import EventMessagesRepository from '../../Data/repository/EventMessagesRepository';
export declare const DialogLeaveType: {
    readonly delete: "delete";
    readonly deleteForce: "deleteForce";
    readonly leave: "leave";
};
export type DialogLeaveTypeArcheType = keyof typeof DialogLeaveType;
export declare class LeaveDialogUseCase implements IUseCase<void, boolean> {
    private dialogRepository;
    private eventMessagesRepository;
    private dialogToLeave;
    private leaveType;
    private textInformationMessage;
    constructor(eventMessagesRepository: EventMessagesRepository, dialogRepository: DialogsRepository, dialog: DialogEntity, leaveType: DialogLeaveTypeArcheType, textInformationMessage: string);
    execute(): Promise<boolean>;
}
