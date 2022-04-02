import { Layout, Grid, Space, Typography, Col, Row, Button } from 'antd';
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
        <Row
          className="max-w-screen-xl h-full"
          justify="space-between"
          align="middle"
        >
          <Col>
            <Link href="/" passHref>
              <Typography className="text-2xl text-white font-bold cursor-pointer hover:text-gray-500">
                NextAuth.js
              </Typography>
            </Link>
          </Col>
          <Col className="flex items-center gap-8 h-full">
            <Button
              type="primary"
              className="flex items-center text-xl cursor-pointer text-white font-medium"
              onClick={() => router.push('/login')}
            >
              Sign In
            </Button>
            <Button
              className="flex items-center text-xl cursor-pointer text-black font-medium"
              onClick={() => router.push('/register')}
            >
              Sign Up
            </Button>
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
