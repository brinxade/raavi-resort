const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');    

module.exports = {
    sendEmailContact: async function(toEmail, subject, templateName, userName) {
    
        let templatePath = filePath = path.join(__dirname, `\\email-templates\\${templateName}.html`);

        fs.readFile(filePath, {encoding: 'utf-8'}, async function(err, templateHtml){
            if (!err) {
                let transporter = nodemailer.createTransport({
                    host: process.env.EMAIL_HOST,
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_USER, 
                        pass: process.env.EMAIL_PWD, 
                    },
                });
              
                // send mail with defined transport object
                try {
                    let info = await transporter.sendMail({
                        from: `"Raavi Resort" <${process.env.EMAIL_USER}>`, 
                        to: toEmail,
                        subject: subject, 
                        html: templateHtml.replace("{{name}}", userName?userName.split(" ")[0]:"")
                    });

                    console.log(`Message sent: ${info.messageId}`);
                } catch(e) {
                    console.log(`[MAILER] Failed to send message to ${toEmail}`);
                }
            } else {
                console.log("Failed to load email template: " + templatePath);
            }
        });
    },
    sendEmailContactSelf: async function(subject, templateName, userData) {
    
        let templatePath = filePath = path.join(__dirname, `\\email-templates\\${templateName}.html`);

        fs.readFile(filePath, {encoding: 'utf-8'}, async function(err, templateHtml){
            if (!err) {
                let transporter = nodemailer.createTransport({
                    host: process.env.EMAIL_HOST,
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_USER, 
                        pass: process.env.EMAIL_PWD, 
                    },
                });

                const dataPlaceholders = [
                    "name", "email", "phone", "date", "event", "message"
                ];

                dataPlaceholders.forEach((e) => {
                    templateHtml = templateHtml.replace(`{{${e}}}`, userData[e] || "Not Mentioned");
                });
              
                // send mail with defined transport object
                try {
                    let info = await transporter.sendMail({
                        from: `"Raavi Resort" <${process.env.EMAIL_USER}>`, 
                        to: process.env.EMAIL_USER,
                        subject: subject, 
                        html: templateHtml
                    });

                    console.log(`Message sent: ${info.messageId}`);
                } catch(e) {
                    console.log(`[MAILER] Failed to send message to ${userData.email}`);
                }
            } else {
                console.log("Failed to load email template: " + templatePath);
            }
        });
    }
}