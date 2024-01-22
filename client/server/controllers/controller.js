const priceModel = require('../models/price');
const axios = require('axios');

const getPrice = async (req, res) => {
  try {
    const { period, startDate, endDate } = req.query;

    let query = {};

    if (period) {
      const currentDate = new Date();
      switch (period) {
        case 'day':
          query.timestamp = { $gte: currentDate - 24 * 60 * 60 * 1000 };
          break;
        case 'week':
          query.timestamp = { $gte: currentDate - 7 * 24 * 60 * 60 * 1000 };
          break;
        case 'month':
          const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
          query.timestamp = { $gte: firstDayOfMonth };
          break;
        case 'year':
          const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
          query.timestamp = { $gte: firstDayOfYear };
          break;
        // Add cases for other periods if needed
      }
    } else if (startDate && endDate) {
      query.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const prices = await priceModel.find(query).sort({ timestamp: 'asc' });
    res.json(prices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const fetchData = async () => {
  try {
    const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    console.log(data);

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
  fetchData,
};
