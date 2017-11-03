"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
var carroA = new Carro_1.default("carroA", 4);
var carroB = new Carro_1.default("Carrob", 3);
var carroC = new Carro_1.default("carroC", 3);
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default("Rua das ruas", listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
var cliente = new Pessoa_1.default("Rai", "Camaro");
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.DizerCarroPreferido()) {
        cliente.ComprarCarro(carro);
    }
});
console.log(cliente.DizerCarro());
