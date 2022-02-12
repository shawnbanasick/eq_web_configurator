const decodeHTML = (string) => {
  try {
    let shouldDoReplace = string.includes("{{{");

    if (shouldDoReplace === true) {
      let string2 = `${string}`;

      if (shouldDoReplace === true) {
        const replaceLeft = /{{{/gi;
        const replaceRight = /}}}/gi;
        const replaceQuote = /&quot;/g;
        const stringText2 = string2.replace(replaceLeft, "<");
        const stringText3 = stringText2.replace(replaceRight, ">");
        const stringText5 = stringText3.replace(replaceQuote, '"');
        const stringText6 = stringText5
          .replace(/&amp;/g, "&")
          .replace(/&apos;/g, "\\'");
        return stringText6;
      }
    } else {
      return string;
    }
  } catch (error) {
    console.log("There was an error decoding into HTML");
    console.error(error);
  }
};

export default decodeHTML;
