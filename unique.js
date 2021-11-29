let map = new Map();
//123ad-asd12-16asd
const APIKEY = (
  length = 16,
  ch = "-",
  div = 4,
  string = "ABCDEFGlaHgIhJKLjMNwOPqQRsSTcUVWnXYZm012u34f56789"
) => {
  // var string="ABCDEFGlaHgIhJKLjMNwOPqQRsSTcUVWnXYZm012u34f56789"
  let str = "";
  let i = 0;
  let shuffled_str;
  if (isNaN(length) || isNaN(div)) {
    return "error";
  }
  string = string.toString();
  ch = ch.toString();
  for (i = 0; i < 23; i++) {
    string = string
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
  }
  i = 0;
  while (i < length) {
    str += string.charAt(Math.floor(Math.random() * string.length));
    i++;
  }
  //let myRe = RegExp(/.{3}/g);
  re = new RegExp(`.{${div}}`, "g");
  let chuncks = str.match(re);
  let new_value = chuncks.join(ch); //returns 123-456-789
  if (map.has(new_value)) {
    new_valu = APIKEY(length, ch, div, string);
  } else {
    map.set(new_value, "APIKEY");
    return new_value;
  }
  return 'Error -> try again '

};
//466322145452
const RandomNum = (length = 16, string = "0123456789") => {
  if (isNaN(length) || isNaN(string)) {
    return "error";
  }
  let i = 0;
  for (i = 0; i < 23; i++) {
    string = string
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
  }
  let str = "";
  i = 0;
  while (i < length) {
    str += string.charAt(Math.floor(Math.random() * string.length));
    i++;
  }
  if (map.has(new_value)) {
    str = RandomNum(length, string);
  } else {
    map.set(str, "RandomNum");
    return str;
  }
  return 'Error -> try again '

};
//jshAdfAfaFm
const RandomString = (
  length = 16,
  string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
) => {
  if (isNaN(length) || !isNaN(string)) {
    return "error";
  }
  let i = 0;
  for (i = 0; i < 23; i++) {
    string = string
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
  }
  let str = "";
  i = 0;

  while (i < length) {
    str += string.charAt(Math.floor(Math.random() * string.length));
    i++;
  }
   if (map.has(new_value)) {
    str = RandomString(length,string);
  } else {
    map.set(str, "RandomString");
    return str;
  }
  return 'Error -> try again '
 };

 

module.exports.APIKEY = APIKEY;
module.exports.RandomString = RandomString;
module.exports.RandomNum = RandomNum;
