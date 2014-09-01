var VigenereCipher = {

  _tabulaRecta: {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  },

  /*
    Some text to encrypt
    keyk eyke yk eykeyke

    Sometexttoencrypt
    keykeykeykeykeyke

    Some text to encrypt can't
    keyk eyke yk eykeyke yke y

    Sometexttoencryptcant
    keykeykeykeykeykeykey

    test string to encrypt
    keyk eykeyk ey keykeyk
    diqd wrb
    diqd wrbmlq xm orabcnd

    diqd qdvgxk ds orabcnd
  */

  encrypt: function(plainText, keyword){
    var encryptedText = "";
    var keyLength = keyword.length;
    var specialCharacterCount = 0;

    for( var i = 0; i < plainText.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % keyLength;
      var keywordIndex = VigenereCipher._tabulaRecta.a.indexOf(keyword[keyLetter]);
      console.log("before - ", encryptedText);
      console.log("keyletter - ", keyword[keyLetter]);

      if( VigenereCipher._tabulaRecta[plainText[i]] ){
        encryptedText += VigenereCipher._tabulaRecta[plainText[i]][keywordIndex];
      }else{
        encryptedText += plainText[i];
        specialCharacterCount++;
      }
      console.log("after - ", encryptedText);

    }

    return encryptedText;
  }

};

