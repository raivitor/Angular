import {Carro} from './Carro'

export class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(_endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = _endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }
}