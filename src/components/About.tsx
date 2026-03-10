import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-hero-image">
        <img src="/images/code-scene.png" alt="Khushi's Avatar" />
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Computer Science student passionate about building scalable full-stack applications and AI-powered tools.
          <br /><br />
          I enjoy turning complex problems into clean, efficient systems — from designing responsive interfaces to building backend APIs and intelligent workflows.
          <br /><br />
          Recently, I’ve been exploring AI-assisted development, prompt engineering, and agent-based systems to accelerate software creation.
        </p>
      </div>
    </div>
  );
};

export default About;
