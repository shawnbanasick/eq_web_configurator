const stripHTML = (string) => {
  try {
    let shouldDoReplace = string.includes("{{{");

    if (shouldDoReplace === true) {
      const replaceOpenDiv = /{{{div}}}{{{div}}}/gi;
      const replaceCloseDiv = /{{{\/div}}}{{{\/div}}}/gi;
      const stringText2 = string.replace(replaceOpenDiv, "");
      const stringText3 = stringText2.replace(replaceCloseDiv, "");
      return stringText3;
    } else {
      return string;
    }
  } catch (error) {
    console.log("There was an error decoding into HTML");
    console.error(error);
  }
};

export default stripHTML;
