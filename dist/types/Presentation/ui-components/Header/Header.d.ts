import { ReactElement } from 'react';
import { FunctionTypeVoidToVoid } from '../../../CommonTypes/BaseViewModel';
import './Header.scss';
export type HeaderProps = {
    title: string;
    avatar?: ReactElement;
    badge?: ReactElement;
    children?: ReactElement | ReactElement[];
    onGoBack?: FunctionTypeVoidToVoid;
    className?: string;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
