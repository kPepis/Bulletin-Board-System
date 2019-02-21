import "./RegistrationForm.css";

import { Button, Col, Form, Icon, Input, Row, Tooltip } from "antd";
import { ColProps } from "antd/lib/col";
import { FormComponentProps } from "antd/lib/form";
import gql from "graphql-tag";
import Router from "next/router";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import jwt from "jsonwebtoken";
import { Cookies, withCookies } from "react-cookie";

const cookies = new Cookies();

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION($userName: String!, $password: String!) {
    signUp(userName: $userName, password: $password) {
      id
      userName
    }
  }
`;

interface FormState {
  isDirty: boolean;
}

class NormalLoginForm extends Component<FormComponentProps, FormState> {
  state = {
    isDirty: false,
  };

  onBlurHandler: React.FormEventHandler = e => {
    const value = (e.target as HTMLInputElement).value;
    this.setState({ isDirty: this.state.isDirty || !!value });
  };

  submitHandler: React.FormEventHandler = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const res = await
      }
    });
  };

  compareToFirstPassword = (_rule: any, value: any, callback: any): any => {
    const form = this.props.form;
    if (value !== form.getFieldValue("password")) {
      callback("Passwords are not equal");
    } else {
      callback();
    }
  };

  compareToSecondPassword = (_rule: any, value: any, callback: any): any => {
    const form = this.props.form;
    if (value && this.state.isDirty) {
      form.validateFields(["passwordVerification"], { force: true });
    }
    callback();
  };

  render() {
    const form = this.props.form;
    const { getFieldDecorator } = this.props.form;

    const colLayout: ColProps = {
      xs: { span: 24 },
      sm: { span: 15 },
      md: { span: 8 },
      lg: { span: 8 },
      xl: { span: 6 },
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
      <Row type="flex" justify="center" align="middle">
        <Col {...colLayout} className={"centered-col"}>
          <Mutation
            mutation={SIGN_UP_MUTATION}
            variables={{ ...form.getFieldsValue(["userName", "password"]) }}
          >
            {(signUp, { loading, error, data }) => (
              <fieldset disabled={loading} aria-busy={loading}>
                <Form
                  onSubmit={e => {
                    // Stop the form from submitting
                    e.preventDefault();
                    this.props.form.validateFields(async (err, values) => {
                      if (!err) {
                        // Call the mutation function (CreateUser)
                        // todo show in UI if user already exists
                        const user = await signUp();

                        const token = jwt.sign(
                          {
                            userName: form.getFieldValue("userName"),
                          },
                          "LALALALA",
                        );

                        localStorage.setItem(
                          "token",
                          JSON.stringify({ token }),
                        );

                        cookies.set("token", token, { path: "/" });

                        // Redirect them to the boards page
                        await Router.push("/boards");
                      }
                    });
                  }}
                  className={"form-container"}
                  layout="vertical"
                  hideRequiredMark={false}
                >
                  <Form.Item
                    {...formItemLayout}
                    label={
                      <span>
                        Username&nbsp;
                        <Tooltip title="This is the name others users will see">
                          <Icon type="question-circle-o" />
                        </Tooltip>
                      </span>
                    }
                  >
                    {getFieldDecorator("userName", {
                      rules: [
                        {
                          required: true,
                          message: "Please type a non-empty username",
                          whitespace: true,
                          type: "string",
                        },
                      ],
                    })(
                      <Input
                        allowClear={true}
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Enter a username"
                        size={"large"}
                      />,
                    )}
                  </Form.Item>

                  <Form.Item {...formItemLayout} label="Password">
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter a password",
                        },
                        {
                          validator: this.compareToSecondPassword,
                        },
                      ],
                      validateTrigger: "onBlur",
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Choose a password"
                        size={"large"}
                      />,
                    )}
                  </Form.Item>

                  <Form.Item {...formItemLayout} label="Confirm your password">
                    {getFieldDecorator("passwordVerification", {
                      rules: [
                        {
                          required: true,
                          validator: this.compareToFirstPassword,
                        },
                      ],
                      validateTrigger: "onBlur",
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Repeat your password"
                        size={"large"}
                        onBlur={this.onBlurHandler}
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
                      Register
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

const WrappedNormalLoginForm = Form.create({})(NormalLoginForm);

export default withCookies(WrappedNormalLoginForm);
