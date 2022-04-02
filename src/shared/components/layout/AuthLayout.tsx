import { Layout, Grid, Space, Typography, Col, Row } from 'antd';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

interface Props {
  children: ReactNode;
}

function AuthLayout({ children }: Props) {
  const router = useRouter();

  return (
    <Layout>
      <Header>
        <Row className="max-w-screen-xl h-full" align="middle">
          <Col span={4}>
            <Link href="/" passHref>
              <Typography className="text-2xl text-white font-bold cursor-pointer hover:text-gray-500">
                LOGO
              </Typography>
            </Link>
          </Col>
          <Col span={4} offset={16}>
            <Typography className="flex items-center text-xl cursor-pointer text-white justify-center hover:text-gray-500">
              Login
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

export default AuthLayout;
