// import React, { Fragment } from "react";
// import { Col, Row, Button, Form, Input, InputNumber } from "antd";

// import Profileimg from "../../assets/images/profileImgs/profileimg.svg";
// import "./Profileform.css";
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };
// const Profileform = () => {
//   const onFinish = (values) => {
//     console.log(values);
//   };
//   return (
//     <Fragment>
//       <div className="profile-inner">Edit Profile</div>
//       <Row
//         gutter={{
//           xs: 8,
//           sm: 16,
//           md: 24,
//           lg: 32,
//         }}
//       >
//         <Col className="profile-col" span={6}>
//           <img src={Profileimg} alt="profileimg" width="100" height="100" />
//           <Button type="text" danger>
//             Upload Image
//           </Button>
//           <Button type="link">Remove</Button>
//         </Col>
//         <Col className="gutter-row" span={18}>
//           <Form
//             layout="vertical"
//             name="nest-messages"
//             onFinish={onFinish}
//             validateMessages={validateMessages}
//           >
//
//
//
//
//

//             <Form.Item name="Description" label="Introduction">
//               <Input.TextArea />
//             </Form.Item>
//             {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item> */}
//           </Form>
//         </Col>
//       </Row>
//     </Fragment>
//   );
// };

// export default Profileform;

import React from "react";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Layout,
  Space,
} from "antd";
import "antd/dist/antd.css";
import "./Profileform.css";
import Profileimg from "../../assets/images/profileImgs/profileimg.svg";
const subscribe = ["Newsletter", "Post", "Articles"];
const { Header } = Layout;
const { TextArea } = Input;

const Profileform = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    setTimeout(() => {
      form.resetFields();
    }, 3000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        form={form}
        requiredMark={false}
        colon={false}
        name="basic"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="profile-header">
          <h3>Profile</h3>
          <Space>
            <Button className="cancel-btn" shape="round">
              Cancel
            </Button>

            <Button
              type="primary"
              shape="round"
              htmlType="submit"
              className="save-btn"
            >
              Save
            </Button>
          </Space>
        </div>

        <div className="user-details">
          <div className="tab2-header">
            <div className="profile-inner">Edit Profile</div>
          </div>
          <Divider></Divider>
          <Row justify="space-evenly">
            <Col className="profile-col" span={4}>
              <img src={Profileimg} alt="profileimg" width="100" height="100" />
              <Button className="upload-btn" type="text">
                Upload Image
              </Button>
              <Button className="remove-btn" type="text">
                Remove
              </Button>
            </Col>

            <Col span={9}>
              <Form.Item
                label="First Name"
                name="FirstName"
                rules={[
                  {
                    required: true,
                    message: "Please input First name!",
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="primaryemail"
                label="Primary Email"
                rules={[
                  {
                    type: "email",
                    message: "Please Input Primary Email Address!",
                  },
                ]}
              >
                <Input placeholder="Primary Email Address" />
              </Form.Item>
              <Form.Item
                name="primaryNumber"
                label="Primary Number"
                rules={[
                  {
                    required: true,
                    message: "Please Input Primary Phone number!",
                  },
                ]}
              >
                <Input placeholder="Primary Phone Number" />
              </Form.Item>
              <Form.Item name="kycdetails" label="KYC Details">
                <Button className="verify-btn" type="primary">
                  VERIFIED
                </Button>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label="Last Name"
                name="LastName"
                rules={[
                  {
                    required: true,
                    message: "Please Input Last name!",
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="secondaryemail"
                label="Secondary Email"
                rules={[
                  {
                    type: "email",
                    message: "Please Input Secondary Email Address!",
                  },
                ]}
              >
                <Input placeholder="Secondary Email Address" />
              </Form.Item>
              <Form.Item
                name="secondaryNumber"
                label="Secondary Number"
                rules={[
                  {
                    required: true,
                    message: "Please Input Phone number!",
                  },
                ]}
              >
                <Input placeholder="Secondary Phone Number" />
              </Form.Item>
              <Form.Item
                name="subscribe"
                label="Subscribe"
                rules={[
                  {
                    required: true,
                    message: "Please Input Subscribe!",
                  },
                ]}
              >
                <Select placeholder="Select subscribe mode">
                  {subscribe.map((fr, index) => {
                    return (
                      <Select.Option key={index} value={fr}>
                        {fr}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col className="profile-col" span={4}></Col>
            <Col span={18}>
              <Form.Item label="Descriptions">
                <TextArea rows={5} />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default Profileform;
