import { DataTypes } from 'sequelize';
import { sequelize } from '../config/dataBase.js';

const Proyecto = sequelize.define('Proyecto', {
    codigoPoryecto: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },
  nombre:{
 type: DataTypes.STRING, 
    allowNull: false 
  },

  fechaFinEstimada:{
    type: DataTypes.DATE
  }
  
  });

export default Proyecto;