import { createHash } from 'crypto';

class Usuarios {
  constructor(nome, senha) {
    this.nome = nome;
    this.senha = this.hash(senha);
  }

  hash(senha) {
    return createHash('sha256').update(senha).digest('hex');
  }

  compare(nome, senha) {
    if (nome === this.nome && this.senha === this.hash(senha)) {
      console.log('usuario autenticado com sucesso!');
      return true;
    }

    //console.log('Nome ou senha estao invalidos');
    return false;
  }
}

const leo = new Usuarios('Leonardo', '3275');

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (leo.compare('Leonardo', senhaTeste.toString())) {
    console.log(`A senha do usuária é ${senhaTeste}`);
  }
}
