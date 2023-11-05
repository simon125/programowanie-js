const renderNumebr = () => {};
// Omówienie funkcji anonimowych oraz wstęp do wywołań zwrotnych (będą kontynuowane w czasie bloku z Komunikacji z API)
// Omówienie funkcji strzałkowych

// function doSomething() {
//   console.log("Hello world");
// }
// doSomething();

// function addTwoNumbers(number1, number2) {
//   return number1 + number2;
// }

// const suma1 = addTwoNumbers(10, 10);

// const suma2 = addTwoNumbers(20, 10) + addTwoNumbers(20, "20");

// addTwoNumbers(null, undefined);

// const liczba1 = null;
// const liczba2 = 10;

// addTwoNumbers(liczba1, liczba2);

// function substractTwoNumbers2(number1, number2) {
//   return number1 - number2;
// }

// const substractTwoNumbers = (number1, number2) => {
//   return number1 - number2;
// };

// przykład 1
// na przykładzie legendarnej funkcji addTwoNumbers
// rozszerzenie funkcji addTwoNumbers o callbacka np do wyświetlania

// const addTwoNumbers = (a, b, cokolwiek) => {
//   const suma = a + b;

//   cokolwiek(suma);

//   return suma;
// };

// const wyswietlSumeWJakisFancySposob = (suma) => {
//   console.log(suma);
// };

// const wyswietlSume = (suma) => {
//   console.log({ wynikDodawnia: suma });
// };

// const suma = addTwoNumbers(20, 20, wyswietlSumeWJakisFancySposob);

// wyswietlSumeWJakisFancySposob(suma);

const addTwoNumbers = (a, b, callback) => {
  const suma = a + b;

  callback(suma);

  return suma;
};

const logowanieWartosci = () => console.log("hello");
const logowanieWartosci1 = (parametr) => console.log(parametr);

addTwoNumbers(50, 20, logowanieWartosci);
addTwoNumbers(50, 20, logowanieWartosci1);

addTwoNumbers(20, 20, (parametr) => {
  // console.log(parametr);
});

addTwoNumbers(20, 20, function (paramter) {
  // console.log("trelemorele");
  // console.log(paramter);
});

/**
 * funkcje do konatenacji stringów
 * gdzie 1 parametr to string 1
 * gdzie 2 parametr to string 2
 * gdzie 3 parametr to prawdopodobnie funkcja któ©a przyjmuje parametr i go wyświelta
 * może to też być undefined
 *
 */

function concatenateStrings(string1, string2, callback) {
  const strings = string1 + string2;

  if (callback !== undefined) {
    callback(strings);
  }
}

concatenateStrings("test1", "test2");
concatenateStrings("trelemorele", "test2", trelemorele);

// dodajNapisy('test', 'test1',undefined);
// dodajNapisy('test', 'test1',(parametr)=>console.log(parametr));

// przykład 2
// na przykładzie callbacków do eventListenerów - przycisk na dole strony

const liczby = [];

const referencjaDoPrzycisku = document.getElementById("przycisk");

/**
 * FUNCKJA INLINE
 */

referencjaDoPrzycisku.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    // wersja 1
    // liczby[i] = i;

    // wersja 2
    liczby.push(i * i);
  }

  // console.table(liczby);
});

/**
 * 1. zbudować strukture htmlową listy czyli elementy <li></li> w JS
 * 1b. elementy li powinny zawierać kontent pochodzący z tabllicy liczby
 * np.
 * <li>1</li>
 * <li>2</li>
 * <li>3</li>
 *
 * 2. elementy li umieścić w dokumencie html-owym pomiędzy tagami ul
 */

/**
 * 1. pobierz element span z id=counterOutput i zapisz go do zmiennej (getElementById)
 * 2. pobierz element button-y z labelkami +1 oraz -1 i przypisz je do zmiennych
 * buttony mają odpowiednio id-ki inrement (+1) oraz decrement (-1)
 * 3. dodaj eventListenery nasłuchujące na kliknięcia które wykonają funckje podmiany
 * wartości w spanie z outputem
 * 4. do podmiany wartości należy użyć np. propertisa innerHTML dostępnego w zmiennej przechowujacej
 * referencje do span-a z id=counterOutput
 * np. const suma = span.innerHTML + span.innerHTML // suma === 2 jeżeli wartośc
 * pomiędzy tagami span jest 1 np. <span>1</span>
 * 5. przypisanie nowej wartości w momencie kliknięcia przycisku + 1  może wyglądać następująco
 * span.innerHTML = span.innerHTML + 1;
 */

const counterOutput = document.getElementById("counterOutput");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click", () => {
  // console.log("hej");
  counterOutput.innerHTML = counterOutput.innerHTML * 1 + 1;
});

decrement.addEventListener("click", () => {
  // console.log("hej");
  counterOutput.innerHTML -= 1;
});

const generateListButton = document.getElementById("generateList");
const outputUl = document.getElementById("output");

generateListButton.addEventListener("click", () => {
  // [1,2,3,4,5]

  const nowaTablicaZLiczbami = liczby.map((number) => {
    return `<li>Liczba: <b>${number}</b></li>`;
  });

  const htmlStructure = nowaTablicaZLiczbami.join("");

  // console.log(htmlStructure);

  outputUl.innerHTML = htmlStructure;
});

/**
 * FUNCKJA PRZEKAZANA PRZEZ REFERENCJE
 */

// const populateNumbers = () => {
//   console.log("myszka jest nad przycikeim");
//   for (let i = 0; i < 5; i++) {
//     // wersja 1
//     // liczby[i] = i;

//     // wersja 2
//     liczby.push(i * i);
//   }

//   console.table(liczby);
// };

// referencjaDoPrzycisku.addEventListener("mouseover", populateNumbers);

// referencjaDoPrzycisku.addEventListener("mouseleave", () =>
//   console.log("opuszczam myszke")
// );

/**
document.querySelector('#przycisk').addEventListener('click',callbackFunction());
let liczby=[];
function callbackFunction(liczby){
  liczby.fill(math.floor(math.random()*11),0,5)
}
 
 */

// przykład 3
// na przykładzie countera

const userGender = "male";

const user = {
  name: "John",
  age: 18,
  isAdult: true,
  address: {
    street: "Wiejska",
    city: "Lublin",
  },
  todos: [
    { title: "Pouczyć się JSa", priority: "high" },
    { title: "pouczyć się CSSa", priority: "high" },
  ],
  gender: userGender,

  sayHello: () => console.log("Helo my name is John"),
};

user.nowePole = {
  test: "123",
  metodaWewnetrzna: function (param1, param2) {
    // console.log(param1, param2);
  },
};

user.age = 22;

user.nowePole.metodaWewnetrzna(123, 321);

// opcja nr 1
// user.todos.push({ title: "posprzątać", priority: "low" });

// opcja nr 2
user.todos[user.todos.length] = { title: "posprzątać", priority: "low" };

// console.log(user);

const array = [123, "test", true, {}, [], () => {}, undefined, null];

array[0] = array[0] + array[0];

array[3].name = "John";

array[array.length] = { name: "Jane", lastName: "Doe" };

// console.log(array);

user.isAdult = true;

const userzy = [{ name: "Jane", lastName: "Doe" }, user];

// START
// Wyjasnienie destrukturyzacji oraz spread operatora
// 1. zagnieżdzony spread

const obiekt1 = { name: "John", age: 12 };
const obiekt2 = { name: "Jane", lastName: "Doe" };

// const obiekt3 = Object.assign(obiekt1, obiekt2);

const obiekt3 = {
  ...obiekt1,
  ...obiekt2,
  test123: "test",
};

// console.log({
//   obiekt1,
//   obiekt2,
//   obiekt3,
// });

/**
 * Skrócona werjsa tworzenia obiektów
 * nazwa zmiennej staje się kluczem w obiekcie a wartośc tej zmiennej wartością
 * dla tego klucza
 */
const cokolwiek = "test";

const obiekt4 = {
  cokolwiek,
  mojCustomowyKLucz: cokolwiek,
};

const obiekt5 = {
  cokolwiek: cokolwiek,
};

// console.log({ obiekt4, obiekt5 });

/**
 *
 *
 *
 */

// Wyjasnienie destrukturyzacji oraz spread operatora
// 1. zagnieżdzony spread
// 2. symulacja useState
// 3. spread - mergowanie obiektów z tymi samymi polami

//
const temp = [1, 2, 3];
const temp1 = [1, 2, 3];
const temp2 = temp1;
const temp3 = [...temp1];

/**
 *
 *
 *
 *
 * SORTOWANIE
 */

// stringi

const strings = ["a", "b", "a", "r", "b", "a", "w"];

const nowaPosortowanaTablica = [...strings].sort();

const odwrotnaKolejnoscDoAlfabetycznej = [...strings].sort((a, b) => {
  return b.localeCompare(a);
});

console.log(odwrotnaKolejnoscDoAlfabetycznej);

console.log(strings);
console.log(nowaPosortowanaTablica);
console.log(strings === nowaPosortowanaTablica);

// numbery

const numbers = [1000, 1, 2, 10, 2, 20, 10, 1000];
// sort w najprostrzej psotaci sortuje zamieniajac elmeenty an stringi
// i przez to uważa że 2 wysępuje po 100 w kontekście stringów (kolejność alfabetyczna)
// numbers.sort();

numbers.sort((a, b) => {
  // funckja sortujące powinna zwracać wartości albo ujemne, 0 albo dodatnie - na tej podstawie funckja sortuje
  // -1
  // 0
  // +1
  // sorotowanie malejące - patrz kolejność odejmowanych literek
  return b - a;
});

numbers.sort((a, b) => {
  // sorotowanie rosnące - patrz kolejność odejmowanych literek
  return a - b;
});

console.log({ numbers });

/**
 *
 *
 *
 *
 *
 *
 */

const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 18,
    address: {
      city: "Warszawa",
      street: "Leśna",
    },
    roles: ["admin", "customer"],
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 33,
    address: {
      city: "Lublin",
      street: "Wornonnicza",
    },
    roles: ["customer"],
  },
  {
    name: "Jack",
    lastName: "Dany",
    age: 22,
    address: {
      city: "Wrocław",
      street: "Wiejska",
    },
    roles: ["customer", "gold-customer"],
  },
  {
    name: "Julia",
    lastName: "Lurka",
    age: 10,
    address: {
      city: "Gdańsk",
      street: "Wiejska",
    },
    roles: ["customer"],
  },
  {
    name: "Jerry",
    lastName: "Bady",
    age: 24,
    address: {
      city: "Gdynia",
      street: "Miejska",
    },
    roles: ["admin"],
  },
];

const ascceding = true; // checkbox

// sortowanie po wieku w zależności od zmiennej ascceding jest to sortowanie rosnące lub malejące
// const sortedByAge = [...users].sort((user1, user2) => {
//   if (ascceding) {
//     return user1.age - user2.age;
//   } else {
//     return user2.age - user1.age;
//   }
// });

// sortowanie po długości imienia
const sortedByNameLength = [...users].sort((user1, user2) => {
  if (ascceding) {
    return user1.lastName.length - user2.lastName.length;
  } else {
    return user2.lastName.length - user1.lastName.length;
  }
});

console.table(sortedByNameLength);

/**
 * .map
 * .filter
 * .reduce
 *
 * .sort
 */

const numbers1 = [1000, 1, 2, 10, 2, 20, 10, 1000];

const numbers2 = numbers1.filter((element) => {
  if (element > 2) {
    return true;
  } else {
    return false;
  }
});

const users5 = [
  {
    name: "Julia",
    lastName: "Lurka",
    age: 10,
    address: {
      city: "Gdańsk",
      street: "Wiejska",
    },
    roles: ["customer"],
  },
  {
    name: "Jerry",
    lastName: "Bady",
    age: 24,
    address: {
      city: "Gdynia",
      street: "Miejska",
    },
    roles: ["admin"],
  },
];

const uzytkownicyPelnoletni = users5.filter((user) => {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
});

// Praca listami danych: mapowanie danych i filtracja danych z uwzględnieniem metod takich jak map, filter czy reduce – wskazanie, które rozwiązanie jest optymalne
// Praca z algorytmami sortowania danych: w tym po stringach
// ⭐⭐ Tworzenie struktury HTMLowej + wstrzykiwanie do dokumentu

/**
 *
 *
 *
 */

// Wyjaśnienie hoistingu oraz rekurencji
// Wyjaśnienie zakresu funkcji i zmiennych

/**
 *
 * NEXT WEEKEND
 *
 */

// Programowanie strukturalne i obiektowe w JavaScript
// Wyjaśnienie czym jest obiekt, klasa, pole, metoda, funkcja konstruktora, konstruktor
// Wyjaśnienie czym jest this i jak się nim posługiwać
// Wyjaśnienie czym jest dziedziczenie i w jaki sposób można je osiągnąć w JavaScript
