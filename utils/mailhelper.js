const mailer = require('nodemailer')

class mailhelper {
    //创建邮件发送通讯通道
    createTransport(protocol,mailOptions){
        this.protocol = protocol;
        this.smtpTransport = mailer.createTransport({
            host: protocol.smtpServer,
            port: protocol.port,
            secure: protocol.secure,
            auth: {
                user: protocol.smtpUser,
                pass: protocol.smtpPassword
            }
        });
    }
    //邮件发送
    sendMail(mailbody,error){
        if(typeof(this.protocol) === 'undefined'){
            throw new Error('mail protocol not defined');
        }
        mailbody.from = this.protocol.from;
        return this.smtpTransport.sendMail(mailbody,error);
    }
}