import * as newsletterControllers from "./controllers/newsletter";
import * as projectsControllers from "./controllers/projects";
import * as contactControllers from "./controllers/contact";
import { isLogin, isNotLogin } from "./middlewares/auth";
import * as indexControllers from "./controllers/index";
import * as authControllers from "./controllers/auth";
import * as blogControllers from "./controllers/blog";
import * as database from "./config/db";
const ejsMate = require("ejs-mate");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// Connection to DB
database.connect();

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

// User routes
app.get('/', indexControllers.index);
app.get('/blog', blogControllers.blog);
app.get('/contact', contactControllers.contact);
app.get('/projects', projectsControllers.projects)
app.post('/contact', contactControllers.contactPost);
app.post('/newsletter', newsletterControllers.newsletterPost);

// Admin routes
app.get('/login', isNotLogin, authControllers.login);
app.post('/login', isNotLogin, authControllers.loginPost);
app.get('/register', isNotLogin, authControllers.register);
app.post('/register', isNotLogin, authControllers.registerPost);
app.get('/newsletter-new', isLogin, newsletterControllers.newsletterAdmin);
app.post('/newsletter-new', isLogin, newsletterControllers.newsletterAdminPost);

/**
 * Start of Express server
 */
app.listen(app.get("port"), () => {
    console.log(`App is running at http:localhost:${process.env.PORT || 3000}`);
    console.log("CTRL+C to stop the server");
});