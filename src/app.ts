import * as newsletterControllers from "./controllers/newsletter";
import * as projectsControllers from "./controllers/projects";
import * as contactControllers from "./controllers/contact";
import { isLogin, isNotLogin } from "./middlewares/auth";
import * as indexControllers from "./controllers/index";
import * as authControllers from "./controllers/auth";
import * as blogControllers from "./controllers/blog";
import cookieParser from "cookie-parser";
import * as database from "./config/db";
import MongoStore from "connect-mongo";
import session from "express-session";
const ejsMate = require("ejs-mate");
import passport from "passport";
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

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(session({ 
    secret: String(process.env.SESSION_SECRET),
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: String(process.env.MONGO_URI) }),
    cookie: { maxAge: 1000 * 60 * 60 * 60 },
}));

app.use(passport.session());
app.use(passport.initialize());

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

app.post('/newsletter', newsletterControllers.newsletterPost);

// Admin routes
app.get('/login', isNotLogin, authControllers.login);
app.post('/login', isNotLogin, authControllers.loginPost);
app.get('/register', isNotLogin, authControllers.register);
app.post('/register', isNotLogin, authControllers.registerPost);

app.get('/newsletter-new', isLogin, newsletterControllers.newsletterAdmin);
app.post('/newsletter-new', isLogin, newsletterControllers.newsletterAdminPost);

app.get('/blog-all/add', isLogin, blogControllers.blogAddAdmin);
app.post('/blog', isLogin, blogControllers.blogAddPostAdmin);
app.get('/blog-edit/:id', isLogin, blogControllers.blogEditAdmin);
app.put('/blog/:id', isLogin, blogControllers.blogEditPutAdmin);
app.delete('/blog/:id', isLogin, blogControllers.blogDeleteAdmin);

app.get('/projects-all/add', isLogin, projectsControllers.projectAddAdmin);
app.post('/projects', isLogin, projectsControllers.projectAddPostAdmin);
app.get('/projects-edit/:id', isLogin, projectsControllers.projectEditAdmin);
app.put('/projects/:id', isLogin, projectsControllers.projectEditPutAdmin);
app.delete('/projects/:id', isLogin, projectsControllers.projectDeleteAdmin);


/**
 * Start of Express server
 */
app.listen(app.get("port"), () => {
    console.log(`App is running at http:localhost:${process.env.PORT || 3000}`);
    console.log("CTRL+C to stop the server");
});