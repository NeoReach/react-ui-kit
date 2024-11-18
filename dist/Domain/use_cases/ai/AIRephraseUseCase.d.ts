import { IChatMessage } from '../../../Data/source/AISource';
import { IUseCase } from '../base/IUseCase';
import { Tone } from '../../../Presentation/Views/Dialog/AIWidgets/Tone';
export declare class AIRephraseUseCase implements IUseCase<void, string> {
    private textToSend;
    private tone;
    private dialogMessages;
    private servername;
    private api;
    private port;
    private sessionToken;
    private openAIModel;
    constructor(textToSend: string, tone: Tone, dialogMessages: IChatMessage[], servername: string, api: string, port: string, sessionToken: string, openAIModel?: string);
    execute(): Promise<string>;
}
