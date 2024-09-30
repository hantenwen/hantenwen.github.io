document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const navbarOffsetTop = navbar.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= navbarOffsetTop) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });

  const links = document.querySelectorAll('.nav-link');
  const navbarHeight = navbar.offsetHeight;

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = targetId === 'top' ? document.querySelector('header') : document.getElementById(targetId);

      // 計算滾動的目標位置，將目標區域移動到導航欄下方
      const targetPosition = targetElement.offsetTop - navbarHeight;

      // 滾動到目標位置
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});
