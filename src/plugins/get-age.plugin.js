const getAgePlugin = require("get-age");

const getAge = (birthday) => {
    if (!birthday) {
        throw new Error("birthday is required");
    }

     return getAgePlugin(birthday);
};

module.exports = {
  getAge,
};
