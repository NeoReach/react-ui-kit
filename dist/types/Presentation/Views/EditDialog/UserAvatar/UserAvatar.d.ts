import React from 'react';
import './UserAvatar.scss';
import { IconTheme } from '../../../components/UI/svgs/Icons/IconsCommonTypes';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
type UserAvatarProps = {
    urlAvatar?: string;
    iconTheme?: IconTheme;
    clickRemoveAvatarHandler?: FunctionTypeVoidToVoid;
};
declare const UserAvatar: React.FC<UserAvatarProps>;
export default UserAvatar;
