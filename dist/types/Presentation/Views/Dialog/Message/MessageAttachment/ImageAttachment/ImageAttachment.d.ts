import React from 'react';
import './ImageAttachment.scss';
import { FileEntity } from '../../../../../../Domain/entity/FileEntity';
type ImageAttachmentComponentProps = {
    imageFile: FileEntity;
};
declare const ImageAttachment: React.FC<ImageAttachmentComponentProps>;
export default ImageAttachment;
