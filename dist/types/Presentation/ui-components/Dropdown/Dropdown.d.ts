import { ReactElement } from 'react';
import { Option } from './DropdownOption';
import './Dropdown.scss';
export interface DropDownProps {
    options: Option[];
    disabled?: boolean;
    children?: ReactElement | string | number;
    onSelect: (value: string) => void;
    className?: string;
    placement?: 'topRight' | 'bottomRight' | 'left';
}
export default function Dropdown({ options, disabled, onSelect, className, children, placement, }: DropDownProps): import("react/jsx-runtime").JSX.Element;
