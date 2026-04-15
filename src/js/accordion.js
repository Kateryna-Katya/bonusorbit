document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L6 0V6H0L0 8H6L6 14H8L8 8H14V6L8 6V0Z" fill="white" />
</svg>`;

        const minusIcon = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3137 1.41418L9.8995 -3.51667e-05L5.65686 4.24261L1.41422 -3.55039e-05L6.53606e-06 1.41418L4.24265 5.65682L6.19888e-06 9.89946L1.41422 11.3137L5.65686 7.07103L9.8995 11.3137L11.3137 9.89946L7.07107 5.65682L11.3137 1.41418Z" fill="white" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});