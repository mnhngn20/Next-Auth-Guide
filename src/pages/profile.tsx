import PrivateLayout from '@/components/layout/PrivateLayout';
import { Avatar, Card, Col, Row, Typography } from 'antd';

// ONLY ACCESSIBLE WHEN AUTHENTICATED

const ProfilePage = () => {
  return (
    <PrivateLayout>
      <div className="flex flex-col items-center justify-center py-8 gap-8">
        <Card className="shadow-xl rounded-md w-[50rem]">
          <Row
            align="middle"
            className="w-full"
            gutter={[16, 16]}
            justify="center"
          >
            <Col>
              <Typography className="text-2xl font-medium">
                Your Profile
              </Typography>
            </Col>
            <Col span={24} className="flex items-center">
              <Avatar src="/avatar.png" size={150} />
            </Col>
            <Col span={24} className="flex items-end gap-4">
              <Typography className="font-medium text-2xl flex text-gray-900">
                Name:
              </Typography>
              <Typography className="text-base ">
                Nguyen Chau Quang Minh
              </Typography>
            </Col>
            <Col span={24} className="flex items-end gap-4">
              <Typography className="font-medium text-2xl flex text-gray-900">
                Age:
              </Typography>
              <Typography className="text-base ">22</Typography>
            </Col>
            <Col span={24} className="flex items-end gap-4">
              <Typography className="font-medium text-2xl flex text-gray-900">
                Study At:
              </Typography>
              <Typography className="text-base ">
                Da Nang University of Technology and Science
              </Typography>
            </Col>
            <Col span={24} className="flex items-end gap-4">
              <Typography className="font-medium text-2xl flex text-gray-900">
                Description:
              </Typography>
              <Typography className="text-base ">
                A passionate web developer who is trying to be better and better
                everyday
              </Typography>
            </Col>
          </Row>
        </Card>
      </div>
    </PrivateLayout>
  );
};

export default ProfilePage;