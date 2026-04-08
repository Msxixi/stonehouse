(function () {
  const slider = document.querySelector('[data-slider]');
  if (!slider) return;

  const track = slider.querySelector('.sh-slides');
  const slides = slider.querySelectorAll('.sh-slide');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');

  let index = 0;
  const total = slides.length;
  if (!total) return;

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function goNext() {
    index = (index + 1) % total;
    render();
  }

  function goPrev() {
    index = (index - 1 + total) % total;
    render();
  }

  next.addEventListener('click', goNext);
  prev.addEventListener('click', goPrev);

  setInterval(goNext, 4000);
})();
