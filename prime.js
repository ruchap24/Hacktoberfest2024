function isPrime(num) {
    if (num <= 1) return false; // 0, 1, and negative numbers are not prime
    if (num <= 3) return true; // 2 and 3 are prime numbers

    // Check if num is divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for factors from 5 to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Example usage:
const number = parseInt(prompt("Enter a positive number: "));
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
