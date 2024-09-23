const createCounter = function(n) {
    let count = n;
    return function() {
        console.log(count++);
    };
};

const counter = createCounter(10);
 counter() // 10
 counter() // 11
 counter() // 12
