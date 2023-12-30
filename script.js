var typed = new Typed("#element", {
    strings: ["FrontEnd Developer", "Web Developer "],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});


const burger = document.getElementById('btn')
const close = document.getElementById('cancel')
const nav = document.getElementById('nav')

burger.addEventListener('click', () => {
    nav.classList.toggle('bar')
})

nav.addEventListener('click', () => {
    nav.classList.toggle('bar')
})


AOS.init();


const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});


const numbers = document.querySelectorAll('.number');
const svgEl = document.querySelectorAll('svg circle');
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if (counters[index] === parseInt(number.dataset.num)) {
            clearInterval(counters[index]);
        } else {
            counters[index] += 1;
            number.innerHTML = counters[index] + "%";
            svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100));
        }
    }, 20);
});