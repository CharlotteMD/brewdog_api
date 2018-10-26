const axios = require('axios');


module.exports = {

getRandomBeer: async function(req) {

  const getBeer = await axios.get('https://api.punkapi.com/v2/beers/random');

  // console.log(getBeer.data[0].name);
  const beerName = getBeer.data[0].name;
  console.log(beerName);

  // getBeer();

  // const beerName2 = res.data[0].name;
  // console.log(beerName, beerName2);
  return beerName;
  }
}
