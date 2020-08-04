// Making simple HTML form Server.

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

//USE middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// view the HTMl- form with GET request

app.get('/',function(req, res){
   res.sendFile('/home/dci/Documents/fbw_39/local_working _place/01-HTML/practies/Contact.html')
})

// POST summit request
app.post('/contact-form', function(req, res){
   /* console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.textarea)
    console.log(req.body.age)*/
    console.log(req.body)
    //res.send(`<h4> ${req.body.name}</h4> <h4> ${req.body.email}</h4> <h4> ${req.body.textarea}</h4> <h4> ${req.body.age}</h4>`)
    res.send('Successfully Submitted')

 })
 
let port = 3030
let server = app.listen(port, function(){console.log('Node server is running to port: '+port)})
