import { AITranslateWidgetConfig, ProxyConfig, QBUIKitConfig } from '../CommonTypes/CommonTypes';
export declare class DefaultConfigurations {
    static getDefaultProxyConfig(): ProxyConfig;
    static getDefaultLanguageForAITranslate(configAITranslate: AITranslateWidgetConfig): string;
    static getAdditionalLanguagesForAITranslate(configAITranslate: AITranslateWidgetConfig): string[];
    static getDefaultQBConfig(): QBUIKitConfig;
}
