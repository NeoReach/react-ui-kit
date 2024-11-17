import React from 'react';
import './MembersList.scss';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
import { UserEntity } from '../../../../Domain/entity/UserEntity';
type MembersListProps = {
    closeInformationHandler: FunctionTypeVoidToVoid;
    members: UserEntity[];
    maxHeight?: number;
};
declare const MembersList: React.FC<MembersListProps>;
export default MembersList;
