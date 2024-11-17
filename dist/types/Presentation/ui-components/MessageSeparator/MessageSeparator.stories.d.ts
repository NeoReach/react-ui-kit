import type { StoryObj } from '@storybook/react';
import MessageSeparator from './MessageSeparator';
declare const meta: {
    title: string;
    component: typeof MessageSeparator;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        text: string;
        type: "date";
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
        type: {
            description: string;
            type: "function";
            options: string[];
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const MessageSeparatorDate: Story;
export declare const MessageSeparatorSystem: Story;
