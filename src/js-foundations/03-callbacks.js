const users = [
  { id: 1, name: "John", age: 34 },
  { id: 2, name: "Amy", age: 20 },
];

function getUserById(id, callback) {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return callback(`USUARIO no encontrado con el id: ${id}`);
  }

  callback(null, user);
}

module.exports = {
  getUserById,
};

// Para tener en cuenta: el primer argumento de la función callback es el error, y el segundo argumento es el resultado.