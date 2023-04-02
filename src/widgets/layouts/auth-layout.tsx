import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface AuthLayoutProps {
  children?: JSX.Element[] | JSX.Element;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center">
      <>{children ? children : <Outlet />}</>
    </main>
  );
};
