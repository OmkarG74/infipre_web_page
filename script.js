// Small site script: update footer year and handle contact form submission (demo)
document.addEventListener('DOMContentLoaded', function () {
  // Update footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Simple contact form handler (demo) — replace with real endpoint as needed
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('#name')?.value?.trim();
      const email = form.querySelector('#email')?.value?.trim();
      const message = form.querySelector('#message')?.value?.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Demo behavior: log and show a success message. Replace with fetch() to send data to server.
      console.log('Contact form submitted:', { name, email, message });
      alert('Thanks, ' + name + '! Your message has been received (demo).');
      form.reset();
    });
  }
});
