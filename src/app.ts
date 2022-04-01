import * as newsletterControllers from "./controllers/newsletter";
import * as projectsControllers from "./controllers/projects";
import * as contactControllers from "./controllers/contact";
import * as indexControllers from "./controllers/index";
import * as blogControllers from "./controllers/blog";
import cookieParser from "cookie-parser";
import * as database from "./config/db";
const ejsMate = require("ejs-mate");
import express from "express";
import cors from "cors";
import path from "path";

// dotenv config
require('dotenv').config({ path: __dirname+'/.env' });

// Connection to DB
database.connect();

// Create Express server
const app = express();

// Express config

app.use(cors());

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use((req, res, next) => {next()});
app.set("port", Number(process.env.PORT) || 3000);

// App routes config

// User routes
app.get('/', indexControllers.index);

app.get('/blog', blogControllers.blog);
app.get('/blog/:id', blogControllers.blogDetail);

app.get('/contact', contactControllers.contact);
app.post('/contact', contactControllers.contactPost);

app.get('/projects', projectsControllers.projects);
app.get('/projects/:id', projectsControllers.projectsDetail);

app.get('/newsletter', newsletterControllers.newsletter);
app.post('/newsletter', newsletterControllers.newsletterPost);

app.get('*', indexControllers.redirect);

/**
 * Start of Express server
 */
app.listen(app.get("port"), () => {
    console.log(`App is running at http:localhost:${process.env.PORT || 3000}`);
    console.log("CTRL+C to stop the server");
});

export default app;