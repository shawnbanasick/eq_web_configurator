const showSectionDefaults = () => {
  const obj = {
    langStepCompleted: `You have completed this step. Please click on the <b> blue "Continue" button </b> at the bottom right-side of your screen to go to the next step.`,
    langLoginFirst: `Please complete the log-in process first.`,
    langFooterTextSize: `Text Size`,
    langFooterCardHeight: `Card Height`,
    langBtnHelp: "Help me!",
    langBtnNext: "Continue",
    langLandingHead: `University Research Project`,
    langWelcomeMessage: `<center><h2>EQ Web Sort V3 Demo Project - iPad Use in the Classroom.</h2> </center><br/><br> <div style="display: flex; flex-direction: column; align-items: center;"> <div><h2>Features</h2>
    <ul style="margin-left: 20px;"> <li>Smooth drag and drop actions for desktop and mobile (touch) devices </li> <li>Custom Image and video embedding capability (on the page and in help messages) </li> 
    <li>Participant-adjustable text and card sizes </li>  <li>Simple localization into the research language </li> <li>HTML formatting for statements and User Interface text (including bold font, italics, underlines, line breaks) </li> <li>Custom logo in page footers </li> <li>Ability to do offline data collection when used on a notebook computer with EQ-Configurator</li> </ul><a href="https://qmethod.org/" target="_blank"> <u>qmethod.org</u> </a></div></div>
    <br><br>
    <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: space-around; width: 100%"> <div style="display:flex; flex-direction:column"> Images<img src="/images/sortScreen3.png" width="640" /> </div>
    <div style="display:flex; flex-direction:column"> Video (enable subtitles / closed captions) <iframe width="640" height="360" src="https://www.youtube.com/embed/aHpeu5M7Rlo"> </iframe> </div> </div>`,

    langLoginWelcomeText: `<center><h3>Welcome!</h3></center><br> Thank you for participating in this Q methodology research project. <br>Please <b>sign in</b> using the form below to begin the process. `,
    langLoginHeaderText: `Sign In`,
    langLoginPartIdText: `Please enter your name or participant ID`,
    langAccessInputText: "Please enter the access code for this survey.",
    langPartIdWarning: `Invalid name or ID`,
    langAccessCodeWarning: `Access code invalid`,
    loginSubmitButtonText: `Submit`,

    langLandingHelpModalHead: `Welcome!`,
    langLandingHelpModalText: `Thank you for participating in this University Research Project. Please sign in to begin the process. After you submit your participant ID and/or the project access code, the instructions for the survey will appear. Please read them carefully, then click the "<b>Continue</b>" button at the bottom right side of the screen to go to the next step.<br><br> <center><iframe width="640" height="360"
    src="https://www.youtube.com/embed/aHpeu5M7Rlo">
    </iframe></center>`,

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
      "This will delete the particpant Q-sort data that is currently stored in the browser. You would usually only do this when you are starting a new project.<br><br><b>CAUTION - Deleted data cannot be recovered.</b> <br><br> <center></center>",
    langLocalDeleteModalHead: "Delete Data Stored in Browser?",
    langLocalParticipantsText: "Participants",
    langLocalSaveDataButton: "Save Participant Data to Browser Memory",
    langLocalSubmitSuccessModalHeader: "Success",
    langLocalSubmitSuccessModalText:
      "Participant Q sort data have been succesfully saved to browser memory",
    langReturnToLocalPanelButtonText: "Return to Control Panel",
    langLocalSaveBeforeDeleteModalHeader: "Delete Disabled",
    langLocalSaveBeforeDeleteModalText:
      "Save Q sort Data to Disk before deleting.",

    /*
     ******** PRESORT  ****************** */
    langTitleBarText: `Preliminary Sorting`,
    langPresortAgreement: `Agree`,
    langPresortStatements: `Statements`,
    langPresortNeutral: `No Strong Feelings`,
    langPresortDisagreement: `Disagree`,
    langPresortModalHead: `Step 1 of 4`,
    langPresortModalText: `Read the following statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest. Changes can be made later.<br><br>If you want to read this instruction a second time, click the help-button at the bottom left corner.`,
    langPresortPreventNavModalHead: `Navigation Disabled`,
    langPresortPreventNavModalText: `Please finish the preliminary sorting before going to the next step.`,
    langPresortFinishedModalHead: `Preliminary Sorting Complete`,
    langPresortFinishedModalText: `You have completed this step. Please click the "Continue" button in the bottom right side of the page to go to the next step.`,
    /*
     ******** SORT  ****************** */
    langSortHelpModalHead: `Step 2 of 4`,
    langSortHelpModalText: `In this step, please sort the statements in a grid pattern. Statements you most agree with should be placed on the far right side of the grid, and statements which you most disagree with should be placed on the far left side. Please watch the video for more information on how to sort the cards in this step.`,
    langSortAgreement: `Agree`,
    langSortDisagreement: `Disagree`,
    langCondOfInst: `Sort the cards according to your experience with the iPads this semester`,
    langSortingCompleteModalHead: `Sorting Complete`,
    langSortingCompleteModalText: `You have completed the initial sorting. Please take a moment to confirm your placement of the cards.<br><br>When you are satisfied with their placement, please click on the <b>blue "Continue" button</b> at the bottom right-side of your screen to go to the next step.`,
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
    langPostsortModalText: `You can use the buttons at the bottom of the page to change the font size or card height.`,

    /*
     ******** SURVEY  ****************** */
    langSurveyHeader: `Post-Sort Questionnaire`,
    langSurveyModalHead: `Step 4 of 4`,
    langSurveyModalText: `Finally, please answer the following questions regarding your background. The questions marked with an "*" in their title are required.`,
    langSurveyPreventNavModalHead: `Navigation Disabled`,
    langSurveyPreventNavModalText: `Please answer the required questions (outlined in red) before going to the next step.`,

    /*
     ******** SUBMIT  ****************** */
    langBtnTransfer: `Submit Data`,
    langTransferHead: `Final Step`,
    langTransferTextAbove: `<h1>Ready to Submit</h1><br><br> <h2>Please click the "Submit Data" button to transmit your results.</h2>`,
    langTransferTextBelow: `If the submission confirmation message does not appear, <br>please wait a few minutes and click the submit button again.`,
    langTransferOkModalHeader: `Success - The data have been sent to the server.`,
    langTransferOkModalText: `Thank you for using Easy HTMLQ!<br><br>You can now close your browser tab.`,
    langTransferFailModalHeader: `Connection to server failed`,
    langTransferFailModalText: `Please try again in a few moments.`,
    langFallbackMessage: `Data transmission has failed. Please download the results and email them as an attachment to ken.q.tools@gmail.com.  Thank you!`,
    langBtnDownload: `Download`,
    langGoodbyeMessage: `<div>Thank You!</div> <br /><div>You can now close the browser tab</div>`,
  };
  return obj;
};

export default showSectionDefaults;
