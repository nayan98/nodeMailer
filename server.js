const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const nodemailerapp = require('./app');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html')}
);

app.post('/mail', function (req, res) {
    console.log(req.body);
    let output = `
    <h1>name: ${req.body.name}</h1>
    <h2>email: ${req.body.email}</h2>
    `;
    nodemailerapp(req.body.email,output).then(info=>{
        console.log("email sent");
        res.send("Email sent");
        console.log(info);
    }).catch((err,info)=>{
        console.log(info);
        console.log(err);
        res.send("invalid email address");
    })
    
    
   
  })

app.listen(port, () => console.log(`Example app listening on port 3000!`));