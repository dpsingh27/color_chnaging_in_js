document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.btn');
// use h1 for updating values in rgb 
  const h1 = document.querySelector('h1');
  button.addEventListener('click', function() {
  // declare three variable for getting random number output from 
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newC = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newC;
    // changing the inner text for updating rgb values in h1
    h1.innerText = newC;
  });
});
