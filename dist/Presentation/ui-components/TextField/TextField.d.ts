import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';
import './TextField.scss';
type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface TextFieldProps extends Omit<HTMLInputProps, 'onChange'> {
    label?: string;
    icon?: ReactElement;
    loading?: boolean;
    id?: string;
    value: string;
    onChange: (value: string) => void;
}
declare const TextField: import("react").ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default TextField;
