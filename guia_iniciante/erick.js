const carros = [1, 2, 3]
console.log(carros)


function removeUltimoItem(lista) {
    //const novaLista = lista.filter(item => item != 3)
    lista.pop()
}

removeUltimoItem(carros)
removeUltimoItem(carros)
console.log(carros + 's')