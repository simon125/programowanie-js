/**
 * Zadanie: Książka
 *
 * Napisz klasę, która reprezentuje książkę. Klasa powinna zawierać informacje takie jak tytuł, autor, rok wydania i liczba stron.
 *
 * Stwórz klasę o nazwie Ksiazka.
 * Użyj konstruktora do ustawienia właściwości klasy takich jak tytuł, autor, rokWydania i liczbaStron.
 * Dodaj metodę informacje(), która zwraca string zawierający informacje o książce w formie czytelnego komunikatu.
 */

class Ksiazka {
  constructor(tytul, autor, rokWydania, liczbaStron) {
    this.tytul = tytul;
    this.autor = autor;
    this.rokWydania = rokWydania;
    this.liczbaStron = liczbaStron;
  }

  informacje() {
    return `Tytuł: ${this.tytul}, Autor: ${this.autor}, Rok Wydania: ${this.rokWydania}, Liczba Stron: ${this.liczbaStron}`;
  }
}

// Przykładowe użycie
const mojaKsiazka = new Ksiazka("Harry Potter", "J.K. Rowling", 1997, 320);
console.log(mojaKsiazka.informacje());

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

class Kalkulator {
  dodaj(a, b) {
    return a + b;
  }

  odejmij(a, b) {
    return a - b;
  }

  pomnóż(a, b) {
    return a * b;
  }

  podziel(a, b) {
    if (b === 0) {
      return "Błąd: nie można dzielić przez 0.";
    } else {
      return a / b;
    }
  }
}

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
