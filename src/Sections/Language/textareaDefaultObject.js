const showSectionDefaults = () => {
  const obj = {
    langStepCompleted: `You have completed this step. Please click on the <b> blue "Continue" button </b> at the bottom right-side of your screen to go to the next step.`,
    langLoginFirst: `Please complete the log-in process first.`,
    langFooterTextSize: `Text Size`,
    langFooterCardHeight: `Card Height`,
    langBtnHelp: "Help",
    langBtnNext: "Continue",
    langLandingHead: `University Research Project`,
    langWelcomeMessage: `<h2>EQ Web Sort Demo Project - iPad Use in the Classroom.</h2><br/><br/><p>Thank you for helping with this research project</p><br/><br/><br/>
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/lMy4ARVEcCI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,

    langLoginWelcomeText: `<center><h3>Welcome!</h3></center><br/> Thank you for participating in this Q methodology research project. <br/>Please <b>sign in</b> using the form below to begin the process. `,
    langLoginHeaderText: `Sign In`,
    langLoginPartIdText: `Please enter your name or participant ID`,
    langAccessInputText: "Please enter the access code for this survey.",
    langPartIdWarning: `Invalid name or ID`,
    langAccessCodeWarning: `Access code invalid`,
    loginSubmitButtonText: `Submit`,

    langLandingHelpModalHead: `Welcome!`,
    langLandingHelpModalText: `Thank you for participating in this University Research Project. Please click the "<b>Continue</b>" button at the bottom right side of the screen to go to the next step.`,
    langBtnNextLanding: `Start`,
    langBtnHelpLanding: `Help`,

    /*
     ******** CONSENT PAGE  ****************** */
    langConsentTitleBarText: `Research Consent`,
    langConsentText: `You are invited to participate in a research study conducted by [Principal Investigator’s Name] at [Institution or Organization]. Before you decide to participate, it is important that you understand why the research is being conducted and what it will involve. Please take the time to read the following information carefully. Feel free to contact the research team with any questions you may have.<br /><br /><b>Purpose of the Study</b><br />The purpose of this study is to [briefly describe the purpose, e.g., understand the effects of a new teaching method on student performance]. This research will help us gain insights into [mention any broader implications or goals of the study]. <br /><br /><b>Study Procedures</b><br />If you agree to participate, you will be asked to [describe the procedures involved, including what participants will do, how long it will take, and how frequently it will occur]. For example, you will be asked to complete evaluate a series of statements, sort them, and then reflect on the sorting. Additionally, there is a short questionnaires at the end. The study will take approximately [duration, e.g., 45 minutes]. <br /><br /><b>Benefits</b><br />While there may not be direct benefits to you for participating, the information gathered from this study may help [describe potential benefits, e.g., improve educational methods, contribute to scientific knowledge, etc.]. You may also gain personal insights into [describe any personal benefits, if applicable].<br /><br /><b>Confidentiality</b><br />All information collected in this study will be kept strictly confidential. Data will be stored securely and only the research team will have access to it. Your identity will not be disclosed in any reports or publications resulting from this study. [Describe how data will be anonymized, encrypted, or stored securely].<br /><br /><b>Voluntary Participation</b><br />Your participation in this study is entirely voluntary. You are free to decline to participate, or to withdraw at any time, without penalty or loss of benefits to which you are otherwise entitled. If you decide to withdraw, close the webpage and any data collected up to that point will be deleted.<br /><br /><b>Consent</b><br />By clicking on the "Agree" button on the bottom of this page, you are indicating that you have read and understood the information provided, and that you agree to participate in this study. If you have any questions about this study, please contact [Principal Investigator’s Name and Contact Information].`,
    langConsentHelpModalHead: `Contact Information`,
    langConsentHelpModalText: `Thank you for participating in this University Research Project. You can contact the research team by phone (1-555-867-5309) or by email at researchTeam@myMail.com`,
    langBtnNextConsent: `Agree`,
    langBtnHelpConsent: `Contact Information`,

    /*
     ******** LOCAL DATA COLLECTION  ****************** */
    langLocalHeader: "Offline Q-sort Control Panel",
    langPartIdText: "Participant Name",
    langUsercodeText: "Usercode",
    langLocalStartButtonText: "Start Q-sort",
    langLocalDeleteButtonText: "Delete",
    langLocalDownloadButtonText: "Save Q-sort Data to Disk",
    langStoredQsortsHeaderText: "Stored Q-sorts",
    langLocalDeleteModalText:
      "This will delete the participant Q-sort data that is currently stored in the browser. You would usually only do this when you are starting a new project.<br/><br/><b>CAUTION - Deleted data cannot be recovered.</b> <br/><br/> <center></center>",
    langLocalDeleteModalHead: "Delete Data Stored in Browser?",
    langLocalParticipantsText: "Participants",
    langLocalSaveDataButton: "Save Participant Data to Browser Memory",
    langLocalSubmitSuccessModalHeader: "Success",
    langLocalSubmitSuccessModalText:
      "Participant Q sort data have been successfully saved to browser memory",
    langReturnToLocalPanelButtonText: "Return to Control Panel",
    langLocalSaveBeforeDeleteModalHeader: "Delete Disabled",
    langLocalSaveBeforeDeleteModalText:
      "Save Q sort Data to Disk before deleting.",

    /*
     ******** PRESORT  ****************** */
    langTitleBarText: `Preliminary Sorting`,
    langPresortAgreement: `Agree (3)`,
    langPresortStatements: `Statements`,
    langPresortNeutral: `No Strong Feelings (2)`,
    langPresortDisagreement: `Disagree (1)`,
    langPresortImageSortInstructions: `To enlarge an image, hover your mouse pointer over it and double-click. <br/><br/> To compare images, <u>press and hold</u> the <b><i>Shift</i></b> key on your keyboard and then double-click on TWO images with your mouse.`,
    langPresortModalHead: `Step 1 of 4`,
    langPresortModalText: `Read the following statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest. Changes can be made later.<br/><br/>If you want to read this instruction a second time, click the help-button at the bottom left corner.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/vtnLuKzpcKQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    langPresortPreventNavModalHead: `Navigation Disabled`,
    langPresortPreventNavModalText: `Please finish the preliminary sorting before going to the next step.`,
    langPresortFinishedModalHead: `Preliminary Sorting Complete`,
    langPresortFinishedModalText: `You have completed this step. Please click the "Continue" button in the bottom right side of the page to go to the next step.`,
    langPresortOnPageInstructions: `<div style="font-size: 24px">Click and drag on the cards  or press the "1", "2", or "3" keys to sort the statements.</div>`,
    /*
     ******** SORT  ****************** */
    langSortHelpModalHead: `Step 2 of 4`,
    langSortHelpModalText: `In this step, please click and drag the statement cards to the appropriate column based on your perspective and the researcher's instructions at the top of the page. <br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/iRxC9Vv3dLo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    langSortAgreement: `Agree`,
    langSortDisagreement: `Disagree`,
    langCondOfInst: `Sort the cards according to your experience with the iPads this semester`,
    langSortingCompleteModalHead: `Sorting Complete`,
    langSortingCompleteModalText: `You have completed the initial sorting. Please take a moment to confirm your placement of the cards.<br/><br/>When you are satisfied with their placement, please click on the <b>blue "Continue" button</b> at the bottom right-side of your screen to go to the next step.`,
    langSortPreventNavModalHead: `Navigation Disabled`,
    langSortPreventNavModalText: `Please finish the grid sorting before going to the next step.`,
    langSortOverloadedColumnModalHead: `Navigation Disabled`,
    langSortOverloadedColumnModalText: `One of the columns has too many cards (it will be outlined in orange and have a dashed border). Please adjust the placement of the cards so that all columns have the correct number.`,
    /*
     ******** POSTSORT  ****************** */
    langPostsortHeader: `Post-Sort Comments`,
    langPostsortInstructions: `<h3>Please describe your thoughts about these statements in more detail.</h3>`,
    langPlaceholder: `Click here to add comment`,
    langPostsortAgreement: `Placed on Agree`,
    langPostsortDisagreement: `Placed on Disagree`,
    langPostsortModalHead: `Step 3 of 4`,
    langPostsortModalText: `You can use the buttons at the bottom of the page to change the font size or card height.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/EFNlSiaEVVg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></h3></center>`,
    langPostsortPreventNavModalHead: `Navigation Disabled`,
    langPostsortPreventNavModalText: `Please add comments to all of the cards before going to the next step.`,
    langPostsortBackButton: `Go Back`,

    /*
     ******** SURVEY  ****************** */
    langSurveyHeader: `Post-Sort Questionnaire`,
    langSurveyModalHead: `Step 4 of 4`,
    langSurveyModalText: `Finally, please answer the following questions regarding your background. The questions marked with an "*" in their title are required.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/68MHzgLn1zg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    langSurveyPreventNavModalHead: `Navigation Disabled`,
    langSurveyPreventNavModalText: `Please answer the required questions (outlined in yellow) before going to the next step.`,

    /*
     ******** SUBMIT  ****************** */
    langBtnTransfer: `Submit Data`,
    langTransferHead: `Final Step`,
    langTransferTextAbove: `<h1>Ready to Submit</h1><br/><br/> <h2>Please click the "Submit Data" button to transmit your results.</h2>`,
    langTransferTextBelow: `If the submission confirmation message does not appear, <br/>please wait a few minutes and click the submit button again.`,
    langTransferOkModalHeader: `Success - The data have been sent to the server.`,
    langTransferOkModalText: `Thank you for using EQ Web Sort!<br/><br/>You can now close your browser tab.`,
    langTransferFailModalHeader: `Connection to server failed`,
    langTransferFailModalText: `Please try again in a few moments.`,
    langFallbackMessage: `Data transmission has failed. Please download the results and email them as an attachment to ken.q.tools@gmail.com.  Thank you!`,
    langBtnDownload: `Download`,
    langGoodbyeMessage: `<div>Thank You!</div> <br/><div>You can now close the browser tab</div>`,
    /*
     ******** EMAIL  ****************** */
    langEmailSubmitBtn: "Open Email Client and Send Results",
    langEmailCopyResultsBtn: "Copy Results to Clipboard",
    langEmaiCopyAddressBtn: "Copy Email Address to Clipboard",
    langCopySuccessMessage: "Copied!",
    langCopyFailMessage: "Error: Please try again.",
    langDefaultEmailFailModalText:
      "Your default email client should have automatically opened with the results in the email body. If it didn't, please use the buttons below to copy and paste your information into an email.",
    langEmailBodyMessage:
      "You don't have to add anything to this email. Please just click the SEND button.",

    /*
     ******** SECOND PROJECT LINK  ****************** */
    langLinkingFallbackMessage:
      "Please click the button to begin the next Q sort",
    langLinkingBtnText: "Begin Next Q sort",
  };
  return obj;
};

export default showSectionDefaults;
