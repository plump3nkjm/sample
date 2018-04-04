//------- 使えそうな関数まとめ------- //



// モーダル表示・非表示
const main = document.getElementById('main'); //一番親階層
const activator = document.getElementsByClassName('on');
const btnOpen = document.getElementsByClassName('open');
const btnClose = document.getElementsByClassName('close');
const scrollY;

function modalOpen() {
  scrollY = window.pageYOffset;
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
btnOpen[0].addEventListener('click', modalOpen);
btnClose[0].addEventListener('click', modalClose);

//スムーススクロール
const scrollEvent = (pos, duration = 300) => {
  const begin = new Date();
  const offset = window.pageYOffset;
  const timer = setInterval(() => {
    let current = new Date() - begin;

    if (current > duration) {
      clearInterval(timer);
      current = duration;
    }

    window.scrollTo(0, pos - (pos - offset) * (1 - current / duration));
  }, 10)
};

//スクロールトップ & ボタンの表示・非表示
const scrollTopButton = () => {
  const target = document.getElementById('pagetop');
  const targetSm = document.getElementById('pagetop-sm');
  const imageLg = target.getElementsByClassName('visible-lg')[0];
  const imageSm = target.getElementsByClassName('visible-sm')[0];
  const footer = document.getElementById('pagetop');
  const footerRect = footer.getBoundingClientRect();

  target.addEventListener(clickEventName, event => {
    event.preventDefault();
    scrollEvent(0, 300);
  });

  targetSm.addEventListener(clickEventName, event => {
    event.preventDefault();
    scrollEvent(0, 300);
  });

  window.onscroll = event => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const footerTop = footer.offsetTop - window.innerHeight;

    if (scrollTop > 0) {
      imageLg.style.visibility = 'visible';
      imageLg.style.opacity = 1;
      imageSm.style.visibility = 'visible';
      imageSm.style.opacity = 1;

      if (scrollTop > footerTop) {
        imageLg.style.transform = 'translateY(' + (footerTop - scrollTop) + 'px)';
        imageSm.style.visibility = 'hidden';
        imageSm.style.opacity = 0;
      } else {
        imageLg.style.transform = 'translateY(0)';
        imageSm.style.visibility = 'visible';
        imageSm.style.opacity = 1;
      }

    } else {
      imageLg.style.visibility = 'hidden';
      imageLg.style.opacity = 0;
      imageSm.style.visibility = 'hidden';
      imageSm.style.opacity = 0;
    }

  };
};

//Tweenアニメーション(別途TweenMax.js読み込み)

// TwennMax.アニメ種類("要素",アニメーション時間,{
//      cssプロパティ
// });
//
// -例
// TweenMax.to(main , 2 , {
//     opacity: 1;
//      backgroundImage: url("img/main.png");
// });
