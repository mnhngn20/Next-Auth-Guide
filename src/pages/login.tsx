import type { NextPage } from 'next';
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import AuthLayout from '@/components/layout/AuthLayout';
import { GoogleOutlined, GithubFilled } from '@ant-design/icons';

// ONLY ACCESSIBLE WHEN UNAUTHENTICATED

const Login: NextPage = () => {
  const onSubmitForm = ({
    password,
    username,
  }: {
    username: string;
    password: string;
  }) => {
    // HANDLE LOGIN HERE
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center py-8 gap-8">
        <Typography className="text-2xl font-medium">Login</Typography>
        <Card className="shadow-xl rounded-md">
          <Form layout="vertical" onFinish={onSubmitForm}>
            <Row align="middle" gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item label="User Name:" name="username">
                  <Input placeholder="Enter your username" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Password:" name="password">
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button type="primary" block htmlType="submit">
                  Login
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  block
                  htmlType="submit"
                  className="flex items-center justify-center"
                >
                  Login with Google <GoogleOutlined className="text-red-600" />
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  block
                  htmlType="submit"
                  className="flex items-center justify-center"
                >
                  Login with GitHub
                  <GithubFilled className="text-blue-900" />
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default Login;
