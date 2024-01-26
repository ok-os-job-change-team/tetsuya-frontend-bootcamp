let fizzbuzz: string = '';

for (let i = 1; i <= 100; i++) {
  if (i > 1) {
    fizzbuzz += ' ';
  }
  if (i % 15 === 0) {
    fizzbuzz += 'FizzBuzz';
  } else if (i % 3 === 0) {
    fizzbuzz += 'Fizz';
  } else if (i % 5 === 0) {
    fizzbuzz += 'Buzz';
  } else {
    fizzbuzz += `${i}`;
  }
}
console.log(fizzbuzz);