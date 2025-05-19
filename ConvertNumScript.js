// Sergio Sanmartín Aznar

// Function to convert an integer to a Roman numeral
function convertToRoman() {
    const num = parseInt(document.getElementById('integerInput').value);

    // Validate input (explicit requirements)
    if (isNaN(num) || num <= 0 || num > 3999) {
        document.getElementById('romanOutput').innerText = 'Error: Please enter a number between 1 and 3999.';
        return;
    }

    // Mapping of values to Roman numerals (internal quality: clarity)
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';
    let remaining = num;

    // Build the Roman numeral (internal quality: simplicity)
    for (const { value, numeral } of romanNumerals) {
        while (remaining >= value) {
            result += numeral;
            remaining -= value;
        }
    }

    // Display the result (external quality: functionality)
    document.getElementById('romanOutput').innerText = result;
}

// Function to convert a Roman numeral to an integer
function convertToInteger() {
    const roman = document.getElementById('romanInput').value.toUpperCase();

    // Validate the Roman numeral format (explicit requirements)
    if (!isValidRoman(roman)) {
        document.getElementById('integerOutput').innerText = 'Error: Invalid Roman numeral.';
        return;
    }

    // Mapping of Roman numerals to integer values (internal quality: clarity)
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Calculate the integer value (internal quality: simplicity)
    for (let i = roman.length - 1; i >= 0; i--) {
        const value = romanMap[roman[i]];
        if (value >= prevValue) {
            total += value;
        } else {
            total -= value;
        }
        prevValue = value;
    }

    // Display the result (external quality: functionality)
    document.getElementById('integerOutput').innerText = total;
}

// Function to validate Roman numerals (internal quality: maintainability)
function isValidRoman(roman) {
    // Regular expression to validate Roman numerals
    const validRomanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    // Check if it matches the basic pattern
    if (!validRomanRegex.test(roman)) {
        return false;
    }

    // Check for invalid repetitions
    if (/IIII|XXXX|CCCC|MMMM|VV|LL|DD/.test(roman)) {
        return false;
    }

    // Check for valid subtractions (only I, X, C can subtract)
    if (/IV|IX|XL|XC|CD|CM/.test(roman)) {
        // Check for invalid subtractions
        if (/IXX|IVV|ILL|IDD|IXL|IXC|ICD|ICM|XDD|XCM|XLL/.test(roman)) {
            return false;
        }
    }

    return true;
}