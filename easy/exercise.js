// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

// Math.random().toString(36).slice(2, 7);

let words = ["sdfsdf", "weqw", "frenrkerf", "@3e23e", "s", "ww"];

/**
 *
 */

const generateWords = () => {
  /**
   * MIEJSCE NA WASZ KOD
   */

  for (let i = 0; i < 50; i++) {
    words.push(`Test ${i}`);
  }
};

/**
 * Stwórz funkcje prepareHtmlStructure która stworzy
 *
 *
 */

/**
 * sposób 1
 * @param data to jest lista stringów
 */
const prepareHtmlStructure = (przekazanaListaSlow) => {
  // htmlStructureArray - lista słów które są osadzone w elementy <li></li>
  const htmlStrutureArray = przekazanaListaSlow.map((slowo) => {
    const li = `<li>${slowo}</li>`;
    return li;
  });
  // htmlStruture - gotowy string ze strukturą html do osadzenia w dokumencie
  const htmlStruture = htmlStrutureArray.join("");

  return htmlStruture;
};

/**
 * Dodaj event listenera do przycisku wygeneruj słowa
 * i w momencie kliknięcia wywołaj funckje generateWords
 *
 *
 */

const generateWordsButton = document.getElementById("generateWords");
const generateHtmlButton = document.getElementById("generateHtml");

generateWordsButton.addEventListener("click", () => {
  generateWords();
});

/**
 * Stworzenie takiej funkcji
 * która przyjmie w parametrze strukture HTMLową (string z listą <li></li> listItems)
 * i osadzi ją w dokumencie html
 */

/**
 * sposób 2
 * @param data to jest lista stringów
 */
const prepareHtmlStructure2 = (przekazanaListaSlow) => {
  let htmlStruture = ``;

  for (let i = 0; i < przekazanaListaSlow.length; i++) {
    htmlStruture = htmlStruture + `<li>${przekazanaListaSlow[i]}</li>`;
  }

  return htmlStruture;
};

const renderHTML = (htmlStructure) => {
  /**
   * MIEJSCE NA TWÓJ KOD
   */
  const ulElement = document.getElementById("output");
  ulElement.innerHTML = htmlStructure;
};

generateHtmlButton.addEventListener("click", () => {
  const listItems = prepareHtmlStructure2(words);
  renderHTML(listItems);
});

/**
 * stwórz taką funckje
 */

/**
 * @param listaSlow to jest tablica stringów
 */
// sposób 1
// const sortWordsAsc = (listaSlow) => {
// return [...listaSlow].sort();
// };
// sposób 2
const sortWordsAsc = (listaSlow) => {
  const listSlowCopy = [...listaSlow];

  return listSlowCopy.sort();
};

const sortWordsDesc = (listaSlow) => {
  const listSlowCopy = [...listaSlow];

  // return listSlowCopy.sort((a, b) => {
  //   return b.localeCompare(a);
  // });
  return listSlowCopy.sort((a, b) => b.localeCompare(a));
};

const sortWordsByLength = (listaSlow, direction) => {
  return [...listaSlow].sort((a, b) => {
    if (direction === "desc") {
      return b.length - a.length;
    }

    return a.length - b.length;
  });
};

const ascSort = document.getElementById("ascSort");
const descSort = document.getElementById("descSort");
const sortByLengthAsc = document.getElementById("sortByLengthAsc");
const sortByLengthDesc = document.getElementById("sortByLengthDesc");

ascSort.addEventListener("click", () => {
  const wordsAsc = sortWordsAsc(words);
  const htmlStructure = prepareHtmlStructure2(wordsAsc);
  renderHTML(htmlStructure);
  console.log(wordsAsc);
});

descSort.addEventListener("click", () => {
  const wordsDesc = sortWordsDesc(words);
  const htmlStructure = prepareHtmlStructure2(wordsDesc);
  renderHTML(htmlStructure);
  console.log(wordsDesc);
});

sortByLengthAsc.addEventListener("click", () => {
  const sortedWords = sortWordsByLength(words, "asc");
  const htmlStructure = prepareHtmlStructure2(sortedWords);
  renderHTML(htmlStructure);
});

sortByLengthDesc.addEventListener("click", () => {
  const sortedWords = sortWordsByLength(words, "desc");
  const htmlStructure = prepareHtmlStructure2(sortedWords);
  renderHTML(htmlStructure);
});
