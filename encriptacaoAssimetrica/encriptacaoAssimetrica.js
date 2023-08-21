import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,

  publicKeyEncondig: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEnconding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

const dadosCifrados = publicEncrypt(publicKey, Buffer.from('Mensagem secreta'));

const dadosDecifrados = privateDecrypt(privateKey, dadosCifrados);

console.log(dadosDecifrados.toString('utf-8'));
