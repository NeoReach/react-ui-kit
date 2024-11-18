import './FileBubble.scss';
interface FileBubbleProps {
    type: 'outgoing' | 'incoming';
    title: string;
    href?: string;
}
export default function FileBubble({ type, title, href }: FileBubbleProps): import("react/jsx-runtime").JSX.Element;
export {};
