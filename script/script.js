const countCatalog = () => {
  const catalogItems = document.querySelectorAll('.catalog-item');

let count = 1;

catalogItems.forEach(countItem => {
   const plusBtn = countItem.querySelector('.plus-btn'),
        minusBtn = countItem.querySelector('.minus-btn'),
        spanCalc = countItem.querySelector('.btns-calc-wrapper span'),
        sum = countItem.querySelector('.wrapper-info span'),
        startCalcValue = parseFloat(sum.textContent),
        btnBuy = countItem.querySelector('.btns-wrapper > button'),
        calcWrapper = countItem.querySelector('.wrapper-calc-form'),
        total = calcWrapper.querySelector('.total span'),
        checkboxes = calcWrapper.querySelectorAll('input[type="checkbox"]'),
        btnClose = countItem.querySelector('.icon-close');
 

  plusBtn.addEventListener('click', () => {
    count++;
    spanCalc.textContent = count;
    sum.textContent  = `${(startCalcValue * count)} ₽`;
  });

  minusBtn.addEventListener('click', () => {
    if (count > 1) {
      count--;
      sum.textContent = `${parseFloat(sum.textContent) - startCalcValue} ₽`;
  }
  
  spanCalc.textContent = count;
  });

  btnBuy.addEventListener('click', () => {
    calcWrapper.style.cssText= `
    display:flex;
    flex-direction: column;
  `;
  
  total.textContent = `${parseFloat(sum.textContent)} ₽`;
 
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      total.textContent = `${parseFloat(total.textContent) + parseFloat(checkbox.value)} ₽`;
    } else {
      total.textContent = `${parseFloat(total.textContent) - parseFloat(checkbox.value)} ₽`;
     } 
   });
  });
  
 });

  btnClose.addEventListener('click', () => {
    calcWrapper.style.display = 'none';

    checkboxes.forEach(checkbox => {
       if (checkbox.checked) {
          checkbox.checked = false;
       }
     });
  });

});

}

countCatalog();

 


