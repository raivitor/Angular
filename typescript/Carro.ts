export class Carro{
    private modelo: string
    private numPortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroPorta: number){
        this.modelo = modelo;
        this.numPortas = numeroPorta
    }
    public acelerar(): void{
        this.velocidade = this.velocidade +10;
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }
}

export let outraCoisa: string 'Teste'