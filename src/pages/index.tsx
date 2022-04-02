import type { NextPage } from 'next';
import { Typography } from 'antd';
import AuthLayout from '@/components/layout/AuthLayout';
import Image from 'next/image';
import withAuth, {
  AuthenticationStatus,
  AuthenticationType,
} from 'src/shared/hoc/withAuth';
import { useSession } from 'next-auth/react';
import PrivateLayout from '@/components/layout/PrivateLayout';

// NOT REQUIRED AUTHENTICATION

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-8">
      <Typography className="text-2xl font-medium">
        Authentication Next.js App guided by mnhngn20
      </Typography>
      <Image
        src="/nextauth.png"
        width={600}
        height={314}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

const Home: NextPage = () => {
  const { status } = useSession();

  if (status === AuthenticationStatus.Authenticated) {
    return (
      <PrivateLayout>
        <Content />
      </PrivateLayout>
    );
  }

  return (
    <AuthLayout>
      <Content />
    </AuthLayout>
  );
};

export default Home;
