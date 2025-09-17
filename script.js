function coraleatoria() {
    let letras = "0123456789abcdef";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function mudardegrade() {
    let cor1 = coraleatoria();
    let cor2 = coraleatoria();
    document.body.style.background = `linear-gradient(to right, ${cor1}, ${cor2})`;
}