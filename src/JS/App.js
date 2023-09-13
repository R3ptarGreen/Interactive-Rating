const circleRadius = document.querySelectorAll('[data-circle]');
const SUBMIT = document.getElementById('btnSubmit');
let selectedCircle = null;

//checker to print in console and selection with color
const checker = e => {
    circleRadius.forEach(circle => circle.classList.remove('active'));

    const clickedCircle = e.target;
    clickedCircle.classList.add('active');

    console.log(e)
};

//event to each circle
circleRadius.forEach(circle => circle.addEventListener('click', checker));

//event to send a thanks message
SUBMIT.addEventListener('click', () => window.location.href = '/pages/thanks.html');