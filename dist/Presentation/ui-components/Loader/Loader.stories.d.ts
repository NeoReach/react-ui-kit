import type { StoryObj } from '@storybook/react';
import Loader from './Loader';
declare const meta: {
    title: string;
    component: typeof Loader;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        className: string;
    };
    argTypes: {
        size: {
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
    };
};
export default meta;
type StoryDefault = StoryObj<typeof meta>;
export declare const LoaderDefault: StoryDefault;
