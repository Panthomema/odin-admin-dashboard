document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggler = document.querySelector('.dropdown-toggler')
  const dropdownElements = document.querySelectorAll('.dropdown-hidden');
  const dropdownParent = document.querySelector('.dropdown-parent-hidden');

  dropdownToggler.addEventListener('click', () => {
    dropdownParent.classList.toggle('dropdown-parent-hidden');

    dropdownElements.forEach(elem => {
      elem.classList.toggle('dropdown-hidden');
    });
  });
});
