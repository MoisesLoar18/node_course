// const {getAge, getUuid} = require('../plugins');

// En resumen: el factory function es una función dentro de otra función
const makeBuildPerson = ({getUUID, getAge}) => {
  return  ({name, birthday}) => {
    return {
      id: getUUID(),
      name,
      birthday,
      age: getAge(birthday)
    }
  }
}

// function buildPerson({ name, birthdate }) {
//   return {
//     id: getUuid(),
//     name,
//     birthdate,
//     age: getAge(birthdate),
//   };
// }

// const person = {
//   name: "John",
//   birthdate: "2000-04-18",
// };

// ! console.log(buildPerson(person));
module.exports = {
  makeBuildPerson
}