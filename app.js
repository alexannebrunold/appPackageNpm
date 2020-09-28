const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon'

// let checkNameOfPokemon = async function(){
//   try {
//     const response = await axios.get(URL);
//     console.log(response.data.results);
//     return response;
//   } 
//   catch (err) {
//     throw "Unable to fetch current Pokemon";
//   }
// }

// module.exports = (str) => {
//   return `🦄${str}🦄`;
// };

let nom = 'Alex'

module.exports = {
  // checkNameOfPokemon: checkNameOfPokemon, 
  nom:nom
}