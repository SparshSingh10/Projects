const express = require('express');
const router = express.Router();
const Gun = require('../models/Guns');
const {isLoggedIn}=require('../middleware')

// Sample route to render a form for adding a new gun
router.get('/guns/new',isLoggedIn, (req, res) => {
    res.render('new');
});

router.post('/guns' ,isLoggedIn, async(req,res)=>{
    try{
        let { name, price, isLegal, img,type } = req.body;
        await Gun.create({name,img , price , type,isLegal});
        res.redirect('/guns');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})

// Route to display details of a specific gun
router.get('/guns/:id',isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundGun = await Gun.findById(id).populate('reviews');

        res.render('show', { foundGun });
    } catch (e) {
        console.log(e)
        res.status(500).render('error', { err: e.message });
    }
});

// Route to render the edit form for a specific gun
router.get('/guns/:id/edit',isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundGun = await Gun.findById(id);
        res.render('edit', { foundGun });
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
});

// Route to handle the update (PATCH) request for a specific gun
router.patch('/guns/:id',isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let { name, price, isLegal, img,type } = req.body;
        await Gun.findByIdAndUpdate(id, { name, img, price, isLegal,type });

        res.redirect(`/guns/${id}`);
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
});

router.get('/guns' , isLoggedIn,async(req,res)=>{
    try{

        let guns = await Gun.find({}); //promise
        res.render('home' , {guns})
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


router.delete('/guns/:id',isLoggedIn, async(req,res)=>{
    try{

        let {id} = req.params;
        // let product = await Product.findById(id)
    
        // for(let idd of product.reviews){
        //     await Review.findByIdAndDelete(idd)
        // }
    
        await Gun.findByIdAndDelete(id);
        res.redirect('/guns');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})
module.exports = router;
