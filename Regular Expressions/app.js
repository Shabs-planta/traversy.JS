// // RegularExpressions

// let re;
// re = /hello/;
// re = /hello/i; // Adding "i" flag:   i = case insensitive
// re = /hello/g; // Adding "g" flag:   g = global search

// console.log(re);
// console.log(re.source); // the source will evaluate the Expression.

// // exec() - Return result in an Array or null
// const result = re.exec('hello world is shabs');
// const result1 = re.exec('hey jay hello shabs');
// const result2 = re.exec('hey shabs');


// console.log(result);
// console.log(result1);
// console.log(result2);
// // getting more results with console.log.
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


// // test() - Returns true or false
// const results = re.test('Hello');

// console.log(results);


// // match() - Returns result in an array or null.
// const str = 'Hello there';
// const result = str.match(re);

// console.log(result);



// // search() - Returns index of the first match if not found returns -1.
// const str = 'Hello there';
// const result = str.search(re);

// const str1 = 'Bred Hello there';
// const result1 = str1.search(re);

// const str2 = 'Bred Hey there';
// const result2 = str2.search(re);


// console.log(result);
// console.log(result1);
// console.log(result2);



// // replace() - Return new String with some or all matechs of a pattern
// const str = 'Hello there';
// const newStr = str.replace(re, 'Hey');

// console.log(newStr);





// // *** REGULAR EXPRESSION PART 2 ***

// let re;
// // Literal Characters
// re = /hello/;
// re = /hello/i;

// // metaCharacter symbols
// re = /^h/i;      // "must start with."
// re = /^hell/i;

// re = /e$/i;      // "most End with."
// re = /ere$/i;

// re = /^hello$/i;  // "most Start and End with."

// re = /h.llo/i;     // matches any one character where the fulStop is located
// re = /h*llo/i;    // "its a wired card" matches more than one character and even i can remove the character where the * is located and still matches.
// re = /gre?a?y/;   // "Its an Optional character"
// re = /gre?a?y\?/;   // "Its an Escape character" 



// // string to match
// const str = 'Hello there';
// const str = 'gray' + 'grey';
// const str = 'grey?';


// // log result
// const result = re.exec(str);
// console.log(result)


// function reTest(re, str) {
//    if(re.test(str)) {
//       console.log(`${str} matches ${re.source}`);
//    } else {
//       console.log(`${str} does not match ${re.source}`);
//    }
// }

// // call 'reTest' function
// reTest(re, str);



// // *** CHARACTER SETS AND QUANTIFIERS ***

// let re;
// // Literal Characters
// re = /hello/;
// re = /hello/i;

// // Brackets [] - character Sets
// re = /gr[ae]y/i;   // Must be an a or e.
// re = /[GR]aey/;   // Must be an G or R.
// re = /[^GR]aey/;  // Match anything except a G or R
// re = /[A-Z]ray/;   // matches any UpperCase letter.
// re = /[a-z]ray/;   // matches any LowwerCase letter.
// re = /[A-Za-z]ray/;   // matches any letter.
// re = /[0-9]ray/;   // matches any Digit Range i put.
// re = /[0-9][0-9]ray/;   // matches any Digit Range i put in double.



// // Braces {} - Quantifiers Sets/
// re = /hel{2}o/i;   // most occur Exactly {m} amount of times.
// re = /hel{2,5}o/i;   // most occur Exactly {M to K} Range amount of times.
// re = /hel{2,}o/i;   // most occur at list {m} amount of times.


// // Paretheses () - Grouping Sets
// re = /([0-9]x){3}/;   // it allows any single Number with "X" multiple times.
// re = /^([0-9]x){4}$/;   // it allows any single number with "X" in a specific time in the Braces{}.



// // Strings to match.
// const str = 'grey';
// const str = 'Zaey';
// const str = '34ray';
// const str = 'Helllo';
// const str = '4x2x3x4x'


// // log result
// const result = re.exec(str);
// console.log(result)


// function reTest(re, str) {
//    if(re.test(str)) {
//       console.log(`${str} matches ${re.source}`);
//    } else {
//       console.log(`${str} does not match ${re.source}`);
//    }
// }

// // call 'reTest' function
// reTest(re, str);





// *** SHORTHAND CHARACTER CLASSES ***

let re;
// shorthand character classes
re = /\w/;  // word character - alphanumeric or_
re = /\w+/;  // + = one or more words character
re = /\W/;  // non-word character
re = /\d/;  // match any Digits
re = /\d+/;  // + = one or more digits
re = /\D/;   // match any non-digits
re = /\s/;   // match whiteSpace char
re = /\S/;  // match non-whiteSpace char
re = /Hell\b/i;   // word boundary


// Assertions
re = /x(?=y)/;   //Match "x" only if followed by "y"
re = /x(?!y)/;   //Match "x" only if Not followed by "y"


// strings to match.
// const str = '423x4';
const str = 'Hello, Welcome to xelly';


// log result
const result = re.exec(str);
console.log(result)


function reTest(re, str) {
   if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);
   } else {
      console.log(`${str} does not match ${re.source}`);
   }
}

// call 'reTest' function
reTest(re, str);