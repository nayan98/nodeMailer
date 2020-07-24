const nodemailer = require('nodemailer');
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
    to: "nayansinghai66@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

 
}

main().catch(console.error);
