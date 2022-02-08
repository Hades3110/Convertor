import cardinals from "../number/numbers";
import thousands from "./thousands";
import tens from "./tens";
import hundreds from "./hundreds";


export default function millions (input: number, word: string, arr: string[]) {

    if( String(Number(`${input}`)).split('').length <= 5) {
        input = Number(`${input}`);
        arr = String(input).split('');
        return   thousands(input, word, arr);
    }

    if ( arr.reduce((a, b) => String(Number(a) + Number(b))) === arr[0] ) {

        let firstPart = cardinals.one[arr[0]];

        if ( arr.length === 8 ) {
            firstPart  = tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2));
        }
        if ( arr.length === 9 ) {
            firstPart  = hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3));
        }
        return  firstPart + ' ' + cardinals.oneIndex[2];
    }

    if ( arr.length === 7 ) {

        return cardinals.one[arr[0]] + ' ' + cardinals.oneIndex[2] + ' ' + `${thousands(+arr.slice(1, 7).join(''), word, arr.slice(1, 7))}`;
    }

    if ( arr. length === 8) {

            return `${tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2))}` + ' ' + cardinals.oneIndex[2] + ' ' + thousands(+arr.slice(2, 8).join(''), word, arr.slice(2, 8));
    }

    if ( arr.length === 9) {

        return `${hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3))}` + ' ' + cardinals.oneIndex[2] + ' ' + thousands(+arr.slice(3, 9).join(''), word, arr.slice(3, 9));
    }

}