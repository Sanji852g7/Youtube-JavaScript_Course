//10C
const testButton = document.querySelector('.js-button');
console.log(testButton.classList.contains('.js-button'));

/* 10D
function clickButton() {
  const gamingButton = document.querySelector('.js-gaming-button');
  if (!gamingButton.classList.contains('is-toggled')){
    gamingButton.classList.add('is-toggled');
  } else {
    gamingButton.classList.remove('is-toggled');
  }
} */

/* 10E 
function clickButton(event) {
  const button = event.target; // Get the clicked button
  button.classList.toggle('is-toggled'); // Toggle the 'is-toggled' class on the clicked button
} */

/* 10F */
function clickButton(){
  const button = document.querySelectorAll('.button');

  button.forEach(button => {
    button.classList.remove('is-toggled');
  });

  event.target.classList.add('is-toggled')
}
