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

module.exports=router;