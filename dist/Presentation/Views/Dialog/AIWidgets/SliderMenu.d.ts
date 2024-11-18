import React from 'react';
type MenuItem = {
    title: string;
    icon?: JSX.Element;
    action: () => void;
};
type SliderMenuProps = {
    items: MenuItem[];
    width: number;
    arrowColor?: string;
    activeArrowColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    itemBackgroundColor?: string;
    itemWidth?: number;
    itemHeight?: number;
    itemBorder?: string;
    fontSize?: number;
    activeItemBorderColor?: string;
    activeItemBoxShadow?: string;
};
declare const SliderMenu: React.FC<SliderMenuProps>;
export default SliderMenu;
