const chevronDown = document.querySelectorAll('.fa-chevron-down');
const rows = document.querySelectorAll('.accordion__row');

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

const init = () => {
  chevronDown.forEach((chev) => {
    chev.addEventListener('click', toggleAccordionRow);
  });
};

init();
