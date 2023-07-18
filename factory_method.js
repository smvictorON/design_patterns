/*
O padrão Factory Method (Método de Fábrica) é usado quando desejamos criar objetos,
mas não sabemos exatamente qual classe concreta deve ser instanciada no momento da criação.
Em vez disso, usamos um método de fábrica para criar o objeto desejado com base em alguma lógica ou condições.
*/

class Product {
  constructor(name) {
    this.name = name;
  }

  // Métodos da classe...
}

class ConcreteProductA extends Product {
  constructor() {
    super('Product A');
  }

  // Implementação específica de ConcreteProductA...
}

class ConcreteProductB extends Product {
  constructor() {
    super('Product B');
  }

  // Implementação específica de ConcreteProductB...
}

class ProductFactory {
  createProduct(type) {
    switch (type) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default:
        throw new Error('Tipo de produto inválido.');
    }
  }
}

// Exemplo de uso
const factory = new ProductFactory();

const productA = factory.createProduct('A');
console.log(productA.name); // Output: Product A

const productB = factory.createProduct('B');
console.log(productB.name); // Output: Product B

/*
Nesse exemplo, temos a classe abstrata Product, que define a estrutura básica de um produto.
Em seguida, temos as classes concretas ConcreteProductA e ConcreteProductB,
que herdam da classe Product e fornecem suas implementações específicas.

A classe ProductFactory é a fábrica de produtos, responsável por criar objetos Product
com base em um tipo fornecido. No método createProduct, usamos uma instrução switch para
determinar qual classe concreta deve ser instanciada com base no tipo fornecido.

No exemplo de uso, criamos uma instância da fábrica ProductFactory. Em seguida,
usamos o método createProduct para criar objetos de produtos específicos,
passando o tipo desejado como parâmetro. Assim, a fábrica retorna uma instância
adequada do produto solicitado.

O padrão Factory Method é útil quando temos diferentes tipos de objetos a serem criados,
mas queremos desacoplar o código que cria esses objetos da lógica de uso.
Ele permite que a lógica de criação seja centralizada em uma única classe (a fábrica),
facilitando a manutenção e a extensibilidade do código.
*/