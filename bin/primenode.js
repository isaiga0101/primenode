var request = require('request')

// Check if number is primes
const isPrime = num => {
    // Only loop to the square root of a number
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;     // Returns true if num does not equal 1
}
