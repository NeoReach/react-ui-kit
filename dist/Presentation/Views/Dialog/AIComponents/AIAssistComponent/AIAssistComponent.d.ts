import './AIAssistComponent.scss';
import { FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';
interface AIAssistComponentProps {
    onAssistAnswer: FunctionTypeVoidToVoid;
    waitAIWidget: boolean;
}
export default function AIAssistComponent(props: AIAssistComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
