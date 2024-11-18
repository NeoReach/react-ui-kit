import React from 'react';
import './VideoAttachment.scss';
import { FileEntity } from '../../../../../../Domain/entity/FileEntity';
type VideoAttachmentComponentProps = {
    videoFile: FileEntity;
};
declare const VideoAttachment: React.FC<VideoAttachmentComponentProps>;
export default VideoAttachment;
