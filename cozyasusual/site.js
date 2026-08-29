// Cozy as Usual — tiny helpers (no framework)
document.addEventListener('DOMContentLoaded', () => {
  // mobile nav
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // shop filters (client-side, by data-cat)
  const filters = document.querySelectorAll('.filters button');
  const cards = document.querySelectorAll('.grid .card');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const cat = btn.dataset.cat;
    cards.forEach(c => {
      c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none';
    });
  }));

  // contact form → opens mail client (swap for Formspree/Netlify later)
  const form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const subject = encodeURIComponent(`[${d.get('topic') || 'Hello'}] ${d.get('name') || ''}`);
      const body = encodeURIComponent(`${d.get('message') || ''}\n\n— ${d.get('name') || ''}\n${d.get('email') || ''}`);
      window.location.href = `mailto:${form.dataset.mailto}?subject=${subject}&body=${body}`;
    });
  }

  // newsletter (placeholder — wire to Klaviyo/Mailchimp later)
  const news = document.querySelector('form[data-newsletter]');
  if (news) {
    news.addEventListener('submit', e => {
      e.preventDefault();
      news.querySelector('.note').textContent = 'You’re on the list.';
      news.reset();
    });
  }
});
