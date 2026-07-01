import { Request, Response } from "express";
import EmailService from "../services/emailService"
import dotenv from "dotenv"
dotenv.config();

class EmailController {

async CreateCount(req:Request,res:Response){
      
 try {
         const {email,name}=req.body
            const em=email as string
            const na=name as string
            console.log(em)
            await EmailService.acountCreated(em,"Primeiro teste",
            `<h1>Olá ${na}!</h1><p>Sejá Bem-Vindo ao Hemolink
             Apartir de agora serás notificado sobre qualquer situação.</p>`);
            return res.status(200).json({
                success: true,
                message: "Email enviado."
             });
            
        }
        catch (error) {
           return res.status(500).json({
                success: false,
                error
            });
        }   
}

async NotifyDonor(req:Request,res:Response){
      
 try {
         const {email,name,blood}=req.body
            const email1=email as string
            const name1=name as string
            const blood1=blood as string
            console.log(email1)
            console.log("USER:", process.env.GMAIL_USER);
           console.log("PASS:", process.env.GMAIL_PASS ? "Existe" : "Não existe");
            await EmailService.notifyDonor(email1,"Atenção",
            `<h1>Olá ${name1}!</h1><p>
             Informamos que há alguém que precisa ajuda com doação de sangue do tipo ${blood1}.</p>`);
            return res.status(200).json({
                success: true,
                message: "Email enviado."
             });
            
        }
        catch (error) {
           return res.status(500).json({
                success: false,
                error
            });
        }   
}


async cancelOrder(req:Request,res:Response){
      
 try {
         const {email,name}=req.body
            const email1=email as string
            const name1=name as string
            console.log(email1)
            await EmailService.cancelOrder(email1,"Atenção",
            `<h1>Olá ${name1}!</h1><p>
             Informamos que O paciênte cancelou o pedido de sangue, agradeçemos pela sua disponibilidade.</p>`);
            return res.status(200).json({
                success: true,
                message: "Email enviado."
             });
            
        }
        catch (error) {
           return res.status(500).json({
                success: false,
                error
            });
        }   
}


}

export default new EmailController();