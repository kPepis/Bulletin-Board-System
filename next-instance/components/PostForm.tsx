import { Button, Col, Icon, Input, Row } from "antd";
import { ColProps } from "antd/lib/col";
import Form, { FormComponentProps } from "antd/lib/form";
import gql from "graphql-tag";
import React, { Component } from "react";

const CREATE_BOARD_MUTATION = gql`
  mutation CREATE_BOARD_MUTATION($name: String!, $description: String!) {
    createBoard(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const { TextArea } = Input;

class PostForm extends Component<FormComponentProps> {
  submitHandler: React.FormEventHandler = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values: any) => {
      if (!err) {
        console.log(values);
        // await createBoard();
      }
    });
  };

  render() {
    const form = this.props.form;
    const { getFieldDecorator } = form;

    const colLayout: ColProps = {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
      xl: { span: 24 },
      xxl: { span: 24 },
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };

    return (
      <Row type={"flex"} justify="center" align="middle">
        <Col {...colLayout}>
          <Form
            className={"form-container"}
            layout="vertical"
            hideRequiredMark={false}
          >
            <Form.Item {...formItemLayout}>
              {getFieldDecorator("postTitle", {
                rules: [
                  {
                    required: true,
                    message: "Please enter a post title",
                  },
                ],
              })(
                <Input
                  allowClear={true}
                  prefix={
                    <Icon
                      type="message"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      theme="twoTone"
                    />
                  }
                  placeholder="Enter a post title"
                  size={"large"}
                />,
              )}
            </Form.Item>

            <Form.Item {...formItemLayout}>
              {getFieldDecorator("postContent", {
                rules: [
                  {
                    required: true,
                    message: "Posts cannot be empty",
                    whitespace: true,
                  },
                ],
              })(
                <TextArea
                  autosize={{ minRows: 4, maxRows: 8 }}
                  placeholder="Please type your post"
                />,
              )}
            </Form.Item>

            <Form.Item>
              <p>
                You can use the area below to include a drawing in your post.
              </p>
              <Button type="primary" shape="round">
                Clear
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(PostForm);

export default WrappedNormalLoginForm;
