var power = {
    pow: function(x, n) {

        var result = 1;

        for (n; n > 0; n--) {
            result *= x;
        }

        return result;
    }
};

console.log( power.pow(5, 7) );

module.exports = power;
