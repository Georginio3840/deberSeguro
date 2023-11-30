import { DataTypes } from 'sequelize'
import {sequelize}from '../database/baseDatos.js'


export const Usuario = sequelize.define('Usuario',{
    id:{
        type:DataTypes.INTEGER, 
        primaryKey:true,
        autoIncrement: true
      },
      Nombre:{
        type:DataTypes.STRING
      },
      Apellido:{
        type:DataTypes.STRING
      },
      Email:{
        type:DataTypes.STRING
      },
      Direccion:{
        type:DataTypes.STRING
      },
})