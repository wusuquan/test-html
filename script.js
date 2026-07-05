const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

document.querySelectorAll('.news-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.news-tabs .selected').classList.remove('selected');
    button.classList.add('selected');
    document.querySelectorAll('.news-list article').forEach((item) => {
      item.classList.toggle('hidden', button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter);
    });
  });
});
