import transporter from "../config/transporter";

class EmailService {

    async sendEmail(to: string, subject: string, html: string){
        return await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            html
        });
    }

    async acountCreated(to: string, subject: string, html: string){
       return await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            html
        });
    }

    async notifyDonor(to: string, subject: string, html: string){
       return await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            html
        });
    }

    async cancelOrder(to: string, subject: string, html: string){
       return await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            html
        });
    }

}

export default new EmailService();