import type { StoryObj } from '@storybook/react';
import UserListItem from './UserListItem';
declare const meta: {
    title: string;
    component: typeof UserListItem;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        className: string;
        disabled: false;
        checked: false;
        userName: string;
        avatarUrl: string;
    };
    argTypes: {
        avatarUrl: {
            table: {
                type: {
                    summary: string;
                };
            };
            description: string;
        };
        userName: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        disabled: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: boolean;
                };
            };
            description: string;
        };
        checked: {
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: boolean;
                };
            };
            description: string;
        };
        onChange: {
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
export declare const UserListItemDefault: StoryDefault;
export declare const UserList: StoryDefault;
