const axios = require('axios');

const httpClientPlugin = {
  get: async (url) => {
    const response = await axios.get(url);
    console.log(response.data)
    return response.data;
  },
};

module.exports = {
  http: httpClientPlugin,
};
