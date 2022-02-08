import cardinals from "../number/numbers";
import tens from "./tens";
import hundreds from "./hundreds";
import thousands from "./thousands";
import millions from "./millions";

export default function billions (input: number, word: string, arr: string[]) {

    if( String(Number(`${input}`)).split('').length <= 5) {
        input = Number(`${input}`);
        arr = String(input).split('');
        return   millions(input, word, arr);
    }

    if ( arr.reduce((a, b) => String(Number(a) + Number(b))) === arr[0] ) {

        let firstPart = cardinals.one[arr[0]];

        if ( arr.length === 11 ) {
            firstPart  = tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2));
        }
        if ( arr.length === 12 ) {
            firstPart  = hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3));
        }
        return  firstPart + ' ' + cardinals.oneIndex[3];
    }

    if ( arr.length === 10 ) {

        return cardinals.one[arr[0]] + ' ' + cardinals.oneIndex[3] + ' and ' + `${millions(+arr.slice(1, 10).join(''), word, arr.slice(1, 10))}`;
    }

    if ( arr. length === 11) {

        return `${tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2))}` + ' ' + cardinals.oneIndex[3] + ' ' + millions(+arr.slice(2, 11).join(''), word, arr.slice(2, 11));
    }

    if ( arr.length === 12) {

        return `${hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3))}` + ' ' + cardinals.oneIndex[3] + ' ' + millions(+arr.slice(3, 12).join(''), word, arr.slice(3, 12));
    }
}