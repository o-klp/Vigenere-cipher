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
  */

  encrypt: function(plainText, keyword){
    var encryptedText = "";
    var keyLength = keyword.length;
    var strippedText = plainText.split(" ").join("");

    for( var i = 0; i < strippedText.length; i++ ){
      var keyLetter = i % keyLength;
      var keywordIndex = VigenereCipher._tabulaRecta.a.indexOf(keyword[keyLetter]);

      encryptedText += VigenereCipher._tabulaRecta[strippedText[i]][keywordIndex];

    }

    return encryptedText;

  }

};

