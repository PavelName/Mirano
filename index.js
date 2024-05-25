import '@/scss/index.scss';

const header = document.querySelector('.header');
const body = document.body;
let headerHeight = header.offsetHeight;

window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;
})


window.addEventListener('scroll', () => {
 const scrollDistance = window.scrollY;
 if (scrollDistance > 200) {
  header.classList.add('header_fixed');
  body.style.paddingTop = `${ headerHeight}px`;
 } else {
  header.classList.remove('header_fixed');
  body.style.paddingTop = '0';
 }
});

const choices = document.querySelectorAll('.choices');
choices.forEach((choice) => {
  console.log(choice);
  const btn = choice;
});
// choices__btn
// choices__box
