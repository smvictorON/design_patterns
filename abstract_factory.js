/*
O padrão Abstract Factory (Fábrica Abstrata) é usado quando precisamos criar famílias
de objetos relacionados ou dependentes, mas queremos garantir que esses objetos sejam
criados de forma consistente e compatível. Ele fornece uma interface para criar diferentes
tipos de objetos relacionados sem especificar suas classes concretas.
*/

// Abstração dos produtos relacionados
class AbstractProductA {
  constructor() {
    if (new.target === AbstractProductA) {
      throw new Error('AbstractProductA cannot be instantiated directly.');
    }
  }

  // Métodos abstratos dos produtos A...
}

class AbstractProductB {
  constructor() {
    if (new.target === AbstractProductB) {
      throw new Error('AbstractProductB cannot be instantiated directly.');
    }
  }

  // Métodos abstratos dos produtos B...
}

// Implementações concretas dos produtos relacionados
class ConcreteProductA1 extends AbstractProductA {
  // Implementação específica de ConcreteProductA1...
}

class ConcreteProductA2 extends AbstractProductA {
  // Implementação específica de ConcreteProductA2...
}

class ConcreteProductB1 extends AbstractProductB {
  // Implementação específica de ConcreteProductB1...
}

class ConcreteProductB2 extends AbstractProductB {
  // Implementação específica de ConcreteProductB2...
}

// Abstração da fábrica abstrata
class AbstractFactory {
  createProductA() {
    throw new Error('AbstractFactory method createProductA must be overridden.');
  }

  createProductB() {
    throw new Error('AbstractFactory method createProductB must be overridden.');
  }
}

// Implementações concretas da fábrica abstrata
class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }

  createProductB() {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }

  createProductB() {
    return new ConcreteProductB2();
  }
}

// Exemplo de uso
const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();

console.log(productA1); // Output: ConcreteProductA1 object
console.log(productB1); // Output: ConcreteProductB1 object

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();

console.log(productA2); // Output: ConcreteProductA2 object
console.log(productB2); // Output: ConcreteProductB2 object

/*
Nesse exemplo, temos a abstração dos produtos relacionados, AbstractProductA e AbstractProductB,
que são classes abstratas que definem a estrutura básica dos produtos A e B.
As implementações concretas desses produtos são ConcreteProductA1, ConcreteProductA2,
ConcreteProductB1 e ConcreteProductB2.

Em seguida, temos a abstração da fábrica abstrata AbstractFactory, que define a interface para
criar os produtos relacionados. Essa classe possui métodos abstratos createProductA e createProductB,
que devem ser implementados pelas subclasses concretas.

As subclasses concretas ConcreteFactory1 e ConcreteFactory2 estendem a AbstractFactory e implementam
seus métodos createProductA e createProductB para retornar as instâncias corretas dos produtos relacionados.

No exemplo de uso, criamos uma instância da ConcreteFactory1 e usamos seus métodos para criar os
produtos A e B correspondentes. Em seguida, criamos uma instância da ConcreteFactory2 e fazemos o mesmo.

O padrão Abstract Factory permite que diferentes famílias de objetos relacionados sejam criadas de
forma consistente, garantindo que os produtos A e B sejam compatíveis entre si.
Isso é útil quando temos produtos que dependem um do outro ou quando queremos garantir que um conjunto
específico de produtos seja usado em conjunto.
*/