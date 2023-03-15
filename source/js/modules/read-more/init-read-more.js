const button = document.querySelector('[data-read-more="button"]');
const content = document.querySelector('[data-read-more="content"]');

const showMore = () => {
  button.addEventListener('click', () => {
    if (!content.classList.contains('is-shown')) {
      content.classList.add('is-shown');
      button.textContent = 'Свернуть';
    } else {
      content.classList.remove('is-shown');
      button.textContent = 'Подробнее';
    }
  });
};

export {showMore};
