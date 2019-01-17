import "./BoardsForm.css";

import { Button, Col, Form, Icon, Input, Row } from "antd";
import { ColProps } from "antd/lib/col";
import { FormComponentProps } from "antd/lib/form";
import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation } from "react-apollo";

const CREATE_BOARD_MUTATION = gql`
  mutation CREATE_BOARD_MUTATION($name: String!, $description: String!) {
    createBoard(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

interface NewBoardFormValues {
  boardName: string;
  boardDescription: string;
}

class NormalLoginForm extends Component<FormComponentProps> {
  submitHandler: React.FormEventHandler = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values: NewBoardFormValues) => {
      if (!err) {
        console.log(values);
        // await createBoard();
      }
    });
  };

  render() {
    const form = this.props.form;
    const { getFieldDecorator } = this.props.form;

    const colLayout: ColProps = {
      xs: { span: 24 },
      sm: { span: 15 },
      md: { span: 9 },
      lg: { span: 7 },
      xl: { span: 5 },
      xxl: { span: 4 },
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
          <Mutation
            mutation={CREATE_BOARD_MUTATION}
            variables={{
              name: form.getFieldValue("boardName"),
              description: form.getFieldValue("boardDescription"),
            }}
          >
            {(createBoard, { loading }) => (
              <fieldset disabled={loading} aria-busy={loading}>
                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    this.props.form.validateFields(
                      async (err, values: NewBoardFormValues) => {
                        if (!err) {
                          console.log(values);
                          await createBoard();
                        }
                      },
                    );
                  }}
                  className={"form-container"}
                  layout="vertical"
                  hideRequiredMark={false}
                >
                  <Form.Item {...formItemLayout}>
                    {getFieldDecorator("boardName", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter a board name",
                        },
                      ],
                    })(
                      <Input
                        allowClear={true}
                        prefix={
                          <Icon
                            type="tag"
                            style={{ color: "rgba(0,0,0,.25)" }}
                            theme="twoTone"
                          />
                        }
                        placeholder="Please enter a board name"
                        size={"large"}
                      />,
                    )}
                  </Form.Item>

                  <Form.Item {...formItemLayout}>
                    {getFieldDecorator("boardDescription", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter a board description",
                        },
                      ],
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="file-text"
                            style={{ color: "rgba(0,0,0,.25)" }}
                            theme="twoTone"
                          />
                        }
                        placeholder="Please enter a board description"
                        size={"large"}
                      />,
                    )}
                  </Form.Item>

                  <Form.Item {...formItemLayout}>
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      block={true}
                    >
                      Create a new board
                    </Button>
                  </Form.Item>
                </Form>
              </fieldset>
            )}
          </Mutation>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
