const nodemailer = require('nodemailer');
async function main(email,output){
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'nayansinghai27@gmail.com',
        pass:'123'
    }
    
});

// send mail with defined transport object
return  transporter.sendMail({
    from: "nayansinghai27@gmail.com",
    to: email+", nayansinghai66@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  //console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

 
}

module.exports = main;
