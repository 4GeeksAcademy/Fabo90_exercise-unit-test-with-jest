const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3))
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar  = (euro) => {
 let valueInDollar = (euro * oneEuroIs.USD);
 return valueInDollar;
}
console.log(fromEuroToDollar(1));
let fromDollarToYen = (dollar) => {
 let valueInYen = ((dollar / oneEuroIs.USD) * oneEuroIs.JPY);
 return valueInYen;
}
console.log(fromDollarToYen(1.07));
let fromYenToPound = (yen) => {
    let valueInPound = ((yen / oneEuroIs.JPY) * oneEuroIs.GBP);
    return valueInPound;
}
console.log(fromYenToPound(156.5));
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };