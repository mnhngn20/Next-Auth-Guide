/* eslint-disable react/display-name */
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Typography } from 'antd';

export enum AuthenticationStatus {
  Loading = 'loading',
  Authenticated = 'authenticated',
  Unauthenticated = 'unauthenticated',
}

export enum AuthenticationType {
  Required,
  NotAccessibleWhenAuthenticated,
}

const withAuth = <P extends object>(
  Component: React.ComponentType<P>,
  authType: AuthenticationType = AuthenticationType.Required,
) =>
  function ({ ...props }: P) {
    function Authenticated({ ...props }: P) {
      const { status } = useSession();
      const { push } = useRouter();

      if (status === AuthenticationStatus.Loading)
        return <Typography>Loading...</Typography>;

      if (authType === AuthenticationType.Required) {
        if (status === AuthenticationStatus.Unauthenticated) {
          push('/');
          return <Typography>Loading...</Typography>;
        }

        return <Component {...(props as P)} />;
      }
      if (status === AuthenticationStatus.Authenticated) {
        push('/');
        return <Typography>Loading...</Typography>;
      }
      return <Component {...(props as P)} />;
    }

    return <Authenticated {...(props as P)} />;
  };

export default withAuth;
