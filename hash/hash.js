import { createHash } from 'crypto';

function hash(senha) {
  return createHash('sha256').update(senha).digest('hex');
}

class Usuarios {
  constructor(nome, senha) {
    this.nome = nome;
    this.senha = hash(senha);
  }

  compare(nome, senha) {
    if (nome === this.nome && this.senha === hash(senha)) {
      console.log('usuario autenticado com sucesso!');
      return true;
    }

    console.log('Nome ou senha estao invalidos');
    return false;
  }
}

const leo = new Usuarios('Leonardo', '32754747');

console.log(leo);

leo.compare('Leonardo', '32754747');

leo.compare('L', '32754747');

leo.compare('Leonardo', '32754748');
