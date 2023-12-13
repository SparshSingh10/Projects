const express =  require('express');
const User = require('../models/User');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login',{success: req.flash('success')});
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    let { username, email, password } = req.body;
    let newuser = new User({ username, email });
    let nayabanda = await User.register(newuser, password);
    req.login(nayabanda, function (err) {
        if (err) {
            return next(err);
        }
        return res.redirect('/guns');
    });
});


router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/login', 
    failureMessage: true
}), (req, res) => {
    console.log("login ho gaya");
    console.log(req.user);
    req.flash('success', `Welcome back ${req.user.username}`);
    res.redirect('/guns');
});

router.get('/logout', (req, res) => {
    // Call logout to terminate the login session
    req.logout(()=>{
        res.redirect('/login');
    })
});


module.exports = router;
