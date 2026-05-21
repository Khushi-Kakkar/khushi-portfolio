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
                Spearheaded the end-to-end architecture and implementation of enterprise onboarding workflows, significantly accelerating user activation and minimizing time-to-value for B2B clients.
              </p>
              <p>
                Engineered highly scalable, dynamic user routing logic that enabled seamless automated invite acceptance, optimizing the cross-organizational user onboarding journey.
              </p>
              <p>
                Designed and developed an advanced, context-aware prompt generation engine for AI-assisted workflows, directly driving a 3.4% increase in total video generation volume.
              </p>
              <p>
                Directed a comprehensive overhaul of the system-wide email delivery infrastructure using AWS SES, dramatically elevating user engagement metrics and communication reliability.
              </p>
              <p>
                Architected and deployed a highly resilient reminder email system, leveraging a serverless fan-out pattern with AWS Lambda and Amazon EventBridge for asynchronous, event-driven notifications.
              </p>
              <p>
                Engineered a robust, highly secure serverless proxy architecture utilizing AWS API Gateway and AWS Lambda, integrated with Amazon Cognito for enterprise-grade authentication and zero-trust security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
