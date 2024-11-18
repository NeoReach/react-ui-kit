import { AIMessageWidget } from '../../AIWidgets/AIMessageWidget';
import { MessageEntity } from '../../../../../Domain/entity/MessageEntity';
import './AIAssist.scss';
interface AIAssistProps {
    loading?: boolean;
    AIAssistWidget: AIMessageWidget;
    maxTokens?: number;
    onLoading: (isLoading: boolean, id: string) => void;
    onError: (messageError: string) => void;
    messageToAssist?: MessageEntity;
    messageHistory?: MessageEntity[];
    currentUserId?: number;
    disableAction?: boolean;
}
export default function AIAssist({ loading, AIAssistWidget, maxTokens, onLoading, onError, messageToAssist, messageHistory, currentUserId, disableAction, }: AIAssistProps): import("react/jsx-runtime").JSX.Element;
export {};
