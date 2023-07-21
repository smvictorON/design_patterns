/*
A injeção de dependência (DI) é um padrão de projeto que permite a um objeto receber suas
dependências de outros objetos, em vez de criá-las ou buscá-las sozinho.
Isso torna os objetos mais intercambiáveis e testáveis.
*/

// Este é o nosso objeto `Car`. Ele depende de um objeto `Engine`.
class Car {
  // O construtor `Car` recebe um objeto `Engine` como parâmetro.
  constructor(engine) {
    // O campo `this.engine` armazena o objeto `Engine`.
    this.engine = engine;
  }

  // O método `start()` usa o objeto `Engine` para iniciar o carro.
  start() {
    this.engine.start();
  }
}

// Este é o nosso objeto `EngineAP`.
class EngineAP {
  // O método `start()` inicia o motor.
  start() {
    console.log("Engine AP started");
  }
}

// Este é o nosso objeto `EngineEA`.
class EngineEA {
  // O método `start()` inicia o motor.
  start() {
    console.log("Engine EA started");
  }
}

// Aqui, criamos um objeto `Engine`.
const engineAP = new EngineAP();
const engineEA = new EngineEA();

// Aqui, criamos um objeto `Car` e injetamos o objeto `EngineAP` nele.
let car = new Car(engineAP);

// Aqui, iniciamos o carro.
car.start(); // Engine AP started

// Aqui, atribuimo um objeto `Car` e injetamos o objeto `EngineEA` nele.
car = new Car(engineEA);

// Aqui, iniciamos o carro.
car.start(); // Engine EA started