const initTabsPrice = () => {
  const tabs = document.querySelectorAll('.price__tab');
  const elementsPrice = document.querySelectorAll('.price-card__cost');
  const time = {
    'month': [5000, 1700, 2700],
    'halfYear': [30000, 10200, 16200],
    'year': [60000, 20400, 32400]
  };

  for (const tab of tabs) {
    tab.addEventListener ('click', () =>{
      activeTab(tab);
      changeContent(tab);
      event.preventDefault();
    });
  }

  function activeTab(tab) {
    if (!tab.classList.contains('is-active')) {
      for (tab of tabs) {
        tab.classList.remove('is-active');
      }
      tab.classList.add('is-active');
    }
  }

  function changeContent(tab) {
    for (let i = 0; i < elementsPrice.length; i++) {
      const currentTimeArray = `${tab.dataset.time}`;
      elementsPrice[i].textContent = time[currentTimeArray][i];
      elementsPrice[i].dataset.price = time[currentTimeArray][i];
    }
  }
};


export{initTabsPrice};
