const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    for (let i = 0; i <= expr.length; i = i + 10) {
        let match = "";
        let kuku = [];
        if (expr.slice(i, i + 10).length == 10) {
          match = expr.slice(i, i + 10);
          if (expr.slice(i, i + 10) == "**********") {
            kuku.push(" ");
            morze.push(" ");
          }
    
          for (let n = 0; n < 10; n++) {
            if (match[n] + match[n + 1] == "10") {
              kuku.push(".");
              n++;
            } else if (match[n] + match[n + 1] == "11") {
              kuku.push("-");
              n++;
            }
          }
        }
        morze.push(MORSE_TABLE[kuku.join("")]);
      }
      return morze.join("");// write your solution here
}

module.exports = {
    decode
}