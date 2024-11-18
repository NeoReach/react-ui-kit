/// <reference types="react" />
import { FunctionTypeStringToVoid, FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';
import './InputForForwarding.scss';
type InputForForwardingProps = {
    inputText: string;
    onChange: FunctionTypeStringToVoid;
    onSend: FunctionTypeVoidToVoid;
    disabled?: boolean;
};
declare const InputForForwarding: React.FC<InputForForwardingProps>;
export default InputForForwarding;
