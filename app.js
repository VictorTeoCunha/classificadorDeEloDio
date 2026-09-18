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

function main (){
    let numVitoria = Number(document.getElementById("vitoria").value)
    let numDerrota = Number(document.getElementById("derrota").value)
    let saldoRank= qntVitDer(numVitoria,numDerrota)
    console.log(`O Herói tem um saldo de vitoria de ${saldoRank} e por isso está no nível ${elo(saldoRank)}`)
}