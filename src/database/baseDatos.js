import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('deberSeguro', 'postgres', 'gstcgstc', {
  host: 'db',
  dialect: 'postgres',
  
});

