import { DataTypes } from 'sequelize';
import { sequelize } from '../config/dataBase.js';

const Empleado = sequelize.define('Empleado', {
  legajo: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  nombre: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },
  apellido:{
 type: DataTypes.STRING, 
    allowNull: false 
  },
  email:{
 type: DataTypes.STRING, 
    allowNull: false 

  },

  fechaIngreso:{
     type: DataTypes.DATE, 
    allowNull: false 
  },


});

export default Empleado;