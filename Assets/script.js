// All code that interacts with the DOM has been wrapped in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements
// in the HTML. Once this has loaded and parsed, the DOM should be ready to initialise the plugin libraries provided from third-party APIs like jQuery and DayJS.

$(document).ready(function () {

// Displaying current date in Header element of HTML using Day.js library.
// jQuery library used throughout wherever possible as opposed to vanilla javaScript to demonstrate application of third-party API tools.

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
  // Variable declared to grab newly-created empty span element in HTML with the below id. Span is populated with the below when event handler is triggered to inform user that their input has been saved to the local storage.
  var storageConf = $("#storage-conf");
  storageConf.html("Appointment Added with <code>localStorage</code> ✅");
  storageConf.attr("style", "text-align: center; font-size: 16px; font-weight: 900");
})

// Adding code to get any user input that was saved in localStorage by accessing those values with the localStorage.getItem() method and setting the values of the corresponding textarea elements through iteration.

  for (var i = 9; i<18; i++) {
    // Template literal used to combine string with my embedded expression instead of concatenation (as in, '$("#" + i)') to aid readability.
    // For clarification: the first $ is a jQuery , the second $ with braces delineates the template literal and is a native javascript feature.
    // This populates the values of the corresponding textarea elements based on their parent container's individual 'hour' id.
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
  }

});