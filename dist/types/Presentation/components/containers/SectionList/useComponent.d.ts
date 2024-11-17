import { ReactNode, RefObject } from 'react';
export interface SectionItem<T> {
    title: string;
    data: Dictionary<T[]>;
}
export interface SectionListProps<T> {
    className?: string;
    refreshing?: boolean;
    resetScroll?: boolean;
    sections: ReadonlyArray<SectionItem<T>>;
    onEndReached: VoidFunction;
    /**
     * How far from the end (in units of visible length of the list) the bottom edge of the
     * list must be from the end of the content to trigger the `onEndReached` callback.
     * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
     * within half the visible length of the list.
     */
    onEndReachedThreshold?: number;
    renderItem: (item: [string, T[]], listRef: RefObject<HTMLDivElement>) => ReactNode;
    renderSectionHeader?: (section: SectionItem<T>) => ReactNode;
    renderSectionFooter?: (section: SectionItem<T>) => ReactNode;
}
declare const _default: <T>(props: SectionListProps<T>) => Record<"refs", {
    listContentRef: RefObject<HTMLDivElement>;
}> & Record<"handlers", {
    scrollHandler: () => void;
}>;
export default _default;
