import * as contactControllers from "./controllers/contact";
import * as pageControllers from "./controllers/page";
const ejsMate = require("ejs-mate");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// Create Express server and dotenv config
const app = express();
dotenv.config({path: "../config.env"});

// Express config
app.use(cors());
app.use(express.json());
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use((req, res, next) => {next()});
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "../views"));

// App routes config
app.get('/', pageControllers.index);
app.get('/contact', contactControllers.contact);

/**
 * Start of Express server
 */
app.listen(app.get("port"), () => {
    console.log(`App is running at http:localhost:${process.env.PORT || 3000}`);
    console.log("CTRL+C to stop the server");
});

export default app;