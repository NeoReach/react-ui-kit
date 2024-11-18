import { ReactElement } from 'react';
import './Message.scss';
export type MessageProps = {
    userName: string;
    avatar?: ReactElement;
    time: string;
    type: 'outgoing' | 'incoming';
    subtype?: 'reply' | 'forward';
    status?: 'sent' | 'delivered' | 'viewed' | 'error';
    enableSelect?: boolean;
    isSelect?: boolean;
    disabled?: boolean;
    onSelect?: (isSelected: boolean) => void;
    bottomPart?: ReactElement;
    additionalPart?: ReactElement;
    children?: ReactElement;
};
export default function Message({ userName, avatar, time, type, status, subtype, enableSelect, isSelect, disabled, onSelect, bottomPart, additionalPart, children, }: MessageProps): import("react/jsx-runtime").JSX.Element;
