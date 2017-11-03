import { Carro } from './Carro'
export default class Pessoa{
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(_nome: string, _carro: string){
        this.nome = _nome
        this.carroPreferido = _carro
    }

    public DizerNome(): string{
        return this.nome
    }

    public DizerCarroPreferido():string{
        return this.carroPreferido
    }

    public ComprarCarro(_carro: Carro): void{
        this.carro = _carro
    }

    public DizerCarro(): Carro{
        return this.carro
    }
}