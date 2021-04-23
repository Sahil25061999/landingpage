let prod_desc = document.querySelector('.product_info');
let prod_container = document.querySelector('.product_container');

window.addEventListener('scroll', () => {
  //   prod_desc.style.opacity = scrollY / 795;
  //   prod_desc.style.transform = `translateY(${30 - (scrollY | 0) / 30}%)`;
  console.log(scrollY | 0);
  if ((scrollY | 0) >= 500) {
    console.log('enter');
    prod_desc.classList.add('addOpacity');
  } else {
    prod_desc.classList.remove('addOpacity');
  }
});
