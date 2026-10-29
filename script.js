let mostrarDias = document.getElementById('mostrarDias')

const inicio = new Date('2026-10-29');
const hoje = new Date();
let contagem = Math.round((hoje - inicio) / (1000 * 60 * 60 * 24)) - 1

if(contagem === 0){
    mostrarDias.innerHTML = `Site criado hoje.`
} else if(contagem === 1){
    mostrarDias.innerHTML = `Está a 1 dia em construção.`
} else {
    mostrarDias.innerHTML = `Está a ${contagem} dias em construção.`
}

