const targetDate = new Date("2025-02-05T00:00:00").getTime();
const unlockDateTime = new Date("2025-02-05T00:00:00").getTime(); // Change to your desired date and time

// Function to update the countdown and enable the button

function UpdateCountdown() {
    const now = new Date().getTime(); // Current time in milliseconds
    const timeLeft = targetDate - now; // Time left in milliseconds

    if (timeLeft <= 0) {
        // If the countdown is over
        document.getElementById("timer").innerHTML = "IT'S YOUR BIRTHDAYYYYY!!!";
        clearInterval(timerInterval); // Stop the interval
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the timer element
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every 1 second
const timerInterval = setInterval(UpdateCountdown, 1000);

// Specify the unlock date and time
function Countdown() {
    const now = new Date();
    const button = document.getElementById('myButton');
    const countdown = document.getElementById('countdown');

    // Calculate the time remaining
    const timeRemaining = unlockDateTime - now;

    if (timeRemaining <= 0) {
        button.disabled = false; // Enable the button
        clearInterval(interval); // Stop checking after the button is enabled
    } 
    else {
        // Calculate remaining days, hours, minutes, and seconds

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        
    }
}
function startMessage() {
    const now = new Date().getTime();
    const timeleft = unlockDateTime - now;

    if (timeleft > 0) {
        alert("TRY AGAIN AFTER 25TH JANUARY 00:00:00");
        return; // Exit the function early to prevent further execution
    }
    // Start balloon animation
    
    document.querySelector('.landing').classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');

    createLandingBalloons();
    setTimeout(stopBalloons, 2000); 
    // Wait for a short delay (e.g., 2 seconds) before showing the next section
  
}
const buttonInterval = setInterval(Countdown, 1000);

// Run the updateCountdown function every second
const interval = setInterval(UpdateCountdown, 1000);
function createLandingBalloons() {
    const balloonContainer = document.getElementById('balloon-container');
    const numBalloons = 28; // Number of balloons to create
    balloonContainer.dataset.running = "true"; // Track if balloons should keep generating

    const generateBalloons = () => {
        if (balloonContainer.dataset.running !== "true") return;

        for (let i = 0; i < numBalloons; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');

            // Random position, size, and animation duration
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.backgroundColor = getRandomColor();
            balloon.style.animationDuration = 4 + Math.random() * 3 + 's'; // Between 4-7s

            // Add balloon to the container
            balloonContainer.appendChild(balloon);

            // Remove the balloon after animation ends
            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });
        }

        // Continue generating balloons every second
        setTimeout(generateBalloons, 1700);
    };

    generateBalloons();
}
function stopBalloons() {
    const balloonContainer = document.getElementById('balloon-container');
    balloonContainer.dataset.running = "false"; // Stop generating balloons

    // Clear all existing balloons after their animation ends
    setTimeout(() => {
        balloonContainer.innerHTML = "";
    }, 5000); // Allow current balloons to finish flying (5 seconds)
}
function getRandomColor() {
    const colors = ['#FF69B4', '#FF4500', '#1E90FF', '#32CD32', '#FFD700'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function showSurprise() {
    document.getElementById('message').classList.add('hidden');
    document.getElementById('surprise').classList.remove('hidden');
}
