
// from data.js
var tableData = data;
console.log(tableData)

//Selecting the button
var button = d3.select("#filter-btn");
console.log(button)

button.on("click", function() {
    
//Select the input element; fetch raw input
var input = d3.select("#datetime")
console.log(input)

//checking if the value resident in the variable
var inputValue = input.property("value");
console.log(inputValue)

dTime = tableData.filter(function(data){ return (inputValue === data.datetime)})
console.log(dTime)

});
