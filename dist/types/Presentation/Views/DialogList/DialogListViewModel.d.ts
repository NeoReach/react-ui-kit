import BaseViewModel, { FunctionTypeBooleanToVoid, FunctionTypeDialogEntityToBoolean, FunctionTypeDialogEntityToDialogEntity, FunctionTypeFileToFileEntity, FunctionTypePaginationToVoid, FunctionTypeVoidToVoid } from '../../../CommonTypes/BaseViewModel';
import { DialogEntity } from '../../../Domain/entity/DialogEntity';
import { Pagination } from '../../../Domain/repository/Pagination';
export interface DialogListViewModel extends BaseViewModel<DialogEntity> {
    loading: boolean;
    error: string;
    pagination?: Pagination;
    dialogs: DialogEntity[];
    getDialogs: FunctionTypePaginationToVoid;
    release: FunctionTypeVoidToVoid;
    setWaitLoadingStatus: FunctionTypeBooleanToVoid;
    createDialog: FunctionTypeDialogEntityToDialogEntity;
    updateDialog: FunctionTypeDialogEntityToDialogEntity;
    deleteDialog: FunctionTypeDialogEntityToBoolean;
    uploadFile: FunctionTypeFileToFileEntity;
    removeMembers: FunctionTypeDialogEntityToBoolean;
}
