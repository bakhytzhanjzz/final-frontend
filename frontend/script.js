document.addEventListener('DOMContentLoaded', function () {
    const mainHeader = document.getElementById('main-header');
    mainHeader.style.backgroundColor = '#d4af37'; 

    const cards = document.querySelectorAll('.card-title');
    cards.forEach(card => {
        card.style.color = '#FF5733';
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        document.body.style.backgroundColor = '#f7f7f7';
    } else if (event.key === 'b') {
        document.body.style.backgroundColor = '#000000'; 
    }
});

function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = "Passwords do not match!";
        return false;
    }
    return true;
}

const draggables = document.querySelectorAll('.draggable');
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

const romanFacts = [
    "The Roman Empire was founded in 27 BC by Augustus.",
    "Julius Caesar was assassinated on the Ides of March in 44 BC.",
    "Roman concrete, or 'opus caementicium,' is still studied today for its durability.",
    "The Colosseum could hold up to 80,000 spectators.",
    "Ancient Rome had a complex system of aqueducts to supply water.",
    "The Roman Republic lasted for over 450 years before the Empire was established.",
    "Romans used a calendar system that was the basis for the modern Gregorian calendar.",
    "Latin, the language of the Romans, influenced many modern languages.",
    "The Roman Senate was one of the earliest examples of representative government.",
    "The Roman road network spanned over 250,000 miles."
];

document.getElementById('fetchFactBtn').addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * romanFacts.length);
    const randomFact = romanFacts[randomIndex];
    document.getElementById('fact').textContent = randomFact;
});

document.getElementById("timeline-btn").addEventListener("click", function () {
    const timeline = document.getElementById("timeline");
    if (timeline.classList.contains("timeline-hidden")) {
        timeline.classList.remove("timeline-hidden");
    } else {
        timeline.classList.add("timeline-hidden");
    }
});
