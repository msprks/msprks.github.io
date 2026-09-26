// Keep desktop side navigation until the window is below 80% of the screen.
// Phones retain the existing mobile layout.
const navigationMediaRules = Array.from(document.styleSheets)
  .filter(sheet => sheet.href && new URL(sheet.href).pathname.endsWith('/style.css'))
  .flatMap(sheet => Array.from(sheet.cssRules))
  .filter(rule => rule.media && rule.conditionText.includes('max-width: 1400px'))
  .map(rule => ({ rule, original: rule.conditionText }));

const updateNavigationBreakpoint = () => {
  const breakpoint = Math.max(900, window.screen.availWidth * 0.8);
  for (const { rule, original } of navigationMediaRules) {
    rule.media.mediaText = original.replace('max-width: 1400px', `max-width: ${breakpoint - 0.02}px`);
  }
  document.documentElement.dataset.navigation = window.innerWidth >= breakpoint ? 'side' : 'top';
};
updateNavigationBreakpoint();
window.addEventListener('resize', updateNavigationBreakpoint);

// Reserve the actual fixed-header height, including wrapped links and open panels.
const compactHeader = document.querySelector('.top-bar');
if (compactHeader) {
  const updateHeaderSpace = () => {
    document.documentElement.style.setProperty(
      '--compact-header-height', `${compactHeader.getBoundingClientRect().height}px`
    );
  };
  new ResizeObserver(updateHeaderSpace).observe(compactHeader);
  updateHeaderSpace();
}
