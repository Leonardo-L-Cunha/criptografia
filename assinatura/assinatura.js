import { generateKeyPairSync, createSign, createVerify } from 'crypto';

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

let dados = 'esse dado e rolado';

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

console.log(assinatura);

const verificador = createVerify('rsa-sha256');

verificador.update(dados);

const veficarAssinatura = verificador.verify(publicKey, assinatura, 'hex');

console.log(veficarAssinatura);
