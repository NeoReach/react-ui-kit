import './PreviewFileMessage.scss';
export interface PreviewFileMessageProps {
    type?: 'document' | 'audio' | 'video';
    name: string;
    src?: string;
    className?: string;
}
export default function PreviewFileMessage({ type, name, src, className, }: PreviewFileMessageProps): import("react/jsx-runtime").JSX.Element;
