var path = require('path');
var expect = require('chai').expect;

var VigenereCipher = require(path.join(__dirname, '..', './VigenereCipher.js'));

describe('VigenereCipher()', function () {
  'use strict';

  it('exists', function () {
    expect(VigenereCipher).to.be.a('object');

  });

  it('has an encrypt function', function () {
    expect(VigenereCipher.encrypt).to.be.a('function');
  });

  it('has a decrypt function', function () {
    expect(VigenereCipher.decrypt).to.be.a('function');
  });

  describe('.encrypt', function(){
    var plainText, keyword;

    beforeEach(function(){
      plainText = 'some test string';
      keyword = 'key';
    });

    it('should take only take a plaintext string and keyword string as input', function(){
      expect(VigenereCipher.encrypt(true, false).split(" ")[0]).to.equal("invalid");
    });

    it('should encrypt a string against a keyword', function(){
      expect(VigenereCipher.encrypt(plainText, keyword)).to.not.equal(keyword);
    });

    it('should not encrypt a string if keyword is all a\'s (nature of Vigenére Ciphers', function(){
      keyword = 'aa';
      expect(VigenereCipher.encrypt(plainText, keyword)).to.equal(plainText);
    });

    it('should ignore keyword capitalization', function(){
      var encryptedText = VigenereCipher.encrypt(plainText, keyword);
      keyword = "KeY";
      expect(VigenereCipher.encrypt(plainText, keyword)).to.equal(encryptedText);
    });

    it('should have same spacing as plaintext', function(){
      expect(VigenereCipher.encrypt(plainText, keyword).indexOf(" ")).to.equal(plainText.indexOf(" "));
    });

    it('should have same special character placement as plaintext', function(){
      plainText = 'can\'t forget these: .,?!1@'
      var specialCharacters = ["'", ':', '.', ',', '?', '!', '1', '@'];
      var encryptedText = VigenereCipher.encrypt(plainText, keyword);
      specialCharacters.forEach(function(character){
        expect(encryptedText.indexOf(character)).to.equal(plainText.indexOf(character));
      })
    });

    it('should skip spaces and special characters when encrypting', function(){
      plainText = 't e s t s t r i n g';
      var encryptedText = VigenereCipher.encrypt(plainText, keyword);
      expect(VigenereCipher.encrypt('teststring', keyword)).to.equal(encryptedText.split(" ").join(""));
    });

  })

  describe('.decrypt', function(){
    var plainText, keyword, encryptedText;

    beforeEach(function(){
      plainText = 'some test string';
      keyword = 'key';
      encryptedText = VigenereCipher.encrypt(plainText, keyword);
    });

    it('should only take two string arguments (encrypted text and keyword)', function(){
      expect(VigenereCipher.decrypt(true, false).split(" ")[0]).to.equal("invalid");
    });

    it('should return original plaintext if given the same keyword', function(){
      expect(VigenereCipher.decrypt(encryptedText, keyword)).to.equal(plainText);
    });

    it('should ignore keyword capitalization', function(){
      var decryptedText = VigenereCipher.decrypt(encryptedText, keyword);
      keyword = 'KeY'
      expect(VigenereCipher.decrypt(encryptedText, keyword)).to.equal(decryptedText);
    });

    it('should not return original plaintext if given different keyword', function(){
      keyword = 'notkey';
      expect(VigenereCipher.decrypt(encryptedText, keyword)).to.not.equal(plainText);
    });

  });

  // Add more assertions here
});
