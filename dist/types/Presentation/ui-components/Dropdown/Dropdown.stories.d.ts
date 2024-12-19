import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
declare const meta: Meta<typeof Dropdown>;
export default meta;
type StoryDefault = StoryObj<typeof meta>;
export declare const DropdownDefault: StoryDefault;
export declare const DropdownRightIcon: {
    args: {
        children: import("react/jsx-runtime").JSX.Element;
        disable: boolean;
        options: {
            value: string;
            label: string;
            rightIcon: import("react/jsx-runtime").JSX.Element;
        }[];
    };
};
export declare const DropdownLeftIcon: {
    args: {
        children: import("react/jsx-runtime").JSX.Element;
        disable: boolean;
        options: {
            value: string;
            label: string;
            leftIcon: import("react/jsx-runtime").JSX.Element;
        }[];
    };
};
