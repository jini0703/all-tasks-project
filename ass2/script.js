const bgCanvas = document.getElementById('bgCanvas');
const ctx = bgCanvas.getContext('2d');
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

let particlesArray = [];
let mouse = {
    x: null,
    y: null,
    radius: 120
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});

window.addEventListener('resize', function() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    initParticles();
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x > bgCanvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > bgCanvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * 5;
            const directionY = forceDirectionY * force * 5;
            
            this.x -= directionX;
            this.y -= directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function initParticles() {
    particlesArray = [];
    let numberOfParticles = (bgCanvas.height * bgCanvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1.5) - 0.75;
        let directionY = (Math.random() * 1.5) - 0.75;
        let color = '#9d4edd';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = (dx * dx) + (dy * dy);
            
            if (distance < 12000) {
                opacityValue = 1 - (distance / 12000);
                ctx.strokeStyle = 'rgba(157, 78, 221,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connectParticles();
}

initParticles();
animateParticles();

const gridCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const sizeInput = document.getElementById('gridSize');
const btnCreate = document.getElementById('btnCreate');
const btnClear = document.getElementById('btnClear');

let isDrawing = false;

function createGrid() {
    gridCanvas.innerHTML = '';
    
    let size = parseInt(sizeInput.value);
    
    if (size > 50) {
        size = 50;
        sizeInput.value = 50;
    } else if (size < 2) {
        size = 2;
        sizeInput.value = 2;
    }

    gridCanvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridCanvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        
        pixel.addEventListener('mousedown', function() {
            pixel.style.backgroundColor = colorPicker.value;
        });

        pixel.addEventListener('mouseenter', function() {
            if (isDrawing) {
                pixel.style.backgroundColor = colorPicker.value;
            }
        });

        gridCanvas.appendChild(pixel);
    }
}

window.addEventListener('mousedown', () => {
    isDrawing = true;
});

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

btnCreate.addEventListener('click', createGrid);

btnClear.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    });
});

createGrid();