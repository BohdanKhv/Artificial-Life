import { useEffect, useState } from 'react'
import './styles/Life.css'

const Life = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    useEffect(() => {
        // Get the canvas element
        const ctx = document.getElementById('life').getContext('2d');
    
        // draw a rectangle
        const draw = (x, y, color, width, height) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, width, height);
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
        const random = () => {
            return Math.random() * (screenWidth - 0) + 0;
        }

        // Create N particles with given color
        const create = (number, color) => {
            const group = [];
            for (let i = 0; i < number; i++) {
                group.push(particle(random(), random(), color, 10));
                particles.push(group[i]);
            }
            return group;
        }

        // Yellow particles
        const yellow = create(200, 'yellow');
        const red = create(200, '#e94040');
        const green = create(200, '#2cf769');
        const blue = create(30, '#2ccef7');
        // const purple = create(50, '#e940e9');

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
                        F = g * 1/distance;
                        forceX += F * distanceX;
                        forceY += F * distanceY;
                    }
                }

                a.vx = (a.vx + forceX) * 0.2;
                a.vy = (a.vy + forceY) * 0.2;

                a.x += a.vx;
                a.y += a.vy;

                // Prevent particles from going out of the screen
                if(a.x < 0) a.x *= -1;
                if(a.x > screenWidth) a.x *= -1;
                if(a.y < 0) a.y *= -1;
                if(a.y > screenHeight) a.y *= -1;
            }
        }

        // Update the particles
        const update = () => {
            rule(red, red, -1);
            rule(red, yellow, -0.1);
            rule(red, green, -0.1);
            rule(yellow, red, 1);
            rule(green, green, -2);
            rule(yellow, green, -2);
            rule(green, red, -2);
            rule(green, yellow, -1);
            rule(blue, blue, -10);
            rule(yellow, blue, 10);
            rule(red, blue, 10);
            rule(green, blue, 10);
            // rule(purple, purple, 5);

            ctx.clearRect(0, 0, screenWidth, screenHeight);
            
            draw(0, 0, '#1f1f1f', screenWidth, screenHeight);
    
            for(let i = 0; i < particles.length; i++) {
                draw(particles[i].x, particles[i].y, particles[i].color, 5, 5);
            }
    
            // Run 60 times per second
            requestAnimationFrame(update);
            // Run 20 times per second
            // setTimeout(update, 250);
        }

        update();
    }, [])

    return (
        <div className="life-wrapper">
            <canvas
                id="life"
                width={screenWidth}
                height={screenHeight}
            >

            </canvas>
        </div>
    )
}

export default Life