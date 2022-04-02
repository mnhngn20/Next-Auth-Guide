import type { NextPage } from 'next';
import { Typography } from 'antd';
import AuthLayout from '@/components/layout/AuthLayout';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { AuthenticationStatus } from 'src/shared/hoc/withAuth';
import { useEffect } from 'react';

// ONLY ACCESSIBLE WHEN UNAUTHENTICATED

const Home: NextPage = () => {
  const { status } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (status === AuthenticationStatus.Authenticated) {
      push('/');
    }
  }, [status]);

  if (status !== AuthenticationStatus.Unauthenticated)
    return <Typography>Loading...</Typography>;

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center py-8 gap-8">
        <Typography className="text-2xl font-medium">
          Feture disabled
        </Typography>
        <Image
          src="/nextauth.png"
          width={600}
          height={314}
          className="rounded-lg shadow-lg"
        />
      </div>
    </AuthLayout>
  );
};

export default Home;
