const express = require('express');
const app = express();
// const seedDB = require('./seed');
const mongoose=require('mongoose');
const path=require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const session = require('express-session');
const User = require('./models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const flash = require('connect-flash');

const reviewRoutes = require("./routes/reviewRoutes");
const tweets=require('./routes/tweets');
const auth=require('./routes/auth');


mongoose.connect('mongodb+srv://sparshgla:sparshgla@cluster0.y6ksh16.mongodb.net/gunshop?retryWrites=true&w=majority')
.then(()=>{
    console.log('Db connected');
})
.catch((err)=>{
    console.log(err);
})

let configSession={
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
      httpOnly:true,
      expire:Date.now()+60*60*1000,
      maxAge:60*60*1000
       }
}

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.urlencoded({ extended: true })); //body parsing middleware
  app.use(methodOverride('_method')); //method override
  app.set('views', path.join(__dirname, 'views'));
  app.use(session(configSession));
  app.use(flash());
// seedDB();

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.currentUser=req.user;
  next();
})


passport.use(new LocalStrategy(User.authenticate()));








app.use(tweets);
app.use(auth);
app.use(reviewRoutes);




app.listen(5050,()=>{
console.log("server started");
})
