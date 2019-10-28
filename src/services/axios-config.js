var axios = require('axios')
var dados

var passarDados = () => {
  return axios.get('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL')
}

dados = passarDados()

dados.then((resposta) => {
  console.log('Converter: ' + resposta.data.USD.code)
  console.log('Para: ' + resposta.data.USD.codein)
  console.log('Categoria: ' + resposta.data.USD.name)
  console.log('Valor mais alto do dia: ' + resposta.data.USD.high.toFixed(2))
  console.log('Valor mais baixo do dia: ' + resposta.data.USD.low)
  console.log('Valor de BID: ' + resposta.data.USD.varBid)
  console.log('Mudança de Pacote: ' + resposta.data.USD.pctChange)
  console.log('BID: ' + resposta.data.USD.bid)
  console.log('Ask: ' + resposta.data.USD.ask)
})
