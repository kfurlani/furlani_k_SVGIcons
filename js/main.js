// this is a self-invoking anonymous function
// it is also called a module (my variation of the module pattern)
// it encapsulates all of your custom code and makes it private

(() => {
  // make associtations (select) with the elements in the HTML markup using CSS selectors
let theHeading = document.querySelector(".main-heading"),
    theIcons = document.querySelectorAll(".icon");

//debugger; // this is like a breakpoint/pause in your code



  // script your behaviour with function
function logElement() {
  // the "this' keyword refers to the thing that invokes the funtion
  // so the "thing" that tou click on, mouse over, interact with on the page
  console.log('clicked on an element:', this.id);
}

//add event handling here (user "triggers") - this is a 1 to 1 relationship
// assign the event you want to listen for, and the function should be run
theHeading.addEventListener("click", logElement);

// one too many relationships (selecting a group of elements) - you have to process this collection and work with each element seqeuntially in a loop
theIcons.forEach(icon => icon.addEventListener("click", logElement));

})();