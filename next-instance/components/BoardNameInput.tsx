import { Form, Icon, Input } from "antd";
import React from "react";

export function BoardFormInput(props: {
  formItemLayout: {
    wrapperCol: { sm: { span: number }; xs: { span: number } };
    labelCol: { sm: { span: number }; xs: { span: number } };
  };
  fieldDecorator: (node: React.ReactNode) => React.ReactNode;
}) {
  return (
    <Form.Item {...props.formItemLayout}>
      {props.fieldDecorator(
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
  );
}
