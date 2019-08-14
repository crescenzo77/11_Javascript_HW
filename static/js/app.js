// from data.js
let tableData = data;

// YOUR CODE HERE!
// log the tableData

console.log(tableData);

// select tbody HTML element

var tbody = d3.select("tbody");

// send data from data.js to console.log

console.log(data);

// update each cell's text with UFO sighting value 
// (date, city, state, country, shape, duration)

data.forEach(function(ufoSighting) {
  console.log(ufoSighting);

  // append one table row `tr` for each ufoSighting object

  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);

    // append a cell to the row for each value in the ufoSighting object

    var cell = tbody.append("td");
    cell.text(value);
  });
});

// reference to button with id set to `filter-btn`

 var submit = d3.select("#filter-btn");

 // use `on` function to trigger event on button click 

 submit.on("click", function() {

   // select item with class `summary`, change html content

   d3.select(".summary").html("");

   // create variables for user input

   var inputElement = d3.select("#datetime");
   var inputValue = inputElement.property("value");

   // filter data based on user input

   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

   // same as above, except values filtered by data

   filteredData.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
     });
   });
 });