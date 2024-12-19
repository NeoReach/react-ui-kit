import React from 'react';
import './ReplyImagePreviewAttachment.scss';
import { FileEntity } from '../../../../../Domain/entity/FileEntity';
type ReplyImagePreviewAttachmentProps = {
    imageFile: FileEntity;
};
declare const ReplyImagePreviewAttachment: React.FC<ReplyImagePreviewAttachmentProps>;
export default ReplyImagePreviewAttachment;
