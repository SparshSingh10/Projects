const mongoose = require('mongoose');
const Gun = require('./models/Guns');
mongoose.connect('mongodb+srv://sparshgla:sparshgla@cluster0.y6ksh16.mongodb.net/gunshop?retryWrites=true&w=majority')
.then(()=>{
    console.log('Db connected seed')
})
.catch((err)=>{
    console.log(err);
})

const gunsData = [
    {
      tweetContent: 'very good bhaut baduyia',
      userName: 'rahul',
      followers: 20,
      following: 10,
    },
    {
      tweetContent: 'very gggggggggggggggggggoogg',
      userName: 'vijay',
      followers: 50,
      following: 10,
    },
    {
      tweetContent: 'fnnnnnnnnjncjkdcjjdkcjd',
      userName: 'ram',
      followers: 2000,
      following: 10,
    }
    // Add more gun objects as needed
  ]

  async function seedDB(){
    await Gun.insertMany(gunsData);
    console.log("Data seeded");
  }
  


  module.exports = seedDB;
  