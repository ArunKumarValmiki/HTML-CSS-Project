

// const getElement = (selector) => {
//   const element = document.querySelector(selector);
//   if(element) return element;
//   throw Error (
//     `Check your class name, you provided wrong one ${selector}`
//   )
// }

// const links = getElement('.nav-links')
// const navBtn = getElement('.nav-btn')

// navBtn.addEventListener('click',()=>{
//   links.classList.toggle('show-links')
// })



// This below code has the same functionality as the above code

const links = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click',()=>{
  links.classList.toggle('show-links')     /* toggle */
})

// navBtn.addEventListener('click',()=>{
//   links.classList.add('show-links')     /* add */
// })


const date = document.getElementById('date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear