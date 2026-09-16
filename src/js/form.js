// Webflow form behaviour without Webflow: on submit, swap the form for its success panel.
// There is no backend on this local build (see brief) — nothing is sent anywhere.
export function initForms() {
  // Webflow custom checkboxes: the native input is hidden and its state mirrored on the
  // styled sibling (w--redirected-checked / w--redirected-focus), as the runtime does.
  document.querySelectorAll('.w-checkbox input[type="checkbox"]').forEach((input) => {
    const custom = input.parentElement.querySelector('.w-checkbox-input--inputType-custom');
    if (!custom) return;
    input.style.cssText = 'opacity:0;position:absolute;z-index:-1';
    const sync = () => custom.classList.toggle('w--redirected-checked', input.checked);
    input.addEventListener('change', sync);
    input.addEventListener('focus', () => custom.classList.add('w--redirected-focus'));
    input.addEventListener('blur', () => custom.classList.remove('w--redirected-focus'));
    sync();
  });
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
