const letras = {'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15, 'G': 16, 'H': 17, 'I': 18, 'J': 19, 'K': 20, 'L': 21, 'M': 22, 'N': 23, 'O': 24, 'P': 25, 'Q': 26, 'R': 27, 'S': 28, 'T': 29, 'U': 30, 'V': 31, 'W': 32, 'X': 33, 'Y': 34, 'Z': 35};

function converterParaBase10(numero, baseOrigem) {
    numero = numero.toUpperCase();
    const base = parseInt(baseOrigem);
    let decimal = 0;
    for (let i = 0; i < numero.length; i++) {
        const digito = numero.charAt(numero.length - 1 - i);
        if (!isNaN(parseInt(digito))) {
            valorDigito = parseInt(digito);
        } else {
            valorDigito = letras[digito];
        }
        decimal += valorDigito * Math.pow(base, i);
    }
    return decimal;
}

function converterDaBase10(numero, baseDestino) {
    numero = parseInt(numero);
    const base = parseInt(baseDestino);
    let resultado = "";
    const letrasInversas = {} // Dicionário inverso para converter de volta para letras
    for (const chave in letras) { // Percorre o dicionário
        const valor = letras[chave]; // Pega o valor da chave
        letrasInversas[valor] = chave; // Inverte o dicionário
    } // Exemplo: {'A': 10} vira {10: 'A'}
    while (numero > 0) {
        const resto = numero % base;
        if (resto < 10) {
            resultado = resto.toString() + resultado;
        } else {
            resultado = letrasInversas[resto] + resultado;
        }
        numero = Math.floor(numero / base);
    }
    return resultado;
}

function converterBase(numero, baseOrigem, baseDestino) {
    const decimal = converterParaBase10(numero, baseOrigem);
    const resultado = converterDaBase10(decimal, baseDestino);
    return resultado;
  }


function converter() {
    const baseOrigem = document.getElementById("baseOrigem").value;
    const numero = document.getElementById("numero").value;
    const baseDestino = document.getElementById("baseDestino").value;
  
    if (baseOrigem === "" || baseDestino === "" || numero === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      const baseOrigemInt = parseInt(baseOrigem);
      const baseDestinoInt = parseInt(baseDestino);
  
      if (
        isNaN(baseOrigemInt) ||
        isNaN(baseDestinoInt) ||
        baseOrigemInt < 2 ||
        baseOrigemInt > 36 ||
        baseDestinoInt < 2 ||
        baseDestinoInt > 36
      ) {
        alert("As bases devem estar no intervalo de 2 a 36.");
      } else {
        const resultado = converterBase(numero, baseOrigem, baseDestino);
        const resultadoTexto = `O Número ${numero} na base ${baseOrigem} é equivalente a ${resultado} na base ${baseDestino}.`;
        const resultadoElement = document.getElementById("resultadoTexto");
  
        // Define o texto do resultado
        resultadoElement.textContent = resultadoTexto;
  
        // Exibe o modal
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
  
        // Adicione um evento de clique no botão de fechar
        const closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = function () {
          modal.style.display = "none";
        };
  
        // Feche o modal se o usuário clicar fora dele
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    }
  }
  