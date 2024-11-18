import './AITranslateComponent.scss';
import { FunctionTypeStringToVoid, FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';
interface AITranslateComponentProps {
    onTranslate: FunctionTypeStringToVoid;
    onClickOriginalText: FunctionTypeVoidToVoid;
    originalTextMessage: boolean;
    waitAITranslateWidget: boolean;
    languagesForAITranslate: string[];
}
export default function AITranslateComponent(props: AITranslateComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
