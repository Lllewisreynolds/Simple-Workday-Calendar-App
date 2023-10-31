// Displaying current date in Header element of HTML using Day.js library.
// Global scope variables declared using jQuery library throughout as opposed to vanilla javaScript to demonstrate application of third-party API tools.

var currentDayEl = $("#currentDay");
var currentDay = dayjs().format('dddd, MMMM D');
currentDayEl.text(currentDay);

// For loop and If Conditionals used in conjunction with Day.js and jQuery .addClass method to update work calendar dynamically as hours elapse.

var currentHour = dayjs().hour();

for (var i = 9; i<18; i++){
  var timeBlockEl = $("#hour-" + i);
  if (currentHour > i) {
    timeBlockEl.addClass('past');
  }
  if (currentHour === i) {
    timeBlockEl.addClass('present');
  }
  if (currentHour < i) {
    timeBlockEl.addClass('future');
  }
}

// saving local next





// When in doubt, console.log it out!
// Granularising it! Logical/coding mindset.
// Create individual functions that do each of the required tasks to make the HTML interactive

// Topics to cover in tutor session and how they are directly applicable to this challenge:

// LocalStorage

// function getUserInputFromStorage(){
//   var userInput = localStorage.getItem('userInput');
//   if(userInput){
//     // Need to parse as it will be an array of objects
//     userInput = JSON.parse(userInput);
//   }
//   else {
//     userInput = [];
//   }
//   return userInput;
// }

// function saveUserInputToStorage(userInput){
//   localStorage.setItem('userInput', JSON.stringify(userInput));
//   return;
// }

// Day.JS

// var currentTime = dayjs().format();

// For Loops
// If Conditions
// Data Attributes
// setIntervals












// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
