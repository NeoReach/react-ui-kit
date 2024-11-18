import './TimeAndStatus.scss';
interface TimeAndStatusProps {
    status?: 'sent' | 'delivered' | 'viewed' | 'error';
    time: string;
}
export default function TimeAndStatus({ status, time }: TimeAndStatusProps): import("react/jsx-runtime").JSX.Element;
export {};
