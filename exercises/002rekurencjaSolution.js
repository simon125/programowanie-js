/**
    Zadanie: Liczenie Silnii

    Napisz funkcję rekurencyjną, która obliczy silnię liczby całkowitej. Silnia liczby n oznacza iloczyn wszystkich liczb całkowitych od 1 do n.

    Na przykład:

    Silnia 0 wynosi 1.
    Silnia 5 wynosi 5 * 4 * 3 * 2 * 1 = 120.
    Przykładowe wywołania funkcji:

    console.log(silnia(0)); // Powinno zwrócić 1
    console.log(silnia(5)); // Powinno zwrócić 120
    console.log(silnia(7)); // Powinno zwrócić 5040
 */

function silnia(n) {
  // Warunek zakończenia rekurencji
  if (n === 0) {
    return 1;
  } else {
    // Wywołanie rekurencyjne
    return n * silnia(n - 1);
  }
}

/**
 * Zadanie: Liczba Wystąpień Litery w Stringu
 *
 * Napisz funkcję rekurencyjną, która zliczy liczbę wystąpień konkretnej litery w danym stringu. Funkcja powinna przyjmować dwa argumenty: string oraz literę, a następnie zwracać liczbę wystąpień tej litery w danym ciągu znaków.
 *
 * Przykładowe wywołania funkcji:
 *
 * console.log(liczbaWystąpieńLitery("programming", "m")); // Powinno zwrócić 2
 * console.log(liczbaWystąpieńLitery("Hello World", "l")); // Powinno zwrócić 3
 * console.log(liczbaWystąpieńLitery("JavaScript is fun", "z")); // Powinno zwrócić 0
 *
 */

function liczbaWystąpieńLitery(str, litera) {
  // Warunek zakończenia rekurencji
  if (str.length === 0) {
    return 0;
  } else {
    // Jeżeli pierwszy znak równy jest szukanej literze, zwiększ licznik
    // i rekurencyjnie sprawdź resztę stringa
    return (
      (str[0] === litera ? 1 : 0) + liczbaWystąpieńLitery(str.slice(1), litera)
    );
  }
}
