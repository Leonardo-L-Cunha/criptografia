import { scryptSync, timingSafeEqual, randomBytes } from 'crypto';

function hashComSal(senha) {
  const sal = randomBytes(16).toString('hex');

  const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

  return `${sal}:${senhaHasheada}`;
}

class Usuarios {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.hash] = hashComSal(senha).split(':');
  }

  compare(nome, senha) {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);

      const hashReal = Buffer.from(this.hash, 'hex');

      const compare = timingSafeEqual(testeHash, hashReal);

      if (compare) {
        console.log('usuario autenticado com sucesso!');
        return true;
      }
    }

    console.log('Nome ou senha estao invalidos');
    return false;
  }
}

const leo = new Usuarios('Leonardo', 'teste');

console.log(leo);

leo.compare('Leonardo', 'teste');

leo.compare('L', 'teste');

leo.compare('Leonardo', 'test');
