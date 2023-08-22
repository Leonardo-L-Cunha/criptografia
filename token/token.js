import jwt from 'jsonwebtoken';

const chaveSecreta = 'pokemon123';

const token = jwt.sign(
  {
    nome: 'Leonardo',
    id: 1,
  },
  chaveSecreta
);

console.log(token);

const verificar = jwt.verify(token, chaveSecreta);

console.log(verificar);
