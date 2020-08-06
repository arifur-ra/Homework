let express = require("express");
let bodyParser = require("body-parser");

let exercise = express(); // Making a Server the name is exercise.
let port = 3035;

//USE middleware to understand the request

exercise.use(bodyParser.json()); // decode the body of client request.
exercise.use(bodyParser.urlencoded({
    extended: false,
})); // decode the header  of client request and nested object are not allowed

//View the HTML from handling GET request
exercise.get("/", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/index.html"
    );
});

exercise.get("/09_Html_Semantices.html", function (req, res) {
    res.sendFile(
        "//home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/09_Html_Semantices.html"
    );
});
exercise.get("/Contact.html", function (req, res) {
    res.sendFile(
        "//home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/Contact.html"
    );
});
exercise.get("/01_basic_layout.html", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/01_basic_layout.html"
    );
});
exercise.get("/test", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/02_meta_tags.html"
    );
});
exercise.get("/03_typography.html", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/03_typography.html"
    );
});

exercise.get("/04_links_images.html", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/04_links_images.html"
    );
});
exercise.get("/05_lists_tables.html", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/05_lists_tables.html"
    );
});
exercise.get("/06_block_inline.html", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/06_block_inline.html"
    );
});
exercise.get("/07_ids&class.html", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/07_ids&class.html"
    );
});
exercise.get("/08-entities.html", function (req, res) {
    res.sendFile(
        "/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS/08-entities.html"
    );
});


//
//exercise.get(express.static("/home/dci/Documents/fbw_39/local_working _place/01-HTML/01-BASICS"))
//Handling the POST(submit)  Request

exercise.post("/submit-contact", function (req, res) {
    console.table(req.body);
    // console.log(req.body);

    let response = `
      <html>
      <head></head>
      <style>
      table{
          text-align:center;
      }
      td{
          border: 1px solid black;
          font-size: 22px;
          padding: 5px;
      }
      .info{
          width:100%;
          margin: 0 auto;
      }
      a{
          color:black;
          padding: 10px;
          border:2px solid green;
          font-size:20px;
          text-weight:bold;
          border-radius:10px;
          margin:5px;
      }
      body{
        width:35%;
        margin: 0 auto;
        text-align:center;
        margin-top:50px;
      }
      </style>
      <body>
        <a style= "text-decoration:none" href="/"> Back to Home </a>
        <a style= "text-decoration:none" href="/Contact.html"> Back to Form </a>
        <h1>Thank You !! <br> ${req.body.name}</h1> 
        <h2>Successfully Registration </h2>
        
        <div class= "info">
        <table>
        <tr>
          <td>Name:</td>
          <td> ${req.body.name}</td>
          
        </tr>
        <tr>
          <td>Email:</td>
          <td>${req.body.email}</td>
        
        </tr>
        <tr>
          <td>Meassage:</td>
          <td>${req.body.textarea}</td>
        
        </tr>
        <tr>
          <td>Gender:</td>
          <td>${req.body.gender}</td>
        
        </tr>
        <tr>
          <td>Age:</td>
          <td>${req.body.age}</td>
          
        </tr>
        <tr>
          <td>Date of Birth:</td>
          <td>${req.body.birthday}</td>
        
        </tr>
        <tr>
          <td>Membership:</td>
          <td>${req.body.membership}</td>
        
        </tr>
        <tr>
          <td>I would like:</td>
          <td>${req.body.Transport}</td>
        
        </tr>
      </table>
      </div>

     </body>
   </html>
    `
    res.send(response);

});


//let server = app.listen(port, function(){console.log('Node server is running to port: '+port)})

exercise.listen(port, function () {
    console.log(` Server is running:  ${port}`);
});