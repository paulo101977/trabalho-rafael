function isCpf(cpf) {
    var exp = /\.|-/g;
    cpf = cpf.toString().replace(exp, "");
    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
    var soma1 = 0,
            soma2 = 0;
    var vlr = 11;
    for (i = 0; i < 9; i++) {
        soma1 += eval(cpf.charAt(i) * (vlr - 1));
        soma2 += eval(cpf.charAt(i) * vlr);
        vlr--;
    }
    soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
    soma2 = (((soma2 + (2 * soma1)) * 10) % 11);
    if (cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999" || cpf === "00000000000") {
        var digitoGerado = null;
    } else {
        var digitoGerado = (soma1 * 10) + soma2;
    }
    if (digitoGerado !== digitoDigitado) {
        return false;
    }
    return true;
}

function validarCPF() {
    var element = document.getElementById('cpf');
    var mensagemElement = document.getElementById('mensagemErro');

    var value = element.value;

    if(isCpf(value)) {
        console.log('true')
        mensagemElement.setAttribute('style', `display:none !important`);
    } else {
        mensagemElement.setAttribute('style', `display:block !important`);
    }
}