const priceModel = require('../models/price')
const axios = require('axios');



const getPrice = async (req, res) => {
       await fetchData()
  const prices = await priceModel.find().sort({ timestamp: 'asc' });
  console.log(prices)
    res.json(prices);
  };
  

const fetchData = async () => {
    try {
      const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      console.log(data)
    
      const price = new priceModel({ value: data.bpi.USD.rate_float, timestamp: new Date() });
      await price.save();
      console.log('Data fetched and saved');
    } catch (error) {
      console.error(error);
     console.log('Internal Server Error');
    }
};
  
module.exports = {
    getPrice,
    fetchData
    
  };