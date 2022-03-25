import passport from "passport";
import passportLocal from "passport-local";

import { User, UserDocument } from "../models/User";

const LocalStrategy = passportLocal.Strategy;