function recebeNum(n1, n2) {
    n1 = Math.floor(Math.random() * 100);
    n2 = Math.floor(Math.random() * 100);
    if (n1 > n2) {
        console.log(`-> ${n1} ${n2}`);
    } else {
        console.log(`${n1} ${n2} <-`)
    }
}

recebeNum();


