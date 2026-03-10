import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const tiltRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!tiltRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * -15;
      tiltRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KHUSHI
              <br />
              <span>KAKKAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              FULL-STACK SOFTWARE ENGINEER
            </h2>
          </div>
          
          <div className="hero-svg-container" id="hero-svg">
            <div className="hero-glow"></div>
            <div className="hero-svg-wrapper">
              <img ref={tiltRef} src="/images/hero-image.png" alt="Khushi Kakkar Hero" className="hero-svg-img" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
