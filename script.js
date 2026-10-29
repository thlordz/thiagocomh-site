let mostrarDias = document.getElementById('mostrarDias')

const inicio = new Date('2026,10,29');
const hoje = new Date();
let contagem = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24)) - 1

if (contagem === 0) {
    mostrarDias.innerHTML = `Site criado hoje.`
} else if (contagem === 1) {
    mostrarDias.innerHTML = `Está há 1 dia em construção.`
} else {
    mostrarDias.innerHTML = `Está há ${contagem} dias em construção.`
}

