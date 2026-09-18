function alignNavigationToFirstImage() {
  const navigation = document.querySelector('.site-navigation');
  const firstLink = navigation?.querySelector('a');
  const firstImage = document.querySelector('.slide');

  if (!navigation || !firstLink || !firstImage || window.innerWidth < 900) {
    if (navigation) navigation.style.transform = '';
    return;
  }

  const offset = firstImage.getBoundingClientRect().top - firstLink.getBoundingClientRect().top - 5;
  navigation.style.transform = `translateY(${offset}px)`;
}

window.addEventListener('load', alignNavigationToFirstImage);
window.addEventListener('resize', alignNavigationToFirstImage);
