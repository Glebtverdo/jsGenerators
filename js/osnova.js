import "regenerator-runtime/runtime";
import { wordsCount, getWords } from './modul.js';
let str = '  Всем  привет! Ура ура! ';

console.log(wordsCount(str)); // 4

for (let some of getWords(str)) {
    console.log(some); // выводит 4 слова
}