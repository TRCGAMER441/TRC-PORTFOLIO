/* STAR BACKGROUND */

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-2";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let stars = [];

/* CREATE STARS */

for(let i = 0; i < 300; i++){

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 2,

        speed: Math.random() * 0.4

    });

}

/* STAR ANIMATION */

function animate(){

    ctx.fillStyle = "black";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    stars.forEach(star => {

        ctx.beginPath();

        ctx.fillStyle = "white";

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

        star.y += star.speed;

        if(star.y > canvas.height){

            star.y = 0;

            star.x =
            Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(animate);

}

animate();

/* RESIZE */

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

/* INTRO */

const loader = document.createElement("div");

loader.classList.add("loader");

loader.innerHTML = `

<div class="smile-face">

<div class="eye left-eye"></div>

<div class="eye right-eye"></div>

<div class="mouth"></div>

</div>

<h1 class="intro-text">
WELCOME
</h1>

`;

document.body.appendChild(loader);

/* REMOVE INTRO */

setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.remove();

    },1000);

},5000);