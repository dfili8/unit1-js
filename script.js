//Exercise One
var statement = "Enter a Number!";
var number = prompt(statement);
var total = 0;

for (var i = 0; i <= number; i++) {
    total += i;
}

console.log('The sum is: ' + total);


//Exercise Two
var question = "Do you want to play?";
var answer = prompt(question);
var enterWord;
var word = "";

do {
    enterWord = prompt('Enter a word.');
    word += enterWord + " ";
    answer = prompt('Do you want to play again?');

} while (answer === 'yes' || answer === 'Yes' || answer === 'YES');

console.log(word);


//Exercise Three
var question2 = prompt("Would you like to print your name?");
var name = prompt("What is your name?");
var x = '';

while (question2 == 'yes') {
    var statement2 = "Hello. My name is " + name;
    statement2 += x;
    console.log(statement2);
    x += '!';
    question2 = prompt("Would you like to print your name again?");
}


//Exercise Four
var timeOfDayQuestion = "What time of day is it?";
var time = prompt(timeOfDayQuestion);
var mealType;
var foodSuggestion;
var suggestion;


if (time === 'morning') {
    mealType = 'breakfest';
    foodSuggestion = 'eggs and toast';
    suggestion = "Since it is " + time + ", you should be eating " + mealType + ". We suggest " + foodSuggestion + ".";
} else if (time === 'noon') {
    mealType = 'lunch';
    foodSuggestion = 'a salad';
    suggestion = "Since it is " + time + ", you should be eating " + mealType + ". We suggest " + foodSuggestion + ".";
} else if (time === 'evening') {
    mealType = 'dinner';
    foodSuggestion = 'chicken and rice';
    suggestion = "Since it is " + time + ", you should be eating " + mealType + ". We suggest " + foodSuggestion + ".";
} else {
    suggestion = "Sorry, Try again!";
}

console.log(suggestion);

