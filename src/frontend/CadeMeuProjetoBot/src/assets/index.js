const apenasRosto = require('./apenas_rosto.png');
const roboApaixonado = require('./robo_apaixonado.png');
const roboConfuso = require('./robo_confuso.png');
const roboDuvida = require('./robo_duvida.png');
const roboFeliz = require('./robo_feliz.png');
const roboHome = require('./robo_home.png');
const roboInputVazio = require('./robo_input_vazio.png');
const roboResultadoFeliz = require('./robo_resultado_feliz.png');
const roboResultadoTriste = require('./robo_resultado_triste.png');
const rostoComFundo = require('./rosto_com_fundo.png');
const roboUsuarioDigitando = require('./usuario_digitando.png');
const roboSemResultado = require('./robo_sem_resultado.png');
const roboPensando = require('./robo_pensando.png');

const vereadores = (nome) => {
  switch (nome) {
    case 'Leopoldo Araújo Bezerra Cavalcanti':
      return require('./vereadores/leo-bezerra-d.jpg');
    case 'Durval Ferreira da Silva Filho':
      return require('./vereadores/durval-ferreira-d.jpg');
    case 'Tanilson Tarso Nóbrega Soares':
      return require('./vereadores/tanilson-soares-d.jpg');
    case 'Eliza Virgínia de  Souza Fernandes':
      return require('./vereadores/eliza-psdb-20516-d.jpg');
    case 'Francisco Henrique da Silva':
      return require('./vereadores/chico-do-sindicato-pt-do-b-d.jpg');
    case 'Luis Flávio Medeiros Paiva':
      return require('./vereadores/dr-luis-flavio-d.jpg');
    case 'João Almeida de Carvalho Júnior':
      return require('./vereadores/joao-almeida-sd-d.jpg');
    case 'Carlos Tibério Limeira Santos Fernandes':
      return require('./vereadores/joao-almeida-sd-d.jpg');
    case 'Lucas Clemente de Brito Pereira':
      return require('./vereadores/tiberio-limeira-d.jpg');
    case 'Marcos Vinicius Sales Nobrega':
      return require('./vereadores/marcos-vinicius-psdb-d.jpg');
    case 'José Luiz Pereira Gonçalves':
      return require('./vereadores/bispo-jose-luiz-d.jpg');
    case 'João Bosco dos Santos Filho':
      return require('./vereadores/bosquinho-psc-d.jpg');
    case 'Pedro Alberto de Araújo Coutinho':
      return require('./vereadores/pedro-alberto-coutinho-d.jpg');
    case 'Damasio Franca Segundo Neto':
      return require('./vereadores/damasio-franca-d.jpg');
    case 'Raíssa Gomes Lacerda Rodrigues de Aquino':
      return require('./vereadores/raissa-lacerda-d.jpg');
    case 'Fernando Paulo Carrilho Milanez Neto':
      return require('./vereadores/milanez-neto-d.jpg');
    case 'Eduardo Carneiro':
      return require('./vereadores/eduardo-carneiro-prtb-d.jpg');
    case 'João dos Santos Filho':
      return require('./vereadores/joao-dos-santos-pr-d.jpg');
    case 'Helton Renê Nunes Holanda':
      return require('./vereadores/helton-rene-d.jpg');
    case 'Bruno Farias de Paiva':
      return require('./vereadores/bruno-farias-d.jpg');
    case 'João Carvalho da Costa Sobrinho':
      return require('./vereadores/joao-corujinha-d.jpg');
    case 'Maria Sandra Pereira de Marrocos':
      return require('./vereadores/sandra-marrocos-d.jpg');
    case 'Valdir Jose Dowsley':
      return require('./vereadores/dinho-pmn-d.jpg');
    case 'Thiago Nobrega de Lucena':
      return require('./vereadores/thiago-lucena-d.jpg');
    case 'Ronivon Ramalho Diniz':
      return require('./vereadores/mangueira-pmdb-d.jpg');
    case 'Marcos Henriques e Silva':
      return require('./vereadores/marcos-henriques-d.jpg');
    case 'Humberto Jorge de Araújo Pontes':
      return require('./vereadores/humberto-pontes-d.jpg');
    case 'Gabriel Carvalho Câmara':
      return require('./vereadores/professor-gabriel-psd-d.jpg');
    default:
      return require('./vereadores/placeholder.jpeg');
  }
};

export {
  apenasRosto,
  roboApaixonado,
  roboConfuso,
  roboDuvida,
  roboFeliz,
  roboHome,
  roboInputVazio,
  roboResultadoFeliz,
  roboResultadoTriste,
  rostoComFundo,
  roboUsuarioDigitando,
  roboSemResultado,
  roboPensando,
  vereadores,
};
