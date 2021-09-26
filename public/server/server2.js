var static2 = require("node-static");

process.on("message", (data) => {
  let string = data[0];
  //   console.log("Got message:");

  process.send(string);
  var file = new static2.Server(`${string}`, {
    cache: 0,
  });

  require("http")
    .createServer(function (request, response) {
      request
        .addListener("end", function () {
          file.serve(request, response);
        })
        .resume();
    })
    .listen(9990);
});
