import { IChatMessage } from '../../../Data/source/AISource';
import { IUseCase } from '../base/IUseCase';
export declare class AITranslateWithProxyUseCase implements IUseCase<void, string> {
    private textToSend;
    private language;
    private dialogMessages;
    private servername;
    private api;
    private port;
    private sessionToken;
    private openAIModel;
    constructor(textToSend: string, language: string, dialogMessages: IChatMessage[], servername: string, api: string, port: string, sessionToken: string, openAIModel?: string);
    execute(): Promise<string>;
}
