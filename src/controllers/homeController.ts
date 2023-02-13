import { Request, Response } from 'express';
import { Product } from '../models/Product';
//import { sequelize } from '../instances/mysql';
import { User } from '../models/User'

export const home =  async (req: Request, res: Response)=>{


    /*try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida com sucesso")
    }catch(error){
        console.log("Deu erro")
    }*/

    let users = await User.findAll()

   /*const user = User.build({
    name:'João Orfão',
    age:18
   })
   await user.save()*/

    res.render('pages/home', {
        users
    });
};

export const novoUsuario = async (req:Request, res:Response) =>{
    let name = req.body.name
    let age = parseInt(req.body.age)

    if(name&&age){

        const newUser = User.build({
            name,
            age
        })
        await newUser.save()
    }
    res.redirect('/')
}
