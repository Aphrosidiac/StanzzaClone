// Webflow form behaviour without Webflow: on submit, swap the form for its success panel.
// There is no backend on this local build (see brief) — nothing is sent anywhere.
export function initForms() {
  document.querySelectorAll('.w-form').forEach((wrap) => {
    const form = wrap.querySelector('form');
    const done = wrap.querySelector('.w-form-done');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const btn = form.querySelector('[type="submit"]');
      if (btn?.dataset.wait) btn.value = btn.dataset.wait;
      setTimeout(() => { form.style.display = 'none'; if (done) done.style.display = 'block'; }, 400);
    });
  });
}
