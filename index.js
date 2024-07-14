let resultadoSaldo = calcularSaldo(150,61)
let resultadoNivel = descobrirnivel(150) 

console.log("O Herói tem de saldo " + resultadoSaldo + " está no nível de " + resultadoNivel)

function calcularSaldo(qtdadeVitorias, qtdadeDerrotas){
	let subtracao = qtdadeVitorias - qtdadeDerrotas
    return subtracao
}

function descobrirnivel(qtdadeVitorias){
	let descricaoNivel
	if (qtdadeVitorias <= 10) {
    	return descricaoNivel = "Ferro"
    } else if (qtdadeVitorias <= 20 ){
    	return descricaoNivel = "Bronze"
      } else if (qtdadeVitorias <= 50){
        	return descricaoNivel = "Prata"
        } else if(qtdadeVitorias <= 80){
            return descricaoNivel = "Ouro"
          } else if(qtdadeVitorias <= 90){
            	return descricaoNivel = "Diamante"
            } else if(qtdadeVitorias <= 100){
            	return descricaoNivel = "Lendário"
              } else
              		return descricaoNivel = "Imortal"
}