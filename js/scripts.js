let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let sections = document.querySelectorAll('.number span'); // All section values
let winner = document.querySelector('#winner');

let totalSections = sections.length; // Total sections
let rotation = 0; // Track total rotation

spinBtn.addEventListener('click', () => {
    let randomSpin = Math.ceil(Math.random() * 3600) + 720; // Random spin with 2 full extra rotations
    rotation += randomSpin; // Accumulate rotation
    wheel.style.transition = 'transform 5s ease-out'; // Smooth spin animation
    wheel.style.transform = `rotate(${rotation}deg)`; // Rotate the wheel

    // Wait for the animation to complete (5s)
    setTimeout(() => {
        let finalRotation = rotation % 360; // Get the rotation within a 360-degree circle

        // Calculate the section index based on the final rotation
        let sectionAngle = 360 / totalSections; // Angle per section
        let sectionIndex = Math.floor((360 - finalRotation + sectionAngle / 2) / sectionAngle) % totalSections;

        let result = sections[sectionIndex].textContent; // Get the value from the section
        winner.innerHTML = result + " years"; // Display the result

    }, 5000); // Wait for 5s (animation duration)
});
