// 1000 => 1k
// https://stackoverflow.com/a/40724354/4674834
function abbreviateNumber(number) {
  const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
  // what tier? (determines SI symbol)
  const tier = Math.log10(number) / 3 | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return number;

  // get suffix and determine scale
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}


function maskName(name) {
  const dic = 'abcdefghijk';
  return [...name]
    .map((char) => {
      const lastCharCodeDigit = Number(char.charCodeAt().toString().split('').pop());
      return dic[lastCharCodeDigit];
    })
    .join('');
}

console.log(maskName('timqian@ t9t.io'));

module.exports = {
  abbreviateNumber,
  maskName,
};
