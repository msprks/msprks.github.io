const exhibitionDetails = {
  shibumi: { title: 'Soft Power', year: '2026', gallery: 'Galerie Shibumi' },
  touchy: { title: 'Touchy', year: '2025', gallery: '226 Gallery' },
  hemming: { title: 'Hemming', year: '2025' },
  pieceandparse: { title: 'Piece and Parse', year: '2025', gallery: '226 Gallery' },
  nars: { title: 'Undercurrents', year: '2025', gallery: 'NARS' },
  alternator: { title: 'and a Rag in the Other', year: '2022', gallery: 'Alternator Centre for Contemporary Art' },
  gordonsmith: { title: 'We can only hint at this with words', year: '2022', gallery: 'Gordon Smith Gallery of Canadian Art' },
  snaked: { title: 'Snaked', year: '2022' },
  trapp: { title: 'A Fine Line', year: '2021', gallery: 'Trapp Projects' },
  paintings: { title: 'Paintings', year: '2020-2018', italic: false, dateSeparator: ' ' },
  ou: { title: 'Hiatus', year: '2019', gallery: 'Ou Gallery' },
  fiftyfifty: { title: 'Pleated Fingers Parted', year: '2019', gallery: 'Fifty Fifty Collective' },
  '13suite15': { title: '13suite15', year: '2019' },
  soma: { title: 'somebody any body', year: '2019', gallery: 'SOMA' },
  dynamo: { title: 'Mother Tongue', year: '2018', gallery: 'Dynamo Arts Association' },
  support: { title: 'near channels', year: '2018', gallery: 'Support Support' },
  glogauair: { title: 'Dear Home', year: '2017', gallery: 'GlogauAIR' },
  access: { title: 'A Terrible Signal', year: '2017', gallery: 'Access Gallery' },
  franc: { title: 'A Beast Salient', year: '2017', gallery: 'Franc Gallery' },
  artmur: { title: 'Fresh Paint New Construction', year: '2016', gallery: 'Art Mur' },
  stillhere: { title: 'Still Here', year: '2016', gallery: 'Concourse Gallery' }
};

const exhibitionSlug = window.location.pathname.split('/').pop().replace(/\.html$/, '');
const exhibition = exhibitionDetails[exhibitionSlug];

if (exhibition) {
  const navigation = document.querySelector('.site-navigation');
  const gallery = document.querySelector('main');
  const exhibitionTitle = exhibition.italic === false ? exhibition.title : `<em>${exhibition.title}</em>`;
  const dateSeparator = exhibition.dateSeparator ?? ', ';

  navigation.insertAdjacentHTML(
    'beforeend',
    `<span class="exhibition-text-nav perennial-info-link">${exhibitionTitle}${dateSeparator}${exhibition.year}${exhibition.gallery ? `<br><span class="exhibition-gallery-name">${exhibition.gallery}</span>` : ''}<br><span class="images-coming-soon">images coming soon</span></span>`
  );

  gallery.classList.add('slide-container', 'exhibition-gallery');
  gallery.setAttribute('aria-label', `${exhibition.title} exhibition`);

  const leftButton = document.createElement('button');
  leftButton.className = 'gallery-scroll-button gallery-scroll-left';
  leftButton.type = 'button';
  leftButton.setAttribute('aria-label', 'Scroll images to the left');

  const rightButton = document.createElement('button');
  rightButton.className = 'gallery-scroll-button gallery-scroll-right';
  rightButton.type = 'button';
  rightButton.setAttribute('aria-label', 'Scroll images to the right');

  document.body.append(leftButton, rightButton);

  const updateArrows = () => {
    leftButton.classList.toggle('is-hidden', gallery.scrollLeft <= 2);
    rightButton.classList.toggle(
      'is-hidden',
      gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2
    );
  };

  gallery.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  leftButton.addEventListener('click', () => {
    gallery.scrollBy({ left: -gallery.clientWidth * 0.8, behavior: 'smooth' });
  });
  rightButton.addEventListener('click', () => {
    gallery.scrollBy({ left: gallery.clientWidth * 0.8, behavior: 'smooth' });
  });
  updateArrows();
}
