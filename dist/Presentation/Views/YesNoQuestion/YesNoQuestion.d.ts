import './YesNoQuestion.scss';
import React from 'react';
import { FunctionTypeVoidToVoid } from '../../../CommonTypes/BaseViewModel';
type YesNoQuestionProps = {
    messageText?: string;
    onClickYesAction?: FunctionTypeVoidToVoid;
    OnTouchYesAction?: FunctionTypeVoidToVoid;
    onTouchNoAction?: FunctionTypeVoidToVoid;
    yesActionCaption?: string;
    noActionCaption?: string;
};
declare const YesNoQuestionComponent: React.FC<YesNoQuestionProps>;
export default YesNoQuestionComponent;
