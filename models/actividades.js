import Actividad from "../schemas/actividades.js";
import mongoose from "mongoose";

class ActividadesModel {
  /**
   * crea una nueva actividad
   * @param {*} actividad
   * @returns actividad creada
   */
  async create(actividad) {
    return await Actividad.create(actividad);
  }

  /**
   * Retorna todas las actividades
   */
  async getAll() {
    return await Actividad.find();
  }

  /**
   * obtener una tarea
   * @param {*} id
   */
  async getOne(id) {
    return await Actividad.findById(id);
  }

  /**
   * actualiza la tarea mediante el id
   * @param {*} id
   * @param {*} actividad
   */
  async updateActividad(id, actividad) {
    return await Actividad.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      actividad,
      { new: true }
    );
  }

  /**
   * Elimina tarea por id
   * @param {*} id
   */
  async deleteActividad(id) {
    return await Actividad.findByIdAndDelete(id);
  }
}

export default new ActividadesModel();
