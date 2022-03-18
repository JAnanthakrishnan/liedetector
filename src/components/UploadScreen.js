import React, { useState } from "react";
import { Upload, message, Button, Form, Divider, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import VideoRecorder from "react-video-recorder";
const UploadScreen = () => {
  const [currFile, setCurrFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notselected, setSelected] = useState(true);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div
      style={{
        // backgroundColor: "yellow",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Upload
        name="image"
        listType="picture"
        action={"/"}
        maxCount={1}
        beforeUpload={(file, fileList) => {
          console.log(file, fileList);
          setCurrFile(file);
          setSelected(false);
          return false;
        }}
        onRemove={() => {
          setCurrFile(null);
          setSelected(true);
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
      <h3>OR</h3>
      <Button onClick={showModal}> Record</Button>

      <Divider />
      <Button
        type="primary"
        onClick={() => {
          console.log(currFile);
        }}
        disabled={notselected}
      >
        Predict
      </Button>
      <Modal
        title="Record Video"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ top: 20 }}
      >
        <VideoRecorder
          isFlipped={false}
          // isOnInitially
          countdownTime={0}
          mimeType="video/webm;codecs=vp8,opus"
          constraints={{
            audio: true,
            video: {
              width: { exact: 480, ideal: 480 },
              height: { exact: 640, ideal: 640 },
              aspectRatio: { exact: 0.7500000001, ideal: 0.7500000001 },
              resizeMode: "crop-and-scale",
            },
          }}
          onRecordingComplete={(videoBlob) => {
            // Do something with the video...
            console.log("videoBlob", videoBlob);
            setCurrFile(videoBlob);
            setSelected(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default UploadScreen;
