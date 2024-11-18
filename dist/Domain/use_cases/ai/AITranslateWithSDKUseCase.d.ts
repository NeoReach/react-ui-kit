import { IUseCase } from '../base/IUseCase';
import { IRemoteDataSource } from '../../../Data/source/remote/IRemoteDataSource';
export declare class AITranslateWithSDKUseCase implements IUseCase<void, string> {
    private languageCodes;
    private textToSend;
    private language;
    private dataSource;
    private smartChatAssistantId;
    constructor(textToSend: string, language: string, dataSource: IRemoteDataSource, smartChatAssistantId: string);
    getLanguageCode(language: string): string;
    execute(): Promise<string>;
}
