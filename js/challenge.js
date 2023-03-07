// Digital Clock
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

//   The date.getHours method returns values between 0-23,to make it into a 12 hours clock, use the following if statement to reset 12 to 0.
    if(hh === 0){
        hh = 12;
    }
    // To substract hours greater than 12 and assign the variable PM
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
    //  ternary operators is used since it returns a value if the condition is true and another value if it is false.
    // "0" is added before the digit that is less than 10. Since the getHours(), getMinutes() and getSeconds() methods return values between 0 to 23, 59, 59 respectively. 
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
    //  for the format 
     let time =  hh + ":" + mm + ":" + ss + " " + session;
    //  display format
    document.getElementById("clock").innerText = time;
    
    // setTimeout to let the clock counts
    // This method calls or runs a function after a specified number of milliseconds. Note: 1000ms = 1 second.
    // This is to update the code every second and to keep the clock running
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
//   To run the function
  currentTime();







// Challenge 1
let myColor = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet "]; // array lists that contains the colors
const container = document.getElementById(`rainbow`); //div element with unique ID rainbow

for (let i = 0; i < myColor.length; i++) //Loop through array lists
{
    const colorBox = document.createElement(`div`); //div element to represent the color box
    colorBox.classList.add(`color-box`); //add a new element called color box to the element colorBox
    colorBox.style.backgroundColor = myColor [i]; //Set background color of the colorBox element to the current index in the loop
    colorBox.innerText = myColor[i]; //Set text content of colorBox element to the current color in the loop.
    container.appendChild(colorBox); // Append the color box element to the container element.
}






// Challenge 2
let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
let i;
for (i = 0; i < numbers.length; i += 1)
{
    sum += numbers[i];
    product *= numbers[i];
}
document.getElementById(`displayResult`).innerHTML = `<h5>The Sum is: ${sum} <br>The Product is: ${product}`;





// Challenge 3
const date = new Date();
const month = date.getMonth();
let monthName = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]

for(let a = 0; a<=11; a++ )
{
    document.getElementById(`displayMonth`).innerHTML +=  `<h6><li>${monthName[a]}`;
   
}

