let numbers = [1, 2, 3, 4, 51, 99, 87, 8, 9];

numbers.forEach(number => {
    let suffix = 'th';

    if (number === 1) {
        suffix = 'st';
    } else if (number === 2) {
        suffix = 'nd';
    } else if (number === 3) {
        suffix = 'rd';
    }

    console.log(`${number}${suffix}`);
});