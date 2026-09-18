const historicoPartidas = []

function main (){
    //Variáveis de controle do DOM
    let numVitoria = Number(document.getElementById("vitoria").value)
    let numDerrota = Number(document.getElementById("derrota").value)
    let respostaDom = document.getElementById('resposta')

    //Variáveis de armazenamento de retorno de função
    let saldoRank= qntVitDer(numVitoria,numDerrota)   
    
    //Validações para entradas fornecidas pelo usuário.
    if (numVitoria == '' || numDerrota === ''){
        alert ("Preencha todos os campos para calcular seu Elo")
        
    } else if (numVitoria < 0 || numDerrota < 0){
        alert ("O número tem que ser maior do que 0")
    } else {
        respostaDom.innerHTML = `O Herói tem um saldo de vitoria de ${saldoRank} e por isso está no nível ${elo(saldoRank)}`
        const atualizarhistorico = {
            vitorias: numVitoria,
            derrotas:numDerrota,
            saldo:saldoRank,
            elo:elo(saldoRank)

        }
        historicoPartidas.push(atualizarhistorico)
        console.log(historicoPartidas)
    }
}



function gerarRelatorio() {
    let relatorioDom = document.getElementById('relatorio')

    if (historicoPartidas.length === 0) {
        relatorioDom.innerHTML = "Nenhum histórico registrado ainda."
        return;
    }

    let textoRelatorio = `Você usou o cálculo de elo ${historicoPartidas.length} vezes. <br><br><strong>Registros:</strong><br>`

    historicoPartidas.forEach((historico, index) => {
        textoRelatorio += `- Tentativa ${index + 1}: Saldo de ${historico.saldo} | Elo: ${historico.elo}<br>`
    })

    relatorioDom.innerHTML = textoRelatorio

}

function elo(saldoRank){
    
    const elos = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
    
    if (saldoRank < 10){
        return elos[0]
    } else if (saldoRank >= 11 && saldoRank<= 20){
        return elos[1]
    } else if (saldoRank >= 21 && saldoRank<= 50){
        return elos[2]
    } else if (saldoRank >= 51 && saldoRank<= 80){
        return elos[3]
    } else if (saldoRank >= 81 && saldoRank<= 90){
        return elos[4]
    } else if (saldoRank >= 91 && saldoRank<= 100){
        return elos[5]
    } else {
        return elos [6]
    }
}


function qntVitDer(vitoria, derrota){
    return vitoria - derrota
}