const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get random number between 0 and 3
    const randomNumber = getRandomNumber(); 
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 

    // const random = Math.floor(Math.random() * colors.length);
    // color.style.backgroundColor = colors[random];
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * 4)
}