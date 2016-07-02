var power = require('../js/script');

describe("Power", function() {
    it("works correctly", function() {
        expect(power.pow(5, 5)).toBe(3125);
    });
});
