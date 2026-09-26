// Keep gallery controls level with the first caption, outside the gallery.
const horizontalGallery = document.querySelector('.exhibition-gallery');
const galleryImage = horizontalGallery?.querySelector('img');
const galleryCaption = galleryImage?.closest('figure')?.querySelector('figcaption');
if (horizontalGallery && galleryImage) {
  const alignGalleryControls = () => {
    const galleryBounds = horizontalGallery.getBoundingClientRect();
    document.documentElement.style.setProperty('--gallery-left-edge', `${galleryBounds.left + window.scrollX}px`);
    // Anchor to the first caption so horizontal scrolling never shifts the arrows.
    const controlsBottom = (galleryCaption || galleryImage).getBoundingClientRect().bottom + window.scrollY;
    document.documentElement.style.setProperty('--gallery-controls-bottom', `${controlsBottom}px`);
  };
  const galleryLayoutObserver = new ResizeObserver(alignGalleryControls);
  galleryLayoutObserver.observe(horizontalGallery);
  galleryLayoutObserver.observe(galleryImage);
  if (galleryCaption) galleryLayoutObserver.observe(galleryCaption);
  horizontalGallery.addEventListener('load', alignGalleryControls, true);
  window.addEventListener('resize', alignGalleryControls);
  alignGalleryControls();
}
