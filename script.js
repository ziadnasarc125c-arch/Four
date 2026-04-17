// 1. Generate Fireflies
function spawnFireflies() {
    const container = document.getElementById('fireflies');
    const fireflyCount = 40;

    for (let i = 0; i < fireflyCount; i++) {
        let fly = document.createElement('div');
        fly.classList.add('firefly');
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let dur = Math.random() * 3 + 2; // 2s to 5s
        let delay = Math.random() * 5;

        fly.style.left = `${x}px`;
        fly.style.top = `${y}px`;
        fly.style.animationDuration = `${dur}s`;
        fly.style.animationDelay = `${delay}s`;

        container.appendChild(fly);
    }
}

// 2. Tab Switching
function switchPath(path) {
    const tabs = document.querySelectorAll('.tab-btn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    tabs.forEach(t => t.classList.remove('active'));

    if (path === 'register') {
        tabs[1].classList.add('active');
        loginForm.classList.remove('active-form');
        setTimeout(() => registerForm.classList.add('active-form'), 50);
    } else {
        tabs[0].classList.add('active');
        registerForm.classList.remove('active-form');
        setTimeout(() => loginForm.classList.add('active-form'), 50);
    }
}

// 3. Enter the Wild Animation (Submit)
function enterWild(e) {
    e.preventDefault();
    const overlay = document.getElementById('bushOverlay');
    
    // Close the bushes
    overlay.classList.add('active');

    // Reset after animation
    setTimeout(() => {
        overlay.classList.remove('active');
        e.target.reset();
    }, 3500); // 1s to close + 1s to read text + 1.5s to open
}

// 4. Slight Wood Parallax
document.addEventListener('mousemove', (e) => {
    const board = document.querySelector('.wooden-board');
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    
    board.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

window.onload = spawnFireflies;
