import type { NextPage } from 'next';
import { Typography } from 'antd';
import AuthLayout from '@/components/layout/AuthLayout';
import Image from 'next/image';

// NOT REQUIRED AUTHENTICATION

const Home: NextPage = () => {
  return (
    <AuthLayout>
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
    </AuthLayout>
  );
};

export default Home;
