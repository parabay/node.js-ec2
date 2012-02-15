

var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");


exports.upload = function(request, response){

  console.log("Request handler 'upload' was called.");
  //console.log(JSON.stringify(request.files));

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("received image:<br/>");
  response.write("<img src='/show?id=" + request.files.upload.path + "' />");
  response.end();
};

exports.show = function(request, response){

  var path= request.param("id");
  console.log("Request handler 'show' was called: " + path);
  fs.readFile(path, "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
};
