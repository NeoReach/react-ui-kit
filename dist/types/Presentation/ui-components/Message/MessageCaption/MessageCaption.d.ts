import './MessageCaption.scss';
interface MessageCaptionProps {
    type: 'outgoing' | 'incoming';
    subtype?: 'reply' | 'forward';
    userName: string;
}
export default function MessageCaption({ type, subtype, userName, }: MessageCaptionProps): import("react/jsx-runtime").JSX.Element;
export {};
