"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = (function () {
    function Carro(modelo, numeroPorta) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numPortas = numeroPorta;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
exports.Carro = Carro;
exports.outraCoisa = 'Teste';
