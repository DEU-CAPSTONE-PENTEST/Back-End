import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import conn from "./db.js";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());

//HTTP başlıklarını düzenleyerek güvenliği artırmak için kullanılır. Örneğin, XSS saldırılarına karşı koruma sağlar.
app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// morgan: HTTP istekleri hakkında günlük kayıtları tutmak için kullanılır.
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//  CORS, tarayıcı güvenliği nedeniyle kaynaklara farklı bir kökten (origin) erişim sağlamanın kontrolünü düzenleyen bir güvenlik önlemidir.
app.use(cors());

// ROUTES

// MONGOOSE SETUP
conn();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Port:${PORT}`));
