// console.log("Homework? On the weekend?!");

// // // Conceptual Questions
// // // How do we assign a value to a variable?
// // const variable = 'value';

// // // How do we change the value of a variable?

// // variable = 'New Value';

// // // How do we assign an existing variable to a new variable?

// // newVariable = variable;

// // // Strings

// // // Create a variable called firstVariable.

// // const firstVariable = '';

// // // assign it the value of a string => "Hello World"

// // firstVariable = "Hello World";

// // // change the value of this variable to a number.

// // firstVariable = 8;

// // // store the value of firstVariable into a new variable called secondVariable

// // secondVariable = firstVariable;

// // // change the value of secondVariable to a string.

// // secondVariable = 'changed variable'

// // // What is the value of firstVariable?

// // 8

// // // Create a variable called yourName and set it equal to your name as a string.

// // const yourName = 'Patrick Gray'

// // // Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

// //  "Hello, my name is " + yourName;

// // //BOOLEANS

// // // Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
// //   const a = 4;
// //   const b = 53;
// //   const c = 57;
// //   const d = 16;
// //   const e = 'Kevin';

// // a < b;

// // c > d;

// // 'Name' === 'Name';

// // (a + b) === c;

// // (a + a) < d;

// // e === 'Kevin';

// // 48 !== '48';

// // // The Farm
// // // Write code that will print out "mooooo" if the variable animal is equal to cow.

// // // Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."

// // const animal = cow

// // if(animal === cow ){
// // 	console.log('moo')
// // } else {
// // 	console.log("Hey! You're not a cow!")
// // }

// // // Driver's Ed
// // // Write a variable that will hold a person's age.

// // // Write code that will print out "Here are the keys", if the age is 16 years or older.

// // // Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

// // const age = '';

// // if (age >= 16){
// // 	console.log("Here are the keys")
// // } else {
// // 	console.log("Sorry, You're too youg.")
// // }

// // // Just Loop It
// // // Write code that will print out all the numbers in the range 0 - 10.
// // for (let i = 0; i <= 10; i++){
// // 	console.log(i);
// // }
// // // Write code that will print out all the numbers in the range 10 - 4000.
// // for (let i = 10; i <= 20; i++){
// // 	console.log(i);
// // }

// // // Write code that will print out every other number in the range 10 - 4000.
// // for (let i = 10; i <= 20; i += 2){
// // 	console.log(i);
// // }

// // // Let's get even
// // // Print out the even numbers that are within the range of 1 - 100.

// // // Adjust your code to add a message next to the even number that says: "is an even number".

// // // Example Output:

// // // 2 is an even number
// // // 4 is an even number
// // // 6 is an even number


// // for (let i = 2; i <= 20; i += 2){
// // 	console.log(`${i} is an even number.`);
// // };

// // // Give me Five
// // // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// // // Example Output:

// // // I found a 5. High five!
// // // I found a 10. High five!
// // // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// // // Example Output:

// // // I found a 3. Three is a crowd
// // // I found a 5. High five!
// // // I found a 6. Three is a crowd
// // // I found a 9. Three is a crowd
// // // I found a 10. High five!


// // for (let i = 1; i <= 100; i++){
// // 	if( i%5 ===0){
// // 		console.log(`I found a ${i}. High five!`)
// // 	} else if(i%3 === 0){
// // 		console.log(`I found a ${i}. Three is a crowd.`)
// // 	}
// // }

// // // Savings account
// // // Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// // // Check your work! Your banck_account should have $55 in it.

// // // You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// // // Check your work! Your banck_account should have $10,100 in it.

// // let bank_account = 0;

// // for(i = 1; i <= 10; i++){
// // 	bank_account += i;
// // }
// //  console.log(bank_account);

// // // Multiples of 3 and 5
// // // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // // Find the sum of all the multiples of 3 or 5 below 1000.

// // // 👏 You just solved Project Euler problem 1! 👏


// // let sumOfMultiplesOf3or5 = 0;
// // // let multiplesOf3or5Array = [];

// // for(i = 1; i < 1000; i++){
// // 	if((i%3 === 0)||(i%5 === 0)){
// //     // multiplesOf3or5Array.push(i)
// //     sumOfMultiplesOf3or5 += i;
// // 	}
// // }
// // // console.log(multiplesOf3or5Array);
// // console.log(sumOfMultiplesOf3or5);

// // //I added the array so I could see what nmumbers were being pulled and added as multoples of 3 or 5

// // // Easy Does It
// // // Create an array that contains three quotes and store it in a variable called quotes.

// // let quote = ['Faster would be better', 'Clever girl', 'Welcome to Jurassic Park'];

// // // Random
// // // Given the following array 
// // const randomThings = [1, 10, "Hello", true]

// // // how do you access the 1st element in the array?

// // randomThings[0]

// // // Change the value of "Hello" to "World".

// // randomThings[2] = 'world'

// // // Check the value of the array to make sure it updated the array.

// // console.log(randomThings)


// // // We've Got Class
// // // Given the following array 

// // const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// // // What would you write to access the 3rd element of the array?
// // // Change the value of "Github" to "Octocat"

// // ourClass[2] = "Octocat";

// // // Add a new element, "Cloud City" to the array.

// // ourClass.push('Cloud City');


// // // Mix It Up
// // // Given the following array 
// // const myArray = [5 ,10 ,500, 20];

// // // using the push method, add the string "Egon" to the end of the array.

// // myArray.push('Egon');

// // // using a method, remove the string from the end of the array.

// // myArray.pop();

// // // using the unshift method, add the string "Bob Marley" to the beginning of the array

// // myArray.unshift('Bob Marley');

// // // using a different method, remove the string from the beginning of the array

// // myArray.shift();

// // // use the reverse method on this array

// // console.log(myArray);

// // myArray.reverse();

// // console.log(myArray.reverse());


// // // Biggie Smalls
// // // Write an if..else statement:
// // // console.log little number if the number is entered is less than 100
// // // If the number entered is 100 or more, alert big number.

// // let num = 0

// // if(num < 100){
// // 	console.log("little number");

// // }else{
// // 	alert("big number");
// // }

// // //I wasn't sure if we should actually do an alert...

// // // Monkey in the Middle

// // // Write an if...else if...else statement:
// // // console.log little number if the number entered is less than 5.
// // // If the number entered is more than 10, log big number.
// // // Otherwise, console.log "monkey". 

// // let num = 0

// // if(num<5){
// // 	console.log("little number")
// // } else if (num > 10){
// // 	console.log("big number");
// // } else{
// // 	console.log("monkey.")
// // }


// // // What's in Your Closet?
// // // Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// // const kristynsCloset = [
// //   "left shoe",
// //   "cowboy boots",
// //   "right sock",
// //   "GA hoodie",
// //   "green pants",
// //   "yellow knit hat",
// //   "marshmallow peeps"
// // ];

// // // // Thom's closet is more complicated. Check out this nested data structure!!
// // const thomsCloset = [
// //   [
// //     // These are Thom's shirts
// //     "grey button-up",
// //     "dark grey button-up",
// //     "light blue button-up",
// //     "blue button-up",
// //   ],[
// //     // These are Thom's pants
// //     "grey jeans",
// //     "jeans",
// //     "PJs"
// //   ],[
// //     // Thom's accessories
// //     "wool mittens",
// //     "wool scarf",
// //     "raybans"
// //   ]
// // ];
// // // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// // console.log(`Kristyn is rocking that ${kristynsCloset[2]}`)


// // // Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

// // let kristynShoe = kristynsCloset.splice(0,1);
// // console.log(kristynShoe)

// // // Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
 
// //  kristynsCloset.splice(6, 0, 'raybans');
// //  console.log(kristynsCloset);
// // // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// // kristynsCloset[5] = 'stained knit hat';
// // console.log(kristynsCloset)

// // // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// // thomsCloset[0][0]

// // // In the same way, access one item from Thom's pants array.

// // thomsCloset[1][0]

// // // Access one item from Thom's accessories array.

// // thomsCloset[2][2]

// // // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// // console.log(`Thoms is looking FIERCE in his ${thomsCloset[0][0]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][0]}. Tres bien, girlfriend!`)


// // // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// // thomsCloset[1][2] = 'Footie Pajamas'

// // // Functions
// // // printGreeting
// // // Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

// // const printGreeting = (name) => {
// // 	console.log(`why hello, ${name}...`)
// // };

// // console.log(printGreeting('Bob'));


// // // console.log(printGreeting("Slimer"));
// // // => Hello there, Slimer!


// // // Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// // const reverseWordOrder = (string) =>{
// // 	let arrayOfReverseWord = []
// // 		for (i = 0; i < string.length; i++){
// // 			arrayOfReverseWord.push(string[i])
// // 		}	

// // 		for (i = 0; i < arrayOfReverseWord.length/2; i++){
// // 			let temp = arrayOfReverseWord[i];
// // // 			arrayOfReverseWord[i] = arrayOfReverseWord[(arrayOfReverseWord.length-1) - i];
// // // 			arrayOfReverseWord[(arrayOfReverseWord.length -1) - i] = temp;
// // // 		}

// // // 	let reversedString = arrayOfReverseWord.join('');

// // // 	return reversedString;
// // // }


// // // // console.log(reverseWordOrder("Ishmael me Call"));
// // // // // => "Call me Ishmael"

// // // console.log(reverseWordOrder("I use Lâncome on my comb"));
// // // // => "comb my on Lâncome use I"


// // //note to self strings are immutable, so you cant change the individual letters

// // //returning "undefined " or string[0] = DOMStringList and I'm not sure why...


// // // calculate
// // // Write a function called calculate.
// // // This function should take three arguments, two numbers and a string. 
// // // Name the parameters num1, num2, and operation.

// // const calculate = (num1, num2, operation) =>{
// // 	if((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
// // 		return "use two numbers to compare...idiot"
// // 	} else if ((operation === 'add')){
// // 		return num1 + num2;

// // 	} else if ((operation === 'sub')){
// // 		return num1 - num2;

// // 	} else if ((operation === 'mult')){
// // 		return num1 * num2;

// // 	} else if ((operation === 'div')){
// // 		return num1 / num2;

// // 	} else if ((operation === 'exp')){
// // 		return Math.pow(num1, num2);

// // 	} else {
// // 		return `It \' s a calculator, not a crystal ball. Use \"add\" \"sub\" \"mult\" \"div\" or \"exp\" if you would like to compare ${num1} and ${num2}.` 
// // 	}
// // }

// // console.log (calculate('Hi', 15, 'add'));


// // If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

// // If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

// // Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

// // console.log(calculate(4, 3, "sub"));

// // => 1
// // console.log(calculate(4, 3, "exp"));

// // => 64


// // 1
// // Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// // console.log(printCool("Captain Reynolds"));


// // const printCool = (name) =>{
// //  console.log(`You\'re so cool, ${name}`)
// // }

// // console.log(printCool('Captain Reynolds'))

// // // Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// // // console.log(calculateCube(5));
// // // => 125


// // const calculateCube = (num) =>{
// //  console.log( Math.pow(num, 3))
// // }

// // console.log(calculateCube(5));


// // // Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// // console.log(isAVowel("a"));
// // => true

// // const isAVowel = (string) => {

// // 	if ((string === 'a') || (string === 'A')){
// // 		console.log(`${string} is a vowel!`)
// // 	} else if ((string === 'e') || (string === 'E')){
// // 		console.log(`${string} is a vowel!`);
// // 	} else if ((string === 'i') || (string === 'I') ){
// // 		console.log(`${string} is a vowel!`)
// // 	} else if ((string === 'o') || (string === 'O')  ){
// // 		console.log(`${string} is a vowel!`)
// // 	} else if ((string === 'u') || (string === 'U')  ){
// // 		console.log(`${string} is a vowel!`)
// // 	} else {
// // 		console.log("Hmmm, well this is awkward. I guess you didn't put in a vowel")
// // 	}
// // }

// // console.log(isAVowel("what"));

// // Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// // console.log(getTwoLengths("Hank", "Hippopopalous"));
// // => [4, 13]

// // const getTwoLengths = (string1 ,string2) => {
// // let stringArray = [];
// // let temp = "";
// //  for (let i = 0; i < string1.length ; i++){
// // if(i === " "){
// // 	stringArray.push(temp);
// // 	temp = '';
// // } else {
// // 	temp += string1[i];
// // }
// // }

// // stringArray.push(temp)
// // temp = ''
 
// //  for (let i = 0; i < string2.length ; i++){
// // if(i === " "){
// // 	stringArray.push(temp);
// // 	temp = '';
// // } else {
// // 	temp += string2[i];
// // 	console.log(temp);
// // }
// // }
// // stringArray.push(temp)
// // return stringArray
// // }

// // console.log (getTwoLengths('is this real', 'not again'));


// // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


// // const getMultipleLengths = (arr) =>{

// // 	for (let i = 0; i <arr.length; i++) { 
// // 		arr[i] = arr[i].length;
// // 	}
// // 	return arr

// // 	conso
// // }

// // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// // console.log(maxOfThree(6, 9, 1));
// // => 9

// // const maxOfThree = (num1, num2, num3) =>{

// // 	if ((typeof num1 !== 'number') || (typeof num2 !== 'number') || (typeof num3 !== 'number')){
// // 		return 'Please use numbers when you want my help!'
// // 		}
// // 	else if (num1 !== num2){

// // 		if (num1 > num2){
// // 			if (num1 > num3){
// // 			return `${num1} is the biggest number!`;
// // 			} else if (num1 < num3){
// // 				return `${num3} is the biggest number!`;
// // 			} else if (num3 === num1){
// // 				return 'The first and third number are the same!';
// // 			} 	
			 
// // 		} else if (num2 > num1){
// // 			if (num2 > num3){
// // 			return `${num2} is the biggest number!`
// // 			} else if (num2 < num3){
// // 			return `${num3} is the biggest number!`
// // 			} else if (num2 === num3){
// // 				return 'The second and third number are the same!';
// // 			}
// // 		}
// // 	} else if (num1 === num3){
// // 		return `The numbers are all the same!`; 
// // 		}
// // }

// // console.log(maxOfThree(13, 13, 13));

// // 7
// // Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.




// const printLongestWord = (arr) =>{
// 	let longestWord = '0'
// 	for (let i = 0; i < arr.length; i++){
// 			if (arr[i].length > longestWord.length){
// 			longestWord = arr[i];
// 			}
// 		}
// 	return longestWord;

// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "rednutbutter", "big", "Todd"]));
// // // => "Peanutbutter"


// // Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// // The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// // For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// // console.log(transmogrify(5, 3, 2));
// // => 225


// const transmogrify = (num1, num2, num3) => {
// 	let productNum1ByNum2 = num1 * num2;
// 	let raisedNum1Num2byNum3 =  Math.pow(productNum1ByNum2, num3);
// 	return raisedNum1Num2byNum3;
// }

// console.log(transmogrify(5,3,2));

// //not sure if I understood the instructions right. I'm reading it to say that you want (num1*num2)^num3, but 




// // Me
// // Create an empty object called me.
// // // Assign it properties for name, age, and email with corresponding values.
// // const me = {
// // 	name: 'Patrick',
// // 	age: 33,
// // 	email: 'graypj826@gmail.com',
// // }

// // console.log(me);

// // // The object would look something like this if we console logged it:

// // // console.log(me);
// // // => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}

// // // Using dot notation, access the name property in your object.

// //  console.log(me.name);

// // // Without writing directly into the object, update the value of age to be 1000 years old.


// // me.age = 1000;

// // // Using dot notation, verify that age has been updated.

// // console.log(me.age);


// // // Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.

// // me['place of residence'] = 'New Orleans'

// // // Access the value of "place of residence"

// // console.log(me['place of residence'])

// // Slimer
// // const monster = {
// //    name: "Slimer",
// //    color: "greenish",
// //    type: "plasm or ghost or something"
// // }
// // // Given the slimer object:
// // // What would you write to access the name and console.log it?
// // console.log(monster.name)
// // // What would you write to change the type to 'creature' (without changing it inside the object)
// // monster.type = 'creature'

// // // What would you write to add a key to the object called age, and set the age to 6?

// // monster.age = 6;

// // // console.log the object to make sure type is creature, and age is 6

// // console.log(monster);

// // // Create objects to have them interact.

// const ogre = {
// 	color : 'blue',
// 	size : 'large',
// 	class : 'berzerker',
// 	power :  16,
// 	weapon : 'hammer',
// 	hitpoints : 45,
// ogreAttack(){
// 	hero.hitpoints -= Math.floor(Math.random() * 12);
// 	return `The ogre manages to land a blow on our hero with its ${ogre.weapon}. The blow forces ${hero} backwards. Our hero's hitpoints are now ${hero.hitpoints}.`
// }
// }

// const hero = {
// 	name : 'Baron Gray',
// 	race : 'human',
// 	class : 'ranger',
// 	power : 20,
// 	weapon : 'axe',
// 	hitpoints : 24,
// heroLightAttack(){
// 	ogre.hitpoints -= Math.floor(Math.random() * 6);
// 	return `${hero.name} lets looe an arrow that hits the ogre in the chest reducing ogre's hitpoints to ${ogre.hitpoints}.`
// },
// heroHeavyAttack(){
// 	ogre.hitpoints -= Math.floor(Math.random() * 10);
// 	return `${hero.name} lands a devastating blow with his ${hero.weapon}, the ogre falls backwards. The ogre's hitpoints are now ${ogre.hitpoints}.`
// }

// }

// const battle = () =>{
// 	while ((hero.hitpoints > 0) && (ogre.hitpoints > 0)){
// 		console.log(hero.hitpoints)
// 		console.log(ogre.hitpoints)
// 		let roll = Math.floor(Math.random() * 12)
// 		console.log(roll);
// 		if (roll < 2 ){
// 			console.log(hero.heroHeavyAttack()), 
// 			roll = 0;
// 		} else if ((roll > 2) && (roll < 8)){    
// 			console.log(ogre.ogreAttack()),
// 			roll = 0;
// 		} else {
// 			console.log(hero.heroLightAttack()),
// 			roll = 0;
// 		}
// 	}
// 	if(hero.hitpoints === 0){
// 		return "Our hero has been defeated!"
// 	} else{
// 		return "Our hero has defeated the beast!"	
// 	}
// }

// console.log(battle());


// // how would you define your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?

// // how would you define an ogre? Your ogre will want hitpoints.

// // Write a very small program that will simulate a battle between your adventurer and an ogre.

// // Whoever has more hitpoints, wins the battle.
// // You can do a console.log to show how many hitpoints each opponent has, and who ultimately wins.
