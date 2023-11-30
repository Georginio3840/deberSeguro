import { Usuario } from '../models/Usuario.js';
import crypto from 'crypto';



function encryptData(data, secretKey) {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
  }
  
export const getUsuarios = async (req,res)=>{
    try {
        
        const usuario= await Usuario.findAll()
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }

}



export const getUsuarioId = async (req,res)=>{

    try {
        const {id}= req.params
        const usuario = await Usuario.findOne({
            where:{
                id
            }
        })
        if(!usuario) return res.status(404).json({message:'Usuario no existe'})
        res.json(usuario)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}

export const createUsuadio = async(req,res)=>{



    const secretKey = 'miClaveSecreta';
    
    const
     {
        Nombre,
        Apellido,
        Email ,
        Direccion
     } = req.body

     const nombreCifrado = encryptData(Nombre, secretKey);
    //Crear estudiante
    try {
        const newUsuario = await Usuario.create({
            Nombre:nombreCifrado,
            Apellido,
            Email,
            Direccion

            
        })
       
        res.json(newUsuario)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const updateUsuario = async(req,res)=>{

    
    const {
        Nombre,
        Apellido,
        Email ,
        Direccion
    }=req.body
    try {
        
        const {id}= req.params
        const usuario = await Usuario.findByPk(id)
        usuario.Nombre=Nombre
        usuario.Apellido=Apellido
        usuario.Email=Email 
        usuario.Direccion=Direccion

        await usuario.save()
        res.json(usuario)
        
    } catch (error) {
        return res.status(500).json({message : error.message})
        
    }

}

export const deleteUsuario = async (req,res)=>{

    const {id} = req.params
    try {
        const usuario = await Usuario.findOne({
            where:{
                id
            }
        });
        if(!usuario){
            return res.status(404).json({message:'usuario no encontrado'})
        }

        await usuario.destroy({
            where:{
                id
            }
        }); 
        res.sendStatus(200)    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

} 