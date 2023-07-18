/*
O padrão Decorator (Decorador) é usado quando queremos adicionar funcionalidades extras
a um objeto existente de forma dinâmica, sem modificar sua estrutura original.
Ele permite que um objeto seja estendido com novos comportamentos, envolvendo-o em
objetos decoradores que fornecem funcionalidades adicionais.
*/

// Interface comum para componentes e decoradores
class Component {
  operation() {
    throw new Error('Component method operation must be implemented.');
  }
}

// Componente concreto
class ConcreteComponent extends Component {
  operation() {
    console.log('Executing operation in ConcreteComponent.');
  }
}

// Decorador base
class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }

  operation() {
    this.component.operation();
  }
}

// Decorador concreto
class ConcreteDecoratorA extends Decorator {
  operation() {
    super.operation();
    this.additionalOperationA();
  }

  additionalOperationA() {
    console.log('Executing additional operation A in ConcreteDecoratorA.');
  }
}

// Outro decorador concreto
class ConcreteDecoratorB extends Decorator {
  operation() {
    super.operation();
    this.additionalOperationB();
  }

  additionalOperationB() {
    console.log('Executing additional operation B in ConcreteDecoratorB.');
  }
}

// Exemplo de uso
const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

decoratorB.operation();

/*
Nesse exemplo, temos a classe Component, que define uma interface comum para componentes e decoradores.
Ela possui um método chamado operation, que será implementado pelos componentes e decoradores concretos.

A classe ConcreteComponent é o componente concreto existente. Ela implementa a interface Component
e possui uma implementação própria do método operation.

O Decorator é a classe base para os decoradores. Ela recebe uma instância de Component no construtor
e implementa o método operation delegando a chamada para o componente.

Os decoradores concretos, ConcreteDecoratorA e ConcreteDecoratorB, estendem a classe Decorator
e adicionam funcionalidades extras antes ou depois da chamada ao método operation.

No exemplo de uso, criamos uma instância do ConcreteComponent e, em seguida, criamos instâncias dos
decoradores ConcreteDecoratorA e ConcreteDecoratorB, passando o componente como parâmetro para cada decorador.
Quando chamamos o método operation no decorador decoratorB, ele executa a sequência de chamadas nos
decoradores e no componente, adicionando as funcionalidades extras de cada decorador ao longo do processo.

O padrão Decorator permite a adição dinâmica de funcionalidades extras a um objeto, sem modificar sua
estrutura original. Ele é útil quando queremos estender o comportamento de um objeto sem a necessidade
de criar subclasses ou modificar o código-fonte original do objeto. O padrão Decorator promove a
flexibilidade e a reutilização de código ao permitir a combinação de funcionalidades de maneira modular.
*/