function convertToRoman(num) {
    //initialized Roman numbers
    let romanNumbers = {
        1000 : 'M',
        900  : 'CM',
        600  : 'DC',
        500  : 'D',
        400  : 'CD',
        100  : 'C',
        90   : 'XC',
        50   : 'L',
        40   : 'XL',
        60   : 'LX',
        10   : 'X',
        9    : 'IX',
        8    : 'VIII',
        7    : 'VII',
        6    : 'VI',
        4    : 'IV',
        5    : 'V',
        1    : 'I'
    }

    let greekNumber = Object.keys(romanNumbers);

    //sort romanNumbers keys by DESC
    let filterGreekNumber = function (greekNumber, num) {
        return greekNumber.sort((a, b) => b - a).filter((elem) => elem <= num);
    }

    greekNumber = filterGreekNumber(greekNumber, num);

    let getRomanNumber = function(numbers, key) {
        return numbers[key];
    }

    let result = '';

    // loop, collect new string of Roman numbers
    while (num > 0) {
       num = num - greekNumber[0];
       result += getRomanNumber(romanNumbers, greekNumber[0]);
       greekNumber = filterGreekNumber(greekNumber, num);
    }

 return result;
}
