// モーダルの開閉

export const modalAction = function() {

  const main = document.getElementById('main');
  const activator = document.getElementsByClassName('on');
  const btnOpen = document.getElementsByClassName('open');
  const btnClose = document.getElementsByClassName('close');
  const content = document.getElementsByClassName('container');
  const innerContent = document.getElementsByClassName('content');
  var scrollY;

  function modalOpen(bgColor, innerColor) {
    scrollY = window.pageYOffset;
    content[0].style.backgroundColor = 'rgba' + bgColor;
    innerContent[0].style.backgroundColor = innerColor;
    main.style.position = 'fixed';
    activator[0].classList.add('active');
    main.style.height = '100%';
    main.style.left = '0';
  }

  function modalClose() {
    activator[0].classList.remove('active');
    main.style.position = '';
    main.style.height = '';
    main.style.left = '';
    window.scrollTo(0, scrollY);
  }
  btnOpen[0].addEventListener('click', function() {
    modalOpen("(0,0,0,.6)", "#fff")
  });
  btnClose[0].addEventListener('click', modalClose);
  window.onload = function() {
    modalAction();
  }
};
