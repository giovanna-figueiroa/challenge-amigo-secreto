
let amigos = []

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const input = document.getElementById('amigo'); // Corrigido aqui
    const nome = input.value.trim();

    // Validação da entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualiza o array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";
}

function sortearAmigo() {
    // Valida se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    // Gera um índice aleatório
    const indice = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const nomeSorteado = amigos[indice];

    // Mostra o resultado
    document.getElementById('resultado-sorteio').innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}