var rect = {
    perimeter: function (x, y) {
    return 2 * (x + y);
    },
    area: function (x, y) {
    return x * y;
    },
    };
    function solveRect(l, b) {
    console.log("Solução para o retângulo com l = " + l + " e b = " + b);
    if (l < 0 || b < 0) {
    console.log("As dimensões do retângulo devem ser maiores que zero.");
    } else {
    console.log("A área do retângulo com dimensões comprimento = " + l +
    " e largura = " + b + " é " + rect.area(l, b));
    console.log("O perímetro do retângulo com dimensões comprimento = " + l +
    " e largura = " + b + " é " + rect.perimeter(l, b));
    }
    }
    solveRect(2,4);
    solveRect(3,5);
    solveRect(-3,5);
    