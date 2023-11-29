document.querySelectorAll('main a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (link.classList.contains('active')) {
      window.open(link.href, '_blank');
    } else {
      link.classList.add('active');
    }
  });
});

document.addEventListener('click', (e) => {
  document.querySelectorAll('main a').forEach(link => {
    if (!link.contains(e.target) && link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
});