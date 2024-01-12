const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: [
      `<b>Answer Required (not shown in image): </b>true`,
      `<b>Label: </b>Age*`,
      `<b>Question note: </b>Please enter your year of birth (YYYY, eg. 1980).`,
      `<b>Limit answer length: </b>true`,
      `<b>Answer maximum length: </b>4`,
      `<b>Answer restricted to numbers "0-9": </b>true`,
    ],
    textarea: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b>2. Describe your experience using the iPads in this class.`,
      `<b>Question note: </b>Write as much as you want - no character limit.`,
      `<b>Placeholder: </b>input comment here (** caution - no HTML pair tag formatting allowed for placeholders**)`,
    ],
    radio: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b>3. What is your expected graduation date?`,
      `<b>Question note: </b>Based on your current course load`,
      `<b>Options: </b>Fall 2028;;;Spring 2029;;;Fall 2029;;;After 2029`,
    ],
    rating2: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b>10. Please respond to the following statements about the technology used in the class.`,
      `<b>Question note: </b>Please provide a response for all of the statements`,
      `<b>Options: </b>I have used an iPad in class before.;;;I have used a notebook computer in class before.;;;I have used Moodle before.;;;I have used Quizlet before.`,
      `<b>Scale: </b>Yes;;;No`,
    ],
    rating5: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b> &lt;i&gt;11.</i> Please rate the following statements about iPad use in this class.&lt;/i&gt;`,
      `<b>Question note: </b>Please provide a rating for all of the statements`,
      `<b>Options: </b>How would you rate the use of iPads in this class?;;;How would you rate this class overall?`,
    ],
    rating10: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b>&lt;b&gt;12. Please rate the following statements&lt;/b&gt;`,
      `<b>Question note: </b>Please provide a rating for all of the statements`,
      `<b>Options: </b>How would you rate the use of the Socrative website in this class?;;;How would you rate the use of the Quizlet website in this class?;;;How would you rate the use of Moodle in this class;;;How would you rate the use of Edmodo in this class`,
    ],
    checkbox: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b>5. What kind of class do you prefer?`,
      `<b>Question note: </b>You can select more than one option`,
      `<b>Options: </b>Lecture;;;Group Discussion;;;Active Learning`,
    ],
    select: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b>4. What is your program focus?`,
      `<b>Question note: </b>You can select more than one option`,
      `<b>Options: </b>Global Studies;;;Linguistics;;;English Literature`,
    ],
    likert: [
      `<b>Answer Required (not shown in image): </b>false`,
      `<b>Label: </b>9. How often do you use an iPad in your daily life?`,
      `<b>Scale (provide 3-7 choices):</b> Never;;;Rarely;;;Occasionally;;;Frequently;;;Very Frequently`,
    ],
    information: [
      `<b>Question note: </b>All fields marked with an * are mandatory`,
    ],
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
