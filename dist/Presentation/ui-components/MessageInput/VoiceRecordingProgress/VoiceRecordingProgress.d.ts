import React from 'react';
import './VoiceRecordingProgress.scss';
import { FunctionTypeVoidToVoid } from '../../../../CommonTypes/BaseViewModel';
type VoiceRecordingProgressProps = {
    startStatus: boolean;
    longRecInSec: number;
    onClick?: FunctionTypeVoidToVoid;
    onTouch?: FunctionTypeVoidToVoid;
};
declare const VoiceRecordingProgress: React.FC<VoiceRecordingProgressProps>;
export default VoiceRecordingProgress;
