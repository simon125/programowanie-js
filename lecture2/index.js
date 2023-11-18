// Wyjaśnienie hoistingu oraz rekurencji

// Wyjaśnienie zakresu funkcji i zmiennych

// Programowanie strukturalne i obiektowe w JavaScript
// Wyjaśnienie czym jest obiekt, klasa, pole, metoda, funkcja konstruktora, konstruktor
// Wyjaśnienie czym jest this i jak się nim posługiwać
// Wyjaśnienie czym jest dziedziczenie i w jaki sposób można je osiągnąć w JavaScript

/**
 * Counter na przykładzie klas
 */

[1, 2, 3, 4, 5].map((el, index, arr) => {});

const arrray = [1, 2, 3, 4, 5];

const suma = arrray.reduce((acc, pojedynczaLiczbaZTablicy, index, arr) => {
  const nowyAkumulator = acc + pojedynczaLiczbaZTablicy;

  return nowyAkumulator;
}, 0);

const sumaLiczbParzystych = arrray.reduce(
  (acc, pojedynczaLiczbaZTablicy, index, arr) => {
    if (pojedynczaLiczbaZTablicy % 2 === 0) {
      const nowyAkumulator = acc + pojedynczaLiczbaZTablicy;
      return nowyAkumulator;
    } else {
      return acc;
    }
  },
  0
);

const strings = ["test", "test123", "test321"];

const text = strings.reduce((acc, el) => acc + el, "");

// reduce() "testtest123test321"
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

//   {
//     name: "Jerry",
//     lastName: "Bady",
//     age: 24,
//     address: {
//       city: "Gdynia",
//       street: "Miejska",
//     },
//     roles: ["admin"],
//   }

const avgAge =
  users.reduce((ageSum, user) => {
    const newAgeSum = ageSum + user.age;

    return newAgeSum;
  }, 0) / users.length;

// console.log(avgAge);

const cities = users.reduce((citiesAcc, user) => {
  const city = user.address.city;

  if (citiesAcc.includes(city) === false) {
    const newCitiesAcc = [...citiesAcc, city];

    return newCitiesAcc;
  } else {
    return citiesAcc;
  }
}, []);

// console.log(cities);

const person1 = {
  name: "John",
  age: 12,
  sayHello: () => console.log("Hello from object literal"),
};

class Person {
  address = {
    street: "Wjesjka",
    city: "Lublin",
  };

  constructor(name, age, lastName) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
    this.sayHello = () => console.log("Hello");
  }

  nazwaMetody(param1, param2) {
    console.log(123);
    console.log(param1);
    console.log(param2);
    // [].reduce();
    // for(){

    // }
  }
}

// const person = new Person("Jerry", 50, "Smith");
// const person2 = new Person("Jerry", 50, "Smith");
// const person3 = new Person("Jerry", 50, "Smith");
// const person4 = new Person("Jerry", 50, "Smith");

// person.nazwaMetody("arg1", "arg2");

// person2.nazwaMetody("trelemorele", ["hej", 123, {}, Person]);

// console.log(person);
// console.log(person1);

// // person1.name
// // person1.age
// person1.sayHello();
// person.sayHello();

const user = {
  name: "John Doe",
};

const user1 = {
  name: "Jane Doe",
};

function sayHello(age, profession) {
  console.log(
    `hello my name is ${this.name} im ${age} years old, im a ${profession}`
  );
}

// bind  call apply

sayHello.call(user, 18, "tester");

sayHello.apply(user1, [20, "developer"]);

const sayHelloMrJohn = sayHello.bind(user, 22, "desinger");

/**
 * DUŻO KODU
 */

sayHelloMrJohn();

// console.log(this);

// function handlePrzyciskClick() {
//   console.log(this);

//   console.log(this.trelemorele);
// }

// // handlePrzyciskClick();

// const user123 = {
//   metoda: handlePrzyciskClick,
// };

// user123.metoda();

// document
//   .getElementById("przycisk")
//   .addEventListener("click", handlePrzyciskClick.bind({ trelemorele: 123 }));

// function testFunc() {
//   console.log(this); // window

//   const arrowFunc = () => {
//     console.log(this);
//   };

//   arrowFunc();

//   return arrowFunc;
// }

// testFunc();
