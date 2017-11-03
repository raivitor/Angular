"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = (function () {
    function Pessoa(_nome, _carro) {
        this.nome = _nome;
        this.carroPreferido = _carro;
    }
    Pessoa.prototype.DizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.DizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.ComprarCarro = function (_carro) {
        this.carro = _carro;
    };
    Pessoa.prototype.DizerCarro = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
