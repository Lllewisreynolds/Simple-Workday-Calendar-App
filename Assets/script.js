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


// jQuery event listener method used to add a handler function upon clicking any of the button elements

$('.saveBtn').on('click', function () {
  // 'this' within this context allows the object on which the currently executing method has been invoked to refer back to itself as it was already returned and defined in the inital DOM query (the button elements with the class '.saveBtn').
  // I am getting the value of the input field/text area element with the class 'description' through the sibling selector (targetable through its relationship as a sibling node to the button elements in the DOM hierarchy). 
  var textInput = $(this).siblings('.description').val();
  // Retrieving the id attribute of the parent div element through dom traversal once again with the parent() method, and then drilling down further with jQuery's prop() method to access the unique id assigned to each of the 9 hour container divs.
  var hourContainers = $(this).parent().prop('id');
  // Saving the above two variables as key value pairs (parent div is the key, the user's input is the value) to local storage each time the handler function is executed).
  localStorage.setItem(hourContainers, textInput);
})

// For a path moving forward, look into how to access those values with
// localstorage.getItem()
// Probably console log it and trace the hardcoded values first as a brute force approach, and then consider how to refactor it in a loop.


// When in doubt, console.log it out!
// Granularising it! Logical/coding mindset.
// Create individual functions that do each of the required tasks to make the HTML interactive

// LocalStorage

// Data Attributes

// We will want to know which save button corresponds to which hour - assign a custom data attribute?:
// <button class="btn saveBtn col-2 col-md-1" aria-label="save" data-save=>
//           <i class="fas fa-save" aria-hidden="true"></i>
//         </button>

// setIntervals












// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page