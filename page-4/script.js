let buffer = '0';

let tela = document.querySelector('.screen');
let botoes = document.querySelector('.buttons');

botoes.addEventListener('click', (event) => {
    buttonClick(event.target.innerText);
});

// função para verificar se é numero ou simbolo
function buttonClick(valor) {
    if (valor >= 0 && valor <= 9) {
        numero(valor);
    } else {
        simbolo(valor);
    }
    atualizar();
}

// caso seja simbolo
function simbolo(valor) {
    switch (valor) {
        case 'C':
            buffer = '0';
            break;
        case 'del':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '=':
            buffer = eval(buffer);
            break;
        default:
            buffer += valor;
            break;
    }
}

// caso seja numero
function numero(valor) {
    if (buffer === '0') {
        buffer = valor;
    } else {
        buffer += valor;
    }
}

// atualizar
function atualizar() {
    tela.innerText = buffer;
    if (tela.innerText === '17') {
        setTimeout(gado, 500);
    } else if (tela.innerText === '2020') {
        setTimeout(secret, 500);
    }
}

// brincadeiras
function gado() {
    tela.innerText = 'gado d+';
}

function secret() {
    tela.innerText = 'V0C3 4T1V0U 0 M0D0 S3CR3T0';
    tela.style.color = 'red';
    tela.style.backgroundColor = 'blue';
}
