import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const XmlUploadErrorModal = () => {
  const openModal = appState["triggerXmlUploadErrorModal"];

  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    appState["triggerOptionsWarningModal"] = false;
  };

  return (
    <Modal
      className="customModal"
      open={openModal}
      onClose={onCloseModal}
      center
    >
      <ModalHeader>Warning - Upload Error</ModalHeader>
      <hr />
      <ModalContent>
        There was an unexpected error when uploading this file.
        <br />
        Please try again.
      </ModalContent>
    </Modal>
  );
};

export default view(XmlUploadErrorModal);

const ModalHeader = styled.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`;

const ModalContent = styled.div`
  margin-top: 15px;

  img {
    width: 800px;
  }
`;

// react-responsive-modal-overlay
