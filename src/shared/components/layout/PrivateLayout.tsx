import { Layout, Grid, Space, Typography, Col, Row } from 'antd';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  DashboardOutlined,
  CarryOutOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;

interface Props {
  children: ReactNode;
}

const routes = [
  {
    label: 'Dashboard',
    icon: <DashboardOutlined className="mr-2" />,
    to: '/dashboard',
  },
  {
    label: 'Others',
    icon: <CarryOutOutlined className="mr-2" />,
    to: '/enquires',
  },
];
function PrivateLayout({ children }: Props) {
  const router = useRouter();

  return (
    <Layout>
      <Header>
        <Row className="max-w-screen-xl" align="middle">
          <Col span={4}>
            <Link href="/" passHref>
              <Typography className="text-2xl text-white font-bold cursor-pointer hover:text-gray-500">
                LOGO
              </Typography>
            </Link>
          </Col>
          <Col span={16}>
            <Space align="center" size="large">
              {routes.map(route => (
                <Link href={route.to} passHref>
                  <Typography className="flex items-center text-xl cursor-pointer text-white justify-center hover:text-gray-500">
                    {route.icon}
                    {route.label}
                  </Typography>
                </Link>
              ))}
            </Space>
          </Col>
          <Col>
            <Typography className="flex items-center text-xl cursor-pointer text-white justify-center hover:text-gray-500">
              Logout
            </Typography>
          </Col>
        </Row>
      </Header>
      <Content>
        <div className="max-w-screen-xl m-auto h-screen">{children}</div>
      </Content>
    </Layout>
  );
}

export default PrivateLayout;
