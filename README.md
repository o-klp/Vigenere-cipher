Vigenere-cipher
===============

This is a simple Vigenere cipher. Read more here: http://en.wikipedia.org/wiki/Vigenère_cipher

To use, add the file and this script to your working directory/html file:
<pre>< script type="text/javascript" src="./Vigenere cipher.js">< /script></pre>

Comes with two functions, VigenereCipher.encrypt and VigenereCipher.decrypt
.encrypt takes a plain text string as the first argument and a keyword as the second argument.
.decrypt takes an encrypted string and a keyword as its 2 arguments

<pre>ex:
  VigenereCipher.encrypt("This is just a test string", "secretkey");
  returns "llkj ml tyql e vvwm cxpari"
</pre> 

<pre>ex:
  VigenereCipher.decrypt("llkj ml tyql e vvwm cxpari", "secretkey");
  returns "this is just a test string"
</pre> 

VigenereCipher.decrypt won't return the original string with proper capitalization  

.encrypt and .decrypt ignore special characters/whitespace/numbers, so if you want to securely
encrypt a string, try not to use a lot of non-alphabet characters, as it can give away the length
of your keyword. Also, don't use a keyword with a lot of 'a's.  

Probably don't use this at all if you think it will securely encrypt information. Vigenere cipher's
are quite old and can be relatively easy to crack. It's the cipher Borden and Angier use in The
Prestige, and I just made this repo for fun.
