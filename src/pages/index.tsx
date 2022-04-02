import type { NextPage } from 'next';
import { Typography } from 'antd';
import AuthLayout from '@/components/layout/AuthLayout';

const Home: NextPage = () => {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center py-8">
        <Typography className="uppercase text-2xl font-medium">
          Unauthenticated Page
        </Typography>
      </div>
    </AuthLayout>
  );
};

export default Home;
