interface BlogPanelProps {
  isActive: boolean;
}

export default function BlogPanel({ isActive }: BlogPanelProps) {
  return (
    <section className={`panel ${isActive ? 'active' : ''}`} id="panel-blog">
      <div className="panel-header">
        <div>
          <div className="panel-title">
            <span className="icon"><i className="fa-solid fa-pen-nib"></i></span>
            Blog · Business Central & Personal AI Experiments
          </div>
          <div className="panel-subtitle">
            Short, opinionated pieces on real-world BC challenges, architecture decisions, and how AI augments my day-to-day development.
          </div>
        </div>
        <div className="panel-actions">
          <div className="pill">
            <i className="fa-regular fa-rss"></i>
            New entries in under 5 minutes of reading
          </div>
        </div>
      </div>

      <div className="blog-grid">
        <div className="blog-card">
          <div className="blog-card-title">Designing Upgrade-Safe BC Extensions in 2026</div>
          <div className="blog-card-tag">Business Central · Architecture</div>
          <div>
            Why I treat every customization as a future upgrade risk—and the patterns I use to keep clients safe.
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-card-title">Letting AI Co-Pilot My AL Development</div>
          <div className="blog-card-tag">AI · Developer Workflow</div>
          <div>
            A practical look at how I use AI to generate scaffolding, tests, and documentation without losing control.
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-card-title">From Siloed Systems to a BC-Centric Ecosystem</div>
          <div className="blog-card-tag">Integrations · Strategy</div>
          <div>
            Lessons from integrating BC with e-commerce, logistics and banking while keeping observability first.
          </div>
        </div>
      </div>

      <div className="panel-actions">
        <div className="micro-link">
          <i className="fa-regular fa-folder-open"></i>
          Hook this panel to your real blog or markdown posts.
        </div>
      </div>
    </section>
  );
}