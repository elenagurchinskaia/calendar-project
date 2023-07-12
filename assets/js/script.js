$(function () {
  // TODO:Add an eventListener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // figure out what hour block you're in by using $(this)
  // key needs to match the key names for getItem localStorage
  // setItem for localStorage to save the input to the corresponding hour by using keyword 'this'
  // });
  $(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, userInput);
  });

  // TODO:Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // a. use jquery.children to select children elements
  //return an array of all time block names and can be used for the for loop (jquery)
  // b. use dayjs( to grab current time (the hour))
  // c. use for loop for the time blocks
  // > inside the for loop select the time block
  //   for (i = 9; i < 18; i++) document.querySelector("#hour-" + i); // jquery selector
  // > use if statement to compare the current hour to the time block
  // > if the current hour is less than time block apply future
  // > else if the current hour is equal to time block apply present class
  // > else the current hour is greater than time block apply past class
  // d. remove past, present, and future class in html and append the correct class
  // e. can use setIterval to create auto refresh
  for (var i = 9; i < 18; i++) {
    var currentTime = dayjs().hour();
    var colorCode = $("#hour-" + i).children("textarea");
    colorCode.addClass("");
    if (currentTime == i) {
      colorCode.addClass("present");
    } else if (currentTime > i) {
      colorCode.addClass("past");
    } else {
      colorCode.addClass("future");
    }
  }

  // TODO:Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //   localStorage.getItem(hour);
  // a. getItem for localStorage to pull previously stored content
  // > separate key in localStorage for each hour
  // > create a for loop for hour 9-18 to check localStorage
  //check localStorage within the loop
  // if there is storage, display the items (value)
  // inside the text area of corresponding hour
  // use id selector for the text area

  for (var i = 9; i < 18; i++) {
    var hourKey = "hour-" + i;
    var textInput = localStorage.getItem(hourKey);
    if (textInput) {
      $("#hour-" + i)
        .children("textarea")
        .text(textInput); // The code inside the if block will be executed
    }
  }

  // TODO:Add code to display the current date in the header of the page.

  // a. create var for dayjs  to get current date (and time)
  // b. $("#currentDay").text(var)
  var today = dayjs();
  $("#currentDay").text(today.format("[Today is] MMM D, YYYY"));
});
