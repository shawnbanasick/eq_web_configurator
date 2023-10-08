import appState from "../../GlobalState/appState";

const addFirebaseInfoToIndexHtml = () => {
  let firebaseInfo = `
  ${appState.firebaseInfo}
  
  firebase.initializeApp(firebaseConfig);  
  var rootRef = firebase.database().ref();`;

  console.log(firebaseInfo);

  let data = firebaseInfo;

  return data;
};

export default addFirebaseInfoToIndexHtml;
