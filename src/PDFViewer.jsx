import React, { useState, useRef } from "react";
import { Spin, Alert } from "antd";

export const PDFViewer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const iframeRef = useRef(null);

  const handleLoad = () => {
    setLoading(false);
    setError(null);
  };

  const handleError = () => {
    setLoading(false);
    setError("Failed to load PDF document");
  };

  return (
    <div style={{ width: "100%", height: "90vh", position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin tip="Loading PDF..." size="large" />
        </div>
      )}

      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ margin: "20px" }}
        />
      )}

      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        allowFullScreen
        src="https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf"
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: error ? "none" : "block" }}
        title="PDF Viewer"
      />

      {error && (
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            setError(null);
            // iframeRef.current.src = iframeRef.current.src;
          }}
          style={{ margin: "20px" }}
        >
          Retry Loading PDF
        </Button>
      )}
    </div>
  );
};

