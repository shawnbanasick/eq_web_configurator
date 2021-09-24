import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import appState from "../../GlobalState/appState";
import ReactHtmlParser from "react-html-parser";
// import decodeHTML from "../../utilities/decodeHTML";
// import testImage from "../../assets/images/testImage.png";
import ImageSelector from "./ImageSelector";

const ImageModal = () => {
  const triggerImageModal = appState["triggerImageModal"];

  const loginHelpModalHead = "Reference Image";
  /*  const loginHelpModalText = ReactHtmlParser(
    decodeHTML(langObj.landingHelpModalText)
  ); */

  const loginHelpModalText = "text here";

  const imageName = `testImage`;

  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    appState["triggerImageModal"] = false;
  };

  return (
    <Modal
      className="customModal"
      open={triggerImageModal}
      onClose={onCloseModal}
      center
    >
      <ModalHeader>{loginHelpModalHead}</ModalHeader>
      <hr />
      <ModalContent>
        {" "}
        <ImageSelector />
      </ModalContent>
    </Modal>
  );
};

export default view(ImageModal);

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
