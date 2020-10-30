const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

const toggleActive = () => accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    accordionItemHeader.lastElementChild.classList.toggle('active');
  })
});

export { toggleActive };
