import React, { ReactElement } from 'react';
import './DialogWindow.scss';
interface DialogWindowProps {
    open: boolean;
    title: string;
    children: ReactElement | ReactElement[];
    onClose?: VoidFunction;
    className?: string;
    disableActions?: boolean;
}
export default function DialogWindow({ children, onClose, open, title, className, disableActions, }: DialogWindowProps): React.ReactPortal | null;
export {};
