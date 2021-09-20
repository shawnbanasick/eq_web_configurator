const encodeHTML = (string) => {
  try {
    let shouldDoReplace = string.includes("<");

    if (shouldDoReplace === true) {
      const replaceLeft = /</gi;
      const replaceRight = />/gi;
      const stringText2 = string.replace(replaceLeft, "{{{");
      const stringText3 = stringText2.replace(replaceRight, "}}}");
      const stringText4 = `{{{div}}}${stringText3}{{{/div}}}`;
      return stringText4;
    } else {
      return string;
    }
  } catch (error) {
    console.log("There was an error encoding into HTML");
    console.error(error);
  }
};

export default encodeHTML;
