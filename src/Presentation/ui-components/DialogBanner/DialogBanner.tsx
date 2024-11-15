import { ReactComponent as DownSvg } from '../../icons/navigation/down.svg';
import './DialogBanner.scss';

type DialogBannerProps = {
  text: string;
  onClick?: VoidFunction;
};

export default function ({ text, onClick }: DialogBannerProps) {
  return (
    <div className="qb-react-ui-kit dialog-banner">
      <span className="dialog-banner__text">{text}</span>
      <DownSvg className="dialog-banner__navigation-icon" onClick={onClick} />
    </div>
  );
}
