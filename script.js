let amigos = [];

function adicionarNome() {
    let input = document.getElementById('inputNome').value.trim();
    let mensagem = document.getElementById('mensagem');
    
    if (!validarNome(input)) {
        mensagem.textContent = 'INSIRA UM "NOME DE AMIGO" VÁLIDO';
        return;
    }

    amigos.push(input);
    atualizarLista();
    mensagem.textContent = '';
    document.getElementById('inputNome').value = '';
}

function validarNome(nome) {
    if (!nome || /^\d+$/.test(nome) || /^[aeiouAEIOU]+$/.test(nome) || /^[^aeiouAEIOU\d]+$/.test(nome) || /^[^a-zA-Z0-9]+$/.test(nome)) {
        return false;
    }
    return true;
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

function sortear() {
    let mensagem = document.getElementById('mensagem');
    if (amigos.length < 2) {
        mensagem.textContent = 'SORTEIO INVÁLIDO';
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mensagem.textContent = `O CHURRASCO SERÁ PAGO POR ${sorteado}`;
}

function limparUltimo() {
    if (amigos.length > 0) {
        amigos.pop();
        atualizarLista();
    }
}

function reiniciarLista() {
    amigos = [];
    atualizarLista();
    document.getElementById('mensagem').textContent = '';
}
