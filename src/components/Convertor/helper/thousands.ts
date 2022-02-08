import cardinals from "../number/numbers";
import tens from "./tens";
import one from "./one";
import hundreds from "./hundreds";

export default function thousands (input: number, word: string, arr: string[]) {
        const count = arr.length

        if( String(Number(`${input}`)).split('').length <= 3) {
            input = Number(`${input}`);
            arr = String(input).split('');
          return   hundreds(input, word, arr);
        }

        if ( arr.reduce((a, b) => String(Number(a) + Number(b))) === arr[0] ) {

                let firstPart = cardinals.one[arr[0]];

                if ( count === 5 ) {
                       firstPart  = tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2));
                }
                if ( count >= 6 ) {
                       firstPart  = hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3));
                }
                word = firstPart + ' ' + cardinals.oneIndex[1];
                return word;
        }

        if ( count <= 4 ) {
                if ( +arr[1] === 0 && +arr[2] === 0 ) {
                    word = cardinals.one[arr[0]] + ' ' + cardinals.oneIndex[1] + ' and ' + `${one(+arr.slice(3, 4).join(''), word, arr.slice(3, 4))}`;
                    return word
                }
                return  cardinals.one[arr[0]] + ' ' + cardinals.oneIndex[1] + ' ' + `${hundreds(+arr.slice(1, 4).join(''), word, arr.slice(1, 4))}`;
        }
        if ( count === 5 ) {
            let firstPart  = tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2));
            let lastPart = hundreds(+arr.slice(2, 5).join(''), word, arr.slice(2, 5));

            if ( +arr[2] === 0 && +arr[3] === 0 ) {

                if ( +arr.slice(4, 5).join('') === 0) {
                    return  firstPart + ' ' + cardinals.oneIndex[1]
                }
                return  firstPart + ' ' + cardinals.oneIndex[1] + ' and ' + `${one(+arr.slice(4, 5).join(''), word, arr.slice(4, 5))}`;
            }
            if ( +arr[2] === 0 ) {

                return  firstPart + ' ' + cardinals.oneIndex[1] + ' and ' + `${tens(+arr.slice(3, 5).join(''), word, arr.slice(3, 5))}`;
            }

          return  firstPart + ' ' + cardinals.oneIndex[1] + ' ' + `${lastPart}`;
        }
        if ( count === 6 ) {
            let firstPart = hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3));

            if (+arr[3] === 0 && +arr[4] === 0 && +arr[5] === 0 ) {

                return   firstPart + ' ' + cardinals.oneIndex[1]
            }
            if ( +arr[3] === 0 && +arr[4] === 0) {

                return firstPart + ' ' + cardinals.oneIndex[1] + ' and ' + `${one(+arr.slice(5, 6).join(''), word, arr.slice(5, 6))}`
            }
            if ( +arr[3] === 0 ) {

                return firstPart + ' ' + cardinals.oneIndex[1] + ' and ' + `${tens(+arr.slice(4, 6).join(''), word, arr.slice(4, 6))}`
            }

            word =  firstPart + ' ' + cardinals.oneIndex[1] + ' ' + `${hundreds(+arr.slice(3, 6).join(''), word, arr.slice(3, 6))}`

        }

        return word
}