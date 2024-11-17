import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import './Button.scss';
type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface ButtonProps extends HTMLButtonProps {
    variant?: 'default' | 'outlined' | 'danger' | 'text';
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    children?: ReactElement | string | number;
}
export default function Button({ variant, className, disabled, loading, children, ...rest }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
