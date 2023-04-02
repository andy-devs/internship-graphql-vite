import { SignUpForm } from '@features/auth/sign-up/ui/sign-up-form';
import { FC } from 'react';

interface SignUpProps {}

const SignUpPage: FC<SignUpProps> = () => {
  return <SignUpForm />;
};

export default SignUpPage;
