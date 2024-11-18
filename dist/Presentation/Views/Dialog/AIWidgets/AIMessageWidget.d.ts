import { FunctionTypeFileWithContextToToVoid, FunctionTypeJSXElement, FunctionTypeStringWithContextToString, FunctionTypeVoidToTones } from '../../../../CommonTypes/BaseViewModel';
export interface MessageWidgetProps {
    servername: string;
    api: string;
    port: string;
    apiKeyOrSessionToken: string;
}
export interface AIWidget {
    renderWidget: FunctionTypeJSXElement;
}
export interface AITextWidget extends AIWidget {
    textToContent: string | undefined;
}
export interface AIFileWidget extends AIWidget {
    fileToContent: File | undefined;
}
export interface AIMessageWidget extends AITextWidget {
    textToWidget: FunctionTypeStringWithContextToString;
}
export interface AIRephraseWidget extends AIMessageWidget {
    tonesToWidget: FunctionTypeVoidToTones;
}
export interface AIAttachmentWidget extends AIFileWidget {
    fileToWidget: FunctionTypeFileWithContextToToVoid;
}
