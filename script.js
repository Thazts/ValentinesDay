const femboysBtn = document.getElementById("btn-femboys");
const xirvBtn = document.getElementById("btn-xirv");
const lynxBtn = document.getElementById("btn-lynx");
const mioBtn = document.getElementById("btn-Mio");
const animationContainer = document.getElementById("animation-container");

setTimeout(() => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.add('animate-in');
    });
    wrapLetters(document.querySelector('.logo'));
    wrapLetters(document.querySelector('.hero h1'));
    wrapLetters(document.querySelector('.hero p'));
}, 2800);
function wrapLetters(element) {
    if (!element) return;
    const text = element.textContent;
    element.innerHTML = '';
    
    for (let char of text) {
        if (char === ' ') {
            element.appendChild(document.createTextNode(' '));
        } else {
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = char;
            element.appendChild(span);
        }
    }
}

function addClickBounce(btn) {
    btn.addEventListener("mousedown", function(e) {
        btn.classList.remove('click-bounce');
        void btn.offsetWidth;
        btn.classList.add('click-bounce');
        
        setTimeout(() => {
            btn.classList.remove('click-bounce');
        }, 400);
    });
}

addClickBounce(femboysBtn);
addClickBounce(xirvBtn);
addClickBounce(lynxBtn);
addClickBounce(mioBtn);

function createSVGHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.fontSize = '80px';
    heart.style.lineHeight = '1';
    return heart;
}

function createConfetti(container) {
    const confettiPieces = ['❤️', '✨', '💕', '🎉', '⭐'];
    const colors = ['#ff1744', '#ff6b9d', '#c2185b', '#ff0000', '#ff69b4'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = Math.random() * 200 + 150;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        confetti.style.setProperty('--tx', tx + 'px');
        confetti.style.setProperty('--ty', ty + 'px');
        
        confetti.style.animation = `confettiFall ${Math.random() * 1 + 0.8}s ease-out forwards`;
        confetti.style.animationDelay = '0.2s';
        
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2200);
    }
}
const style = document.createElement('style');
style.textContent = `
@keyframes confettiFall {
    to {
        transform: translate(var(--tx), var(--ty)) rotateZ(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

femboysBtn.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "./Imgs/Femboys.png";
    img.classList.add("image-enter");
    animationContainer.appendChild(img);
    setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart-pop");
        heart.style.top = "40%";
        heart.style.left = "30%";
        heart.style.transform = "translate(-50%, -50%)";
        heart.appendChild(createSVGHeart());
        animationContainer.appendChild(heart);
        createConfetti(animationContainer);
        setTimeout(() => heart.remove(), 1200);
    }, 1000);
    setTimeout(() => {
        img.classList.remove("image-enter");
        img.classList.add("image-exit");
        img.addEventListener("animationend", () => img.remove());
    }, 3000);
});
xirvBtn.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "./Imgs/xirv.png";
    img.classList.add("image-enter");
    animationContainer.appendChild(img);
    setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart-pop");
        heart.style.top = "40%";
        heart.style.left = "30%";
        heart.style.transform = "translate(-50%, -50%)";
        heart.appendChild(createSVGHeart());
        animationContainer.appendChild(heart);
        createConfetti(animationContainer);
        setTimeout(() => heart.remove(), 1200);
    }, 1000);
    setTimeout(() => {
        img.classList.remove("image-enter");
        img.classList.add("image-exit");
        img.addEventListener("animationend", () => img.remove());
    }, 3000);
});

lynxBtn.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "./Imgs/Lynx.png";
    img.classList.add("image-enter");
    animationContainer.appendChild(img);
    setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart-pop");
        heart.style.top = "40%";
        heart.style.left = "30%";
        heart.style.transform = "translate(-50%, -50%)";
        heart.appendChild(createSVGHeart());
        animationContainer.appendChild(heart);
        createConfetti(animationContainer);
        setTimeout(() => heart.remove(), 1200);
    }, 1000);
    setTimeout(() => {
        img.classList.remove("image-enter");
        img.classList.add("image-exit");
        img.addEventListener("animationend", () => img.remove());
    }, 3000);
});

mioBtn.addEventListener("click", () => {
    const video = document.createElement("video");
    video.src = "./Videos/Mio.mp4";
    video.classList.add("image-enter");
    video.style.maxWidth = "100%";
    video.style.maxHeight = "100%";
    video.autoplay = true;
    animationContainer.appendChild(video);
    video.addEventListener("ended", () => {
        video.classList.remove("image-enter");
        video.classList.add("image-exit");
        video.addEventListener("animationend", () => video.remove());
    });
});
