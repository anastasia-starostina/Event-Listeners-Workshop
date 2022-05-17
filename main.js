
//Task 1
const button = document.querySelector("#click-me");

function handleClick(event) {
    if (event.shiftKey === true){
    button.innerText = "NAILED IT!";
  }
}
//Task 2
let flowerButton = document.querySelector('.task-2')
function changeTitle () {
  document.title = '💐🌷🌼'; 
}
flowerButton.addEventListener('click', changeTitle);

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

//Task 3
/*-Select the input element with id #title-changer
-Write a function for the events
  - when called, takes in event as a parameter
-When function is calles, read value which is nested in target 
-set h1 on the page to become that value
-add event listener that listens to keyup
-Call your function 
*/
let h1 = document.querySelector('#changer');
h1.innerText = 'hey'
input = document.querySelector('#title-changer');

 function titleChanger (e) {
     h1.innerText = e.target.value;
 }
input.addEventListener('keyup', titleChanger);

//Task 4
/*
- Give mouseenter event to img html element
- Change the color of h1 to hotpink when cursor is over the image 
- Give img element mouseleave event on the img 
- Change color of image to initial when mouse cursor is removed from img 
*/
let img = document.querySelector('#img-color');

function pinkH1 () {
  h1.style.color = '#FF69B4'; 
}
img.addEventListener('mouseenter', pinkH1);

function initialH1 () {
  h1.style.color = 'initial';
}

img.addEventListener('mouseleave', initialH1);

//Task 5 

let inputBox = document.querySelector('#check-box');

//Toggle function?

inputBox.addEventListener ('change', function () {})