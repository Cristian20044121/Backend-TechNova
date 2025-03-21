import express from "express";
import actividadesController from "../controllers/actividadesController.js";

const route = express.Router();

route.get("/", actividadesController.getActividades);
route.get("/:id", actividadesController.getOneActividad);
route.post("/", actividadesController.createActividad);
route.put("/:id", actividadesController.updateActividad);
route.delete("/:id", actividadesController.deleteActividad);

export default route;
