const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: [
      "1. Answer required: true",
      "2. Label: 'Age'",
      "3. Question note: 'Please enter your year of birth (YYYY, eg. 1980).'",
      "8. Limit answer length: true",
      "9. Answer maximum length: 4",
      `10. Answer restricted to numbers "0-9": true`,
    ],
    textarea: [
      "1. Answer required: false",
      "2. Label: '2. Describe your experience with iPads in this class.'",
      "7. Placeholder: 'input comment here' (** caution - no HTML pair tag formatting possible **)",
    ],
    radio: [
      "1. Answer required: true",
      "2. Label: 'Year'",
      "3. Question note: 'Please select your year'",
      "4. Options: 'Freshman;;;Sophomore;;;Junior;;;Senior'  (** caution - no HTML pair tag formatting for these options **)",
    ],
    rating2: [
      "1. Answer required: false",
      "2. Label: 'Please answer the following questions.'",
      "4. Options: 'I have used an iPad in class before.;;;I have used a notebook computer in class before.'",
      `5. Scale: "Yes;;;No"   (** caution - no HTML pair tag formatting for this scale **)`,
    ],
    rating5: [
      "1. Answer required: false",
      "2. Label: 'Please answer the following questions.'",
      "4. Options: 'How would you rate the use of iPads in this class?;;;How would you rate this class overall?'",
    ],
    rating10: [
      "1. Answer required: false",
      "2. Label: 'Please answer the following questions.'",
      "4. Options: 'How would you rate the use of the Socrative website in this class?;;;How would you rate the use of the Quizlet website in this class?'",
    ],
    checkbox: [
      "1. Answer required: false",
      "2. Label: 'What kind of class do you prefer?'",
      "4. Options: 'Lecture;;;Group Discussion;;;Active Learning'  (** caution - no HTML pair tag formatting for these options **)",
    ],
    select: [
      "1. Answer required: false",
      "2. Label: 'What is your program focus?'",
      "4. Options: 'Global Studies;;;Linguistics;;;English Literature'  (** caution - no HTML pair tag formatting for these options **)",
    ],
    information: [
      "3. Question note: 'All fields marked with an * are mandatory'",
    ],
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
