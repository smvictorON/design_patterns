/*
O padrão Observer (Observador) é usado quando queremos estabelecer uma relação de
comunicação entre objetos, onde um objeto (sujeito) notifica automaticamente outros
objetos (observadores) sobre qualquer mudança de estado. Os observadores podem se
inscrever e cancelar a inscrição para receber as notificações.
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    console.log('Notifying observers...');
    this.observers.forEach((observer) => {
      observer.update();
    });
  }

  // Outros métodos e lógica da classe...
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`${this.name} received a notification.`);
    // Lógica para lidar com a notificação...
  }
}

// Exemplo de uso
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
const observer3 = new Observer('Observer 3');

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notify();

subject.unsubscribe(observer2);

subject.notify();

/*
Nesse exemplo, temos a classe Subject, que é o objeto que será observado.
Ela possui um array chamado observers para armazenar os observadores inscritos.

A classe Observer é responsável por representar os observadores.
Cada observador possui um nome e um método update que será chamado quando receber uma notificação do sujeito.

No exemplo de uso, criamos uma instância do Subject e três instâncias do Observer.
Em seguida, inscrevemos os observadores no sujeito usando o método subscribe.
Quando chamamos o método notify no sujeito, todos os observadores são notificados
e seus métodos update são chamados.

No exemplo, todos os observadores recebem uma notificação inicialmente.
Em seguida, cancelamos a inscrição do Observer 2 usando o método unsubscribe.
Quando chamamos o método notify novamente, apenas o Observer 1 e o Observer 3 recebem a notificação.

O padrão Observer permite que objetos sejam notificados automaticamente sobre mudanças
de estado em outros objetos, estabelecendo uma comunicação de forma desacoplada e flexível.
Isso é útil em situações em que vários objetos precisam reagir a uma alteração em um objeto central,
como em sistemas de eventos, atualizações de interface de usuário, notificações de dados, entre outros.
*/