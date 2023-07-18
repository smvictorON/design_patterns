/*
O padrão Template Method (Método de Modelo) é usado quando queremos definir um esqueleto de um
algoritmo em uma classe base, deixando alguns passos específicos para as subclasses implementarem.
Ele permite que as subclasses personalizem certos passos de um algoritmo sem alterar sua estrutura geral.
*/

// Classe base com o método de modelo
class AbstractClass {
  templateMethod() {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.hook();
  }

  baseOperation1() {
    console.log('Executing base operation 1.');
  }

  baseOperation2() {
    console.log('Executing base operation 2.');
  }

  hook() {}
}

// Subclasse que implementa passos específicos
class ConcreteClass extends AbstractClass {
  requiredOperation1() {
    console.log('Executing required operation 1 specific to ConcreteClass.');
  }

  hook() {
    console.log('Executing hook operation specific to ConcreteClass.');
  }
}

// Exemplo de uso
const concreteClass = new ConcreteClass();
concreteClass.templateMethod();

/*
Nesse exemplo, temos a classe AbstractClass, que é a classe base que define o esqueleto do algoritmo.
Ela possui um método chamado templateMethod que define a sequência de passos do algoritmo. Além disso,
ela possui métodos baseOperation1 e baseOperation2 que são implementações padrão desses passos,
mas podem ser substituídos pelas subclasses, se necessário. Também temos o método hook, que é
um gancho opcional que as subclasses podem optar por implementar.

A classe ConcreteClass é uma subclasse que herda da AbstractClass e implementa os passos específicos
requiredOperation1 e hook. Esses métodos são chamados no método templateMethod da classe base.

No exemplo de uso, criamos uma instância da ConcreteClass e chamamos o método templateMethod.
Isso aciona a execução do algoritmo definido na classe base, com a ordem dos passos determinada
pelo método templateMethod. Os passos específicos da ConcreteClass são executados conforme
implementado nas respectivas substituições.

O padrão Template Method é útil quando queremos definir um esqueleto comum de um algoritmo,
permitindo que as subclasses personalizem certos passos conforme necessário. Ele promove
a reutilização de código e permite a extensão do algoritmo sem modificar sua estrutura geral.
O padrão Template Method é comumente usado em frameworks e bibliotecas, onde a classe base
define o fluxo geral e as subclasses fornecem implementações específicas para partes do algoritmo.
*/