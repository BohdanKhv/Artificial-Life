import { useEffect, useState, useRef } from 'react'
import { Window } from './'
import './styles/Life.css'

const Life = ({
    life1Count,
    life2Count,
    life3Count,
    life4Count,
    l1tol1,
    l1tol2,
    l1tol3,
    l1tol4,
    l2tol1,
    l2tol2,
    l2tol3,
    l2tol4,
    l3tol1,
    l3tol2,
    l3tol3,
    l3tol4,
    l4tol1,
    l4tol2,
    l4tol3,
    l4tol4,
}) => {
    const canvasParentRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(980);

    useEffect(() => {
        if(canvasParentRef.current) {
            setWindowWidth(canvasParentRef.current.offsetWidth);
            console.log(canvasParentRef.current.offsetWidth);
        }
    }, [canvasParentRef])

    const initializeGame = () => {
        // Get the canvas element
        const ctx = document.getElementById('life').getContext('2d');
    
        // draw a rectangle
        const draw = (x, y, color, size) => {
            ctx.fillStyle = color;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
        }
        const drawCanvas = (x, y, color, size) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);
        }

        const particles = [];
        // create a particle
        const particle = (x, y, color, size) => {
            return {
                x: x,
                y: y,
                color: color,
                size: size,
                vx: 0,
                vy: 0,
            }
        }

        // Get a random position on the screen
        const random = (pos) => {
            return Math.random() * (pos) + 0;
        }

        // Create N particles with given color
        const create = (number, color, size) => {
            const group = [];
            for (let i = 0; i < number; i++) {
                group.push(particle(random(windowWidth), random(500), color, size));
                particles.push(group[i]);
            }
            return group;
        }

        // Yellow particles
        const life1 = create(life1Count, '#ffffff', 2);
        const life2 = create(life2Count, '#e94040', 2);
        const life3 = create(life3Count, '#2cf769', 2);
        const life4 = create(life4Count, '#0066ff', 2);

        // Rule 1: Boids try to fly towards the centre of mass of neighbouring boids.
        const rule = (particles1, particles2, g) => {
            for(let i = 0; i < particles1.length; i++) {
                let forceX = 0;
                let forceY = 0;
                let a;
                let b;

                let distanceX = 0;
                let distanceY = 0;
                let distance = 0;
                let F = 0;

                for(let j = 0; j < particles2.length; j++) {
                    a = particles1[i];
                    b = particles2[j];

                    distanceX = a.x - b.x;
                    distanceY = a.y - b.y;
                    distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                    if(distance > 0 && distance < 80) {
                        F = g / Math.sqrt(distance);
                        forceX += F * distanceX;
                        forceY += F * distanceY;
                    }
                }

                a.vx = (a.vx + forceX) * 0.2;
                a.vy = (a.vy + forceY) * 0.2;

                a.x += a.vx;
                a.y += a.vy;

                // Prevent particles from going out of canvas
                if (a.x <= 0) {
                    a.vx *= -1;
                    a.x = 0;
                }
                if (a.x >= windowWidth - 5) {
                    a.vx *= -1;
                    a.x = windowWidth - 5;
                }
                if (a.y <= 0) {
                    a.vy *= -1;
                    a.y = 0;
                }
                if (a.y >= 495) {
                    a.vy *= -1;
                    a.y = 495;
                }
            }
        }

        // Update the particles
        const update = () => {
            rule(life1, life1, l1tol1);
            rule(life1, life2, l1tol2);
            rule(life1, life3, l1tol3);
            rule(life1, life4, l1tol4);
            rule(life2, life1, l2tol1);
            rule(life2, life2, l2tol2);
            rule(life2, life3, l2tol3);
            rule(life2, life4, l2tol4);
            rule(life3, life1, l3tol1);
            rule(life3, life2, l3tol2);
            rule(life3, life3, l3tol3);
            rule(life3, life4, l3tol4);
            rule(life4, life1, l4tol1);
            rule(life4, life2, l4tol2);
            rule(life4, life3, l4tol3);
            rule(life4, life4, l4tol4);

            ctx.clearRect(0, 0, windowWidth, 500);
            
            drawCanvas(0, 0, '#000', windowWidth, 500);
    
            for(let i = 0; i < particles.length; i++) {
                draw(particles[i].x, particles[i].y, particles[i].color, particles[i].size, particles[i].size);
            }
    
            // Run 60 times per second
            requestAnimationFrame(update);
            // Run 20 times per second
            // setTimeout(update, 250);
        }

        update();
    }

    useEffect(() => {
        initializeGame();
    }, [])

    return (
        <Window title="Life"
            btnTitle="Restart"
            btnAction={initializeGame}
        >
            <div
                className="flex bg-black"
                ref={canvasParentRef}
            >
                <canvas
                    id="life"
                    width={windowWidth}
                    height={500}
                />
            </div>
        </Window>
    )
}

export default Life