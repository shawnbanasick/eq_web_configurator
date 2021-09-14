const exportSurveyObject = () => {
  const surveyQuestionObject = {
    text: [
      "item type: text",
      "answer required (true/false): true",
      "label text: Age",
      "question note: Please enter your year of birth (YYYY, eg. 1980).",
      "maxlength: 4",
      `answer restricted to numbers "0-9" (true/false): true`,
    ],
    textarea: ["answer required (true/false): false", "label: Comments"],
    radio: [
      "item type: radio",
      "answer required (true/false): true",
      "label text: Year",
      "question note: Please select your year",
      "options: Freshman;Sophomore;Junior;Senior",
    ],
    rating2: [
      "item type: rating2",
      "answer required (true/false): false",
      "label text: Please answer the following questions.",
      "scale: Yes;No;",
      "options: I have used an iPad in class before.;I have used a notebook computer in class before.",
    ],
    rating5: [
      "item type: rating5",
      "answer required (true/false): false",
      "label text: Please answer the following questions.",
      "options: How would you rate the use of iPads in this class?;How would you rate this class overall?",
    ],
    rating10: [
      "item type: rating10",
      "answer required (true/false): false",
      "label text: Please answer the following questions.",
      "options: How would you rate the use of the Socrative website in this class?;How would you rate the use of the Quizlet website in this class?",
    ],
    checkbox: [
      "item type: checkbox",
      "answer required (true/false): false",
      "label text: What kind of class do you prefer?",
      "options: Lecture;Group Discussion;Active Learning",
    ],
    select: [
      "item type: select",
      "answer required (true/false): false",
      "label text: What is your program focus?",
      "options: Global Studies;Linguistics;English Literature",
    ],
    information: [
      "item type: information",
      "background: true",
      "option text: All fields marked with an * are mandatory",
    ],
  };
  return surveyQuestionObject;
};

export default exportSurveyObject;
