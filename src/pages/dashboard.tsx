import PrivateLayout from '@/components/layout/PrivateLayout';
import { Typography } from 'antd';

const Dashboard = () => {
  <PrivateLayout>
    <Typography>
      This is Dashboard Page (Can only access when authenticated)
    </Typography>
  </PrivateLayout>;
};

export default Dashboard;
