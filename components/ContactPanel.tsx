interface ContactPanelProps {
  isActive: boolean;
}

export default function ContactPanel({ isActive }: ContactPanelProps) {
  return (
    <section className={`panel ${isActive ? 'active' : ''}`} id="panel-contact">
      <div className="panel-header">
        <div>
          <div className="panel-title">
            <span className="icon"><i className="fa-solid fa-user-astronaut"></i></span>
            Personal Contact & Executive Snapshot
          </div>
          <div className="panel-subtitle">
            A single place to reach me, understand what I bring, and decide your next step in under 30 seconds.
          </div>
        </div>
        <div className="panel-actions">
          <div className="pill">
            <i className="fa-solid fa-circle"></i>
            Actively open to strategic roles
          </div>
        </div>
      </div>

      <div className="compact-list">
        <div className="compact-item">
          <div>
            <strong>Location</strong>
            <div className="meta">
              Lisbon / Porto · Portugal · Remote-friendly
            </div>
          </div>
          <span className="meta">CET / GMT</span>
        </div>
        <div className="compact-item">
          <div>
            <strong>Contact</strong>
            <div className="meta">
              ricardo.sampaio@gmail.com
            </div>
          </div>
          <span className="meta link-soft">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </span>
        </div>
        <div className="compact-item">
          <div>
            <strong>Role Focus</strong>
            <div className="meta">
              Senior Business Central Developer · ERP Consultant · Integration & Support Specialist
            </div>
          </div>
        </div>
        <div className="compact-item">
          <div>
            <strong>Value in One Line</strong>
            <div className="meta">
              I deliver seamless Business Central solutions that optimize operations, resolve challenges, and drive sustainable business growth.
            </div>
          </div>
        </div>
      </div>

      <div className="panel-actions">
        <div className="micro-link" id="micro-book">
          Book a 20-min technical-fit call
        </div>
        <div className="micro-link" id="micro-cv">
          Download detailed CV PDF
        </div>
      </div>
    </section>
  );
}