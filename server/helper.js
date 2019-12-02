module.exports = {
  randomize: function(upperLimit, amount = 8) {
    // return an array of randomly generated numbers
    var res = [];
    while (res.length < amount) {
      var newNumber = Math.floor(Math.random() * upperLimit);
      if (!res.includes(newNumber)) {
        res.push(newNumber);
      }
    }
    return res;
  }
}