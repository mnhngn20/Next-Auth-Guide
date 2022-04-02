import { Layout, Typography, Col, Row, Tooltip, Avatar } from 'antd';
import { ReactNode } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const { Header, Content } = Layout;

interface Props {
  children: ReactNode;
}
function PrivateLayout({ children }: Props) {
  const { data } = useSession();

  return (
    <Layout>
      <Header>
        <Row
          className="max-w-screen-xl h-full"
          justify="space-between"
          align="middle"
        >
          <Col span={4}>
            <Link href="/" passHref>
              <Typography className="text-2xl text-white font-bold cursor-pointer hover:text-gray-500">
                LOGO
              </Typography>
            </Link>
          </Col>
          <Col className="flex items-center gap-8 h-full">
            <Link href="/profile" passHref>
              <Tooltip
                title={
                  <div className="flex flex-col justify-center items-center gap-4">
                    <Avatar
                      src={data?.user?.image ?? '/avatar.png'}
                      size={55}
                    />
                    <Typography className="text-white text-xl">
                      Hello, {data?.user?.name}
                    </Typography>
                  </div>
                }
              >
                <Typography className="flex items-center text-xl cursor-pointer text-white justify-center hover:text-gray-500">
                  Profile
                </Typography>
              </Tooltip>
            </Link>
            <Typography className="flex items-center text-xl cursor-pointer text-white justify-center hover:text-gray-500">
              <span onClick={() => signOut({ callbackUrl: '/' })}>Logout</span>
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
