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

const leo = new Usuarios('Leonardo', 'senha123');

const senhaComuns = [
  'senha',
  '123456',
  'senha123',
  'admin',
  'blink182',
  'meuAniversario',
  'senha123456',
  'brasil',
  '102030',
];

senhaComuns.map((senha) => {
  if (leo.compare('Leonardo', senha)) {
    console.log(`A senha do usuario e ${senha}`);
  }
});
