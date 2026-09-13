document.addEventListener("DOMContentLoaded", function () {

const clickButton = document.getElementById("clickButton");
const mainScreen = document.getElementById("mainScreen");
const loveScreen = document.getElementById("loveScreen");
const heartCanvas = document.getElementById("heartCanvas");


// Make sure the button exists
if (!clickButton) {
    console.error("Click Me button was not found!");
    return;
}


clickButton.addEventListener("click", function () {

    console.log("CLICK ME WORKED!");

    // Hide the first screen
    mainScreen.style.opacity = "0";
    mainScreen.style.transform = "scale(0.8)";


    setTimeout(function () {

        mainScreen.style.display = "none";

        // Create the mathematical heart
        createHeart();

        // Show the second screen
        loveScreen.classList.add("show");

    }, 500);

});


// =========================
// CREATE MATHEMATICAL HEART
// =========================

function createHeart() {

    heartCanvas.innerHTML = "";

    const totalPoints = 600;
    const scale = 12;

    for (let i = 0; i < totalPoints; i++) {

        const t = i / 20;

        // Mathematical heart equation
        const x =
            16 * Math.pow(Math.sin(t), 3);

        const y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);


        // Every 10th point gets "I LOVE YOU"
        if (i % 10 === 0) {

            const text =
                document.createElement("span");

            text.className = "heart-text";

            text.textContent = "I LOVE YOU";


            // Convert mathematical coordinates
            // to browser coordinates
            const screenX = x * scale;
            const screenY = -y * scale;


            text.style.left =
                `calc(50% + ${screenX}px)`;

            text.style.top =
                `calc(50% + ${screenY}px)`;


            // Add a small delay so the words
            // appear one after another
            text.style.animationDelay =
                `${(i / totalPoints) * 1.5}s`;


            heartCanvas.appendChild(text);
        }
    }
}

});
