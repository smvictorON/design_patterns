/*
O padrão Prototype (Protótipo) é usado quando queremos criar objetos a partir
de um protótipo existente, permitindo a clonagem de objetos sem depender de suas
classes concretas. Ele fornece uma forma flexível de criar novos objetos,
evitando a necessidade de instanciar uma classe a partir do zero.

Em JavaScript, o padrão Prototype é nativamente suportado por meio do recurso
de prototipagem da linguagem.
*/

// Objeto protótipo
const prototype = {
  name: 'Prototype Object',

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },

  // Outros métodos e propriedades do objeto protótipo...
};

// Criação de novos objetos a partir do protótipo
const object1 = Object.create(prototype);
object1.name = 'Object 1';

const object2 = Object.create(prototype);
object2.name = 'Object 2';

// Exemplo de uso
object1.greet(); // Output: Hello, I'm Object 1
object2.greet(); // Output: Hello, I'm Object 2


/*
Nesse exemplo, temos um objeto prototype que serve como protótipo para outros objetos.
Ele possui uma propriedade name e um método greet que imprime uma saudação usando o nome.

A criação de novos objetos é feita usando Object.create(prototype), em que prototype
é o objeto protótipo a partir do qual o novo objeto será criado. Em seguida, podemos
definir propriedades específicas para cada objeto criado, como o nome.

No exemplo de uso, criamos dois objetos object1 e object2 a partir do mesmo protótipo.
Cada objeto possui seu próprio nome definido, mas compartilha o método greet do protótipo.

O padrão Prototype permite a criação de objetos de forma eficiente, evitando a necessidade
de criar várias instâncias de uma classe. Ele é especialmente útil quando a criação de objetos
é complexa ou quando desejamos evitar a duplicação de lógica em várias classes. O padrão
Prototype permite que objetos sejam clonados a partir de um protótipo existente, facilitando
a criação de objetos com configurações similares.
*/