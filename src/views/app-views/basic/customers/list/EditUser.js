import React, { Component } from 'react';
import { Form, Button, Input, Row, Col, message, Drawer } from 'antd';

class EditUser extends Component {
  formRef = React.createRef();

  componentDidUpdate() {
    this.formRef.current.setFieldsValue(this.props.user);
  }

  render() {
    const { visible, close, update, user } = this.props;

    const handleFinish = (values) => {
      const key = 'updatable';
      message.loading({ content: 'Updating...', key });
      setTimeout(async () => {
        try {
          await update({
            id: user.id,
            name: values.name,
            email: values.email,
            username: values.username,
            phone: values.phone,
            website: values.website,
          })
          message.success({ content: 'Done!', key, duration: 2 });
        } catch (error) {
          message.error({ content: error.message , key, duration: 2 });
        } finally {
          close();
        }
      }, 1000);
    };

    const handleFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const { name, email, username, phone, website } = user;

    return (
      <Drawer
        width={300}
        placement="right"
        onClose={close}
        visible={visible}
      >
        <div className="mt-4">
          <Form
            ref={this.formRef}
            name="basicInformation"
            layout="vertical"
            initialValues={
              {
                'name': name,
                'email': email,
                'username': username,
                'phone': phone,
                'website': website
              }
            }
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
          >
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!'
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{
                    required: true,
                    type: 'email',
                    message: 'Please enter a valid email!'
                  }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Website"
                  name="website"
                >
                  <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Drawer>
    )
  }
}

export default EditUser
