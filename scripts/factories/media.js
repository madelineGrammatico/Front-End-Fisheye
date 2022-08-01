import Photo from '../model/CardPhoto.js';
import Video from '../model/CardVideo.js';
import sliderFactory from './slider.js';

export default function mediaFactory(media, name) {
  function createCard(data, container, sortMedia) {
    const article = `<${data.elt._tag} src=${data.elt._path} role="Image link" aria-Label="${media.title}, vue de présentation" tabindex="0" class="media" alt="${media.title}"></${data.elt._tag}>
                    <aside class="media__aside">
                      <p class="media__title" >${media.title}</p>
                      <span class="media__likes" aria-label=${media.userLike ? 'enlever like' : 'ajouter like'} tabindex="0">
                          <p class="media__nbrLikes">${media.likes}</p>
                          <i class="fas fa-heart" role="Image" aria-label="likes"></i>
                      </span>
                    </aside>`;

    const card = document.createElement('article');
    card.classList.add('cardMedia');
    card.innerHTML = article;
    const cardElt = container.appendChild(card);
    const like = cardElt.querySelector('.media__likes');
    like.addEventListener('click', (e) => data.elt.toggleLike(e));
    like.addEventListener('keydown', (e) => {
      if (e.target.className === 'media__likes' && e.code === 'Enter')data.elt.toggleLike(e);
    });
    const img = cardElt.querySelector('.media');
    img.tabIndex = '0';
    img.addEventListener('click', () => {
      const slider = sliderFactory(media, sortMedia);
      slider.addEventSlider();
    });
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter' && e.target === img) {
        const slider = sliderFactory(media, sortMedia);
        slider.addEventSlider();
      }
    });
    return card;
  }

  const elt = (media.image) ? new Photo(media, name) : new Video(media, name);
  return { elt, createCard };
}
