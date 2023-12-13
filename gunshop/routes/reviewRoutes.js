const express =  require('express');
const Gun = require('../models/Guns');
const Review = require('../models/Review');

const router = express.Router();

router.post('/guns/:gunId/review' , async(req,res)=>{

        let {gunId} = req.params;
        let {rating , comment} = req.body;
        const gun = await Gun.findById(gunId);
        // creating a new review
        const review  = new Review({rating , comment}); // let review  = new Review({...req.body}) 
        
        // adding review id to product array
        gun.reviews.push(review); //mongodb internally isme se id nikaal kr usse push krdega.
        
        await review.save();
        await gun.save();
        res.redirect(`/guns/${gunId}`)
})


module.exports = router;