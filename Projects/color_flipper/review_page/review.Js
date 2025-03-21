const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "image/1.jpg",
        text: "susan smith has crafted a beautifully intuitive website that showcases her expertise in UX design. The layout is clean and easy to navigate, allowing users to find information effortlessly, which speaks volumes about her understanding of user behavior. Her attention to detail is evident in the seamless transitions and well-thought-out interactions that enhance the overall experience"
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web developer",
        img: "image/2.jpg",
        text: "anna johnson has crafted a beautifully intuitive website that showcases her expertise in UX design. The layout is clean and easy to navigate, allowing users to find information effortlessly, which speaks volumes about her understanding of user behavior. Her attention to detail is evident in the seamless transitions and well-thought-out interactions that enhance the overall experience"
    },
    {
        id: 3,
        name: "peter jhones",
        job: "intern",
        img: "image/4.jpeg",
        text: "peter jhones has crafted a beautifully intuitive website that showcases her expertise in UX design. The layout is clean and easy to navigate, allowing users to find information effortlessly, which speaks volumes about her understanding of user behavior. Her attention to detail is evident in the seamless transitions and well-thought-out interactions that enhance the overall experience"
    },
    {
        id: 4,
        name: "bill anderson",
        job: "boss",
        img: "image/5.jpg",
        text: "bill anderson has crafted a beautifully intuitive website that showcases his expertise in UX design. The layout is clean and easy to navigate, allowing users to find information effortlessly, which speaks volumes about his understanding of user behavior. His attention to detail is evident in the seamless transitions and well-thought-out interactions that enhance the overall experience"
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');  // fixed the typo (was 'perBtn')
const nextBtn = document.querySelector('.next-btn');  // fixed missing class for 'nextBtn'
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show previous person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});
