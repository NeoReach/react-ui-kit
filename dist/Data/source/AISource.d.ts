export interface IChatMessage {
    role: string;
    content: string;
}
export type AIParam = {
    textToAI: string;
    context: IChatMessage[];
};
export declare class AISource {
    static getData(prompt: string, dialogMessages: IChatMessage[], servername: string, api: string, port: string, sessionToken: string, openAIModel?: string): Promise<string>;
    static getDataWithOpenAI(prompt: string, dialogMessages: IChatMessage[], servername: string, api: string, port: string, sessionToken: string, openAIModel?: string): Promise<string>;
    static getDataWithProxyServer(prompt: string, dialogMessages: IChatMessage[], servername: string, api: string, port: string, sessionToken: string, openAIModel?: string): Promise<string>;
}
