const chevronDown = document.querySelectorAll('.fa-chevron-down');
const rows = document.querySelectorAll('.accordion__row');
const slides = document.querySelectorAll('.slides img');
const slideSelectors = document.querySelectorAll('.slide-nav__circle');
const slide = document.querySelector('.slide');
const slidesContainer = document.querySelector('.slides');
const menuBtn = document.querySelector('.main-nav-mobile__burger');

let navToggled = false;

const toggleAccordionRow = (e) => {
  const row = e.target.parentElement.parentElement;
  const content = row.querySelector('.accordion__row__content');

  if (row.classList.contains('active')) {
    row.classList.remove('active');
    e.target.style.transform = 'rotate(0deg)';
    content.style.maxHeight = '0';
    return;
  }

  rows.forEach((r) => {
    r.classList.remove('active');
    const rChevron = r.querySelector('.fa-chevron-down');
    const rContent = r.querySelector('.accordion__row__content');
    rChevron.style.transform = 'rotate(0deg)';
    rContent.style.maxHeight = '0';
  });

  if (!row.classList.contains('active')) {
    row.classList.add('active');
    e.target.style.transform = 'rotate(180deg)';
    content.style.maxHeight = content.scrollHeight + 'px';
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
  chevronDown.forEach((chev) => {
    chev.addEventListener('click', toggleAccordionRow);
  });

  slideSelectors.forEach((selector) =>
    selector.addEventListener('click', (e) => changeSlideNew(e))
  );

  slideSelectors[0].classList.add('active-slide');
  menuBtn.addEventListener('click', toggleNav);
};

document.addEventListener('DOMContentLoaded', init);
