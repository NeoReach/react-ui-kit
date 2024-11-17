import { MessageEntity } from '../../../../../Domain/entity/MessageEntity';
import { AIMessageWidget } from '../../AIWidgets/AIMessageWidget';
import './AITranslate.scss';
interface AITranslateComponentProps {
    AITranslateWidget: AIMessageWidget;
    originalTextMessage: boolean;
    loading?: boolean;
    defaultLanguage: string;
    languages: string[];
    maxTokens?: number;
    onLoading: (isLoading: boolean, id: string) => void;
    onError: (messageError: string) => void;
    onTranslated: (id: string, textTranslated: string) => void;
    messageToTranslate?: MessageEntity;
    messageHistory?: MessageEntity[];
    currentUserId?: number;
    disableAction?: boolean;
}
export default function AITranslate({ AITranslateWidget, originalTextMessage, loading, defaultLanguage, languages, maxTokens, onLoading, onError, onTranslated, messageToTranslate, messageHistory, currentUserId, disableAction, }: AITranslateComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
