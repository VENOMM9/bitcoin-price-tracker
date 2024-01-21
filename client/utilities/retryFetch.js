// import axios from 'axios';

// async function retryFetch(url, maxRetries) {
//   for (let i = 0; i < maxRetries; i++) {
//     try {
//       return await axios.get(url);
//     } catch (error) {
//       // You can customize the retry logic or handle errors here
//       console.error(`Error fetching data (Attempt ${i + 1}):`, error.message);
//       }
//       await new Promise(resolve => setTimeout(resolve, 2000));

//   }
//   throw new Error('Max retries reached');
// }

// export { retryFetch };