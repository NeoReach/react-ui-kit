import './CheckBox.scss';
interface CheckBoxProps {
    disabled: boolean;
    checked: boolean;
    onChange?: (isSelected: boolean) => void;
}
export default function CheckBox({ disabled, checked, onChange, }: CheckBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
