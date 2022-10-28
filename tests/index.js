function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

    const pessoa1 = criaPessoa('Marcelo', "Antonino", 21);
    console.log(pessoa1.idade)