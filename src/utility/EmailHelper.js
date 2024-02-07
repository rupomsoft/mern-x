import nodemailer from 'nodemailer';
import {EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_USER} from "./Config.js";

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port:EMAIL_PORT,
        secure: false,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        },
    });

    const mailOptions = {
        from: EMAIL_USER,
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    try {
        return await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

export default EmailSend;
