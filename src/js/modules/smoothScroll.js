//スムーススクロール

const scroll = (pos, duration) => {
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
