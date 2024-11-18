import type { StoryObj } from '@storybook/react';
import DialogBanner from './DialogBanner';
declare const meta: {
    title: string;
    component: typeof DialogBanner;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        text: string;
    };
    argTypes: {
        text: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        onClick: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DialogBannerDefault: Story;
