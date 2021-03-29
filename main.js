

const mixedMessages = {
 array1 : ['If you have to learn about alpacas, you might as well ', 'In order to gain intelligence ', 'If you need more money ', 'When you\'re feeling down '],
 array2 : ['write a book because ', 'burn down your house ', 'talk to your mum because ', 'get bangs because ', 'go to the library because ', 'move at a faster average speed because '],
 array3 : ['your mum is a smart lady.', 'you better follow your dreams.', 'books contain useful information.', 'you\'re probably procrastinating.', 'it will earn you money easily.', 'skiing is always the answer, but not this time.', 'a good haircut can change your life.', 'at least you won\'t have to pay rent.'],

 generateRandomQuote () {
    let randNum = (max) => Math.floor(Math.random() * (max + 1));
    let randOne = randNum(3);
    let randTwo = randNum(5);
    let randThree = randNum(7);
return `${this.array1[randOne]}${this.array2[randTwo]}${this.array3[randThree]}`
 },
};

console.log(mixedMessages.generateRandomQuote());
console.log(mixedMessages.generateRandomQuote());
console.log(mixedMessages.generateRandomQuote());
console.log(mixedMessages.generateRandomQuote());
console.log(mixedMessages.generateRandomQuote());
console.log(mixedMessages.generateRandomQuote());