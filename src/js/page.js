


//landscape切り替えでクラス追加

  const setOrientation = () => {
    const event = 'onorientationchange' in window ? 'orientationchange' : 'resize';

    const orientationHandler = event => {
      setTimeout(() => {
        const w = parseInt(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
        const h = parseInt(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
        const target = document.getElementsByTagName('body')[0];

        if (w > h) {
          target.classList.add('landscape');
          target.classList.remove('portrait');
        } else {
          target.classList.remove('landscape');
          target.classList.add('portrait');
        }
      }, 100);
    };

    window.addEventListener(event, orientationHandler, false);
    orientationHandler();
  };

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

window.onload = function(){
  setOrientation();

}
