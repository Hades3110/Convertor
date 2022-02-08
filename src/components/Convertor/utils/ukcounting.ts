import tens from "../helper/tens";
import one from "../helper/one";

export default (num: number) => {
    const arr = String(num).split('');
    const fsPart = tens(+arr.slice(0, 2).join(''), '', [arr[0], arr[1]]);
    const lsPart = tens(+arr.slice(2, 4).join(''), '', [arr[2], arr[3]]);

    if ( +arr[2] === 0 && +arr[3] === 0) {
        return fsPart + ' hundreds';
    }
    if ( +arr[2] === 0 ) {
        return fsPart + ' o-' + `${one(+arr.slice(3, 4).join(''), '', [arr[3]])}`
    }
    return fsPart + ' hundred and ' + lsPart;
}