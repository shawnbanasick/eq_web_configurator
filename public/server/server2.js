var static2 = require("node-static");
// var http = require("http");

process.on("message", (data) => {
  let string = data[0];
  //   console.log("Got message:");

  process.send(string);
  var file = new static2.Server(`${string}`, {
    cache: 0,
  });

  require('http').createServer(function (request, response) {
      request.addListener("end", function () {
        file.serve(request, response, function (err, result) {
          if (err) {
            // There was an error serving the file
            console.error("Error serving " + request.url + " - " + err.message);

            // Respond to the client
            response.writeHead(err.status, err.headers);
            response.end();
          }
        });
      });
  }).listen(9990);

});
