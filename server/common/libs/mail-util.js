const nodemailer = require('nodemailer');

    

class MailUtil{
    
   
   static sendUserMail(receiver,subject,text){

    
    var transporter = nodemailer.createTransport({
        
        service: 'gmail',
    auth: {
    user: 'singlayogita0@gmail.com',
    pass: 'nlqcvntficmntijn'
  }
      });
      
     var mailOptions = {
      from: 'singlayogita0@gmail.com',
      to: receiver,
      subject: subject,
      text: text
      
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          
        }
      });
   }  

    


}


module.exports = MailUtil;