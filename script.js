function trocarMoedas() {
    const moedaOrigem = document.getElementById('moedaOrigem');
    const moedaDestino = document.getElementById('moedaDestino');
    const temp = moedaOrigem.value;
    moedaOrigem.value = moedaDestino.value;
    moedaDestino.value = temp;
}

async function executarConversao() {
    const valorInput = document.getElementById('valor').value;
    const resultadoElement = document.getElementById('resultado');

    // .Map
    const valoresValidos = valorInput.split(',').map(valor => parseFloat(valor.trim())).filter(valor => !isNaN(valor) && valor > 0);
    
    if (valoresValidos.length === 0) {
        resultadoElement.textContent = "Insira um valor positivo e numérico.";
        return;
    }

    const valor = valoresValidos[0]; 
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;

    //API Câmbio
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/' + moedaOrigem);
        const data = await response.json();

        const taxa = data.rates[moedaDestino];
        const valorConvertido = valor * taxa;
        resultadoElement.textContent = `Valor convertido: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
    } catch (error) {
        console.error('Erro ao buscar taxas de câmbio:', error);
        resultadoElement.textContent = "Erro ao obter taxas de câmbio.";
    }
}
