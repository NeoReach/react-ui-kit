import React from 'react';
import { DialogListViewModel } from '../../DialogList/DialogListViewModel';
import { DialogEntity } from '../../../../Domain/entity/DialogEntity';
type LeaveDialogFlowProps = {
    dialogsViewModel: DialogListViewModel;
    dialog: DialogEntity;
};
declare const LeaveDialogFlow: React.FC<LeaveDialogFlowProps>;
export default LeaveDialogFlow;
