import { ReactElement } from 'react';
import './SettingsItem.scss';
interface SettingsItemProps {
    icon: ReactElement;
    title: string;
    rightSection?: ReactElement | ReactElement[];
    children?: ReactElement | ReactElement[];
    className?: string;
    onClick?: VoidFunction;
}
export default function SettingsItem({ icon, title, rightSection, children, className, onClick, }: SettingsItemProps): import("react/jsx-runtime").JSX.Element;
export {};
