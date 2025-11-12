'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import ContactPanel from '../components/ContactPanel';
import SkillsPanel from '../components/SkillsPanel';
import ExperiencePanel from '../components/ExperiencePanel';
import ProjectsPanel from '../components/ProjectsPanel';
import EducationPanel from '../components/EducationPanel';
import BlogPanel from '../components/BlogPanel';
import Modal from '../components/Modal';

export default function Home() {
  const [activePanel, setActivePanel] = useState('panel-contact');
  const [showExpModal, setShowExpModal] = useState(false);

  return (
    <div className="shell">
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      <div className="top-bar">
        <div className="window-dots">
          <div className="dot"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="brand-label">
          RICARDO CARVALHO
          <span>Business Central · ERP Support · 2026 Profile</span>
        </div>
        <div className="cta-inline">
          Let’s build what your finance and operations deserve.
          <a href="mailto:ricardo.sampaio@gmail.com?subject=Business%20Central%20Opportunity%20with%20Ricardo">
            <i className="fa-regular fa-paper-plane"></i>
            <span>Invite Ricardo</span>
          </a>
        </div>
      </div>

      <div className="content">
        <aside className="left-rail">
          <Hero />
          <Navigation activePanel={activePanel} setActivePanel={setActivePanel} />
        </aside>

        <main className="right-panels">
          <ContactPanel isActive={activePanel === 'panel-contact'} />
          <SkillsPanel isActive={activePanel === 'panel-skills'} />
          <ExperiencePanel isActive={activePanel === 'panel-experience'} onOpenModal={() => setShowExpModal(true)} />
          <ProjectsPanel isActive={activePanel === 'panel-projects'} />
          <EducationPanel isActive={activePanel === 'panel-education'} />
          <BlogPanel isActive={activePanel === 'panel-blog'} />
        </main>
      </div>

      <footer className="footer">
        <span>
          Built as a focused 2026-ready profile. One screen, zero clutter, all signal.
          <strong>Ready when you are.</strong>
        </span>
        <div className="footer-links">
          <a href="mailto:ricardo.sampaio@gmail.com?subject=Let's%20discuss%20Business%20Central"
             aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/ricardo-carvalho-05741519/" target="_blank" rel="noopener"
             aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/mrricardocarvalho/" target="_blank" rel="noopener"
             aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" id="footer-schedule" aria-label="Schedule Call">
            <i className="fa-regular fa-calendar"></i>
          </a>
        </div>
      </footer>

      <Modal isOpen={showExpModal} onClose={() => setShowExpModal(false)} title="Detailed Responsibilities">
        <div>
          <div className="modal-section-title">Current Role at Xolyd</div>
          <ul className="modal-list">
            <li>Ongoing customer support for Business Central implementations.</li>
            <li>New project implementations and system upgrades.</li>
            <li>Developing multiple interfaces for integrations.</li>
            <li>Managing cloud-based and legacy version customers.</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">Key Projects</div>
          <ul className="modal-list">
            <li>BC Cloud addon for ERP4LSP logistics platform.</li>
            <li>Leading development of BC integration with Portuguese SIBS banking.</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}
