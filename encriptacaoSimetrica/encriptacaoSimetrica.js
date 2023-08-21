import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = 'Eu Sou o Batman';

const chave = randomBytes(32);

const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi);

const mensageCifra =
  cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensageCifra);

const decifra = createDecipheriv('aes256', chave, vi);

const decifraMensagem =
  decifra.update(mensageCifra, 'hex', 'utf-8') + decifra.final('utf-8');

console.log(decifraMensagem);
