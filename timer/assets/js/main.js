function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    console.log(criaHoraDosSegundos(10))
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function(event){
        const element = event.target;
        if (element.classList.contains('iniciar')) {
            clearInterval(timer);
        iniciaRelogio();
        relogio.classList.remove('pausado');
        }
    
        if (element.classList.contains('pausar')) {
            clearInterval(timer);
        relogio.classList.add('pausado');
        }
    
        if (element.classList.contains('zerar')) {
            clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado');
        segundos = 0;
        }
    })
}

relogio()

