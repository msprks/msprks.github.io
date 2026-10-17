(() => {
  const key = 'mesparks-homepage-scroll-position';
  const links = [...document.querySelectorAll('.homepage-exhibition-link, .homepage-caption-link')];
  const imageFor = link => link.closest('.homepage-exhibition')?.querySelector('img') || link.closest('.caption')?.previousElementSibling?.querySelector('img');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const image = imageFor(link);
      sessionStorage.setItem(key, JSON.stringify({
        y: window.scrollY,
        image: image?.getAttribute('src'),
        offset: image?.getBoundingClientRect().top
      }));
    });
  });

  let stopRestoring = () => {};
  function restore() {
    const raw = sessionStorage.getItem(key);
    if (raw === null) return;
    let saved;
    try { saved = JSON.parse(raw); } catch { return; }
    if (typeof saved === 'number') saved = { y: saved };
    if (!saved || !Number.isFinite(saved.y)) return;
    sessionStorage.removeItem(key);
    stopRestoring();
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    const image = [...document.querySelectorAll('.homepage-image')].find(img => img.getAttribute('src') === saved.image);
    let active = true;
    let frame;
    const apply = () => {
      if (!active) return;
      const y = image && Number.isFinite(saved.offset)
        ? window.scrollY + image.getBoundingClientRect().top - saved.offset
        : saved.y;
      window.scrollTo({ top: y, left: 0, behavior: 'instant' });
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => { apply(); frame = requestAnimationFrame(apply); });
    };
    const events = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    const observer = new ResizeObserver(schedule);
    const timer = setTimeout(() => stopRestoring(), 10000);
    stopRestoring = () => {
      active = false;
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      observer.disconnect();
      events.forEach(event => window.removeEventListener(event, stopRestoring));
      window.removeEventListener('load', schedule);
      history.scrollRestoration = previousRestoration;
    };
    events.forEach(event => window.addEventListener(event, stopRestoring, { passive: true }));
    observer.observe(document.body);
    window.addEventListener('load', schedule, { once: true });
    document.fonts?.ready.then(schedule);
    schedule();
  }
  window.addEventListener('pageshow', restore);
  restore();
})();
