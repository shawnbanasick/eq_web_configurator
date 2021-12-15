const encodeHTML = (string) => {
  try {
    let shouldDoReplace = true; // string.includes("<");

    if (shouldDoReplace === true) {
      const replaceLeft = /</gi;
      const replaceRight = />/gi;
      const stringText2 = string.replace(replaceLeft, "{{{");
      const stringText3 = stringText2.replace(replaceRight, "}}}");
      const stringText4 = `${stringText3}`;
      const stringText5 = stringText4
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
      return stringText5;
    } else {
      return string
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    }
  } catch (error) {
    console.log("There was an error encoding into HTML");
    console.error(error);
  }
};

export default encodeHTML;
