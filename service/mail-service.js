const nodemailer = require('nodemailer')
const keys = require('../config/keys')

class MailService{

    constructor(){
        this.transporter = nodemailer.createTransport( {
            host: keys.SMTP_HOST,
            port: keys.SMTP_PORT,
            secure: false,
            auth: {
                user: keys.SMTP_USER,
                pass: keys.SMTP_PASSWORD
            }
        } )
    }

    async sendActivationMail( to, link ){
        await this.transporter.sendMail( {
            from: keys.SMTP_USER,
            to,
            subject: 'Activation account to ' + keys.API_URL,
            text: '',
            html:
                `
                <div>
                    <h1>For activation go to link</h1>
                    <a hred="${ link }">${ link }</a>
                </div>
                `
        } )
    }

}

module.exports = new MailService()