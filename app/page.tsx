'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
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
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState<{title: string; tag: string; content: string} | null>(null);

  const handleBook = () => {
    const subject = encodeURIComponent('20-minute discovery call with Ricardo Carvalho');
    const body = encodeURIComponent('Hi Ricardo,%0D%0A%0D%0AI would like to schedule a 20-minute discovery call to discuss Business Central opportunities. Please suggest times you have available.%0D%0A%0D%0AThanks,');
    window.location.href = `mailto:ricardo.sampaio@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleOpenCVModal = () => setShowCVModal(true);
  const handleDownloadCV = () => setShowCVModal(true);

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
          <span>Business Central · ERP Support</span>
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
          <Hero onBook={handleBook} onOpenCV={handleOpenCVModal} />
          <Navigation activePanel={activePanel} setActivePanel={setActivePanel} />
        </aside>

        <main className="right-panels">
          <ContactPanel isActive={activePanel === 'panel-contact'} onBook={handleBook} onDownloadCV={handleDownloadCV} />
          <SkillsPanel isActive={activePanel === 'panel-skills'} onOpenModal={() => setShowSkillsModal(true)} />
          <ExperiencePanel isActive={activePanel === 'panel-experience'} onOpenModal={() => setShowExpModal(true)} />
          <ProjectsPanel isActive={activePanel === 'panel-projects'} onOpenModal={() => setShowProjectsModal(true)} />
          <EducationPanel isActive={activePanel === 'panel-education'} />
          <BlogPanel isActive={activePanel === 'panel-blog'} onOpenModal={(post) => { setSelectedBlogPost(post); setShowBlogModal(true); }} />
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

      <Modal isOpen={showSkillsModal} onClose={() => setShowSkillsModal(false)} title="Categorized Skill Matrix">
        <div>
          <div className="modal-section-title">ERP & Development</div>
          <ul className="modal-list">
            <li>Microsoft Dynamics 365 Business Central</li>
            <li>Dynamics NAV · AL Language · C/AL legacy</li>
            <li>Extensions v2 · Eventing · APIs</li>
            <li>Web Services (REST, OData, SOAP)</li>
            <li>XML Interfaces · Debugging Tools</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">Support & Leadership</div>
          <ul className="modal-list">
            <li>Project Management · Team Leadership</li>
            <li>Advanced troubleshooting and root cause analysis</li>
            <li>Technical Documentation</li>
            <li>Customer Obsession</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">Soft Skills & Adaptability</div>
          <ul className="modal-list">
            <li>Self-Taught · Adaptability</li>
            <li>Multicultural Environments</li>
            <li>Process Redefinition</li>
            <li>Strong Organizational Skills</li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={showProjectsModal} onClose={() => setShowProjectsModal(false)} title="Detailed Project Stories">
        <div>
          <div className="modal-section-title">BC Cloud Addon for ERP4LSP</div>
          <ul className="modal-list">
            <li>Developed custom Business Central Cloud extension to integrate with ERP4LSP logistics platform.</li>
            <li>Implemented APIs and web services for real-time data synchronization.</li>
            <li>Enhanced supply chain visibility and operational efficiency for clients.</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">SIBS Banking Integration</div>
          <ul className="modal-list">
            <li>Leading development of secure integration between Business Central and Portuguese SIBS banking system.</li>
            <li>Ensured compliance with financial regulations and secure transaction processing.</li>
            <li>Enabled automated banking operations, reducing manual errors and processing time.</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">Healthcare ERP Implementation</div>
          <ul className="modal-list">
            <li>Custom Dynamics NAV solutions for healthcare clients in Portugal, Angola, and Mozambique.</li>
            <li>Designed XML interfaces for seamless data exchange with external systems.</li>
            <li>Improved patient management, billing, and regulatory compliance processes.</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">Municipal Management Addons</div>
          <ul className="modal-list">
            <li>Developed addons for municipal workflows including document management and urban planning.</li>
            <li>Supported public works, cemeteries, and other municipal services for Portuguese municipalities.</li>
            <li>Streamlined administrative processes and improved service delivery.</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">Legacy System Upgrades</div>
          <ul className="modal-list">
            <li>Migrated legacy Dynamics NAV systems to modern Business Central versions.</li>
            <li>Preserved custom functionalities while improving performance and security.</li>
            <li>Minimized downtime and ensured business continuity during transitions.</li>
          </ul>
        </div>
        <div>
          <div className="modal-section-title">Customer Support Initiatives</div>
          <ul className="modal-list">
            <li>Provided ongoing technical support for Business Central implementations.</li>
            <li>Troubleshot complex issues and delivered root cause resolutions.</li>
            <li>Enhanced customer satisfaction through proactive maintenance and optimizations.</li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={showBlogModal} onClose={() => setShowBlogModal(false)} title={selectedBlogPost?.title || "Blog Post"}>
        {selectedBlogPost && (
          <div>
            <div className="modal-section-title">{selectedBlogPost.tag}</div>
            <div className="prose prose-invert text-base max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]}>
                {selectedBlogPost.content}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={showCVModal} onClose={() => setShowCVModal(false)} title="Concise Profile">
        <div>
          <div className="modal-section-title">Ricardo Carvalho — Concise Profile</div>
          <div className="prose prose-invert text-base max-w-none">
            <p className="lead">Senior Business Central Developer · Integration & Support Specialist</p>
            <p>
              20+ years orchestrating ERP solutions, implementing Business Central extensions, and delivering integrations that scale. I focus on upgrade-safe customizations, robust APIs, and operational efficiency.
            </p>
            <h4>Contact</h4>
            <p>
              <a href="mailto:ricardo.sampaio@gmail.com">ricardo.sampaio@gmail.com</a>
            </p>
            <h4>Download</h4>
            <p>If you want a downloadable CV PDF, please request it via email and I will send it directly.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
