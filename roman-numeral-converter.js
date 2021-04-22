function convertToRoman(num) {
 let romanNur = {
    "0": "",
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "20": "XX",
    "30": "XXX",
    "40": "XL",
    "50": "L",
    "60": "LX",
    "70": "LXX",
    "80": "LXXX",
    "90": "XC",
    "100": "C",
    "200": "CC",
    "300": "CCC",
    "400": "CD",
    "500": "D",
    "600": "DC",
    "700": "DCC",
    "800": "DCCC",
    "900": "CM",
    "1000": "M",
    "2000": "MM",
    "3000": "MMM"
  }

  let numArr = num.toString();

  if(numArr.length === 1){
    return romanNur[numArr[0]];
  } else if (numArr.length === 2){
    return romanNur[numArr[0]*10]
           .concat(romanNur[numArr[1]]);
  } else if (numArr.length === 3){
    return romanNur[numArr[0]*100]
           .concat(romanNur[numArr[1]*10])
           .concat(romanNur[numArr[2]]);
  }  else if (numArr.length === 4){
    return romanNur[numArr[0]*1000]
           .concat(romanNur[numArr[1]*100])
           .concat(romanNur[numArr[2]*10])
           .concat(romanNur[numArr[3]]);
  }
}

console.log(convertToRoman(399));
