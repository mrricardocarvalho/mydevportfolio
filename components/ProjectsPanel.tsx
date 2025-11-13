interface ProjectsPanelProps {
  isActive: boolean;
  onOpenModal: () => void;
}

export default function ProjectsPanel({ isActive, onOpenModal }: ProjectsPanelProps) {
  return (
    <section className={`panel ${isActive ? 'active' : ''}`} id="panel-projects">
      <div className="panel-header">
        <div>
          <div className="panel-title">
            <span className="icon"><i className="fa-solid fa-diagram-project"></i></span>
            Project Experience (Impact-First)
          </div>
          <div className="panel-subtitle">
            A selection of initiatives that show how I think: scalable, secure, measurable results.
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>BC Cloud Addon for ERP4LSP</strong>
            <span>Xolyd · Cloud Solutions</span>
          </div>
          <p>
            Developed a custom addon for Business Central Cloud to integrate with ERP4LSP, enhancing logistics and supply chain management for clients.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>SIBS Integration for BC</strong>
            <span>Xolyd · Ongoing Development</span>
          </div>
          <p>
            Leading the development of Business Central integration with Portuguese SIBS banking system, enabling seamless financial transactions and compliance.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>Healthcare ERP Implementation</strong>
            <span>Sysmatch · Portugal, Angola, Mozambique</span>
          </div>
          <p>
            Designed and implemented custom Dynamics NAV solutions for Healthcare clients, including process improvements and XML interfaces for seamless operations.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>Municipal Management Addons</strong>
            <span>Aptra · Municipalities</span>
          </div>
          <p>
            Developed addons for municipal workflows, document management, urban planning, public works, cemeteries, and more for various Portuguese municipalities.
          </p>
        </div>
      </div>

      <div className="panel-actions">
        <div className="micro-link" onClick={onOpenModal}>
          <i className="fa-regular fa-file-code"></i>
          Explore 5–7 detailed project stories
        </div>
      </div>
    </section>
  );
}