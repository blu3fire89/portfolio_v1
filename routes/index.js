var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
});

//AUT ROUTE
//show register form
router.get("/register", function(req, res){
    res.render("register")
});
router.post("/register", function(req, res){
   var newUser = new User({username: req.body.username});
   User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
             req.flash("error", err.message);
             res.redirect("/register");
        } else {
           passport.authenticate("local")(req, res, function(){
               req.flash("success", "Welcome to YelpCamp " + user.username);
                res.redirect("/campgrounds");
           });
        }
   });
});

//LOGIN FORM
router.get("/login", function(req, res){
    res.render("login")
});
router.post("/login", passport.authenticate("local",
    {
        failureRedirect: "/login",
        failureFlash: true,
    }), function(req, res) {
        // You can also use a flash to consume after redirect:
        // (provided that you use connect-flash in your app)
        req.flash('success', 'Welcome ' + req.body.username);
        res.redirect('/campgrounds');
    }
);

//logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out")
    res.redirect("/campgrounds");
});

module.exports = router;