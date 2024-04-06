const initTabs = () => {
  const tabButtons = document.querySelectorAll('.faq__tab');
  const tabContent = document.querySelectorAll('.faq__body-list');

  for (const button of tabButtons) {
    button.addEventListener ('click', function(){
      activeButton(button);
      const contentActive = document.querySelector(`#${this.dataset.button}`);
      for (const content of tabContent) {
        content.classList.remove('is-open');
      }
      contentActive.classList.toggle('is-open');
    });
  }

  function activeButton(button) {
    if (!button.classList.contains('is-active')) {
      for (const but of tabButtons) {
        but.classList.remove('is-active');
      }
      button.classList.add('is-active');
    }
  }
};

export {initTabs};
