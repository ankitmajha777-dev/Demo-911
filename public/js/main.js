/**
 * ROAST & REVEL — Main Interactive Script
 * Premium Multi-Page Coffee Shop Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initActiveNavLink();
  initBackToTop();
  initMenuFilters();
  initMenuModal();
  initGalleryLightbox();
  initReservationForm();
  initContactForm();
  initNewsletterForm();
});

/* -------------------------------------------------------------------------
   1. Sticky Header & Scroll Effects
   ------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------------------
   2. Mobile Hamburger Navigation
   ------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target) && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when clicking any link inside drawer
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* -------------------------------------------------------------------------
   3. Active Navigation State Indicator
   ------------------------------------------------------------------------- */
function initActiveNavLink() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop() || 'index.html';

    if (linkPage === page || (page === '' && linkPage === 'index.html') || (page === 'index.html' && href === './')) {
      link.classList.add('active');
    }
  });
}

/* -------------------------------------------------------------------------
   4. Back To Top Button
   ------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* -------------------------------------------------------------------------
   5. Menu Category Filter Tabs
   ------------------------------------------------------------------------- */
function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.filter-tabs .filter-btn');
  const menuSections = document.querySelectorAll('.menu-category-section');
  const menuCards = document.querySelectorAll('.menu-filterable-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-filter');

      if (menuSections.length > 0) {
        menuSections.forEach(sec => {
          const secCat = sec.getAttribute('data-category');
          if (targetCategory === 'all' || secCat === targetCategory) {
            sec.style.display = 'block';
          } else {
            sec.style.display = 'none';
          }
        });
      }

      if (menuCards.length > 0) {
        menuCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (targetCategory === 'all' || cardCat === targetCategory) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });
}

/* -------------------------------------------------------------------------
   6. Menu Item Detail Modal
   ------------------------------------------------------------------------- */
function initMenuModal() {
  const modal = document.getElementById('menu-item-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const titleEl = modal.querySelector('.modal-title');
  const descEl = modal.querySelector('.modal-desc');
  const priceEl = modal.querySelector('.modal-price');
  const originEl = modal.querySelector('.modal-origin');
  const notesEl = modal.querySelector('.modal-notes');
  const brewEl = modal.querySelector('.modal-brew');

  document.querySelectorAll('[data-menu-item]').forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title') || 'Artisanal Selection';
      const desc = item.getAttribute('data-desc') || 'Crafted with premium selected beans.';
      const price = item.getAttribute('data-price') || '$5.50';
      const origin = item.getAttribute('data-origin') || 'Ethiopia & Colombia Blend';
      const notes = item.getAttribute('data-notes') || 'Jasmine, Bergamot, Dark Chocolate';
      const brew = item.getAttribute('data-brew') || 'Precision 9-Bar Extraction / 28s';

      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;
      if (priceEl) priceEl.textContent = price;
      if (originEl) originEl.textContent = origin;
      if (notesEl) notesEl.textContent = notes;
      if (brewEl) brewEl.textContent = brew;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------------
   7. Gallery Lightbox & Filter
   ------------------------------------------------------------------------- */
function initGalleryLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');

  // Filter functionality
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-gallery-filter');
        galleryItems.forEach(item => {
          const itemCat = item.getAttribute('data-gallery-cat');
          if (cat === 'all' || itemCat === cat) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Lightbox modal functionality
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxCategory = lightbox.querySelector('.lightbox-category');
  const closeBtn = lightbox.querySelector('.modal-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  const visibleItems = () => Array.from(galleryItems).filter(item => item.style.display !== 'none');

  const showImage = (index) => {
    const items = visibleItems();
    if (!items.length) return;
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;

    const item = items[currentIndex];
    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || 'Roast & Revel Ambiance';
    const cat = item.getAttribute('data-cat-label') || 'Atmosphere';

    if (lightboxImg && img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = title;
    }
    if (lightboxCaption) lightboxCaption.textContent = title;
    if (lightboxCategory) lightboxCategory.textContent = cat;
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const items = visibleItems();
      currentIndex = items.indexOf(item);
      showImage(currentIndex);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

/* -------------------------------------------------------------------------
   8. Reservation Form Validation & Visual Confirmation
   ------------------------------------------------------------------------- */
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const feedback = document.getElementById('reservation-feedback');
  const resultCard = document.getElementById('reservation-result-card');

  if (!form) return;

  // Set min date to today
  const dateInput = form.querySelector('#res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#res-name')?.value.trim();
    const email = form.querySelector('#res-email')?.value.trim();
    const phone = form.querySelector('#res-phone')?.value.trim();
    const date = form.querySelector('#res-date')?.value;
    const time = form.querySelector('#res-time')?.value;
    const guests = form.querySelector('#res-guests')?.value;
    const seating = form.querySelector('#res-seating')?.value || 'Main Espresso Bar';
    const notes = form.querySelector('#res-notes')?.value.trim() || 'None';

    if (!name || !email || !phone || !date || !time || !guests) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Please fill out all required fields to complete your reservation.';
      }
      return;
    }

    // Generate Booking Reference
    const code = 'RR-' + Math.floor(100000 + Math.random() * 900000);

    if (resultCard) {
      resultCard.innerHTML = `
        <div style="background-color: var(--color-surface); border: 2px solid var(--color-gold); border-radius: 8px; padding: 2rem; margin-top: 2rem; text-align: left; box-shadow: var(--shadow-elevated);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
            <div>
              <span style="font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-gold); font-weight: 700;">Confirmed Reservation</span>
              <h3 style="font-size: 1.5rem; margin-top: 0.25rem;">Table Reserved for ${escapeHtml(name)}</h3>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.75rem; color: var(--color-muted); display: block;">Booking Code</span>
              <span style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 700; color: var(--color-espresso);">${code}</span>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-muted); display: block;">Date & Time</span>
              <strong style="color: var(--color-espresso); font-size: 0.95rem;">${date} at ${time}</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-muted); display: block;">Party Size</span>
              <strong style="color: var(--color-espresso); font-size: 0.95rem;">${guests} Guests</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-muted); display: block;">Seating Zone</span>
              <strong style="color: var(--color-espresso); font-size: 0.95rem;">${escapeHtml(seating)}</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-muted); display: block;">Contact</span>
              <strong style="color: var(--color-espresso); font-size: 0.95rem;">${escapeHtml(phone)}</strong>
            </div>
          </div>

          <p style="font-size: 0.85rem; color: var(--color-muted); line-height: 1.5; margin-bottom: 1.5rem;">
            A confirmation receipt has been logged. We hold reservations for 15 minutes past the scheduled time. Complimentary single-origin welcome brew served upon arrival.
          </p>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button type="button" onclick="window.print()" class="btn btn-outline btn-sm">Print Confirmation</button>
            <button type="button" id="btn-new-res" class="btn btn-primary btn-sm">Make Another Booking</button>
          </div>
        </div>
      `;

      form.style.display = 'none';
      if (feedback) feedback.style.display = 'none';

      document.getElementById('btn-new-res')?.addEventListener('click', () => {
        form.reset();
        form.style.display = 'block';
        resultCard.innerHTML = '';
      });

      resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/* -------------------------------------------------------------------------
   9. Contact Form Validation
   ------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('contact-feedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name')?.value.trim();
    const email = form.querySelector('#contact-email')?.value.trim();
    const subject = form.querySelector('#contact-subject')?.value.trim();
    const message = form.querySelector('#contact-message')?.value.trim();

    if (!name || !email || !message) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Please provide your name, email, and message.';
      return;
    }

    feedback.className = 'form-feedback success';
    feedback.innerHTML = `
      <strong>Thank you, ${escapeHtml(name)}.</strong> Your inquiry regarding "${escapeHtml(subject || 'General Inquiry')}" has been received. Our café concierge team will respond within 24 business hours.
    `;
    form.reset();
  });
}

/* -------------------------------------------------------------------------
   10. Newsletter Form
   ------------------------------------------------------------------------- */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const val = input ? input.value.trim() : '';

      if (val && val.includes('@')) {
        alert('Welcome to Roast & Revel Journal. You will receive private cupping invitations and roaster dispatches.');
        form.reset();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  });
}

/* -------------------------------------------------------------------------
   Utility Helper
   ------------------------------------------------------------------------- */
function escapeHtml(string) {
  const div = document.createElement('div');
  div.innerText = string;
  return div.innerHTML;
}
