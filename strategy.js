/*
O padrão Strategy (Estratégia) é usado quando queremos ter diferentes algoritmos ou
comportamentos encapsulados em classes separadas e intercambiáveis. Ele permite que
o cliente selecione dinamicamente uma estratégia específica para resolver um
problema sem depender de implementações concretas.
*/

// Interface comum para as estratégias
class Strategy {
  execute() {
    throw new Error('Strategy method execute must be implemented.');
  }
}

// Estratégia concreta A
class ConcreteStrategyA extends Strategy {
  execute() {
    console.log('Executing strategy A.');
    // Lógica específica da estratégia A...
  }
}

// Estratégia concreta B
class ConcreteStrategyB extends Strategy {
  execute() {
    console.log('Executing strategy B.');
    // Lógica específica da estratégia B...
  }
}

// Estratégia concreta C
class ConcreteStrategyC extends Strategy {
  execute() {
    console.log('Executing strategy C.');
    // Lógica específica da estratégia C...
  }
}

// Contexto que utiliza a estratégia
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.execute();
  }
}

// Exemplo de uso
const strategyA = new ConcreteStrategyA();
const strategyB = new ConcreteStrategyB();
const strategyC = new ConcreteStrategyC();

const context = new Context(strategyA);
context.executeStrategy(); // Executing strategy A

context.setStrategy(strategyB);
context.executeStrategy(); // Executing strategy B

context.setStrategy(strategyC);
context.executeStrategy(); // Executing strategy C


/*
Nesse exemplo, temos a classe abstrata Strategy, que define a interface comum para as estratégias.
Ela possui um método execute que será implementado pelas estratégias concretas.

As classes ConcreteStrategyA, ConcreteStrategyB e ConcreteStrategyC são as estratégias concretas,
que estendem a classe Strategy e fornecem suas próprias implementações do método execute.

O Context é o contexto que utiliza a estratégia. Ele recebe uma estratégia no construtor e possui
métodos para definir uma nova estratégia e executar a estratégia atual.

No exemplo de uso, criamos instâncias das estratégias ConcreteStrategyA, ConcreteStrategyB e
ConcreteStrategyC. Em seguida, criamos uma instância do Context passando a estratégia strategyA.
Chamamos o método executeStrategy no contexto, que executa a estratégia atualmente definida.

Em seguida, podemos alterar a estratégia do contexto chamando o método setStrategy e passando uma
nova estratégia. Ao chamar executeStrategy novamente, a nova estratégia será executada.

O padrão Strategy permite a seleção dinâmica de diferentes algoritmos ou comportamentos, encapsulando-os
em classes separadas e intercambiáveis. Isso promove a flexibilidade e a extensibilidade do código,
permitindo que diferentes estratégias sejam facilmente adicionadas ou modificadas sem afetar o cliente.
O padrão Strategy é útil em situações em que diferentes abordagens para resolver um problema são necessárias
ou quando o comportamento de um objeto precisa ser parametrizado com diferentes estratégias.
*/