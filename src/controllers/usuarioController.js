import { Usuario } from '../models/Usuario.js';


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



    const
     {
        Nombre,
        Apellido,
        Email ,
        Direccion
     } = req.body

   
    //Crear estudiante
    try {
        const newUsuario = await Usuario.create({
            Nombre,
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