import "dotenv/config";
import mongoose from "mongoose";

class DbClient {
  constructor() {
    this.conectarBD();
  }
  async conectarBD() {
    const conections = {
      local: process.env.MONGODB_URL,
      atlas: process.env.MONGODB_CONNECTION_STR,
    };
    await mongoose.connect(conections.atlas);
  }
  async cerrarConexion() {
    try {
      await mongoose.disconnect();
      console.log("Conexión cerrada");
    } catch (error) {
      console.log(`Error al cerrar la conexión: ${error}`);
    }
  }
}
export default new DbClient();
