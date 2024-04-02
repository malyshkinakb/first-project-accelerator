
const initAcordion = () => {

  const links = document.querySelectorAll('.faq-question__button');

  for (const link of links) {
    link.addEventListener ('click', function(){
      const spoiler = this.parentElement.nextElementSibling;
      if (spoiler.matches('.faq-question__body')) {
        this.classList.toggle('active-button');
        spoiler.classList.toggle('active-block');
      }
      event.preventDefault();
    });
  }
};

export {initAcordion};
