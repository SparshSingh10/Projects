const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');
const {isLoggedIn}=require('../middleware')

// Sample route to render a form for adding a new tweet
router.get('/tweets/new',isLoggedIn, (req, res) => {
    res.render('new');
});

router.post('/tweets' ,isLoggedIn, async(req,res)=>{
    try{
        let { tweetContent, followers, following,userName } = req.body;
        console.log(tweetContent);
        console.log(followers);
        console.log(following);
        console.log(userName);
        await Tweet.create({tweetContent,followers,following,userName});
        req.flash('success', 'Upload Successful');
        res.redirect('/tweets');
    }
    catch(e){
        console.log(e.message);
        res.status(500).render('error',{err:e.message});
    }
})

// Route to display details of a specific tweet
router.get('/tweets/:id',isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundtweet = await Tweet.findById(id).populate('reviews');
        req.flash('sucess','Sucess ho gaya');
        res.render('show', { foundtweet ,success:req.flash('msg')});
    } catch (e) {
        console.log(e)
        res.status(500).render('error', { err: e.message });
    }
});

// Route to render the edit form for a specific tweet
router.get('/tweets/:id/edit', isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let foundtweet = await Tweet.findById(id);
        res.render('edit', { foundtweet, success: req.flash('success') });
    } catch (e) {
        res.status(500).render('error', { err: e.message });
    }
});


// Route to handle the update (PATCH) request for a specific tweet
router.patch('/tweets/:id', isLoggedIn, async (req, res) => {
    try {
        let { id } = req.params;
        let { tweetContent, followers, following } = req.body;
        await Tweet.findByIdAndUpdate(id, { tweetContent, followers, following});
        req.flash('success', 'Tweet successfully edited');

        // Pass the success flash message to the template
        res.redirect(`/tweets`);
    } catch (e) {
        console.log(e.message);
        res.status(500).render('error', { err: e.message });
    }
});


router.get('/tweets' , isLoggedIn,async(req,res)=>{
    try{

        let tweets = await Tweet.find({}); //promise
        res.render('home' , {tweets, success: req.flash('success') })
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})


router.delete('/tweets/:id',isLoggedIn, async(req,res)=>{
    try{

        let {id} = req.params;
        // let product = await Product.findById(id)
    
        // for(let idd of product.reviews){
        //     await Review.findByIdAndDelete(idd)
        // }
    
        await Tweet.findByIdAndDelete(id);
        res.redirect('/tweets');
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})
module.exports = router;
