const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuarioClick';

//A funcao on OBSERVA o que esta acontecendo
meuEmissor.on(nomeEvento, function (click){
	//Vai printar para qualquer alteracao que seja feita no evento 'usuarioClick'
	//A funcao pega o "valor" que veio junto com o clique
	console.log('um usuario clicou', click)
})
/*
//Simulacao de que um usuario esta clicando
//EMITE um evento com o parâmetro 'usuarioClick' e a informação que aconteceu
meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')

//A classe EventEmiter, diferente do promise, executa enquanto houver eventos

let count = 0;
setInterval(function(){
	meuEmissor.emit(nomeEvento, 'no ok' + (count++))
}, 1000)*/

const stdin = process.openStdin()
stdin.addListener('data', function(value){
	console.log(`voce digitou: ${value.toString().trim()}`)
})