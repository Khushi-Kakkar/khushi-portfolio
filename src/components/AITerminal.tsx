import React, { useState, useEffect, useRef } from 'react';
import './styles/AITerminal.css';
import { FaTerminal, FaTimes } from 'react-icons/fa';

const RESPONSES = {
  whois: "Khushi Kakkar is a Software Engineer and Computer Science student at Manipal Institute of Technology. She specializes in building scalable full-stack applications and integrating autonomous AI agents into modern software workflows.",
  projects: "Featured Projects:\n- Jarvis: Autonomous AI procurement assistant via voice & Playwright.\n- SoulFuel: Multi-agent RAG pipeline for spiritual guidance.\n- Cr@ppy Bird: Cross-platform 2D game with React, Phaser 3 & offline Sync Outbox.",
  skills: "Technical Skillset:\n- FRONTEND: React.js, Vite, Tailwind CSS, Phaser 3.\n- BACKEND: Node.js, Express.js, Supabase, Firebase, AWS, Cloud Run.\n- AI / ML: Gemini 3.1, Pinecone, RAG Pipelines, Prompt Engineering.\n- MOBILE / TOOLS: Capacitor, Playwright, Cursor, Git.",
  experience: "Current Role: Software Engineering Intern at Pictory (July 2025 - Present).\nSpearheaded system-wide email redesigns with AWS SES and architected scalable reminder pipelines using AWS Lambda and EventBridge.",
  contact: "Connect with Khushi:\n- Email: kakkar.khushi@gmail.com\n- LinkedIn: linkedin.com/in/khushikakkar\n- GitHub: github.com/KhushiKakkar",
  help: "Available commands: whois, projects, skills, experience, contact, clear",
};

const AITerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ type: 'cmd' | 'resp', text: string }[]>([
    { type: 'resp', text: "Welcome to Khushi's AI Terminal. Type 'help' for available commands." }
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'cmd' as const, text: input }];
    
    if (cmd === 'clear') {
      setHistory([]);
    } else if (RESPONSES[cmd as keyof typeof RESPONSES]) {
      newHistory.push({ type: 'resp' as const, text: RESPONSES[cmd as keyof typeof RESPONSES] });
      setHistory(newHistory);
    } else {
      newHistory.push({ type: 'resp' as const, text: `Command not found: ${cmd}. Type 'help' for options.` });
      setHistory(newHistory);
    }
    
    setInput('');
  };

  return (
    <>
      <button 
        className={`terminal-launcher ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Terminal"
      >
        {isOpen ? <FaTimes /> : <FaTerminal />}
        <span className="launcher-text">ASK AI</span>
      </button>

      {isOpen && (
        <div className="terminal-overlay" onClick={() => setIsOpen(false)}>
          <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" onClick={() => setIsOpen(false)}></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">khushi@ai-terminal: ~</div>
              <button className="terminal-close" onClick={() => setIsOpen(false)}><FaTimes /></button>
            </div>
            <div className="terminal-body" ref={terminalRef}>
              {history.map((item, i) => (
                <div key={i} className={`terminal-line ${item.type}`}>
                  {item.type === 'cmd' ? (
                    <span className="prompt">visitor@khushi:~$ <span className="cmd-text">{item.text}</span></span>
                  ) : (
                    <div className="resp-text">{item.text}</div>
                  )}
                </div>
              ))}
              <form onSubmit={handleCommand} className="terminal-input-line">
                <span className="prompt">visitor@khushi:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the AI about Khushi..."
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AITerminal;
