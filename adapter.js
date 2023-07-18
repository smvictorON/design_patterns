/*
O padrão Adapter (Adaptador) é usado quando queremos permitir que objetos com interfaces
incompatíveis trabalhem juntos. Ele converte a interface de um objeto em outra interface
esperada pelos clientes, permitindo que objetos com funcionalidades diferentes se
comuniquem de forma transparente.
*/

// Interface esperada pelos clientes
class Target {
  request() {
    throw new Error('Target method request must be implemented.');
  }
}

// Objeto existente com interface incompatível
class Adaptee {
  specificRequest() {
    console.log('Adaptee specific request.');
  }
}

// Adaptador
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    console.log('Adapter converts request.');
    this.adaptee.specificRequest();
  }
}

// Exemplo de uso
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

adapter.request();

/*
Nesse exemplo, temos a classe Target, que define a interface esperada pelos clientes.
Ela possui um método chamado request, que será utilizado pelos clientes.

A classe Adaptee é o objeto existente com uma interface incompatível.
Ela possui um método chamado specificRequest, que não corresponde à interface esperada pelos clientes.

O Adapter é a classe adaptadora que herda da classe Target e recebe uma instância do Adaptee
como parâmetro no construtor. O método request do Adapter converte a chamada de request do
cliente em uma chamada de specificRequest do Adaptee.

No exemplo de uso, criamos uma instância do Adaptee e uma instância do Adapter,
passando o Adaptee como parâmetro. Quando chamamos o método request no Adapter,
ele converte a chamada e executa a funcionalidade do Adaptee.

O padrão Adapter permite a integração de objetos com interfaces incompatíveis,
facilitando a reutilização de código existente e promovendo a interoperabilidade entre diferentes classes.
Ele é útil quando temos classes ou bibliotecas existentes que não correspondem à interface necessária
pelos clientes, permitindo que essas classes sejam adaptadas e usadas sem a necessidade de
alterações em seu código-fonte original.
*/
