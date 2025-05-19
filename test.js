const expect = chai.expect;

describe("convertToRoman Tests", function () {
  let integerInput, romanOutput;

  beforeEach(function () {
    // Configurar elementos del DOM necesarios para convertToRoman
    integerInput = document.createElement('input');
    integerInput.id = 'integerInput';
    document.body.appendChild(integerInput);

    romanOutput = document.createElement('div');
    romanOutput.id = 'romanOutput';
    document.body.appendChild(romanOutput);
  });

  afterEach(function () {
    // Limpiar elementos después de cada test
    document.body.removeChild(integerInput);
    document.body.removeChild(romanOutput);
  });

  it("Simple value: 7 → VII", function () {
    integerInput.value = '7';
    convertToRoman();
    expect(romanOutput.innerText).to.equal('VII');
  });

  it("Lower limit: 0 → Error", function () {
    integerInput.value = '0';
    convertToRoman();
    expect(romanOutput.innerText).to.include('Error');
  });

  it("Lower limit: 1 → I", function () {
    integerInput.value = '1';
    convertToRoman();
    expect(romanOutput.innerText).to.equal('I');
  });

  it("Upper limit: 3999 → MMMCMXCIX", function () {
    integerInput.value = '3999';
    convertToRoman();
    expect(romanOutput.innerText).to.equal('MMMCMXCIX');
  });

  it("Upper limit: 4000 → Error", function () {
    integerInput.value = '4000';
    convertToRoman();
    expect(romanOutput.innerText).to.include('Error');
  });

  it("Subtraction: 4 → IV", function () {
    integerInput.value = '4';
    convertToRoman();
    expect(romanOutput.innerText).to.equal('IV');
  });

  it("Subtraction: 900 → CM", function () {
    integerInput.value = '900';
    convertToRoman();
    expect(romanOutput.innerText).to.equal('CM');
  });

  it("Complex value: 1994 → MCMXCIV", function () {
    integerInput.value = '1994';
    convertToRoman();
    expect(romanOutput.innerText).to.equal('MCMXCIV');
  });

  it("NaN input: 'k' → Error", function () {
    integerInput.value = 'k';
    convertToRoman();
    expect(romanOutput.innerText).to.include('Error');
  });

  it("NaN input: ',' → Error", function () {
    integerInput.value = ',';
    convertToRoman();
    expect(romanOutput.innerText).to.include('Error');
  });

  it("Negative number: -5 → Error", function () {
    integerInput.value = '-5';
    convertToRoman();
    expect(romanOutput.innerText).to.include('Error');
  });

  it("Invalid format: 12.5 → Error", function () {
    integerInput.value = '12.5';
    convertToRoman();
    expect(romanOutput.innerText).to.include('Error');
  });

  it("Empty entrance → Error", function () {
    integerInput.value = '';
    convertToRoman();
    expect(romanOutput.innerText).to.include('Error');
  });
});

describe("convertToInteger Tests", function () {
  let romanInput, integerOutput;

  beforeEach(function () {
    // Configurar elementos del DOM necesarios para convertToInteger
    romanInput = document.createElement('input');
    romanInput.id = 'romanInput';
    document.body.appendChild(romanInput);

    integerOutput = document.createElement('div');
    integerOutput.id = 'integerOutput';
    document.body.appendChild(integerOutput);
  });

  afterEach(function () {
    // Limpiar elementos después de cada test
    document.body.removeChild(romanInput);
    document.body.removeChild(integerOutput);
  });

  it("Simple character: VI → 6", function () {
    romanInput.value = 'VI';
    convertToInteger();
    expect(integerOutput.innerText).to.equal('6');
  });

  it("Lower limit: I → 1", function () {
    romanInput.value = 'I';
    convertToInteger();
    expect(integerOutput.innerText).to.equal('1');
  });

  it("Upper limit: MMMCMXCIX → 3999", function () {
    romanInput.value = 'MMMCMXCIX';
    convertToInteger();
    expect(integerOutput.innerText).to.equal('3999');
  });

  it("Valid subtraction: CM → 900", function () {
    romanInput.value = 'CM';
    convertToInteger();
    expect(integerOutput.innerText).to.equal('900');
  });

  it("Invalid repetition: XXXX → Error", function () {
    romanInput.value = 'XXXX';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Invalid repetition: VV → Error", function () {
    romanInput.value = 'VV';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Invalid subtraction: IL → Error", function () {
    romanInput.value = 'IL';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Non-Roman character: 8 → Error", function () {
    romanInput.value = '8';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Non-Roman character: ',' → Error", function () {
    romanInput.value = ',';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Non-Roman character: K → Error", function () {
    romanInput.value = 'K';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Non-Roman character: XIZ → Error", function () {
    romanInput.value = 'XIZ';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Format with space: ' MMM' → Error", function () {
    romanInput.value = ' MMM';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });

  it("Lowercase: vi → Error", function () {
    romanInput.value = 'vi';
    convertToInteger();
    expect(integerOutput.innerText).to.include('Error');
  });
});

describe("Regression Testing", function () {
  let integerInput, romanOutput, romanInput, integerOutput;

  beforeEach(function () {
    integerInput = document.createElement('input');
    integerInput.id = 'integerInput';
    document.body.appendChild(integerInput);

    romanOutput = document.createElement('div');
    romanOutput.id = 'romanOutput';
    document.body.appendChild(romanOutput);

    romanInput = document.createElement('input');
    romanInput.id = 'romanInput';
    document.body.appendChild(romanInput);

    integerOutput = document.createElement('div');
    integerOutput.id = 'integerOutput';
    document.body.appendChild(integerOutput);
  });

  afterEach(function () {
    document.body.removeChild(integerInput);
    document.body.removeChild(romanOutput);
    document.body.removeChild(romanInput);
    document.body.removeChild(integerOutput);
  });

  it("42 → XLII → 42", function () {
    integerInput.value = '42';
    convertToRoman();
    const roman = romanOutput.innerText;
    romanInput.value = roman;
    convertToInteger();
    expect(integerOutput.innerText).to.equal('42');
  });

  it("999 → CMXCIX → 999", function () {
    integerInput.value = '999';
    convertToRoman();
    const roman = romanOutput.innerText;
    romanInput.value = roman;
    convertToInteger();
    expect(integerOutput.innerText).to.equal('999');
  });

  it("2023 → MMXXIII → 2023", function () {
    integerInput.value = '2023';
    convertToRoman();
    const roman = romanOutput.innerText;
    romanInput.value = roman;
    convertToInteger();
    expect(integerOutput.innerText).to.equal('2023');
  });
});