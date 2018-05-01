//スクロールトップ & ボタンの表示・非表示

export const scrollTopButton = () => {
  const target = document.getElementById('pagetop');
  const imageLg = target.getElementsByClassName('visible-lg')[0];
  const footer = document.getElementById('pagetop');
  const footerRect = footer.getBoundingClientRect();

  target.addEventListener('click', event => {
    event.preventDefault();
    scrollEvent(0, 300);
  });

  window.onscroll = event => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const footerTop = footer.offsetTop - window.innerHeight;

    if (scrollTop > 0) {
      imageLg.style.visibility = 'visible';
      imageLg.style.opacity = 1;

      if (scrollTop > footerTop) {
        imageLg.style.transform = 'translateY(' + (footerTop - scrollTop) + 'px)';
      }
      else {
        imageLg.style.transform = 'translateY(0)';
      }
    } else {
      imageLg.style.visibility = 'hidden';
      imageLg.style.opacity = 0;
    }

  };
};
