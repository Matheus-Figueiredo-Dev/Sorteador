function generateNumber() {
    const min = Math.ceil(parseInt(document.querySelector(".input-min").value))
    const max = Math.floor(parseInt(document.querySelector(".input-max").value))
    const quantity = parseInt(document.querySelector(".input-quantity").value)

    // Verifica se os valores de min e max são válidos
    if (min >= max) {
        alert("O valor mínimo tem que ser menor que o valor máximo")
        return;  // Interrompe a execução da função caso a condição seja atendida
    }

    let results = []
    for (let i = 0; i < quantity; i++) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        results.push(result)
    }

    const resultDisplay = document.querySelector(".result-display")
    resultDisplay.textContent = `Os números sorteados são ${results.join(", ")}`
}
