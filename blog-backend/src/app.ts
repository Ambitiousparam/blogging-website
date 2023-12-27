import express from "express"
import {config} from "dotenv"

//dotenv config
config();

const app = express();

app.listen(process.env.PORT,()=>console.log(`server running on ${process.env.PORT}`));
