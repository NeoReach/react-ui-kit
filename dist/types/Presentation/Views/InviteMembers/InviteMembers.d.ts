import React from 'react';
import './InviteMembers.scss';
import { FunctionTypeVoidToVoid } from '../../../CommonTypes/BaseViewModel';
import { DialogType } from '../../../Domain/entity/DialogTypes';
import { OpenDialogArcheType } from '../EditDialog/EditDialog';
export type FunctionTypeUserEntitiesToVoid = (userIdsForInvite: number[], usersIdsForRemove: number[]) => void;
type InviteMembersProps = {
    typeDialog: DialogType;
    idOwnerDialog: string;
    typeAddEditDialog: OpenDialogArcheType;
    applyInviteUsersHandler: FunctionTypeUserEntitiesToVoid;
    participants?: number[];
    cancelInviteMembersHandler?: FunctionTypeVoidToVoid;
};
declare const InviteMembers: React.FC<InviteMembersProps>;
export default InviteMembers;
