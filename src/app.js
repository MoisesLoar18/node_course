// const { emailTemplate } = require("./js-foundations/01-template.js");
// require('./js-foundations/02-destructuring.js');
// const { getUserById } = require("./js-foundations/03-callbacks.js");
// const { getUserById } = require("./js-foundations/04-arrow-functions.js");
// const { getAge, getUUID } = require("./plugins"); //Esto sigue el patrón adaptador
// const { makeBuildPerson } = require("./js-foundations/05-factory.js"); //Esto sigue el patrón factory
// const { getPokemonById } = require("./js-foundations/06-promises.js");

const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.err('Esto es algo malo')
// getPokemonById(4)
//     .then((pokemon) => console.log(pokemon))
//     .finally(() => console.log("Pokemon fetched"));

// console.log(emailTemlate);
// console.log("hola mundo desde app.js")

// const id = 2;
// getUserById(id, function (err, user) {
//   if (err) {
//     throw new Error(err);
//   }

//   console.log(user);
// });

// Esto ya hace que se configure una "instancia" de person
// const makePerson = makeBuildPerson({ getUUID, getAge });
// const john = makePerson({ name: "John", birthday: "2000-04-18" });
// console.log(john);
