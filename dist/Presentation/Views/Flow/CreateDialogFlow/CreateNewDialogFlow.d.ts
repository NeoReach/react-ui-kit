import React from 'react';
import { DialogListViewModel } from '../../DialogList/DialogListViewModel';
import { DialogEntity } from '../../../../Domain/entity/DialogEntity';
type CreateNewDialogFlowProps = {
    dialogsViewModel: DialogListViewModel;
    onFinished: (newEntity: DialogEntity) => void;
    onCancel?: () => void;
    isOnline: boolean;
};
declare const CreateNewDialogFlow: React.FC<CreateNewDialogFlowProps>;
export default CreateNewDialogFlow;
