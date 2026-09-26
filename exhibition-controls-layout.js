// Place controls below the gallery on wide screens, beside it in the top-nav layout.
const horizontalGallery = document.querySelector('.exhibition-gallery');
const galleryButtons = document.querySelectorAll('.gallery-scroll-button');
if (horizontalGallery?.querySelector('img') && galleryButtons.length) {
  const galleryControls = document.createElement('div');
  galleryControls.className = 'gallery-controls';
  galleryControls.setAttribute('role', 'group');
  galleryControls.setAttribute('aria-label', 'Exhibition scrolling controls');
  galleryButtons.forEach(button => galleryControls.append(button));
  horizontalGallery.after(galleryControls);

  const alignGalleryControls = () => {
    galleryControls.style.setProperty('--gallery-margin-left', getComputedStyle(horizontalGallery).marginLeft);
    const bounds = horizontalGallery.getBoundingClientRect();
    const firstImage = horizontalGallery.querySelector('img');
    galleryControls.style.setProperty('--gallery-left', `${bounds.left + window.scrollX}px`);
    galleryControls.style.setProperty('--first-image-bottom', `${firstImage.getBoundingClientRect().bottom + window.scrollY}px`);
  };
  const controlsObserver = new ResizeObserver(alignGalleryControls);
  controlsObserver.observe(horizontalGallery);
  controlsObserver.observe(horizontalGallery.querySelector('img'));
  horizontalGallery.addEventListener('load', alignGalleryControls, true);
  window.addEventListener('resize', alignGalleryControls);
  alignGalleryControls();
}
