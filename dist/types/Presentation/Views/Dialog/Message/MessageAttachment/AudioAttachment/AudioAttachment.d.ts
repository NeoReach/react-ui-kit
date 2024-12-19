import React from 'react';
import './AudioAttachment.scss';
import { FileEntity } from '../../../../../../Domain/entity/FileEntity';
type AudioAttachmentComponentProps = {
    audioFile: FileEntity;
};
declare const AudioAttachment: React.FC<AudioAttachmentComponentProps>;
export default AudioAttachment;
