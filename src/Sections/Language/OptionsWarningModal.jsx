import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";

const OptionsWarningModal = () => {
  const openModal = appState["triggerOptionsWarningModal"];

  /*  const loginHelpModalText = ReactHtmlParser(
    decodeHTML(langObj.landingHelpModalText)
  ); */
  /* 
  const loginHelpModalText = "text here";

  const imageName = `testImage`; */

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
      <ModalHeader>Warning - Split Characters</ModalHeader>
      <hr />
      <ModalContent>
        Use three semicolons to separate options or scale
        <br />
        For example - "one;;;two;;;three"
      </ModalContent>
    </Modal>
  );
};

export default view(OptionsWarningModal);

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
