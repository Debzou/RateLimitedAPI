const router = require('express').Router();
const controller = require('../controllers');

// If we have the root route we send the person to /home
router.get('/',(req,res)=>{
    res.render('index', {});
});

router.get('/home',(req,res)=>{
    res.render('index', {});
});

router.get('/api',(req,res)=>{
    res.json("status:success");
});


// Account

// Sign up page
router.get('/signup',(req,res)=>{
    controller.goToSignUp(req,res);
});

router.post('/signup',(req,res)=>{
    controller.signUpPerson(req,res);
});

// Log in page
router.get('/login',(req,res)=>{
    controller.goToLogIn(req,res);
});

router.post('/login',(req,res)=>{
    controller.logInPerson(req,res);
});

// Log Out
router.get('/logout',(req,res) => {
    controller.logOut(req, res);
});

// API

// Check if username exists
router.get('/api/username/:username',(req,res)=>{
    controller.getUsername(req,res);
});

router.get('/api/email/:email',(req,res)=>{
    controller.getEMail(req,res);
});


module.exports=router;