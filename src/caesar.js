// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //build library
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function caesar(input = "", shift, encode = true) {
    // your solution code here
    //check value of shift
    //check whether to encode or decode the message
    // console.log("input", input);
    //guard clause for shift
    if (shift === 0 || shift < -25 || shift > 25) return false;

    //account for decoding
    if (!encode) shift *= -1;

    //drop the input to lower case letters and split into array
    const array = input.toLowerCase().split("");

    const shiftedArray = array
      .map((letter) => {
        if (!alphabet.includes(letter)) return letter;

        const index = alphabet.indexOf(letter);

        let newIndex;
        //handle if index is less than or past the alphabet
        if (index + shift > 25) {
          newIndex = index + shift - 26;
        } else if (index + shift < 0) {
          newIndex = index + shift + 26;
        } else {
          newIndex = index + shift;
        }

        return (letter = alphabet[newIndex]);

        //only covered if index went off the deep end of the alphabet, not the shallow end
        // return (letter = alphabet[(alphabet.indexOf(letter) + shift) % 26]);
      })
      .join("");
    // console.log("shiftedArray", shiftedArray);
    return shiftedArray;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
