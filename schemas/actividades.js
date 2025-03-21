import mongoose from "mongoose";
const actividadesSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
  },
  proyecto: {
    type: String,
    required: true,
  },
  compañia: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  minutos: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  equipo: {
    type: String,
    required: true,
  },
});

export default mongoose.model("actividades", actividadesSchema);
