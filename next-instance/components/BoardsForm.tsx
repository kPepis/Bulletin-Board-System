import { Button, Col, Form, Icon, Input, message, Row } from "antd";
import { ColProps } from "antd/lib/col";
import { FormComponentProps } from "antd/lib/form";
import * as jwt from "jsonwebtoken";
import { NextContext } from "next";
import nookies from "nookies";
import React, { Component } from "react";
import { Mutation, MutationFn } from "react-apollo";
import io from "socket.io-client";

import { CREATE_BOARD_MUTATION } from "../graphql/mutations";
import { GET_BOARDS_QUERY } from "../graphql/queries";
import { GlobalAppState } from "../pages/_app";

interface NewBoardFormValues {
  boardName: string;
  boardDescription: string;
}

export interface NookiesProps {
  cookies: { [p: string]: string };
}

class NormalLoginForm extends Component<
  FormComponentProps & NookiesProps,
  GlobalAppState
> {
  static async getInitialProps(ctx: NextContext) {
    const { query } = ctx;
    const cookies = nookies.get(ctx);
    const page: number = query.page ? parseInt(query.page as string) : 1;
    return { page, cookies };
  }

  componentDidMount(): void {
    let token = null;

    if (this.props.cookies.token) {
      token = this.props.cookies.token;
    }
    console.log(token);

    if (token) {
      const { userId, userName } = jwt.decode(token) as {
        userId: string;
        userName: string;
      };

      console.log(userName, userId);

      this.setState({ userId, userName, socket: io() });
    }
  }

  render() {
    const form = this.props.form;
    const { getFieldDecorator } = this.props.form;

    const colLayout: ColProps = {
      xs: { span: 24 },
      sm: { span: 15 },
      md: { span: 9 },
      lg: { span: 8 },
      xl: { span: 7 },
      xxl: { span: 5 },
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
          {/*todo add refetchqueries for boards*/}
          <Mutation
            mutation={CREATE_BOARD_MUTATION}
            refetchQueries={[
              {
                query: GET_BOARDS_QUERY,
              },
            ]}
          >
            {(createBoard: MutationFn<any, any>, { loading }) => (
              <fieldset disabled={loading} aria-busy={loading}>
                <Form
                  onSubmit={e => {
                    e.preventDefault();

                    if (!this.state.userName) {
                      return message.error(
                        "You must be logged in to create a new board",
                      );
                    }

                    this.props.form.validateFields(
                      async (err: any, values: NewBoardFormValues) => {
                        if (!err) {
                          const res = await createBoard({
                            variables: {
                              name: values.boardName,
                              description: values.boardDescription,
                              userName: this.state.userName,
                            },
                          });

                          // if board creation was successful, clear form
                          if (res) {
                            form.resetFields();
                          }
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
