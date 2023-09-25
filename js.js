// kata 8
// function areYouPlayingBanjo(name) {
//   const nameSplited = name.split('');
//   if (nameSplited[0].toLowerCase() === 'r') {
//     return `${name} plays banjo`
//   }
//   // Implement me
//   return `${name} does not play banjo`;
// }
// areYouPlayingBanjo("artme");


// kata 7

// function squareDigits(num) {
//    const numArray = num.toString().split('');
//    const newArray = [];

//       numArray.forEach(element => {
//          newArray.push(Math.pow(Number(element), 2));
//       });
   
//    console.log(newArray.join(''));

//    return Number(newArray.join(''));
// }

// squareDigits(3212)



// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// function getCount(str) {
//    let result = 0;
//    const valwes = ["a", "e", "i", "o", "u"];
//    const strToArray = str.split('');
//    strToArray.forEach(element => {
//       if (valwes.find(option => option === element)) {
//          result++;
//       }
//    });
//    return result;
// }


// kata 5

// function zero(arg) {
//    return arg ? arg(0) : 0;
// }

// function one(arg) {
//    return arg ? arg(1) : 1;
// }


// function two(arg) {
//    return arg ? arg(2) : 2;
// }


// function three(arg) {
//    return arg ? arg(3) : 3;
// }

// function four(arg) {
//    return arg ? arg(4) : 4;
// }

// function five(arg) {
//    return arg ? arg(5) : 5;
// }

// function six(arg) {
//    return arg ? arg(6) : 6;
// }

// function seven(arg) {
//    return arg ? arg(7) : 7;
// }

// function eight(arg) {
//    return arg ? arg(8) : 8;
// }

// function nine(arg) {
//    return arg ? arg(9) : 9;
// }

// function times(b) {
//    return function (a) {
//       return a * b;
//    }
// }

// function dividedBy(b) {
//    return function (a) {
//       return Math.floor(a/b);
//    }
// }

// function minus(b) {
//    return function (a) {
//       return a - b;
//    };
// }

// function plus(b) {
//    return function (a) {
//       return a + b;
//    };
// }

// console.log(two(plus(three())));

// Kata 6

// var uniqueInOrder = function (iterable) {
//    const iterableArray = iterable.split('');
//    const indexArray = [];
//    const newArray = [];
//    for (let i = 0; i < iterableArray.length; i += 1) {
//       if (iterableArray[i] != iterableArray[i + 1]) {
//          indexArray.push(i);
//       }
//    }
//    console.log(indexArray)
//    console.log(iterableArray)
//    console.log(newArray)
//    }



   
// uniqueInOrder('AAAABBBCCDAABBB')

function domainName(url){
   const urlnew = new URL(url);
   const newArray = urlnew.host.split('.').filter(value => value !== 'www').filter(value => value !== 'com').filter(value => value !== 'co').filter(value => value !== 'jp').join('');

   return newArray;
}

domainName("http://github.com/carbonfive/raygun")
domainName("http://www.zombie-bites.com")
domainName("https://www.cnet.com")
domainName("http://google.co.jp")

   // console.log(urlnew);
   console.log(newArray);