const X = document.querySelector('.bx-x');
const OpenIns = document.querySelector('#instruction')
const Div = document.querySelector('.instruction-div');

X.addEventListener('click', () => {
    Div.style.display = "none";
})

OpenIns.addEventListener('click', () => {
    Div.style.display = "flex";
})

function copyCepToClipboard() {
    // Seleciona o texto da chave PIX
    const cepInput = document.createElement('input');
    cepInput.value = "R. João Camilo de Oliveira Tôrres, 830 - Tupi, Belo Horizonte - MG, 31846-310";
    document.body.appendChild(cepInput);
    cepInput.select();
    document.execCommand('copy');
    document.body.removeChild(cepInput);

    // Atualiza o texto do botão para indicar que foi copiado
    const copyButton = document.getElementById('copyCepInput');
    copyButton.innerHTML = '<i class="bx bxs-copy"></i>';
    copyButton.disabled = true;
}