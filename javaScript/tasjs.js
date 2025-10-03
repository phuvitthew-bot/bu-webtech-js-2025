let input = prompt("Enter a number:");
        let number = Number(input);
        if (Number.isInteger(number)) {
            if (number === 0) {
            alert("zero integer number");
            } else if (number % 2 === 0) {
            alert("even integer number");
            } else {
        alert("odd integer number");
        }
    }