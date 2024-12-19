import './HighLightLink.scss';
import React from 'react';
export declare const isURL: (str: string) => boolean;
export declare const messageHasUrls: (message: string) => boolean;
type HighLightLinkProps = {
    messageText: string;
};
export declare const HighLightLink: React.FC<HighLightLinkProps>;
export {};
