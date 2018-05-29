
var lists = (function(){

  //this way, data is encapsualated and made private - this is the client-side module
  //pattern through an IIFE

  var nailWords = {
    fragrance: ["minty", "fresh", "sweet", "spicy", "sugary"],
    temperature: ["hot", "sizzling", "cool", "frigid"],
    color: ["red", "pink", "yellow", "turquoise", "emerald", "cerulean", "tangerine"],
    music: ["rock", "rock and roll", "emo", "punk", "jazz"],
    food: ["pineapple", "candy", "sundae", "lollipop", "mango", "avocado"],
    describer: ["elegant", "galactic", "starry", "suave", "wild"],
    emotion: ["angry", "angelic", "innocent", "raging", "blissful", "happy", "hyper"],
    formula: [
      "fragrance color", "color food", "music color", "emotion food", "temperature color",
      "emotion color", "describer color", "color", "food"
    ]
  }

  return {
    random: function(list) {
              var index = Math.floor(Math.random() * nailWords[list].length);
              return nailWords[list][index];
            }
  }
}());
