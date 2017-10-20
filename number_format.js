function number_format(string,decimals=2,decimal=',',thousands='.',pre='R$ ',pos=' $'){
  var numbers = string.toString().match(/\d+/g).join([]);
  numbers = numbers.padStart(decimals+1, "0");
  var splitNumbers = numbers.split("").reverse();
  var mask = '';
  splitNumbers.forEach(function(d,i){
    if (i == decimals) { mask = decimal + mask; }
    if (i>(decimals+1) && ((i-2)%(decimals+1))==0) { mask = thousands + mask; }
    mask = d + mask;
  });
  return pre + mask + pos;
}
