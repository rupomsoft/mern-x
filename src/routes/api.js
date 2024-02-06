const express=require('express');

const WelcomeController=require('../controllers/WelcomeController')



const router=express.Router();





router.get('/WelcomeAPI',AuthVerification,WelcomeController.Welcome)




module.exports=router;