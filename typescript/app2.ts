import Carro, { outraCoisa as x } from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

let carroA = new Carro("carroA", 4)
let carroB = new Carro("Carrob", 3)
let carroC = new Carro("carroC", 3)
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria("Rua das ruas", listaDeCarros)

console.log(concessionaria.mostrarListaDeCarros())

let cliente = new Pessoa("Rai", "Camaro")

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.DizerCarroPreferido()){
        cliente.ComprarCarro(carro)
    }
})

console.log(cliente.DizerCarro())