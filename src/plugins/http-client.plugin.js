const axios = require('axios');

const httpClientPlugin = {
  get: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },
};

// Agregando un comentario para probar el git
module.exports = {
  http: httpClientPlugin,
};
