import cardinals from "../number/numbers";
import thousands from "./thousands";
import tens from "./tens";
import hundreds from "./hundreds";
import millions from "./millions";
import billions from "./billions";


export default function trillions (input: number, word: string, arr: string[]) {


    if ( arr.reduce((a, b) => String(Number(a) + Number(b))) === arr[0] ) {

        let firstPart = cardinals.one[arr[0]];

        if ( arr.length === 14 ) {
            firstPart  = tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2));
        }
        if ( arr.length === 15 ) {
            firstPart  = hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3));
        }
        return  firstPart + ' ' + cardinals.oneIndex[4];
    }

    if ( arr.length === 13 ) {

        return cardinals.one[arr[0]] + ' ' + cardinals.oneIndex[4] + ' ' + `${billions(+arr.slice(1, 13).join(''), word, arr.slice(1, 13))}`;
    }

    if ( arr. length === 14) {

        return `${tens(+arr.slice(0, 2).join(''), word, arr.slice(0, 2))}` + ' ' + cardinals.oneIndex[4] + ' ' + billions(+arr.slice(2, 14).join(''), word, arr.slice(2, 14));
    }

    if ( arr.length === 15) {

        return `${hundreds(+arr.slice(0, 3).join(''), word, arr.slice(0, 3))}` + ' ' + cardinals.oneIndex[4] + ' ' + billions(+arr.slice(3, 15).join(''), word, arr.slice(3, 15));
    }

}