import one from "../helper/one";
import tens from "../helper/tens";

export default function lastWord(word: string, arr: string[]) {
    let lastWord: string;
    if (+arr[1] === 0) {
        lastWord = one(+arr.slice(2).join(''), word, arr.slice(2));
    } else {
        lastWord = tens(+arr.slice(1).join(''), word, arr.slice(1));
    }
    return lastWord;
}

