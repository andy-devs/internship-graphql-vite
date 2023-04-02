import { SignIn } from '@features/auth/sign-in/sign-in';
import { FC } from 'react';

interface SignInProps {}

const SignInPage: FC<SignInProps> = () => {
  return <SignIn />;
};

export default SignInPage;
