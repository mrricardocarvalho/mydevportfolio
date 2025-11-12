export default function Hero() {
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
        I provide comprehensive support for Dynamics Business Central, ensuring customer success through technical expertise, debugging, and scalable integrations.
      </p>

      <div className="hero-cta-row">
        <button className="btn-primary" id="btn-book-call">
          <span className="icon"><i className="fa-solid fa-video"></i></span>
          <span>Book a 20-min discovery call</span>
        </button>
        <button className="btn-ghost" id="btn-view-full-cv">
          <i className="fa-regular fa-file-lines"></i>
          <span>View concise full profile</span>
        </button>
      </div>

      <div className="hero-contact-mini">
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          Portugal · Available remote EU/UK
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