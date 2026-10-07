const form = document.forms['endereco']
form.addEventListener('submit', salvar)

async function buscarCep() {
    const urlBase = 'https://viacep.com.br/ws/?/json'
    const cep = document.querySelector('#cep').value
    const url = urlBase.replace('?', cep)

    const resposta = await fetch(url)
    const endereco = await resposta.json()

    form.logradouro.value = endereco.logradouro
    form.bairro.value = endereco.bairro
    form.municipio.value = endereco.localidade
    form.estado.value = endereco.estado

    console.log(endereco)
}

async function salvar(evento) {
    evento.preventDefault()
    const url = 'https://6ac63a04bea0e72cf5c8bb67.mockapi.io/enderecos'

    const endereco = {
        cep: form.cep.value,
        logradouro: form.logradouro.value,
        bairro: form.bairro.value,
        municipio: form.municipio.value
    }

    const resposta = await fetch(url, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(endereco)
    })

    if(resposta.ok) {
        alert('O endereço foi salvo!')
    }
}