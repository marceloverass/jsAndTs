const nomes = ['Marcelo' ,'Fernanda', 'Marcos', 'Joao Kleber'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('_____________________________');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('_____________________________');

for (let valor of nomes) {
    console.log(valor);
}

console.log('_____________________________');

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array)
});