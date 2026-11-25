document.querySelectorAll('.exhibition-reel').forEach((reel) => {
  const still = reel.querySelector('img');
  const stills = [still.getAttribute('src'), ...JSON.parse(reel.dataset.stills)];
  const openingSrcset = still.getAttribute('srcset');
  let stillIndex = 0;

  function advance(step) {
    stillIndex = (stillIndex + step + stills.length) % stills.length;
    if (openingSrcset) {
      if (stillIndex === 0) {
        still.srcset = openingSrcset;
      } else {
        still.removeAttribute('srcset');
      }
    }
    still.src = stills[stillIndex];
    still.alt = `${reel.dataset.stillLabel} ${stillIndex + 1} of ${stills.length}`;
  }

  still.style.cursor = 'pointer';
  still.addEventListener('click', () => advance(1));
  reel.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => advance(Number(button.dataset.step)));
    button.hidden = false;
  });
});
