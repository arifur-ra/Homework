let express = require("express");
let bodyParser = require("body-parser");
let server = express();

//USE middleware

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//View the HTML from handaling GET request
server.get("/", function (req, res) {
  res.sendFile(
    "/home/dci/Documents/fbw_39/local_working _place/01-HTML/Exercise_01/Contact.html"
  );
});

//Handaling the POST(submit) request

server.post("/contact-form", function (req, res) {
  console.log(req.body);
  let response = `<div> 
    <h1> Contact Information</h1>
    <h2> Welcome to  ${req.body.firstname} ${req.body.lastname} </h2>
    <ul>
        <li> <strong> First Name:</strong> ${req.body.firstname}</li>
        <li> <strong> Last Name:</strong> ${req.body.lastname}</li>
        <li> <strong> Email:</strong> ${req.body.email}</li>
        <li> <strong> Massage:</strong> ${req.body.message}</li>
        <li> <strong> Gender:</strong>  ${req.body.gender}</li>
        <li> <strong> Age:</strong> ${req.body.age} </li>
        <li> <strong> Date Of Birth:</strong> ${req.body.birthday}</li>
        <li> <strong> Membership :</strong> ${req.body.membership}</li>
        <li> <strong> Transportation: </strong> ${req.body.transport}</li>
    </ul>
    
    </div>`;

  res.send(response);
});

let port = 2020;
//let server = app.listen(port, function(){console.log('Node server is running to port: '+port)})

server.listen(port, function () {
  console.log(` Server is running:  ${port}`);
});
