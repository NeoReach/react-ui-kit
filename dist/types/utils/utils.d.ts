import { MessageEntity } from '../Domain/entity/MessageEntity';
import { IChatMessage } from '../Data/source/AISource';
import { Tone } from '../Presentation/Views/Dialog/AIWidgets/Tone';
export declare const completeSentence: (text?: string) => string;
export declare const tokenCounter: (text?: string) => number;
export declare const loopToLimitTokens: <T>(limit: number, data: T[], getValue?: (item: T) => string, tokens?: number) => T[];
export declare class AIUtils {
    static createTranslatePrompt(textToSend: string, language?: string): string;
    static createAnswerAssistPrompt(textToSend: string): string;
    static createRephrasePrompt(textToSend: string, tone?: Tone): string;
    static messageEntitiesToIChatMessageCollection(messageEntities: MessageEntity[], currentUserId: number | undefined, MAX_TOKENS?: number): IChatMessage[];
}
