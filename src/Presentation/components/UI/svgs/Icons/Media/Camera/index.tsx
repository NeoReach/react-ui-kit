import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Camera(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.6667 9.16667H31.8551L28.5001 5.5H17.5001L14.1451 9.16667H8.33341C6.31675 9.16667 4.66675 10.8167 4.66675 12.8333V34.8333C4.66675 36.85 6.31675 38.5 8.33341 38.5H37.6667C39.6834 38.5 41.3334 36.85 41.3334 34.8333V12.8333C41.3334 10.8167 39.6834 9.16667 37.6667 9.16667ZM37.6667 34.8333H8.33341V12.8333H15.7584L16.8401 11.6417L19.1134 9.16667H26.8867L29.1601 11.6417L30.2417 12.8333H37.6667V34.8333ZM23.0001 14.6667C17.9401 14.6667 13.8334 18.7733 13.8334 23.8333C13.8334 28.8933 17.9401 33 23.0001 33C28.0601 33 32.1667 28.8933 32.1667 23.8333C32.1667 18.7733 28.0601 14.6667 23.0001 14.6667ZM23.0001 29.7C19.7551 29.7 17.1334 27.0783 17.1334 23.8333C17.1334 20.5883 19.7551 17.9667 23.0001 17.9667C26.2451 17.9667 28.8667 20.5883 28.8667 23.8333C28.8667 27.0783 26.2451 29.7 23.0001 29.7Z"
        id="Camera"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Camera;