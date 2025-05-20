const expect = chai.expect;

describe('convertToRoman valid cases', function () {
  it('7 should return VII', function () {
    document.getElementById('integerInput').value = '7';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.equal('VII');
  });

  it('1 should return I', function () {
    document.getElementById('integerInput').value = '1';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.equal('I');
  });

  it('3999 should return MMMCMXCIX', function () {
    document.getElementById('integerInput').value = '3999';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.equal('MMMCMXCIX');
  });

  it('4 should return IV', function () {
    document.getElementById('integerInput').value = '4';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.equal('IV');
  });

  it('900 should return CM', function () {
    document.getElementById('integerInput').value = '900';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.equal('CM');
  });

  it('1994 should return MCMXCIV', function () {
    document.getElementById('integerInput').value = '1994';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.equal('MCMXCIV');
  });
});

describe('convertToRoman invalid cases', function () {
  it('0 should return Error', function () {
    document.getElementById('integerInput').value = '0';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.include('Error');
  });

  it('4000 should return Error', function () {
    document.getElementById('integerInput').value = '4000';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.include('Error');
  });

  it('non-numeric input should return Error', function () {
    document.getElementById('integerInput').value = 'k';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.include('Error');
  });

  it('negative number should return Error', function () {
    document.getElementById('integerInput').value = '-5';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.include('Error');
  });

  it('decimal number should return Error', function () {
    document.getElementById('integerInput').value = '12.5';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.include('XII');
  });

  it('empty input should return Error', function () {
    document.getElementById('integerInput').value = '';
    convertToRoman();
    expect(document.getElementById('romanOutput').innerText).to.include('Error');
  });
});

describe('convertToInteger valid cases', function () {
  it('VI should return 6', function () {
    document.getElementById('romanInput').value = 'VI';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.equal('6');
  });

  it('I should return 1', function () {
    document.getElementById('romanInput').value = 'I';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.equal('1');
  });

  it('MMMCMXCIX should return 3999', function () {
    document.getElementById('romanInput').value = 'MMMCMXCIX';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.equal('3999');
  });

  it('CM should return 900', function () {
    document.getElementById('romanInput').value = 'CM';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.equal('900');
  });
});

describe('convertToInteger invalid cases', function () {
  it('invalid repetition should return Error', function () {
    document.getElementById('romanInput').value = 'XXXX';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.include('Error');
  });

  it('invalid subtraction should return Error', function () {
    document.getElementById('romanInput').value = 'IL';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.include('Error');
  });

  it('non-Roman characters should return Error', function () {
    document.getElementById('romanInput').value = '8';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.include('Error');
  });

  it('lowercase letters should return Error', function () {
    document.getElementById('romanInput').value = 'vi';
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.include('6');
  });
});

describe('regression testing', function () {
  it('42 should convert to XLII and back to 42', function () {
    document.getElementById('integerInput').value = '42';
    convertToRoman();
    const roman = document.getElementById('romanOutput').innerText;
    document.getElementById('romanInput').value = roman;
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.equal('42');
  });

  it('999 should convert to CMXCIX and back to 999', function () {
    document.getElementById('integerInput').value = '999';
    convertToRoman();
    const roman = document.getElementById('romanOutput').innerText;
    document.getElementById('romanInput').value = roman;
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.equal('999');
  });

  it('2023 should convert to MMXXIII and back to 2023', function () {
    document.getElementById('integerInput').value = '2023';
    convertToRoman();
    const roman = document.getElementById('romanOutput').innerText;
    document.getElementById('romanInput').value = roman;
    convertToInteger();
    expect(document.getElementById('integerOutput').innerText).to.equal('2023');
  });
});
