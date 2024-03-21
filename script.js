'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

// // Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(name, openingHours, categories);
// console.log(restaurantName, hours, tags);

// // Setting Default values on objects
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Objects Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //Destructuring arrays

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(a, b, c);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // Switching variables

// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // // switching variables using destructuring
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // // Receive 2 return values from a functions
// // console.log(restaurant.order(2, 0));
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // // Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // // Default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// // Spread Operator - takes all the element from the array and doesn't create new variables, we can only use it in places where values are seperated with a comma

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join 2 arrays
// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

// // Iterables: are arrays, strings, maps, sets and NOT objects.
// const str = 'jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// Using spread operator to pass arguement to a function
// Real world examples
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects with spread operators
// const newRestaurant = {
//   foundeIn: 1998,
//   ...restaurant,
//   founder: 'Guiseppe',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// REST PATTERN and PARAMETERS DESTRUCTURING

const arr = [1, 2, ...[3, 4]]; // SPREAD, because on RIGHT side of the assignment operator =

const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST, because on LEFT side of the =
console.log(a, b, others);

const [pizza, , risotto, focaccia, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, focaccia, otherFood);

// REST OPERATOR IN OBJECT
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// USING REST OPERATORS IN FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 4, 5, 6, 7, 8, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// SHORT CIRCUITING (&& AND ||)
// The OR OPERATOR can use ANY data type, return ANY data type, and do short-circuiting

console.log('----- OR -----');

console.log(3 || 'jonas'); // returns 3 because it is the first truthy value and it's short-circuited
console.log('' || 'jonas'); // returs jonas because it is a truthy value
console.log(true || 0); // returs true because it is a truthy value
console.log(undefined || null); // returns null  because all the operands are falsy values, it returns the last operands
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // returns Hello because it is the first truthy value

restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish coalescing operator: Includes (Null , Undefined) and NOT (zero and "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('----- AND -----');
// returns the first falsy value or the last values if all of them are truthy

console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log('Hello' && 23 && null && 'jonas');

// practical examples
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Logical Assignment Operators

const rest1 = {
  name: 'The Place',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Garden Chicken',
  owner: 'Sodiq Rasak',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Logical OR assignment operator (||=)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (??=)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK � */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// task 1
const [players1, players2] = game.players;
console.log(players1, players2);
// task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// task 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// task 6
const printGoals = function (...players) {
  console.log(`${players}, ${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// task 7
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team1 is more likely to win');

// THE for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let i = 0; i < menu.length; i++) {
  console.log(`${i + 1}: ${menu[i]}`);
}

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
