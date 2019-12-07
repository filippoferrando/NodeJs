var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user")

mongoose.connect("mongodb://localhost/auth-app");

var app = express()
app.use(require("express-session")({
    secret: "putin in great",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//############
//ROUTES
//############

app.get("/", function(req, res){
    res.render("home");
});

//Auth routes

//signup form
app.get("/register", function(req, res){
    res.render("register");
    console.log("accessing to the register page");
})

//handling user sign up
app.post("/register", function(req, res){
    console.log("somebody is make a new account");
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register')
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        })
    })
});

//login routes
//login form
app.get("/login", function(req, res){
    res.render("login");
})
//login info submit
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
    console.log("Someone is log in");
})

//Logout route
app.get("/logout", function(req, res){
    console.log("Someone is logged out");
    req.logout();
    res.redirect("/");
});

//secret page route

app.get("/secret",isLoggedIn, function(req, res){
    console.log("someone accessed to the secret page");
    res.render("secret");
});

//middleware for acces secret page

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();

    }
    res.redirect("/login");
}

app.listen(3006, function(){
    console.log("server stated")
})