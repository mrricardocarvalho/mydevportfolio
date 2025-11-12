interface ExperiencePanelProps {
  isActive: boolean;
}

export default function ExperiencePanel({ isActive }: ExperiencePanelProps) {
  return (
    <section className={`panel ${isActive ? 'active' : ''}`} id="panel-experience">
      <div className="panel-header">
        <div>
          <div className="panel-title">
            <span className="icon"><i className="fa-solid fa-briefcase"></i></span>
            Work Experience (Strategic Highlights)
          </div>
          <div className="panel-subtitle">
            Condensed to what matters: impact, scale, and Business Central leadership. Detailed chronology stays one click away.
          </div>
        </div>
        <div className="panel-actions">
          <div className="pill">
            <i className="fa-solid fa-layer-group"></i>
            Full timeline available on request
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>Senior Business Central Developer</strong>
            <span>Xolyd · 2021–Present</span>
          </div>
          <p>
            Provide ongoing support, new implementations, interfaces, and upgrades for cloud-based and legacy Business Central customers. Developed addon for BC Cloud ERP4LSP and leading integration with Portuguese SIBS.
          </p>
          <div className="link-soft" data-open-modal="exp-modal">
            <i className="fa-regular fa-eye"></i>
            See detailed responsibilities
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>Dynamics Business Central Support Engineer EMEA</strong>
            <span>Sysmatch · 2020–2021</span>
          </div>
          <p>
            Provided comprehensive support for Business Central, focusing on customer success, technical troubleshooting, debugging, root cause analysis, and creating technical content.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>Senior Dynamics NAV Developer</strong>
            <span>Sysmatch · 2018–2020</span>
          </div>
          <p>
            Managed maintenance, support, and implementation of Dynamics NAV, including custom developments for Healthcare clients in Portugal, Angola, and Mozambique.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-header">
            <strong>Senior Dynamics NAV Developer</strong>
            <span>ABOUTNAV · 2016–2018</span>
          </div>
          <p>
            Led project management, implementation, and custom developments for various sectors, including outsourcing for multiple clients.
          </p>
        </div>
      </div>
    </section>
  );
}