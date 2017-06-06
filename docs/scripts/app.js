const allTabs = document.querySelectorAll('.tab-title');
const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const showFirstTab = () => {
  let tab = allTabs[0];
  tab.classList.toggle('selected');
  tab.nextElementSibling.classList.toggle('expanded');
}

const checkTabs = () => {
  allTabs.forEach(tab => {
    if (tab.classList.contains('selected')) {
      tab.classList.remove('selected')
      tab.nextElementSibling.classList.remove('expanded')
    }
  })
}

const openMenu = () => {
  const width = document.documentElement.clientWidth;
  if (width < 600) {
    mobileMenu.classList.toggle('open');
  }
}

menuBtn.addEventListener('click', openMenu);

showFirstTab();

allTabs.forEach(tab => tab.addEventListener('click', () => {
  checkTabs();
  tab.classList.toggle('selected');
  tab.nextElementSibling.classList.toggle('expanded');
}));
