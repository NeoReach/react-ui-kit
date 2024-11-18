import './Badge.scss';
interface BadgeProps {
    count: number;
    limit?: number;
    mute?: boolean;
    classNames?: string;
}
export default function Badge({ count, limit, mute, classNames, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
