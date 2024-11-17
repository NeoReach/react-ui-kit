import { ReactElement } from 'react';
import './Placeholder.scss';
interface PlaceholderProps {
    icon?: ReactElement;
    text: string | string[];
    onRetry?: VoidFunction;
    className?: string;
}
export default function Placeholder({ icon, text, onRetry, className, }: PlaceholderProps): import("react/jsx-runtime").JSX.Element;
export {};
