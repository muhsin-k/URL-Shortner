module.exports = {
  generate: function() {
    let text = "";
    let possible1 = "abcdefghijkqrstuvwxyzMNOPQR";
    let possible2 = "ABCDEFGHIJKL984lmnop5632STUVWXYZ017";
    for (let i = 0; i < 6; i++)
      text += possible1.charAt(Math.floor(Math.random() * possible1.length));
    for (i = 0; i < 6; i++)
      text += possible2.charAt(Math.floor(Math.random() * possible2.length));
    let shuffledWord = "";
    let word = text.split("");
    while (word.length > 0) {
      shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
    }
    return shuffledWord;
  }
};
