import { ReactElement } from 'react';
export interface Option {
    value: string;
    label: string;
    disabled?: boolean;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
}
interface DropdownOptionProps extends Option {
    onSelect: (value: string) => void;
}
export default function DropdownOption({ label, value, disabled, leftIcon, rightIcon, onSelect, }: DropdownOptionProps): import("react/jsx-runtime").JSX.Element;
export {};
