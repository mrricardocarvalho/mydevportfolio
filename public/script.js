// Panel switching
const navButtons = document.querySelectorAll('.nav-btn[data-target]');
const panels = document.querySelectorAll('.panel');

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    if (!targetId) return;

    panels.forEach((p) => p.classList.remove('active'));
    navButtons.forEach((b) => b.classList.remove('active'));

    const targetPanel = document.getElementById(targetId);
    if (targetPanel) targetPanel.classList.add('active');
    btn.classList.add('active');
  });
});

// Schedule Call behavior (placeholder)
const openSchedule = () => {
  alert(
    "Here you can integrate Calendly or Microsoft Bookings.\n\nReplace this alert with an embedded scheduling widget or custom modal."
  );
};

const btnBookCall = document.getElementById('btn-book-call');
const navBtnCall = document.getElementById('nav-btn-call');
const footerSchedule = document.getElementById('footer-schedule');
const microBook = document.getElementById('micro-book');

if (btnBookCall) btnBookCall.addEventListener('click', openSchedule);
if (navBtnCall) navBtnCall.addEventListener('click', openSchedule);
if (footerSchedule) {
  footerSchedule.addEventListener('click', (e) => {
    e.preventDefault();
    openSchedule();
  });
}
if (microBook) microBook.addEventListener('click', openSchedule);

// Full CV Modal open via hero button and micro link
const cvBackdrop = document.getElementById('cv-modal-backdrop');
const btnViewCv = document.getElementById('btn-view-full-cv');
const microCv = document.getElementById('micro-cv');

const openCvModal = () => {
  if (cvBackdrop) cvBackdrop.style.display = 'flex';
};

if (btnViewCv) btnViewCv.addEventListener('click', openCvModal);
if (microCv) microCv.addEventListener('click', openCvModal);

// Generic modal open
document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const id = trigger.getAttribute('data-open-modal');
    const el = document.getElementById(id);
    if (el) el.style.display = 'flex';
  });
});

// Generic modal close
document.querySelectorAll('[data-close-modal]').forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const id = closeBtn.getAttribute('data-close-modal');
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
});

// Close modal when clicking backdrop
document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.style.display = 'none';
    }
  });
});

// Example blog card click (placeholder)
document.querySelectorAll('.blog-card').forEach((card) => {
  card.addEventListener('click', () => {
    alert(
      "This will link to the full blog post.\nWire each card to your blog route, markdown file, or CMS entry."
    );
  });
});