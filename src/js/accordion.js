const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

const toggleActive = () => accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    const currentlyActiveArrow = document.querySelector('.arrow-down.active')
    if (currentlyActiveArrow && currentlyActiveArrow !== accordionItemHeader) {
      currentlyActiveArrow.classList.toggle('active');
      currentlyActiveArrow.parentElement.nextElementSibling.style.maxHeight = 0;
    } else {
      accordionItemHeader.lastElementChild.classList.toggle('active');
      const accordionBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.lastElementChild.classList.contains('active')) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
      } else {
        accordionBody.style.maxHeight = 0;
      }
    }
  })
});

export { toggleActive };
