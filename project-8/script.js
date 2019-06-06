"use strict"; 
//https://www.w3schools.com/js/js_strict.asp

var images = ["puppy1.jpg", "puppy2.jpg", "puppy3.jpg", "puppy4.jpg"];
// add an array for title

// add an array for figure caption

const TWO = document.querySelector("#two");

function swap(num){
    document.querySelector("#large").src = images[1];
    
}

TWO.addEventListener("click", function(){swap(1)}, false);
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp