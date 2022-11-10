function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

console.log(criaHoraDosSegundos(10))

const timer = document.querySelector('#timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
     
})

pausar.addEventListener('click', function(event) {
    timer.innerHTML = 'cliquei no pausar'
})

zerar.addEventListener('click', function(event) {
    timer.innerHTML = 'cliquei no zerar'
})