import type { StoryObj } from '@storybook/react';
import Button from './Button';
declare const meta: {
    title: string;
    component: typeof Button;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        disabled: false;
        loading: false;
        className: string;
        children: string;
    };
    argTypes: {
        variant: {
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
            description: string;
        };
        disabled: {
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        loading: {
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        className: {
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        children: {
            table: {
                defaultValue: {
                    summary: null;
                };
                type: {
                    summary: string;
                };
            };
            description: string;
        };
    };
};
export default meta;
type StoryDefault = StoryObj<typeof meta>;
export declare const ButtonDefault: StoryDefault;
export declare const ButtonOutline: StoryDefault;
export declare const ButtonDanger: StoryDefault;
export declare const ButtonText: StoryDefault;
