import './UserListItem.scss';
export interface UserListItemProps {
    userName: string;
    avatarUrl?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}
export default function UserListItem({ avatarUrl, userName, checked, disabled, onChange, className, }: UserListItemProps): import("react/jsx-runtime").JSX.Element;
