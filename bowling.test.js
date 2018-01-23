const getScore = require("./bowling");

test("Returns a number", () => {
    let array1 = [10,0,7,2,7,3,1,1,0,0,5,4,10,0,1,8,5,5,2,1];
    expect(typeof getScore(array1)).toBe('number');
})

test("Basic functinality with no consecutive strikes, strike/spare at last turn", () => {
    let array1 = [10,0,7,2,7,3,1,1,0,0,5,4,10,0,1,8,5,5,2,1];
    expect(getScore(array1)).toBe(93)
})
