// 0. Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

console.log("Solution for exercise 0:");

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log("FizzBuzz");
  }
  else if ( i%3 === 0 ) 
  {
    console.log("Fizz");
  }
  else if ( i%5 === 0 ) 
  {
    console.log("Buzz");
  }
  else
  {
    console.log(i);
  }
}

console.log("======================================================================");

// 1. Sa se scrie o functie care scapa de duplicatele dintr-un array
console.log("Solution for exercise 1:(A)");

const dupeArray = [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 8, 8];

function getDedupedArray(arr) {
    let unique = [];
    arr.forEach(function(value) {      
      if(!unique.includes(value)) {
          unique.push(value);       
        }
    });   

    return unique; 
};

console.log("Deduped array: ", getDedupedArray(dupeArray)); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log("Solution for exercise 1:(B)");

console.log([...new Set(dupeArray)]);

console.log("======================================================================");

/* 2. Choose a number, reverse its digits and add it to the original. If the sum is not a palindrome (which means, it is not the same number from left to right and right to left), repeat this procedure.

195 (initial number) + 591 (reverse of initial number) = 786
786 + 687 = 1473
1473 + 3741 = 5214
5214 + 4125 = 9339 (palindrome)

In this particular case the palindrome 9339 appeared after the 4th addition. This method leads to palindromes in a few steps for almost all of the integers.

Write a function called reverseAndAdd that will take an integer as an input and return a string formatted as number of additions + palindrome number found. In the above example, reverseAndAdd(195) should produce the string "4 9339", with "4" being the number of tries and "9339" the palindrome number.
*/
console.log("Solution for exercise 2:");

function reverseAndAdd (num) {
  var reversed_number = 0; 
  var count = 0;
  while (num <= 11000)
  { 
  // Reversing the digits of the number 
  reversed_number = reverseNumber(num); 
  // Adding the reversed number with the original 
  num = num + reversed_number; 
  // Increase number of the counter
  count++;
  // transform toString
  var stringToReturn = count.toString() + " " + num.toString();
  stringToReturn = stringToReturn.toString();
  // Checking whether the number is palindrome or not 
  if(isPalindrome(num)) { 
    console.log(stringToReturn.toString()); 
    return stringToReturn.toString();
  } else if (num > 11000) { 
    console.log("No palindrome exist"); 
    return "No palindrome exist";
   };  
  };
};

function reverseNumber (number) {
const revString = number.toString().split("").reverse().join("");
  return parseInt(revString);
}
function isPalindrome (number) {
  return (reverseNumber(number) === number); 
}

const result = reverseAndAdd(195);
const isPalindrom = result === "4 9339";

console.log("Reverse and Add: ", isPalindrom);

console.log("======================================================================");

// 3. Find the shortest word(s) in a sentence and return alphabetically ordered and lowercase.  Ie. "I have a cat" return "a i", exclude special characters.
console.log("Solution for exercise 3:");

function shortestWords(sentence) {
  const wordsSentence = sentence.toLowerCase().match(/[a-z]+/g);
  const sortedWords = wordsSentence.sort(function (firstWord, secondWord) {
      return firstWord.length - secondWord.length;
  });
  console.log('Sorted words by length are: ', sortedWords);
    const longestWordArr = sortedWords.filter(function (word) {
      return word.length === sortedWords[0].length;
  });
  console.log('The alphabetical order of words is: ', longestWordArr.sort().join(' '));
    
  return `${longestWordArr.sort().join(' ')}`; 
  
}

console.log('Shortest words: ', shortestWords('I have a cat.') === 'a i');




