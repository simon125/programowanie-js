/**
 * Zadanie: Książka
 *
 * Napisz klasę, która reprezentuje książkę. Klasa powinna zawierać informacje takie jak tytuł, autor, rok wydania i liczba stron.
 *
 * Stwórz klasę o nazwie Ksiazka.
 * Użyj konstruktora do ustawienia właściwości klasy takich jak tytuł, autor, rokWydania i liczbaStron.
 * Dodaj metodę informacje(), która zwraca string zawierający informacje o książce w formie czytelnego komunikatu.
 */

class Książka {
  constructor(tytuł, autor, rokWydania, liczbaStron) {
    this.tytuł = tytuł; // this w przypadku klas wskazuje na referencję do nowostworzonego obiektu
    this.autor = autor;
    this.rokWydania = rokWydania;
    this.liczbaStron = liczbaStron;
  }

  informacje() {
    console.log(this); // this w przypadku klas wskazuje na referencję do nowostworzonego obiektu

    return `Książka nazywa się ${this.tytuł} napisana przez ${this.autor}`;
  }
}

const book1 = new Książka("harry potter", "rowling", 2000, 200);

// console.log(book1.informacje());

/**
 * Zadanie: Kalkulator
 * Napisz klasę, która reprezentuje prosty kalkulator. Kalkulator powinien mieć podstawowe funkcje matematyczne, takie jak dodawanie, odejmowanie, mnożenie i dzielenie.
 *
 * Stwórz klasę o nazwie Kalkulator.
 * Klasa powinna mieć metodę dodaj(a, b), która zwraca sumę dwóch liczb a i b.
 * Klasa powinna mieć metodę odejmij(a, b), która zwraca różnicę między liczbami a i b.
 * Klasa powinna mieć metodę pomnóż(a, b), która zwraca iloczyn liczb a i b.
 * Klasa powinna mieć metodę podziel(a, b), która zwraca wynik dzielenia liczby a przez b. Jeśli b wynosi 0, zwróć komunikat o błędzie.
 *
 * const kalkulator = new Kalkulator();
 *
 * console.log(kalkulator.dodaj(5, 3)); // Powinno zwrócić 8
 * console.log(kalkulator.odejmij(10, 4)); // Powinno zwrócić 6
 * console.log(kalkulator.pomnóż(2, 6)); // Powinno zwrócić 12
 * console.log(kalkulator.podziel(8, 2)); // Powinno zwrócić 4
 * console.log(kalkulator.podziel(6, 0)); // Powinno zwrócić komunikat o błędzie
 *
 */

/**
 * Zadanie: Symulacja Otoczenia z Wykorzystaniem Klas
 *
 * Stwórz trzy klasy, które reprezentują różne elementy otoczenia. Każda klasa powinna zawierać metody i pola opisujące charakterystyczne cechy danego elementu.
 *
 * Klasa Drzewo:
 *
 * Pola:
 * gatunek (np. dąb, sosna, klon)
 * wysokosc (wyrażona w metrach)
 * Metody:
 * rosnij() - zwiększa wysokość drzewa.
 *
 * Klasa Zwierzę:
 *
 * Pola:
 *   gatunek (np. lew, zebra, kangur)
 *   waga (wyrażona w kilogramach)
 *   Metody:
 *   jedz() - zwiększa wagę zwierzęcia.
 *
 * Klasa Samochód:
 *
 * Pola:
 *   marka (np. Toyota, Ford, BMW)
 *   predkosc (wyrażona w kilometrach na godzinę)
 *   Metody:
 *   przyspiesz() - zwiększa prędkość samochodu.
 **/

/**
 *
 * TODO LISTA z klasami
 */

class TodoList {
  /**
   * 1. [X] przechowywanie stanu listy - arrayka ze stringami
   * 2. [X] dodawanie todo
   * 3. [X] wyświetlanie listy
   * 4. [X] usuwanie
   * 5. [X] doprowadzenie tego wszystkiego do porządku
   */

  // stan aplikacji - stan listy todos
  list = [];
  // elementy DOM
  input = document.getElementById("todoName");
  submitBtn = document.getElementById("submitBtn");
  output = document.getElementById("todoOutput");

  constructor() {
    const obiekt = { name: "Jon" };

    this.output.addEventListener(
      "click",
      this.handleOutputListClick.bind(this)
    );
    this.submitBtn.addEventListener(
      "click",
      this.handleSubmitClick.bind(obiekt)
    );
  }

  handleOutputListClick(event) {
    // jezeli event.target.id nie jest równe  todoOutput to mamy pewność ze
    // klinkeliśmy element LI i chcemy wykonać usuwanie
    if (event.target.id !== "todoOutput") {
      const indexDoUsuniecia = event.target.id;
      this.deleteTodo(indexDoUsuniecia);
      this.renderList();
    }
  }

  addTodo(newTodo) {
    this.list.push(newTodo);
  }

  // deleteTodo(indexToDelete) {
  //   this.list = this.list.filter((elemnt, index) => {
  //     if (index !== indexToDelete * 1) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }
  deleteTodo(indexToDelete) {
    this.list = this.list.filter(
      (elemnt, index) => index !== indexToDelete * 1
    );
  }

  handleSubmitClick() {
    console.log(this);
    // this.addTodo(this.input.value);
    // this.renderList();
  }

  renderList() {
    this.output.innerHTML = this.list
      .map((listItem, index) => `<li id="${index}">${listItem}</li>`)
      .join("");
  }

  logTodoList() {
    console.log(this.list);
  }
}

new TodoList();
