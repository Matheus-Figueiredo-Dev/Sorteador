function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const quantity = parseInt(document.querySelector(".input-quantity").value)

    if (min >= max) {
        alert("O valor mínimo tem que ser menor que o valor máximo")
    }

    else {
        let results = []
        for (let i = 0; i < quantity; i++) {
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            results.push(result)
        }
        const resultDisplay = document.querySelector(".result-display")
        resultDisplay.textContent = `Os números sorteados são ${results.join(", ")}`
    }

}