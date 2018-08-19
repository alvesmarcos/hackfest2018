/**
 * Apenas para exemplificar
 */
export const Types = {
  GET_DATA: 'data/GET_DATA',
};

const INITIAL_STATE_DEV = [
  {
    numero: '805/2018',
    ementa:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASSIFICAÇÃO BRASILEIRA HIERARQUIZADA DE PROCEDIMENTOS ODONTOLÓGICOS.',
    indexacao: 'PREÇO TRATAMENTO DENTÁRIO DENTE ODONTÓLOGO ODONTOLOGIA',
    autor: 'Raíssa Gomes Lacerda Rodrigues de Aquino',
    apelido: 'PROCEDIMENTOS ODONTOLÓGICOS',
    objeto:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASS',
    emTramitacao: true,
    materiaPolemica: false,
    regimeTramitacao: 'Normal',
    textoIntegral: 'http://177.200.32.195:9673/sapl/sapl_documentos/materia/78450_texto_integral',
    tramites: [
      {
        data: '15/08/2018',
        origem: 'PARLAMENTAR',
        destino: 'Secretaria Legislativa',
        turno: 'Único',
        situacao: 'ENVIADO PARA LEITURA EM PLENÁRIO',
        ultimaAcao: 'ENVIADO PARA A LEITURA EM PLENÁRIO NO DIA 21/08/2018.',
      },
    ],
  },
  {
    numero: '482/2006',
    ementa: 'DENOMINA DE RUA INÁCIA PESSOA DA SILVA',
    indexacao: 'RUA INÁCIA PESSOA DA SILVA',
    autor: 'Luciano Cartaxo Pires',
    apelido: 'LOGRADOURO PÚBLICO',
    objeto: 'NOME DE RUA',
    emTramitacao: false,
    materiaPolemica: false,
    regimeTramitacao: 'Normal',
    textoIntegral: 'http://177.200.32.195:9673/sapl/sapl_documentos/materia/1055_texto_integral',
    tramites: [
      {
        data: '10/05/2006',
        origem: 'Executivo PMJP',
        destino: 'Secretaria Legislativa',
        turno: 'Único',
        situacao: 'L E I',
        ultimaAcao:
          'LEI Nº 10.758, DE 10/05/2006 PUBLICADA NO SEMANÁRIO MUNICIPAL Nº 1009, DE 14 A 20/05/2006',
      },
      {
        data: '19/04/2006',
        origem: 'Plenário',
        destino: 'Executivo PMJP',
        turno: 'Único',
        situacao: 'Aprovado em Plenário',
        ultimaAcao: 'AUTÓGRAFO Nº 040/2006 SANÇÃO OFICIO Nº 011/DDA/2006 DE 25/04/2006',
      },
      {
        data: '22/03/2006',
        origem: 'Plenário',
        destino: 'Comissão de Constituição, Justiça, Redação e Legis. Part.',
        turno: 'Único',
        situacao: 'Aguardando Parecer',
        ultimaAcao: 'ENCAMINHANDO PARA COMISSÃO DE CONSTITUIÇÃO E JUSTIÇA EM 23/03/2006',
      },
    ],
  },
  {
    numero: '805/2018',
    ementa:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASSIFICAÇÃO BRASILEIRA HIERARQUIZADA DE PROCEDIMENTOS ODONTOLÓGICOS.',
    indexacao: 'PREÇO TRATAMENTO DENTÁRIO DENTE ODONTÓLOGO ODONTOLOGIA',
    autor: 'Raíssa Gomes Lacerda Rodrigues de Aquino',
    apelido: 'PROCEDIMENTOS ODONTOLÓGICOS',
    objeto:
      'OBRIGA AS PESSOAS JURÍDICAS QUE OPERAM PLANOS DE ASSISTÊNCIA ODONTOLÓGICA NO MUNICÍPIO DE JOÃO PESSOA A SE ADEQUAREM AOS VALORES REFERENCIAIS DA CLASS',
    emTramitacao: true,
    materiaPolemica: false,
    regimeTramitacao: 'Normal',
    textoIntegral: 'http://177.200.32.195:9673/sapl/sapl_documentos/materia/78450_texto_integral',
    tramites: [
      {
        data: '15/08/2018',
        origem: 'PARLAMENTAR',
        destino: 'Secretaria Legislativa',
        turno: 'Único',
        situacao: 'ENVIADO PARA LEITURA EM PLENÁRIO',
        ultimaAcao: 'ENVIADO PARA A LEITURA EM PLENÁRIO NO DIA 21/08/2018.',
      },
    ],
  },
];

const INITIAL_STATE = {
  data: []
};

export default function dataReducer(state = INITIAL_STATE_DEV, action) {
  switch (action.type) {
    case Types.GET_DATA:
      return { ...state,  data: action.payload };
    default:
      return state;
  }
}

// Actions creators
export const getData = () => (
  async(dispatch) => {
    try {
      const data = await axios.get('localhost:8080/data');
      dispatch({ type: Types.GET_DATA, payload: data });
    } catch (e) {
      // console.log(e);
    }
  }
);
