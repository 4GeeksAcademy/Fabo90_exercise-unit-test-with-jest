const {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});
test('1 euro should be 1.07 dollars', () => { 
    const dollars = fromEuroToDollar(1);
    expect(fromEuroToDollar(1)).toBe(1.07);
});
test('1.07 dollars should be 156.5 yens', () => { 
    const yens = fromDollarToYen(1.07);
    expect(fromDollarToYen(1.07)).toBe(156.5);
});
test('156.5 yens should be 0.87 pounds', () => { 
    const pounds = fromYenToPound(156.5);
    expect(fromYenToPound(156.5)).toBe(0.87);
});
