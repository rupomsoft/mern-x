const nodemailer=require('nodemailer');
const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{
    let transporter = nodemailer.createTransport({
        host: 'Your Host Here',
        port: 25,
        secure: false,
        auth: {
            user: "Email Here",
            pass: 'Password Here'
        },tls: {
            rejectUnauthorized: false
        },
    });
    let mailOptions = {
        from: '',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };
    return  await transporter.sendMail(mailOptions)
}
module.exports=EmailSend;