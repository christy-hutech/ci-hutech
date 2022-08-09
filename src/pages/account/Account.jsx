import React from "react";
import "./account.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Form, Input,Anchor,Image,Typography} from 'antd';
import proPick from "../../assets/images/account/account-pro-img.svg";
const { Link } = Anchor;

function Account() {
  return (
    <>
        <div className="title-wrapper"><h3>Account</h3></div>
        <Form
            name="wrap"
            labelCol={{
            flex: '110px',
            }}
            labelAlign="left"
            labelWrap
            wrapperCol={{
            flex: 1,
            }}
            colon={false}
            className="account-wrapper"
        >
            <div className="content-wrapper-1">
                <Form.Item>
                    <Image
                        width={100}
                        src={proPick}
                    />
                    <Anchor
                    className="link-wrapper"
                    >
                        <Link  className="upload-pic" href="#" title="Upload Image" />
                        <Link className="remmove-pic"href="#" title="Remove" />
                    </Anchor>
                </Form.Item>
                <Form.Item>
                    <Form.Item
                        label="First Name"
                        name="name"
                        className="f-name form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >  
                        <Input  placeholder="First Name"/>
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        className="form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Last Name"/>
                    </Form.Item>
                    
                    <Form.Item
                        label="Email Address"
                        name="lastName"
                        className="l-name form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Email Address"/>
                    </Form.Item>
                    
                    <Form.Item
                        label="Phone Number"
                        name="lastName"
                        className="l-name form-field"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Phone Number"/>
                    </Form.Item>
                    
                </Form.Item>
            </div>
            <div className="content-wrapper-2">
            <Form.Item
                className="content-colm-fist"
            ></Form.Item>
            <Form.Item
                className="content-colm-secound"  
            >
                <Form.Item
                    label="Old Password"
                    name="lastName"
                    className="form-field"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input placeholder="Old Password"/>
                </Form.Item>
                <Form.Item
                    label=""
                    name="lastName"
                    className="form-field"
                >
                    {/* <Input placeholder="Email Address"/> */}
                </Form.Item>
                <Form.Item
                    label="New Password"
                    name="lastName"
                    className="form-field"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input placeholder="New Password"/>
                </Form.Item>
                <Form.Item
                    label="Retype New Password"
                    name="lastName"
                    className="form-field"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input placeholder="New Password"/>
                </Form.Item>
                
            </Form.Item>
            </div>
            <Form.Item 
                className="accout-sub-btn-group"
            >
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
                <Button type="primary cancel">
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    </>
  )
}

export default Account