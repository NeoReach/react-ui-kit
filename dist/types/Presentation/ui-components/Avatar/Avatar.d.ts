import { ReactElement } from 'react';
import './Avatar.scss';
export interface AvatarProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    icon?: ReactElement;
    className?: string;
    src?: string;
}
export default function Avatar({ icon, size, className, src, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
