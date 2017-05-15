const allTabs = document.querySelectorAll('.tab-title');

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

showFirstTab();

allTabs.forEach(tab => tab.addEventListener('click', () => {
  checkTabs();
  tab.classList.toggle('selected');
  tab.nextElementSibling.classList.toggle('expanded');
}))
