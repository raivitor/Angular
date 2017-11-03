"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = (function () {
    function Concessionaria(_endereco, listaDeCarros) {
        this.endereco = _endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
