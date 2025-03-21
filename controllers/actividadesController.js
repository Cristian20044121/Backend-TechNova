import actividadesModel from "../models/actividades.js";

class actividadesController {
  /**
   * Creacion de actividad
   * @param {*} req
   * @param {*} res
   */
  async createActividad(req, res) {
    try {
      const actividad = await actividadesModel.create(req.body);
      res.status(201).json(actividad);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  /**
   * Obtiene todas las actividades
   * @param {*} req
   * @param {*} res
   */
  async getActividades(req, res) {
    try {
      const actividades = await actividadesModel.getAll();
      res.status(200).json(actividades);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  /**
   * Obtiene una sola actividad por id
   * @param {*} req
   * @param {*} res
   */
  async getOneActividad(req, res) {
    try {
      const { id } = req.params;
      const actividad = await actividadesModel.getOne(id);
      res.status(200).json(actividad);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  /**
   * actualiza una actividad
   * @param {*} req
   * @param {*} res
   */
  async updateActividad(req, res) {
    try {
      const { id } = req.params;
      const actividad = await actividadesModel.updateActividad(id, req.body);
      res.status(200).json(actividad);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  /**
   * Elimina una actividad
   * @param {*} req
   * @param {*} res
   */
  async deleteActividad(req, res) {
    try {
      const { id } = req.params;
      const actividad = await actividadesModel.deleteActividad(id);
      res.status(200).json(actividad);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new actividadesController();
