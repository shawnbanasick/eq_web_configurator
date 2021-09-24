import appState from "../../GlobalState/appState";

const showSectionDefaults = (section) => {
  if (section === "multiModalsDef") {
    // step completed message
    localStorage.setItem(
      "langStepCompleted",
      `You have completed this step. Please click on the <strong> blue "Continue" button </strong> at the bottom right-side of your screen to go to the next step.`
    );
    appState.langStepCompleted = `You have completed this step. Please click on the <strong> blue "Continue" button </strong> at the bottom right-side of your screen to go to the next step.`;
  }
};

export default showSectionDefaults;
