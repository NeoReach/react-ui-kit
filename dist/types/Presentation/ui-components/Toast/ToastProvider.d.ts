import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.scss';
interface ToastProps {
    children: ReactNode;
}
export default function ToastProvider({ children }: ToastProps): import("react/jsx-runtime").JSX.Element;
export {};
