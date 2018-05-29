var formula = (function() {
  var formulas = {
    'fragrance color': describerNoun,
    'color food': describerNoun,
    'music color': describerNoun,
    'emotion food': describerNoun,
    'temperature color': describerNoun,
    'emotion color': describerNoun,
    'describer color': describerNoun,
    'food': oneWord,
    'color': oneWord
  }
  function oneWord(nailWords) {
    return nailWords[0];
  };
  function describerNoun(nailWords) {
    return nailWords[0] + ' ' + nailWords[1];
  };
  return {
    makeName: function(formula, nailWords) {
                return formulas[formula](nailWords)
              },
    random: function() {
              var keys = Object.keys(formulas)
              var index = Math.floor(Math.random() * keys.length);
              return keys[index];
            }
  }
}())
