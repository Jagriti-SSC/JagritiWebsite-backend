import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import connectdb from './db/connectdb.js';
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import ca from "./routes/ca.js";
import events from "./routes/events.js";

dotenv.config();
const app = express();
const port = 3001;
connectdb(process.env.DATABASE_URL);
app.use(cors());
app.use(express.json());

app.use('/auth', auth);
app.use('/admin', admin);
app.use('/ca', ca);
app.use('/events', events);

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})