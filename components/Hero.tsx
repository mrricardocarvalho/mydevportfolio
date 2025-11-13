"use client";
import React from 'react';

interface HeroProps {
  onBook?: () => void;
  onOpenCV?: () => void;
}

export default function Hero({ onBook, onOpenCV }: HeroProps) {
  const handleBook = () => {
    if (onBook) return onBook();
    const subject = encodeURIComponent('20-minute discovery call with Ricardo Carvalho');
    const body = encodeURIComponent('Hi Ricardo,%0D%0A%0D%0AI would like to schedule a 20-minute discovery call to discuss Business Central opportunities. Please suggest times you have available.%0D%0A%0D%0AThanks,');
    window.location.href = `mailto:ricardo.sampaio@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleViewCV = () => {
    if (onOpenCV) return onOpenCV();
    // fallback: open /cv page
    window.location.href = '/cv';
  };

  return (
    <section className="hero-card">
      <div className="hero-top">
        <div className="avatar">RC</div>
        <div className="hero-text">
          <h1>Ricardo Carvalho</h1>
          <p>Senior Business Central Developer · Portugal</p>
          <div className="hero-badge">
            <i className="fa-solid fa-bolt"></i>
            20+ years orchestrating ERP solutions and support
          </div>
        </div>
      </div>

      <p className="hero-story">
        I turn Business Central challenges into opportunities-delivering reliable support, innovative integrations, and scalable solutions that drive business success and growth.
      </p>

      <div className="hero-cta-row">
        <button className="btn-primary" id="btn-book-call" onClick={handleBook} onKeyDown={(e) => { if (e.key === 'Enter') handleBook(); }}>
          <span className="icon"><i className="fa-solid fa-video"></i></span>
          <span>Book a 20-min discovery call</span>
        </button>
        <button className="btn-ghost" id="btn-view-full-cv" onClick={handleViewCV} onKeyDown={(e) => { if (e.key === 'Enter') handleViewCV(); }}>
          <i className="fa-regular fa-file-lines"></i>
          <span>View concise full profile</span>
        </button>
      </div>

      <div className="hero-contact-mini">
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          Portugal · Available remote EU/UK/WORLD
        </div>
        <div className="hero-social-buttons">
          <a className="hero-icon-btn" href="https://www.linkedin.com/in/ricardo-carvalho-05741519/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a className="hero-icon-btn" href="mailto:ricardo.sampaio@gmail.com" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a className="hero-icon-btn" href="https://github.com/mrricardocarvalho/" target="_blank" rel="noopener" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}