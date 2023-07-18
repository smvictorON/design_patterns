/*
O padrão Singleton é amplamente utilizado quando desejamos
garantir que uma classe tenha apenas uma instância em todo o programa,
e que essa instância seja facilmente acessível de qualquer lugar.
*/

let instance = null;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  // Outros métodos da classe...
}

module.exports = Singleton;

/*
Nesse exemplo, a classe Singleton é implementada como uma classe JavaScript convencional.
A variável instance é declarada fora da classe como uma variável global para armazenar a única instância da classe.

Dentro do construtor da classe, verificamos se instance é nula.
Se for o caso, atribuímos a instância atual à variável instance.
Isso garante que somente uma instância da classe seja criada e armazenada na variável instance.

Para usar a classe Singleton em outros módulos, você pode importá-la assim:
*/

const Singleton = require('./Singleton');

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true

/*
Nesse exemplo, criamos duas instâncias da classe Singleton, instance1 e instance2.
Ao compará-las com o operador ===, verificamos que elas são a mesma instância,
confirmando assim que o padrão Singleton está funcionando corretamente.

Lembrando que, em JavaScript, o padrão Singleton pode ser burlado caso não sejam
tomadas medidas adicionais para restringir a criação de instâncias extras.
É importante ter cuidado ao utilizar esse padrão em JavaScript e considerar outras abordagens,
como módulos ou injeção de dependência, dependendo do contexto em que você está trabalhando.
*/