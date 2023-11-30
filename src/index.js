import app from './app.js';
import {sequelize} from './database/baseDatos.js'
async function main(){
  
  try {
    await sequelize.sync({force:true})
    console.log('Coneccion establecida')
  } catch (error) {
    console.log('Coneccion fallida',error)
  }
  app.listen(app.get('port'));
  console.log(`Server on port ${app.get('port')}`)
};
main()


