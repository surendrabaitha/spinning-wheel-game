let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let sections = document.querySelectorAll('.number span');
let winner = document.querySelector('#winner');

let totalSections = sections.length;
let rotation = 0;

spinBtn.addEventListener('click', () => {
    let randomSpin = Math.ceil(Math.random() * 3600); // Random spin value
    rotation += randomSpin; // Accumulate total rotation
    wheel.style.transform = `rotate(${rotation}deg)`; // Apply rotation

    setTimeout(() => {
        let finalRotation = rotation % 360; // Normalize rotation
        let sectionIndex = Math.floor((360 - finalRotation + 18) / (360 / totalSections)) % totalSections;
        let result = sections[sectionIndex].textContent;
        winner.innerHTML = `${result} year`; // Display the result
    }, 5000); // Wait for the animation to finish
});
