/*
A Inversão de Dependência sugere que módulos de alto nível não devem
depender diretamente de módulos de baixo nível.
Ambos devem depender de abstrações.
*/

// Classe Carro que recebe o motor por meio da injeção de dependência
class Carro {
  constructor(motor) {
    this.motor = motor;
  }

  ligarCarro() {
    this.motor.ligar();
  }
}

// Interface do Motor
class MotorInterface {
  ligar() {
    throw new Error("Método 'ligar()' precisa ser implementado.");
  }
}

// Motor a gasolina que implementa a interface
class MotorGasolina extends MotorInterface {
  ligar() {
    console.log("Motor a gasolina ligado.");
  }
}

// Motor elétrico que implementa a interface
class MotorEletrico extends MotorInterface {
  ligar() {
    console.log("Motor elétrico ligado.");
  }
}

// Agora, podemos criar instâncias do carro com diferentes tipos de motores:
const motorGasolina = new MotorGasolina();
const motorEletrico = new MotorEletrico();

const carroGasolina = new Carro(motorGasolina);
const carroEletrico = new Carro(motorEletrico);

// Vamos ligar os carros:
carroGasolina.ligarCarro(); // Saída: "Motor a gasolina ligado."
carroEletrico.ligarCarro(); // Saída: "Motor elétrico ligado."