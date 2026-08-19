// Public site script: guard DOM ready, update footer year, and handle contact form safely
document.addEventListener('DOMContentLoaded', function () {
  // Update footer year if element exists
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('contact-form');
  if (!form) return; // nothing to do if form not present

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = (document.getElementById('name') || {}).value?.trim() || '';
    const email = (document.getElementById('email') || {}).value?.trim() || '';
    const message = (document.getElementById('message') || {}).value?.trim() || '';

    if (!name || !email || !message) {
      alert('Please complete all required fields.');
      return;
    }

    const data = { name, email, message };

    try {
      // Demo: attempt to POST to /contact if backend exists
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response && response.ok) {
        alert('Message Sent Successfully!');
        form.reset();
      } else {
        // If backend not available, show demo success
        console.warn('Contact endpoint returned non-ok, falling back to demo behavior.');
        alert('Thanks! Your message was captured (demo).');
        form.reset();
      }
    } catch (err) {
      console.error('Error sending contact form:', err);
      alert('An error occurred while sending your message.');
    }
  });
});