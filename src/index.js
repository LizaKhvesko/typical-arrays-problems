
exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  else {
      let sort = array.sort((a,b) => b-a);
    return sort[sort.length-1];
  }
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
  else {
      let sort = array.sort((a,b) => b-a);
    return sort[0];
  }
}
exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
  else {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer)/array.length;
  }
}
