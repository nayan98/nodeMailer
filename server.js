const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html')}
);

app.post('/mail', function (req, res) {
    let output = `
    <h1>name: ${req.body.name}</h1>
    <h2>email: ${req.body.email}</h2>
    `;
    
async function main(){
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'nayansinghai27@gmail.com',
        pass:'Topperdrish@gmail98'
    }
    
});

// send mail with defined transport object
let info = await transporter.sendMail({
    from: "nayansinghai27@gmail.com",
    to: req.body.email, // list of receivers
    subject: "Test Mail", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

 
}

main().catch(console.error);

    console.log(req.body);
    res.send("Email sent");
   
  })

app.listen(port, () => console.log(`Example app listening on port 3000!`));