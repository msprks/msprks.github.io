document.querySelectorAll('.exhibition-reel').forEach((reel) => {
  const openingStill = reel.querySelector('img');
  const stills = [openingStill.getAttribute('src'), ...JSON.parse(reel.dataset.stills)];
  const imageTemplate = openingStill.cloneNode(false);
  imageTemplate.removeAttribute('srcset');
  imageTemplate.removeAttribute('src');
  imageTemplate.loading = 'eager';
  imageTemplate.style.cursor = 'pointer';

  let visibleStill = openingStill;
  let visibleIndex = 0;
  let requestedIndex = 0;
  let requestId = 0;
  const pending = new Map();

  function prepare(index) {
    if (!pending.has(index)) {
      const image = index === 0 ? openingStill : imageTemplate.cloneNode(false);
      if (index !== 0) {
        image.src = stills[index];
        image.alt = `${reel.dataset.stillLabel} ${index + 1} of ${stills.length}`;
      } else {
        image.loading = 'eager';
      }
      const decoded = image.decode().then(() => image).catch((error) => {
        pending.delete(index);
        throw error;
      });
      pending.set(index, decoded);
    }
    return pending.get(index);
  }

  function prefetchNext() {
    const next = (visibleIndex + 1) % stills.length;
    prepare(next).catch(() => {});
  }

  async function advance(step) {
    requestedIndex = (requestedIndex + step + stills.length) % stills.length;
    const index = requestedIndex;
    const id = ++requestId;
    if (index === visibleIndex) return;

    try {
      const image = await prepare(index);
      if (id !== requestId) return;
      visibleStill.replaceWith(image);
      visibleStill = image;
      visibleIndex = index;
      pending.delete(index);
      prefetchNext();
    } catch {
      if (id === requestId) requestedIndex = visibleIndex;
    }
  }

  openingStill.style.cursor = 'pointer';
  openingStill.parentElement.addEventListener('click', (event) => {
    if (event.target === visibleStill) advance(1);
  });
  reel.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => advance(Number(button.dataset.step)));
    button.hidden = false;
  });

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    prefetchNext();
  });
  observer.observe(reel);
});
