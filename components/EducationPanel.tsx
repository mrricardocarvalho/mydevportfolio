interface EducationPanelProps {
  isActive: boolean;
}

export default function EducationPanel({ isActive }: EducationPanelProps) {
  return (
    <section className={`panel ${isActive ? 'active' : ''}`} id="panel-education">
      <div className="panel-header">
        <div>
          <div className="panel-title">
            <span className="icon"><i className="fa-solid fa-graduation-cap"></i></span>
            Education & Continuous Learning
          </div>
          <div className="panel-subtitle">
            Formal background plus ongoing Microsoft ecosystem learning to stay ahead of your roadmap.
          </div>
        </div>
      </div>

      <div className="compact-list">
        <div className="compact-item">
          <div>
            <strong>Bachelor's in Management Informatics</strong>
            <div className="meta">
              Instituto Superior de Gestão (ISG), Lisbon, Portugal. Courses in C/C++, Visual Basic, Java, SQL, PL/SQL, HTML, XML, UML, ASP, Prolog, Clips, Databases, Data Mining, Systems Analysis, Object-Oriented Programming, Network Engineering, Computer Law, Management, Accounting, Financial Analysis, Mathematics, Strategic Planning, Business Strategy.
            </div>
          </div>
          <span className="meta">1998–2004</span>
        </div>

        <div className="compact-item">
          <div>
            <strong>Professional Certifications & Trainings</strong>
            <div className="meta">
              MB7-838 NAV 2009 Installation and Configuration (2011), Pedagogical Competencies for Trainers (2008), ASP.NET MVC 4 Web Applications (2015), JavaScript (2015), Microsoft Visual Studio 2010 ASP.NET (2009–2012).
            </div>
          </div>
        </div>

        <div className="compact-item">
          <div>
            <strong>Languages</strong>
            <div className="meta">
              Portuguese (Native), English (C1), French (A2).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}