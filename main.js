"use strict"

const categorias = [
    {nome: 'celular', icon: 'celular.png', cor: 'red'},
    {nome: 'informatica', icon: 'informatica.png', cor: 'blue'},
    {nome: 'games', icon: 'controle.png', cor: 'yellow'},
    {nome: 'moveis', icon: 'moveis.png', cor: 'green'}
]

function criarMenu (categoria){
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${categoria.cor}`

    lista.appendChild(novoItem)
}

categorias.forEach(criarMenu)
