import appState from "../../GlobalState/appState";

const addFirebaseInfoToInexHtml = () => {
  let firebaseInfo = appState.firebaseInfo;

  let data = `
  <!DOCTYPE html>
<html
  xmlns:ng="http://angularjs.org"
  id="ng-app"
  ng-app="app"
  ng-keyup="$broadcast('my:keyup', $event)"
>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- <meta http-equiv="cache-control" content="no-cache" /> -->
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title>Easy HtmlQ</title>

    <script src="src/jquery.min.js" type="text/javascript"></script>
    <script src="src/jquery-ui.min.js" type="text/javascript"></script>
    <script
      src="src/jquery.ui.touch-punch.min.js"
      type="text/javascript"
    ></script>
    <script src="src/jquery-dateFormat.min.js" type="text/javascript"></script>
    <script src="src/bootstrap.min.js" type="text/javascript"></script>
    <script src="src/angular.min.js" type="text/javascript"></script>
    <script src="src/angular-ui-router.min.js" type="text/javascript"></script>
    <script
      src="src/ui-bootstrap-custom-tpls.min.js"
      type="text/javascript"
    ></script>
    <script src="src/xml2json.min.js" type="text/javascript"></script>
    <script src="src/jsonpath.js" type="text/javascript"></script>
    <script src="src/underscore-min.js" type="text/javascript"></script>
    
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-auth.js"></script>
    
    ${firebaseInfo}
    
    <script src="src/htmlq.js" type="text/javascript"></script>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="stylesheets/bootstrap.min.css" />
    <link rel="stylesheet" href="stylesheets/htmlq.css" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="src/html5shiv.min.js"></script>
      <script src="src/es5-shim.min.js"></script>
      <script src="src/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div ui-view></div>
  </body>
</html>
`;

  return data;
};

export default addFirebaseInfoToInexHtml;
