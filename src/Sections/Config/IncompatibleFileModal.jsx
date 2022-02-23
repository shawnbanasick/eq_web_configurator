import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const IncompatibleFileModal = () => {
  const openModal = appState["triggerIncompatibleFileModal"];

  const onCloseModal = () => {
    appState["triggerIncompatibleFileModal"] = false;
  };

  return (
    <Modal
      className="customModal"
      open={openModal}
      onClose={onCloseModal}
      center
    >
      <ModalHeader>Warning - Incompatible File</ModalHeader>
      <hr />
      <ModalContent>
        An incompatible file format has been detected.
        <br /> <br />
        Only config.xml files created with this EQ Web Configurator can be
        imported.
      </ModalContent>
    </Modal>
  );
};

export default view(IncompatibleFileModal);

const ModalHeader = styled.div`
  font-size: 24px;
  font-family: arial;
  font-weight: bold;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`;

const ModalContent = styled.div`
  margin-top: 15px;
  font-family: arial;

  img {
    width: 800px;
  }
`;

// react-responsive-modal-overlay
