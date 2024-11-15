import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import './ScrollableContainer.scss';
import LoaderComponent from '../../UI/Placeholders/LoaderComponent/LoaderComponent';

interface FlatListProps<T> {
  className?: string;
  rootStyles?: React.CSSProperties;
  mainContainerStyles?: React.CSSProperties;
  data: Array<T>;
  ListEmptyComponent?: React.ComponentClass | React.FunctionComponent;
  onEndReached?: VoidFunction;
  onEndReachedThreshold?: number;
  refreshing?: boolean;
  autoScrollToBottom?: boolean;
  renderItem: (item: T, index: number) => React.ReactElement | null;
}

export default function ScrollableContainer<T>(props: FlatListProps<T>) {
  const {
    className,
    rootStyles,
    mainContainerStyles,
    data,
    ListEmptyComponent,
    onEndReached,
    onEndReachedThreshold,
    refreshing,
    autoScrollToBottom,
    renderItem,
  } = props;

  const container = useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    console.log('call scrollHandler');
    if (container.current) {
      const { scrollHeight, clientHeight, scrollTop } = container.current;
      const scrollOffset = (scrollTop + clientHeight) / scrollHeight;
      let endReached = false;

      if (typeof onEndReachedThreshold === 'number') {
        if (scrollOffset >= onEndReachedThreshold) {
          endReached = true;
        }
      } else if (scrollOffset >= 0.99) {
        endReached = true;
      }

      if (endReached && onEndReached) {
        onEndReached();
      }
    }
  };
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    console.log('call scrollToBottom start');
    if (autoScrollToBottom)
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    console.log('useEffect []');
    if (autoScrollToBottom) scrollToBottom();
  }, []);

  useEffect(() => {
    console.log('useEffect messages');
    if (autoScrollToBottom) scrollToBottom();
  }, [data.length]);
  console.log('çount items to scroll:', data.length);
  console.log('data to scrolling: ', JSON.stringify(data));

  return (
    <div style={rootStyles} className={cn('list', 'quickblox-react-ui-kit', className)}>
      {refreshing && (
        <div>
          <LoaderComponent
            width="44"
            height="44"
            color="var(--color-background-info)"
          />
        </div>
      )}
      {data && data.length ? (
        <div
          style={mainContainerStyles}
          className="list-content"
          onScroll={scrollHandler}
          ref={container}
        >
          {data.map((it, index) => renderItem(it, index))}
          <div style={{ float: 'left', clear: 'both' }} ref={messageEndRef} />
        </div>
      ) : (
        !refreshing && ListEmptyComponent && <ListEmptyComponent />
      )}
    </div>
  );
}
