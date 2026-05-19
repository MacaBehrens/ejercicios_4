import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const EmpleadoHabilidad = sequelize.define("EmpleadoHabilidad", {
  empleadoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  habilidadId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  nivelDominio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default EmpleadoHabilidad;