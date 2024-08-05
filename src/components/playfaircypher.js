'use client'
import { useState, useEffect } from 'react';
export default function PlayfairCypher(){
    const [key, setKey] = useState("")
    const [encyptInput, setEcyptInput] = useState("")
    const [decyptInput, setDecyptInput] = useState("")
    const [Edisplay, setEdisplay] = useState("")
    const [Ddisplay, setDdisplay] = useState("")

        // Function to generate the 5x5 key square
        function generateKeyTable(key, ks, keyT) {
            let i, j, k, flag = 0;

            // a 26 character hashmap
            // to store count of the alphabet
            let dicty = new Array(26).fill(0);
            for (i = 0; i < ks; i++) {
                let r = key[i].charCodeAt(0) - 97;

                if (key[i] != 'j') {
                    dicty[r] = 2;
                }

            }

            dicty['j'.charCodeAt(0) - 97] = 1;
            i = 0;
            j = 0;

            for (k = 0; k < ks; k++) {
                let r = key[k].charCodeAt(0) - 97;
                if (dicty[r] == 2) {
                    dicty[r] -= 1;
                    keyT[i][j] = key[k];
                    j++;
                    if (j == 5) {
                        i++;
                        j = 0;
                    }
                }
            }

            for (k = 0; k < 26; k++) {
                if (dicty[k] == 0) {
                    keyT[i][j] = String.fromCharCode(k + 97);
                    j++;
                    if (j == 5) {
                        i++;
                        j = 0;
                    }
                }
            }
            return keyT;
        }

        // Function to search for the characters of a digraph
        // in the key square and return their position
        function search(keyT, a, b, arr) {
            let i, j;

            if (a == 'j')
                a = 'i';
            else if (b == 'j')
                b = 'i';

            for (i = 0; i < 5; i++) {

                for (j = 0; j < 5; j++) {

                    if (keyT[i][j] == a) {
                        arr[0] = i;
                        arr[1] = j;
                    }
                    else if (keyT[i][j] == b) {
                        arr[2] = i;
                        arr[3] = j;
                    }
                }
            }
            return arr;
        }

        // Function to find the modulus with 5
        function mod5(a) {
            return (a % 5);
        }

        // Function to make the plain text length to be even
        function prepare(str, ptrs) {
            if (ptrs % 2 != 0) {
                str += 'z';
            }

            return [str, ptrs];
        }

        // Function for performing the encryption
        function encrypt(str, keyT, ps) {
            let i;
            let a = new Array(4).fill(0);
            let newstr = new Array(ps);

            for (i = 0; i < ps; i += 2) {
                let brr = search(keyT, str[i], str[i + 1], a);
                let k1 = brr[0];
                let k2 = brr[1];
                let k3 = brr[2];
                let k4 = brr[3];
                if (k1 == k3) {
                    newstr[i] = keyT[k1][(k2 + 1) % 5];
                    newstr[i + 1] = keyT[k1][(k4 + 1) % 5];
                }
                else if (k2 == k4) {
                    newstr[i] = keyT[(k1 + 1) % 5][k2];
                    newstr[i + 1] = keyT[(k3 + 1) % 5][k2];
                }
                else {
                    newstr[i] = keyT[k1][k4];
                    newstr[i + 1] = keyT[k3][k2];
                }
            }
            let res = "";

            for (let i = 0; i < newstr.length; i++) { res += newstr[i]; }
            return res;
        }

        // Function to encrypt using Playfair Cipher
        function encryptByPlayfairCipher(str, key) {
            let ps, ks;
            let keyT = new Array(5);

            for (let i = 0; i < 5; i++) {
                keyT[i] = new Array(5);
            }
            str = str.trim();
            key = key.trim();
            str = str.toLowerCase();

            key = key.toLowerCase();
            ps = str.length;
            ks = key.length;
            [str, ps] = prepare(str, ps);

            let kt = generateKeyTable(key, ks, keyT);
            return encrypt(str, kt, ps);
        }
        
        function toLowerCase(plain) {
            // Convert all the characters of a string to lowercase
            return plain.toLowerCase();
          }
          
          function removeSpaces(plain) {
            // Remove all spaces in a string
            // can be extended to remove punctuation
            return plain.split(' ').join('');
          }
          
          function generateKeyTable(key) {
            // generates the 5x5 key square
            var keyT = new Array(5).fill(null).map(() => new Array(5).fill(''));
            var dicty = {};
            for (var i = 0; i < 26; i++) {
              dicty[String.fromCharCode(i + 97)] = 0;
            }
          
            for (var i = 0; i < key.length; i++) {
              if (key[i] != 'j') {
                dicty[key[i]] = 2;
              }
            }
            dicty['j'] = 1;
          
            var i = 0, j = 0, k = 0;
            while (k < key.length) {
              if (dicty[key[k]] == 2) {
                dicty[key[k]] -= 1;
                keyT[i][j] = key[k];
                j += 1;
                if (j == 5) {
                  i += 1;
                  j = 0;
                }
              }
              k += 1;
            }
          
            for (var k in dicty) {
              if (dicty[k] == 0) {
                keyT[i][j] = k;
                j += 1;
                if (j == 5) {
                  i += 1;
                  j = 0;
                }
              }
            }
          
            return keyT;
          }
          
          function search(keyT, a, b) {
            // Search for the characters of a digraph in the key square and return their position
            var arr = [0, 0, 0, 0];
          
            if (a == 'j') {
              a = 'i';
            } else if (b == 'j') {
              b = 'i';
            }
          
            for (var i = 0; i < 5; i++) {
              for (var j = 0; j < 5; j++) {
                if (keyT[i][j] == a) {
                  arr[0] = i;
                  arr[1] = j;
                } else if (keyT[i][j] == b) {
                  arr[2] = i;
                  arr[3] = j;
                }
              }
            }
          
            return arr;
          }
          
          function mod5(a) {
            // Function to find the modulus with 5
            if (a < 0) {
              a += 5;
            }
            return a % 5;
          }
          function decrypt(str, keyT) {
          // Function to decrypt
          var ps = str.length;
          var i = 0;
          while (i < ps) {
          var a = search(keyT, str[i], str[i + 1]);
          if (a[0] == a[2]) {
          str = str.slice(0, i) + keyT[a[0]][mod5(a[1] - 1)] + keyT[a[0]][mod5(a[3] - 1)] + str.slice(i + 2);
          } else if (a[1] == a[3]) {
          str = str.slice(0, i) + keyT[mod5(a[0] - 1)][a[1]] + keyT[mod5(a[2] - 1)][a[1]] + str.slice(i + 2);
          } else {
          str = str.slice(0, i) + keyT[a[0]][a[3]] + keyT[a[2]][a[1]] + str.slice(i + 2);
          }
          i += 2;
          }
          return str;
          }
          
          function decryptByPlayfairCipher(str, key) {
          // Function to call decrypt
          var ks = key.length;
          key = removeSpaces(toLowerCase(key));
          str = removeSpaces(toLowerCase(str));
          var keyT = generateKeyTable(key);
          return decrypt(str, keyT);
          }

          function Encypt(){
            setEdisplay(encryptByPlayfairCipher(encyptInput,key))
          }
          function Decypt(){
            setDdisplay(decryptByPlayfairCipher(decyptInput,key))
          }
          
          // Example usage

          // decrypt using Playfair Cipher
          //var plainText = decryptByPlayfairCipher(str, key);
          
          // Decrypted text
          //console.log("Deciphered text:", plainText);
          
    return(
        <div class="cypher-style">
            <h2>Playfair Cypher</h2>
            <div>
                <input 
                    type="text" 
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter cypher key"
                />
                <span>Cypher Key</span>
            </div>
            <input 
                type="text" 
                value={encyptInput} 
                onChange={(e) => setEcyptInput(e.target.value)}
                placeholder="Enter text to encypt"
            />
            <button onClick={() => Encypt()}>
                <div>Encypt</div>
            </button>
            <div>{Edisplay}</div>
            <input 
                type="text" 
                value={decyptInput} 
                onChange={(e) => setDecyptInput(e.target.value)}
                placeholder="Enter text to decrypt" 
            />
            <button onClick={() => Decypt()}>
                <div>Decypt</div>
            </button>
            <div>{Ddisplay}</div>
        </div>
    )
}