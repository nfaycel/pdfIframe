import React, { useState } from "react";
import { Modal, Form, Input, Button, Col, Row, Spin, Tooltip } from "antd";
import { PDFViewer } from "./PdfViewer";
import FormData from "./Form";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    setIsFullscreen(false); // Reset to normal size when closing
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open PDF Form
      </Button>

      <Modal
        title={
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginInlineEnd: 50 }}>
            <span>PDF Viewer with Form</span>
            <Tooltip style={{marginInline:50}} title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}>
              <Button
                type="text"
                icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                onClick={toggleFullscreen}
              />
            </Tooltip>
          </div>
        }
        open={visible}
        onCancel={handleCancel}
        footer={null}
        width={isFullscreen ? "100%" : 1020}
        style={{ 
          top: isFullscreen ? 0 : 20,
          maxWidth: "90vw",
          padding: isFullscreen ? 0 : "initial"
        }}
        bodyStyle={{ 
          padding: isFullscreen ? 0 : "24px",
          height: isFullscreen ? "90vh" : "auto"
        }}
        destroyOnClose
      >
        <Row gutter={isFullscreen ? 0 : 24}>
          <Col span={isFullscreen ? 8 : 10}>
            <div style={{ padding: isFullscreen ? "24px" : 0 }}>
              <FormData />
            </div>
          </Col>
          <Col span={isFullscreen ? 16 : 14}>
            <div
              style={{
                border: isFullscreen ? "none" : "1px solid #d9d9d9",
                borderRadius: "4px",
                padding: "10px",
                height: isFullscreen ? "calc(100vh - 48px)" : "500px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "auto"
              }}
            >
              <PDFViewer />
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default App;