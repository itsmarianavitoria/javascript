function verificar() 
{
    const inputNome = document.querySelector('#nome');
    const nome = inputNome.value;

    const inputNota1 = document.querySelector('#nota1');
    const nota1 = Number(inputNota1.value);

    const inputNota2 = document.querySelector('#nota2');
    const nota2 = Number(inputNota2.value);

    const media = 7;
    const h1 = document.querySelector('h1');
    const n = (nota1 + nota2) / 2;
    const aprovado = n >= media;

    if (aprovado) {
        h1.textContent = `O ${nome} foi aprovado.`
    }
    else {
        h1.textContent = `O ${nome} foi reprovado.`
    }
}