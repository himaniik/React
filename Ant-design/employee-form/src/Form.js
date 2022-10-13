import React, { useState } from "react";
import "antd/dist/antd.css";
import { Space, Table, Tag } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Select } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

//import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;

const data = [
  {
    key: "",
    name: "",
    age: "",
    address: "",
    date: "",
  },
  {
    key: "",
    name: "",
    age: "",
    address: "",
    date: "",
  },
];

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const { Option } = Select;

function Forms() {
  const [name, setName] = useState("");
  console.log(name);
  const [email, setEmail] = useState("");
  console.log(email);
  const [age, setAge] = useState(0);
  console.log(age);
  const [address, setAddress] = useState("");
  console.log(address);
  const [introduction, setIntroduction] = useState("");
  console.log(introduction);
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);
  const [columns, setColumns] = useState([]);
  const [showtable, setshowtable] = useState(false);

  function onFinish() {
    setDataSource([
      {
        name: name,
        email: email,
        age: age,
        address: address,
        introduction: introduction,
      },
    ]);

    setColumns([
      {
        title: "name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "age",
        dataIndex: "age",
        key: "age",
      },

      {
        title: "email",
        dataIndex: "email",
        key: "email",
      },

      {
        title: "address",
        dataIndex: "address",
        key: "address",
      },

      {
        title: "introduction",
        dataIndex: "introduction",
        key: "introduction",
      },
    ]);
    setshowtable(true);
  }

  const [collapsed, setCollapsed] = useState(false);
  // const onClick = (e) => {
  //   console.log("click ", e);
  // };
  // const [status, setStatus] = useState(true);

  const onStart = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="main">
      <Layout style={{ height: 1000 }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Customers",
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: "Agents",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Reports",
              },
              {
                key: "4",
                icon: <UserOutlined />,
                label: "Employee",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Form
              style={{ marginRight: 300 }}
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <h1 style={{ paddingLeft: 270 }}>Organization Form</h1>

              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    max: 99,
                    required: true,
                  },
                ]}
              >
                <InputNumber value={age} onChange={(value) => setAge(value)} />
              </Form.Item>
              <Form.Item
                name={["user", "address"]}
                label="Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Address"
                  value={address}
                  onChange={(value) => setAddress(value)}
                >
                  <Option value="Kathmandu">Kathmandu</Option>
                  <Option value="Pokhara">Pokhara</Option>
                  <Option value="Biratnagar">Biratnagar</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={["user", "introduction"]}
                label="Introduction"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off"
              style={{ paddingLeft: 190 }}
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing first name",
                            },
                          ]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing last name",
                            },
                          ]}
                        >
                          <Input placeholder="Last Name" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                        style={{ width: 200 }}
                      >
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              
            </Form>

            {showtable && (
              <Table
                columns={columns}
                dataSource={dataSource}
                style={{ marginLeft: 90, width: 800 }}
                pagination={false}
              />
            )}

            {/* <div>
              
              {status ? ()
                
              ) : (
                <div>
                  
                  <Form
                    style={{ marginLeft: 310 }}
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    autoComplete="off"
                  >
                    <h1>Employee Form</h1>
                    <Form.List name="users">
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(({ key, name, ...restField }) => (
                            <Space
                              key={key}
                              style={{
                                display: "flex",
                                marginBottom: 8,
                              }}
                              align="baseline"
                            >
                              <Form.Item
                                {...restField}
                                name={[name, "first"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Missing first name",
                                  },
                                ]}
                              >
                                <Input placeholder="First Name" />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, "last"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Missing last name",
                                  },
                                ]}
                              >
                                <Input placeholder="Last Name" />
                              </Form.Item>
                              <MinusCircleOutlined
                                onClick={() => remove(name)}
                              />
                            </Space>
                          ))}
                          <Form.Item>
                            <Button
                              style={{ width: 150 }}
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Add field
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}
            </div> */}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Forms;
