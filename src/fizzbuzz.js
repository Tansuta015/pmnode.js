module.exports.fizzbuzz = numebr => {


    if (number % 3 === 0 && numebr % 5 != 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number;

}