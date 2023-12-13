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
      name: 'Gun 1',
      price: 500,
      type: 'Pistol',
      isLegal: true,
      img: 'https://images.unsplash.com/photo-1591123720164-de1348028a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VufGVufDB8MHwwfHx8MA%3D%3D'
    },
    {
      name: 'Gun 2',
      price: 800,
      type: 'Rifle',
      isLegal: true,
      img: 'https://plus.unsplash.com/premium_photo-1663075991417-920da9dad032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VufGVufDB8MHwwfHx8MA%3D%3D'
    },
    {
      name: 'Gun 3',
      price: 1200,
      type: 'Shotgun',
      isLegal: false,
      img: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3VufGVufDB8MHwwfHx8MA%3D%3D'
    },
    {
      name: 'Gun 3',
      price: 1200,
      type: 'Shotgun',
      isLegal: false,
      img: 'https://images.unsplash.com/photo-1620396159302-e9334733d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGd1bnxlbnwwfDB8MHx8fDA%3D'
    },
    {
      name: 'Gun 3',
      price: 1200,
      type: 'Shotgun',
      isLegal: false,
      img: 'https://images.unsplash.com/photo-1598192318535-67e4ae3fe0e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1bnxlbnwwfDB8MHx8fDA%3D'
    },
    // Add more gun objects as needed
  ]

  async function seedDB(){
    await Gun.insertMany(gunsData);
    console.log("Data seeded");
  }
  


  module.exports = seedDB;
  