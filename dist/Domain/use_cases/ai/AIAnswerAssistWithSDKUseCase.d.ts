import { IChatMessage } from '../../../Data/source/AISource';
import { IUseCase } from '../base/IUseCase';
import { IRemoteDataSource } from '../../../Data/source/remote/IRemoteDataSource';
export declare class AIAnswerAssistWithSDKUseCase implements IUseCase<void, string> {
    private textToSend;
    private dialogMessages;
    private dataSource;
    private smartChatAssistantId;
    constructor(textToSend: string, dialogMessages: IChatMessage[], dataSource: IRemoteDataSource, smartChatAssistantId: string);
    execute(): Promise<string>;
}
