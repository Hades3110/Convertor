import cardinals from "./number/numbers";
import one from "./helper/one";
import tens from "./helper/tens";
import hundreds from "./helper/hundreds";
import beCounting from "./utils/ukcounting";
import thousands from "./helper/thousands";
import millions from "./helper/millions";
import billions from "./helper/billions";
import trillions from "./helper/trillions";

export const splitInput = (input: number) => {
    const arr = String(input).split('');
    const count = arr.length;
    let word =  "";

    if ( input === 0) return cardinals.one[0]

    if (count <= 1) return one(input, word, arr);

    if (count <= 2) return tens(input, word, arr);

    if (count <= 3) return hundreds(input, word, arr);

    if ( input > 1000 && input < 2000) return beCounting(input);

    if (count <= 6) {

        if( input === 1000 ) return cardinals.oneIndex[arr[0]]

        if ( input > 1000 ) return thousands(input, word, arr);
    }

    if (count <= 9) return millions(input, word, arr);

    if (count <= 12) return billions(input, word, arr);

    if (count <= 15) return trillions(input, word, arr);
}
//
// const num = 999_999_999_999_999;
//
// console.log(splitInput(num));