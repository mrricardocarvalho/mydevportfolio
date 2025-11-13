interface SkillsPanelProps {
  isActive: boolean;
  onOpenModal: () => void;
}

export default function SkillsPanel({ isActive, onOpenModal }: SkillsPanelProps) {
  return (
    <section className={`panel ${isActive ? 'active' : ''}`} id="panel-skills">
      <div className="panel-header">
        <div>
          <div className="panel-title">
            <span className="icon"><i className="fa-solid fa-sliders"></i></span>
            Skill Sets Curated for Business Central Excellence
          </div>
          <div className="panel-subtitle">
            Focused on outcomes: stable implementations, seamless integrations, and maintainable codebases that survive real business change.
          </div>
        </div>
      </div>

      <div className="tags">
        <div className="tag highlight">Microsoft Dynamics 365 Business Central</div>
        <div className="tag">Dynamics NAV · AL Language · C/AL legacy</div>
        <div className="tag">Extensions v2 · Eventing · APIs</div>
        <div className="tag">Web Services (REST, OData, SOAP)</div>
        <div className="tag">XML Interfaces · Debugging Tools</div>
        <div className="tag">Project Management · Team Leadership</div>
        <div className="tag">Self-Taught · Adaptability</div>
        <div className="tag">Multicultural Environments</div>
        <div className="tag">Technical Documentation</div>
        <div className="tag">Customer Obsession</div>
      </div>

      <div className="compact-list">
        <div className="compact-item">
          <div>
            <strong>Technical Expertise</strong>
            <div className="meta">
              Proficient in Dynamics NAV/BC development, customizations, upgrades, and integrations via XML and APIs.
            </div>
          </div>
        </div>
        <div className="compact-item">
          <div>
            <strong>Support & Debugging</strong>
            <div className="meta">
              Advanced troubleshooting, root cause analysis, and providing in-depth technical support for complex issues.
            </div>
          </div>
        </div>
        <div className="compact-item">
          <div>
            <strong>Leadership & Organization</strong>
            <div className="meta">
              Project management, team leadership, process redefinition, and strong organizational skills.
            </div>
          </div>
        </div>
      </div>

      <div className="panel-actions">
        <div className="micro-link" onClick={onOpenModal}>
          <i className="fa-solid fa-magnifying-glass"></i>
          View a categorized skill matrix
        </div>
      </div>
    </section>
  );
}