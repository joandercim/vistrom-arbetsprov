const chevronDown = document.querySelectorAll('.fa-chevron-down');
const rows = document.querySelectorAll('.accordion__row');
const slides = document.querySelectorAll('.slides img');
const slideSelectors = document.querySelectorAll('.slide-nav__circle');
const slide = document.querySelector('.slide');
const slidesContainer = document.querySelector('.slides');
const menuBtn = document.querySelector('.main-nav-mobile__burger');
let navToggled = false;

const toggleAccordionRowNew = (e) => {
  const titleRow = e.target.parentElement;
  const chev = e.target.nextElementSibling.nextElementSibling;
  const title = e.target.nextElementSibling;
  const content = e.target.parentElement.nextElementSibling;

  if (titleRow.classList.contains('active')) {
    titleRow.classList.remove('active');
    chev.style.color = '#aaaaaa';
    title.style.color = '#aaaaaa';
    title.style.fontWeight = '500';
    chev.style.transform = 'rotate(0deg)';
    content.style.maxHeight = '0';
    content.style.marginBottom = '0rem';
    return;
  }
  
  if (!titleRow.classList.contains('active')) {
    chev.style.color = '#2a2a2a';
    title.style.color = '#373735';
    title.style.fontWeight = '500';
    titleRow.classList.add('active');
    chev.style.transform = 'rotate(180deg)';
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.marginBottom = '2rem';
  }
};

const changeSlideNew = (e) => {
  const slideWidth = slide.clientWidth;
  const slideId = e.target.id;

  slideSelectors.forEach((selector) => {
    selector.classList.remove('active-slide');
  });

  slideSelectors[slideId].classList.add('active-slide');

  switch (+slideId) {
    case 0:
      slidesContainer.scrollLeft = 0;
      break;
    case 1:
      slidesContainer.scrollLeft = slideWidth;
      break;
    case 2:
      slidesContainer.scrollLeft += slideWidth * 2;
  }
};

const toggleNav = () => {
  const lines = document.querySelectorAll('.mobile-nav__line');
  const topLine = lines[0];
  const bottomLine = lines[1];
  const sidebar = document.querySelector('.mobile-sidebar');

  if (!navToggled) {
    navToggled = true;
    bottomLine.style.top = '11px';
    topLine.style.top = '11px';
    setTimeout(() => {
      topLine.style.transform = 'rotate(45deg)';
      bottomLine.style.transform = 'rotate(-45deg)';
      sidebar.style.left = '0';
    }, 300);
  } else {
    navToggled = false;
    topLine.style.transform = 'rotate(0deg)';
    bottomLine.style.transform = 'rotate(0deg)';
    bottomLine.style.top = '14px';
    topLine.style.top = '5px';
    sidebar.style.left = '-376px';
  }
};

const init = () => {
  // chevronDown.forEach((chev) => {
  //   chev.addEventListener('click', toggleAccordionRow);
  // });

  document
    .querySelectorAll('.click-catcher').forEach(catcher => {
      catcher.addEventListener('click', (e) => toggleAccordionRowNew(e));
    })

  slideSelectors.forEach((selector) =>
    selector.addEventListener('click', (e) => changeSlideNew(e))
  );

  slideSelectors[0].classList.add('active-slide');
  menuBtn.addEventListener('click', toggleNav);
};

document.addEventListener('DOMContentLoaded', init);
