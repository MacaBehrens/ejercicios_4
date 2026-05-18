import { DataTypes } from 'sequelize';
import { sequelize } from '../config/dataBase.js';


const Departamento = sequelize.define('Departamento', {
    nombre: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },
  presupuestoAnual:{
 type: DataTypes.FLOAT, 
    allowNull: false 
  }
  
  
});

export default Departamento;