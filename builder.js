/*
O padrão Builder (Construtor) é usado quando queremos criar objetos complexos passo a passo,
permitindo diferentes representações do mesmo processo de construção. Ele separa a construção
do objeto de sua representação, permitindo que o mesmo processo de construção crie diferentes objetos.
*/

class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  listParts() {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

class Builder {
  constructor() {
    this.product = null;
  }

  createProduct() {
    this.product = new Product();
  }

  buildPartA() {
    this.product.addPart('Part A');
  }

  buildPartB() {
    this.product.addPart('Part B');
  }

  getResult() {
    return this.product;
  }
}

class Director {
  constructor(builder) {
    this.builder = builder;
  }

  construct() {
    this.builder.createProduct();
    this.builder.buildPartA();
    this.builder.buildPartB();
  }
}

// Exemplo de uso
const builder = new Builder();
const director = new Director(builder);

director.construct();
const product = builder.getResult();
product.listParts();

/*
Nesse exemplo, temos a classe Product, que é o objeto que queremos construir.
Ela possui um array chamado parts para armazenar as partes do produto.

A classe Builder é responsável por construir o objeto Product.
Ela possui métodos como createProduct, buildPartA e buildPartB para adicionar partes ao produto.
O método getResult retorna o produto construído.

A classe Director é opcional, mas pode ser usada para controlar o processo de construção.
Ela recebe um objeto Builder no construtor e usa os métodos desse builder para construir
o produto de acordo com uma sequência específica. No exemplo, a sequência é criar o produto,
construir a Part A e construir a Part B.

No exemplo de uso, criamos uma instância do Builder e uma instância do Director passando o builder.
Em seguida, chamamos o método construct do director para iniciar o processo de construção.
Por fim, obtemos o resultado chamando o método getResult do builder e exibimos as partes
do produto chamando o método listParts do produto.

O padrão Builder permite que você crie objetos complexos de maneira flexível,
separando a lógica de construção do objeto da própria classe do objeto.
Isso permite diferentes representações do processo de construção e facilita a criação de
objetos com diferentes configurações.
*/