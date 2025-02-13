const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(plaintext, keyword) {
    if (typeof plaintext !== 'string' || typeof keyword !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    const plaintextArray = plaintext.toUpperCase().split('');
    const keywordArray = keyword.toUpperCase().split('');
    const encryptedArray = [];
    let keywordIndex = 0;

    for (let i = 0; i < plaintextArray.length; i++) {
      if (plaintextArray[i].match(/[A-Z]/)) {
        const shift = keywordArray[keywordIndex++ % keywordArray.length].charCodeAt(0) - 65;
        encryptedArray.push(String.fromCharCode(65 + (plaintextArray[i].charCodeAt(0) - 65 + shift) % 26));
      } else {
        encryptedArray.push(plaintextArray[i]);
      }
    }
    
    const result = encryptedArray.join('');
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(plaintext, keyword) {
    if (typeof plaintext !== 'string' || typeof keyword !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    const plaintextArray = plaintext.toUpperCase().split('');
    
    const keywordArray = keyword.toUpperCase().split('');
    const decryptedArray = [];
    let keywordIndex = 0;

    for (let i = 0; i < plaintextArray.length; i++) {
      if (plaintextArray[i].match(/[A-Z]/)) {
        const shift = keywordArray[keywordIndex++ % keywordArray.length].charCodeAt(0) - 65;
        decryptedArray.push(String.fromCharCode(65 + (plaintextArray[i].charCodeAt(0) - 65 - shift + 26) % 26));
      } else {
        decryptedArray.push(plaintextArray[i]);
      }
    }
    
    const result = decryptedArray.join('');
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
