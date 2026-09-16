// Static stand-in for the reference's HubSpot meetings scheduler: a calendar of the current
// month and a list of KL-time slots that hand off to WhatsApp (where FF's process starts).
export function initScheduler() {
  const root = document.querySelector('.ff-sched');
  if (!root) return;
  const grid = root.querySelector('[data-sched-grid]'), month = root.querySelector('[data-sched-month]');
  const dayLabel = root.querySelector('[data-sched-day]'), times = root.querySelector('[data-sched-times]');
  const chips = root.querySelectorAll('[data-sched-len]');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let view = new Date(today.getFullYear(), today.getMonth(), 1), selected = new Date(today);
  let len = '15 mins';
  const fmtMonth = (d) => d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const fmtDay = (d) => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const renderTimes = () => {
    dayLabel.textContent = fmtDay(selected);
    times.innerHTML = '';
    for (let h = 9; h < 18; h++) for (const m of [0, 30]) {
      const label = `${((h + 11) % 12) + 1}:${m ? '30' : '00'} ${h < 12 ? 'am' : 'pm'}`;
      const a = document.createElement('a');
      const text = `Hi FF, I'd like a ${len} call on ${fmtDay(selected)} at ${label} (KL time).`;
      a.href = `https://wa.me/60139078719?text=${encodeURIComponent(text)}`; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = label; times.appendChild(a);
    }
  };
  const render = () => {
    month.textContent = fmtMonth(view);
    grid.innerHTML = '';
    ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].forEach((d) => { const e = document.createElement('div'); e.className = 'dow'; e.textContent = d; grid.appendChild(e); });
    const first = new Date(view), last = new Date(view.getFullYear(), view.getMonth() + 1, 0);
    for (let i = 0; i < first.getDay(); i++) grid.appendChild(document.createElement('div'));
    for (let d = 1; d <= last.getDate(); d++) {
      const date = new Date(view.getFullYear(), view.getMonth(), d);
      const cell = document.createElement('div'); cell.className = 'day';
      const open = date >= today && date.getDay() !== 0 && date.getDay() !== 6;
      if (open) cell.classList.add('is-open');
      if (date.getTime() === selected.getTime()) cell.classList.add('is-selected');
      const span = document.createElement('span'); span.textContent = d; cell.appendChild(span);
      if (open) cell.addEventListener('click', () => { selected = date; render(); renderTimes(); });
      grid.appendChild(cell);
    }
  };
  root.querySelectorAll('[data-sched-nav]').forEach((b) => b.addEventListener('click', () => { view = new Date(view.getFullYear(), view.getMonth() + (+b.dataset.schedNav), 1); render(); }));
  chips.forEach((c) => c.addEventListener('click', () => { chips.forEach((x) => x.classList.remove('is-active')); c.classList.add('is-active'); len = c.textContent.trim(); renderTimes(); }));
  render(); renderTimes();
}
