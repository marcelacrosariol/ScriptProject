// Define classe Animal
function Animal(especie, raca, barulho) {
    this.especie = especie || "nao definida"
    this.raca = raca || 'nao definida';
    this.barulho = barulho || 'Grunhir';
}

// Todo animal tem uma método fazerBarulho
Animal.prototype.fazerBarulho = function() {
    return this.barulho;
}

// Define classe Gato
function Gato(raca, barulho) {
    Animal.call(this,"gato", raca, barulho);
}

// Define classe Cao
function Cao(raca, barulho) {
    Animal.call(this, "cao", raca, barulho);
}

// Cao e Gato herdam de Animal
Cao.prototype = Object.create(Animal.prototype);
Gato.prototype = Object.create(Animal.prototype);

function Manada() {
    listaManada = [];
}

var manadaPrototipo = new Manada();
manadaPrototipo.adicionar = function (animal) {
    listaManada.push(animal);
}

manadaPrototipo.imprimirVirgula = function () {
    var manadaVirgula = [];
    for (var i = 0; i < listaManada.length; i++) {
        manadaVirgula.push("Especie: " + listaManada[i].especie + " Raca: " + listaManada[i].raca + " Barulho: " + listaManada[i].fazerBarulho());
    }
    return manadaVirgula.join(", ");
}

manadaPrototipo.imprimirSustenido = function () {
    var manadaSustenido = [];
    for (var i = 0; i < listaManada.length; i++) {
        manadaSustenido.push("Especie: " + listaManada[i].especie + " Raca: " + listaManada[i].raca + " Barulho: " + listaManada[i].fazerBarulho());
    }
    return manadaSustenido.join(" # ");
}

// Testes

var lizzie = new Gato('Persa', 'miado');
var tobi = new Animal();

console.log(lizzie.fazerBarulho());
console.log(tobi.fazerBarulho());

manadaPrototipo.prototype = Manada.prototype;
Manada.prototype = manadaPrototipo;

var manada = new Manada();
manada.adicionar(lizzie);
manada.adicionar(tobi);

console.log(manada.imprimirVirgula());
console.log(manada.imprimirSustenido());