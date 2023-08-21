const mensagemSecreta = 'alura';

function cifraMensagem(mensagems, movimentos) {
  const mensagemCifra = mensagems.split('').map((mensagem) => {
    const codigoMensagem = mensagem.charCodeAt(0);
    return String.fromCharCode(codigoMensagem + movimentos);
  });

  return mensagemCifra.join('');
}

const cifraResultado = cifraMensagem(mensagemSecreta, 4);

function decifraMensagem(mensagems, movimentos) {
  const mensagemCifra = mensagems.split('').map((mensagem) => {
    const codigoMensagem = mensagem.charCodeAt(0);
    return String.fromCharCode(codigoMensagem - movimentos);
  });

  return mensagemCifra.join('');
}

const decifraResultado = decifraMensagem(cifraResultado, 3);

console.log(cifraResultado);
console.log(decifraResultado);
