import './style.css';

(() => {
  const content = document.querySelector('#content');
  const more = document.querySelector('.more');
  const moreItems = document.querySelector('.more-items');

  function closeMoreItems() {
    if (moreItems.classList.contains('visible')) {
      moreItems.classList.toggle('visible');
    }
  }

  function showMoreItems(e) {
    e.stopPropagation();
    moreItems.classList.toggle('visible');
  }

  content.addEventListener('click', closeMoreItems);
  more.addEventListener('click', (e) => showMoreItems(e));
})();
