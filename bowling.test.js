const getScore = require("./bowling");

test("Returns a number", () => {
    expect(typeof getScore([])).toBe('number');
})
