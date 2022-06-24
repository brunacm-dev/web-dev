let total = 0;
let buffer = '0';
let operator = null;

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
            total: 0;
            break;
        case 'del':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        // EM CONSTRUÇAO
        case '=':
            console.log('resultado ' + buffer);
            break;
        default:
            calcular(valor);
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

/*calcular CONSTRUÇAO
function fazerConta(valor) {
    console.log(`valorconta ${valor}`);

    if (total === 0) {
        total = parseInt(buffer);
        console.log(`total ${parseInt(buffer)}`);
    } else {
        console.log('vou calcular');
        calcular(parseInt(buffer));
    }
    operator = valor;
    buffer = '0';
}*/

// operacoes EM CONSTRUÇAO
function calcular(valor) {
    let num = parseInt(buffer);
    console.log('parseint' + parseInt(buffer));
    console.log('total ' + total);
    switch (valor) {
        case '+':
            num += parseInt(buffer);
            console.log('soma', total);
            buffer = num;
            break;
        case '-':
            total -= parseInt(buffer);
            break;
        case '*':
            total *= parseInt(buffer);
            break;
        case '/':
            total /= parseInt(buffer);
            break;
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
