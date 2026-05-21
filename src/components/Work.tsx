import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "SoulFuel",
    description: "An AI-driven spiritual guidance platform acting as an autonomous 'Digital Sage'. Features a multi-agent RAG pipeline with end-to-end encrypted chat persistence.",
    features: [
      "multi-agent LLM orchestration for latency reduction",
      "Pinecone vector database for scriptural RAG",
      "end-to-end encrypted chat payload persistence"
    ],
    tools: "React • Node.js • Gemini • Pinecone • Firebase",
    image: "/images/soulfuel.png",
    links: [
      { label: "Website", url: "https://www.velosist.com/" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.velosist.soulfuel" },
      { label: "iPhone (PWA)", url: "https://soul-fuel-orpin.vercel.app/", hint: "Open in Safari, tap Share, then 'Add to Home Screen'" }
    ]
  },
  {
    title: "Jarvis",
    description: "An autonomous AI-driven procurement assistant and agentic browser that uses Gemini 3.1 LLMs to execute cross-platform shopping tasks via voice.",
    features: [
      "real-time natural language intent parsing",
      "headless browser automation via Playwright",
      "multi-platform stealth e-commerce scraping"
    ],
    tools: "React • Node.js • Playwright • Gemini 3.1",
    image: "/images/jarvis.png",
  },
  {
    title: "Cr@ppy Bird",
    description: "A cross-platform 2D action game bridging a React UI with a 60fps Phaser 3 WebGL engine. Features a serverless Supabase backend and a custom offline-first Sync Outbox.",
    features: [
      "EventBus architecture bridging React and Phaser",
      "offline-first Sync Outbox for network resilience",
      "Supabase PostgreSQL global leaderboards"
    ],
    tools: "React • Phaser 3 • Supabase • Capacitor",
    image: "/images/crappy-bird.png",
    links: [
      { label: "Website", url: "https://www.velosist.com/crappyBird" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.jaka.crappybird&pli=1" }
    ]
  },
  {
    title: "Healix",
    description: "AI-powered healthcare chatbot that analyzes symptoms and suggests possible conditions using a structured symptom-disease knowledge base.",
    features: [
      "symptom-based disease prediction",
      "conversational chatbot interface",
      "medical knowledge dataset integration"
    ],
    tools: "Flask • Python • YAML • React.js",
    image: "/images/healix.jpeg",
  },
  {
    title: "BeatBox",
    description: "A Spotify-style music streaming application that allows users to browse songs, create playlists, and control playback through an interactive UI.",
    features: [
      "music browsing and playback controls",
      "playlist management",
      "dynamic UI updates",
      "responsive web interface"
    ],
    tools: "React.js • PHP • SQL • HTML • CSS",
    image: "/images/beatbox.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div 
            className="carousel-track-container"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.description}
                        </p>
                        <div className="carousel-features">
                          <ul>
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.links && (
                          <div className="carousel-links" style={{ marginTop: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {project.links.map((link, i) => (
                              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ padding: '6px 14px', background: 'rgba(162, 0, 255, 0.15)', border: '1px solid rgba(162, 0, 255, 0.5)', borderRadius: '20px', fontSize: '12px', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease' }} title={link.hint}>
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
