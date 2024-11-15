import { ReactNode, createContext } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Toast.scss';

const ToastContext = createContext(undefined);

interface ToastProps {
  children: ReactNode;
}

export default function ToastProvider({ children }: ToastProps) {
  return (
    <ToastContext.Provider value={undefined}>
      <ToastContainer
        className="qb-react-ui-kit container"
        position="top-center"
        autoClose={3000}
        bodyClassName="qb-react-ui-kit toast__body"
        toastClassName="qb-react-ui-kit toast"
        pauseOnHover={false}
        closeButton={false}
        hideProgressBar
      />
      {children}
    </ToastContext.Provider>
  );
}
