import React from 'react';
import './MainButton.css';
import { FunctionTypeVoidToVoid } from '../../../../../CommonTypes/BaseViewModel';

export const TypeButton = {
  default: 'default',
  danger: 'danger',
  outlined: 'outlined',
  text: 'text',
  defaultDisabled: 'defaultDisabled',
} as const;

// 'enum like' "TS type" creation
export type ButtonArcheType = keyof typeof TypeButton;
type MainButtonProps = {
  title: string;
  typeButton?: ButtonArcheType;
  disabled?: boolean;
  // loading?: boolean;
  styleBox?: React.CSSProperties;
  clickHandler?: FunctionTypeVoidToVoid;
  touchHandler?: FunctionTypeVoidToVoid;
};

// eslint-disable-next-line react/function-component-definition,@typescript-eslint/no-unused-vars
const MainButton: React.FC<MainButtonProps> = ({
  title,
  typeButton = TypeButton.default,
  disabled = false,
  // loading = false,
  styleBox,
  clickHandler,
  touchHandler,
}) => {
  const StyleButton: Record<string, string> = {};

  StyleButton[TypeButton.default] = 'main-button quickblox-react-ui-kit';
  StyleButton[TypeButton.defaultDisabled] = 'main-disabled-button quickblox-react-ui-kit';
  StyleButton[TypeButton.danger] = 'danger-button quickblox-react-ui-kit';
  StyleButton[TypeButton.outlined] = 'secondary-button quickblox-react-ui-kit';
  StyleButton[TypeButton.text] = 'secondary-button quickblox-react-ui-kit';

  const mainClassName = [StyleButton[typeButton]].join(' ');

  return (
    <button
      className={
        disabled ? StyleButton[TypeButton.defaultDisabled] : mainClassName
      }
      type="button"
      style={styleBox}
      onClick={clickHandler}
      onTouchStart={touchHandler}
      disabled={disabled}
      // loading={loading}
    >
      {title}
    </button>
  );
};

export default MainButton;
