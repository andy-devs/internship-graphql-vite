import { ROUTES } from '@shared/constants/routes';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AuthTabsProps {}

export const AuthTabs: FC<AuthTabsProps> = () => {
  const { pathname } = useLocation();

  return (
    <div className="mb-4 flex h-[44px] w-full cursor-pointer flex-row overflow-hidden rounded-md border border-solid border-primary500 xs:h-[30px]">
      <Link
        to="/auth/sign-in"
        className={`body_medium_16pt flex w-[50%] items-center justify-center py-[10px] xs:py-0 ${
          pathname === ROUTES.SIGN_IN ? 'bg-primary500 text-grayscale100' : 'bg-transparent text-primary500'
        }`}
      >
        Авторизация
      </Link>
      <Link
        to="/auth/sign-up"
        className={`body_medium_16pt flex w-[50%] items-center justify-center py-[10px] xs:py-0 ${
          pathname === ROUTES.SIGN_UP ? 'bg-primary500  text-grayscale100' : 'bg-transparent text-primary500'
        }`}
      >
        Регистрация
      </Link>
    </div>
  );
};
