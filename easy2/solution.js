// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

// Math.random().toString(36).slice(2, 7);

let words = [];

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

generateWords();

console.log(words);
