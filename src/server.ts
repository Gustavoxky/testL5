import express from "express";
import path from "path";
import router from "./routes";
const cors = require('cors');

export const app = express()

app.use(express.json())
app.use(router)
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "..", "uploads")));

app.listen(4003, () => console.log('server is running on port 4003'))
