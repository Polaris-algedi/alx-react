import $ from "jquery";
import _ from "lodash";
import "../css/main.css";
// Create elements
const paragraph1 = $("<p>").text("Holberton Dashboard");
const paragraph2 = $("<p>").text("Dashboard data for the students");
const button = $("<button>").text("Click here to get started");
const countParagraph = $("<p>").attr("id", "count");
const copyrightParagraph = $("<p>").text("Copyright - Holberton School");

// Append elements to the body
$("body").append(
  paragraph1,
  paragraph2,
  button,
  countParagraph,
  copyrightParagraph
);

// Counter variable
let count = 0;

// Function to update counter
function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

// Bind debounce function to click event
button.on("click", _.debounce(updateCounter, 500));
