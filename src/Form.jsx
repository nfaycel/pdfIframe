import { Modal, Form, Input, Button, Col, Row, Spin, message } from "antd";


const FormData = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Form submitted successfully!");
  };

  return (
    <Form form={form} name="pdf_form" onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Full Name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="John Doe" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input placeholder="john@example.com" />
      </Form.Item>

      <Form.Item name="comments" label="Comments">
        <Input.TextArea
          rows={4}
          placeholder="Your feedback about the document..."
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Form
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormData;
