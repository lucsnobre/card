"use strict"

const categorias = [
    {nome: 'celular', icon: 'celular.png'},
    {nome: 'informatica', icon: 'informatica.png'},
    {nome: 'games', icon: 'controle.png'},
    {nome: 'moveis', icon: 'moveis.png'}
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

    lista.appendChild(novoItem)
}

categorias.forEach(criarMenu)
