document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const accordionTitle = item.querySelector('.accordion-title');

    accordionTitle.addEventListener('click', () => {
      const currentlyOpenItem = document.querySelector('.accordion-item.active');

      if (currentlyOpenItem && currentlyOpenItem !== item) {
        currentlyOpenItem.classList.remove('active');
        const openContent = currentlyOpenItem.querySelector('.accordion-content');
        openContent.style.maxHeight = null;
        openContent.classList.remove('open');
        currentlyOpenItem.querySelector('.accordion-title span').textContent = '+';
      }

      item.classList.toggle('active');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('active');

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
      } else {
        content.style.maxHeight = null;
        content.classList.remove('open');
      }

      accordionTitle.querySelector('span').textContent = isOpen ? '-' : '+';
    });
  });
});

