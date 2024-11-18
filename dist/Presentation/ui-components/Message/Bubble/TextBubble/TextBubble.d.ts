import './TextBubble.scss';
interface TextBubbleProps {
    text: string;
    type: 'outgoing' | 'incoming';
}
export default function TextBubble({ text, type }: TextBubbleProps): import("react/jsx-runtime").JSX.Element;
export {};
