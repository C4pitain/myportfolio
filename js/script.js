// Shared portfolio interactions
document.querySelectorAll('[data-go]').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.go;
    if (target) window.location.href = target + '.html';
  });
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Portfolio inquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    const note = document.getElementById('form-note');
    if (note) note.textContent = 'Opening your email app with a prepared message. Replace the placeholder email address with your real one first.';
    window.location.href = 'mailto:your.email@example.com?subject=' + subject + '&body=' + body;
  });
}