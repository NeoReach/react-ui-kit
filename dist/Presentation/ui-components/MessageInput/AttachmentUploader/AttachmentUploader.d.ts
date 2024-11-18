import React from 'react';
type AttachmentMessageProps = {
    icon: React.ReactNode;
    onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disableAction: boolean;
};
declare const AttachmentUploader: React.FC<AttachmentMessageProps>;
export default AttachmentUploader;
