import './AudioBubble.scss';
interface AudioBubbleProps {
    type: 'outgoing' | 'incoming';
    title?: string;
    href?: string;
    fileUid?: string;
    audioFileType?: string;
}
export default function AudioBubble({ type, title, href, fileUid, audioFileType, }: AudioBubbleProps): import("react/jsx-runtime").JSX.Element;
export {};
