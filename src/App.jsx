import React, { useState } from "react";
import { Modal, Form, Input, Button, Col, Row, Splitter, Tooltip } from "antd";
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
    setIsFullscreen(false);
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginInlineEnd: 50,
            }}
          >
            <span>PDF Viewer with Form</span>
            <Tooltip
              style={{ marginInline: 50 }}
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <Button
                type="text"
                icon={
                  isFullscreen ? (
                    <FullscreenExitOutlined />
                  ) : (
                    <FullscreenOutlined />
                  )
                }
                onClick={toggleFullscreen}
              />
            </Tooltip>
          </div>
        }
        open={visible}
        onCancel={handleCancel}
        footer={null}
        width={isFullscreen ? "90%" : 1020}
        height={isFullscreen ? "100vh" : "auto"}
        style={{
          top: isFullscreen ? 0 : 20,
          maxWidth: "90vw",
          padding: isFullscreen ? 0 : "initial",
          // height: isFullscreen ? "100vh" : "auto",
          overflow: isFullscreen ? "hidden" : "auto",

        }}
        bodyStyle={{
          padding: isFullscreen ? 0 : "24px",
          height: isFullscreen ? "90vh" : "auto",
        }}
        destroyOnClose
      >
        <Splitter
          style={{
            height: isFullscreen ? "calc(100vh - 48px)" : "650px",
            border: "1px solid #f0eef0",
            maxHeight: "90vh",
          }}
        >
          <Splitter.Panel defaultSize="38%" min="20%" max="60%">
            <div
              style={{
                padding: isFullscreen ? "10px" : "5px",
                height: "90%",
                overflow: "auto",
              }}
            >
              <FormData />
            </div>
          </Splitter.Panel>
          <Splitter.Panel>
            <div
              style={{
                border: isFullscreen ? "none" : "1px solid #d9d9d9",
                borderRadius: "4px",
                padding: "10px",
                height: "95%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "auto",
              }}
            >
              <PDFViewer />
            </div>
          </Splitter.Panel>
        </Splitter>
      </Modal>
    </>
  );
};

export default App;
