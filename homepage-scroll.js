const homepageScrollKey = 'mesparks-homepage-scroll-position';

document.querySelectorAll('.homepage-exhibition-link, .homepage-caption-link').forEach((link) => {
  link.addEventListener('click', () => {
    sessionStorage.setItem(homepageScrollKey, String(window.scrollY));
  });
});

const savedHomepageScroll = sessionStorage.getItem(homepageScrollKey);

if (savedHomepageScroll !== null) {
  const restoreHomepageScroll = () => window.scrollTo(0, Number(savedHomepageScroll));

  requestAnimationFrame(restoreHomepageScroll);
  window.addEventListener('load', () => requestAnimationFrame(restoreHomepageScroll), { once: true });
  sessionStorage.removeItem(homepageScrollKey);
}
