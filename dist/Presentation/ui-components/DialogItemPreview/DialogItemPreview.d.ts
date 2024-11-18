import { ReactElement } from 'react';
import { FunctionTypeVoidToVoid } from '../../../CommonTypes/BaseViewModel';
import './DialogItemPreview.scss';
export type DialogItemPreviewProps = {
    avatar: ReactElement;
    title: string;
    active?: boolean;
    date?: string;
    lastMessage?: ReactElement | string;
    badge?: ReactElement;
    contextMenu?: ReactElement;
    onClick?: FunctionTypeVoidToVoid;
    className?: string;
};
declare const DialogItemPreview: React.FC<DialogItemPreviewProps>;
export default DialogItemPreview;
