import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <p className="career-date">July 2025 - Present</p>
              </div>
              <div className="company-info">
                <img src="/images/pictory-logo.png" alt="Pictory Logo" className="company-logo" />
                <h5>Pictory</h5>
              </div>
            </div>
            <div className="career-experience-list">
              <p>
                Led end-to-end implementation of enterprise onboarding workflows improving user activation.
              </p>
              <p>
                Built dynamic user routing logic enabling automated invite acceptance.
              </p>
              <p>
                Developed contextual prompt generation system for AI-assisted workflows, increasing video creation by 1.5%.
              </p>
              <p>
                Built secure serverless proxy using AWS API Gateway + Lambda with Cognito authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
