import express, {Express} from "express";
import startServer from "./utils/startServer";
import { configDotenv } from "dotenv";
import routes from "./routes/routes";
import "./config/container";
import cors from "cors";


configDotenv(); // Configuración de las variables de entorno

const PORT: number | undefined = parseInt(process.env.PORT!);
const app: Express = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,UPDATE,DELETE",
    credentials: true
}))
app.use(express.json()); //Middleware para permitir la transferencia de datos
app.use("/api", routes);

startServer(PORT, app); // Iniciar el servidor