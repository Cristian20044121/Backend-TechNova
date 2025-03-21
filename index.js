import "dotenv/config";
import express from "express";
import cors from "cors";
import dbClient from "./config/dbClient.js";
import routesActividades from "./routes/actividades.js";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Configuracion de CORS
 */
const list = ["http://localhost:3000", "https://frontend-technova.vercel.app/"];
app.use(cors({ origin: list }));
app.use(express.json());
app.use("/api/actividades", routesActividades);

app.get("/", (req, res) => {
  res.send("API Registros De Actividades Laborales");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

app.on("SIGINT", () => {
  dbClient.cerrarConexion();
  process.exit();
});
