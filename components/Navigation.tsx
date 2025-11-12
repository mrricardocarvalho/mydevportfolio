interface NavigationProps {
  activePanel: string;
  setActivePanel: (panel: string) => void;
}

export default function Navigation({ activePanel, setActivePanel }: NavigationProps) {
  return (
    <nav className="section-nav">
      <div className="nav-label">Navigate profile</div>
      <div className="nav-buttons">
        <div className={`nav-btn ${activePanel === 'panel-contact' ? 'active' : ''}`} onClick={() => setActivePanel('panel-contact')}>
          <span className="label">Contact & Snapshot</span>
          <span className="icon"><i className="fa-solid fa-user"></i></span>
        </div>
        <div className={`nav-btn ${activePanel === 'panel-skills' ? 'active' : ''}`} onClick={() => setActivePanel('panel-skills')}>
          <span className="label">Skill Sets</span>
          <span className="icon"><i className="fa-solid fa-sliders"></i></span>
        </div>
        <div className={`nav-btn ${activePanel === 'panel-experience' ? 'active' : ''}`} onClick={() => setActivePanel('panel-experience')}>
          <span className="label">Work Experience</span>
          <span className="icon"><i className="fa-solid fa-briefcase"></i></span>
        </div>
        <div className={`nav-btn ${activePanel === 'panel-projects' ? 'active' : ''}`} onClick={() => setActivePanel('panel-projects')}>
          <span className="label">Project Experience</span>
          <span className="icon"><i className="fa-solid fa-diagram-project"></i></span>
        </div>
        <div className={`nav-btn ${activePanel === 'panel-education' ? 'active' : ''}`} onClick={() => setActivePanel('panel-education')}>
          <span className="label">Education</span>
          <span className="icon"><i className="fa-solid fa-graduation-cap"></i></span>
        </div>
        <div className={`nav-btn ${activePanel === 'panel-blog' ? 'active' : ''}`} onClick={() => setActivePanel('panel-blog')}>
          <span className="label">Blog</span>
          <span className="icon"><i className="fa-solid fa-pen-nib"></i></span>
        </div>
        <div className="nav-btn" id="nav-btn-call">
          <span className="label">Schedule Call</span>
          <span className="icon"><i className="fa-regular fa-calendar-check"></i></span>
        </div>
      </div>
    </nav>
  );
}