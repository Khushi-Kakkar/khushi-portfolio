import { useEffect, useRef } from 'react';
import './styles/AISkills.css';

const AISkills = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const dots: { x: number; y: number; vx: number; vy: number }[] = [];
        for (let i = 0; i < 50; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
            ctx.fillStyle = 'rgba(168, 85, 247, 0.5)';

            dots.forEach((dot, i) => {
                dot.x += dot.vx;
                dot.y += dot.vy;

                if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
                if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const other = dots[j];
                    const dist = Math.sqrt((dot.x - other.x) ** 2 + (dot.y - other.y) ** 2);
                    if (dist < 150) {
                        ctx.lineWidth = 1 - dist / 150;
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="ai-skills-section" id="ai-skills">
            <div className="neural-background">
                <canvas ref={canvasRef} />
            </div>
            <div className="ai-content">
                <h2 className="glitch" data-text="AI-DRIVEN CODING">AI-DRIVEN CODING</h2>
                <div className="skills-grid">
                    <div className="ai-skill-card">
                        <div className="card-glitch-bg"></div>
                        <h3>Prompt Engineering</h3>
                        <p>Designing structured prompts and reasoning strategies to improve the reliability and effectiveness of Large Language Models for development tasks.</p>
                    </div>
                    <div className="ai-skill-card">
                        <div className="card-glitch-bg"></div>
                        <h3>AI Concepts</h3>
                        <p>Understanding core AI and Machine Learning concepts including supervised learning, model evaluation, and how modern AI systems work under the hood.</p>
                    </div>
                    <div className="ai-skill-card">
                        <div className="card-glitch-bg"></div>
                        <h3>AI-Assisted Development</h3>
                        <p>Using modern AI development tools such as Cursor, GitHub Copilot, and LLM-based workflows to accelerate software development and improve productivity.</p>
                    </div>
                    <div className="ai-skill-card">
                        <div className="card-glitch-bg"></div>
                        <h3>AI Tools</h3>
                        <p>Experience using tools like Cursor, GitHub Copilot and modern AI-powered developer environments to build applications faster.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISkills;
