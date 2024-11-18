import React from 'react';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
type VoiceMessageProps = {
    icon: React.ReactNode;
    onClick: FunctionTypeVoidToVoid;
};
declare const VoiceMessage: React.FC<VoiceMessageProps>;
export default VoiceMessage;
