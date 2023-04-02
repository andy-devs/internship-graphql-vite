import { Toast } from '@shared/components/toast/toast';
import { TOASTER_TEXTS } from '@shared/constants/toaster-text';
import { AuthService } from '@shared/services/utils/auth-service';
import { toast } from 'react-toastify';

import { useUserSignIn } from '../mutation/__generated__/user-sign-in.mutation';

interface FormDataType {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const [signInAction, { loading, error }] = useUserSignIn();

  const signIn = async ({ email, password }: FormDataType) => {
    await signInAction({
      variables: {
        input: {
          email: email.trim(),
          password: password.trim(),
        },
      },
      onCompleted: ({ userSignIn }) => {
        const token = userSignIn.token;
        const problem = userSignIn.problem;
        if (token) {
          AuthService.initSession({ accessToken: token });
          toast(<Toast text={TOASTER_TEXTS.authSuccess} />);
        } else if (!token && problem) {
          toast(<Toast type="error" text={problem?.message} />);
        }
      },
    });
  };

  return {
    signIn,
    loading,
    error,
  };
};
