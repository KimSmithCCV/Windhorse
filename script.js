const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('span').textContent = isOpen ? '−' : '+';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('span').textContent = '+';
  });
});

const videoTrigger = document.querySelector('.story-video-frame');
const videoModal = document.getElementById('video-modal');
const videoModalFrame = videoModal.querySelector('.video-modal-frame');
const videoModalClose = videoModal.querySelector('.video-modal-close');

function openVideoModal() {
  const videoId = videoTrigger.dataset.videoId;
  videoModalFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1" title="Windhorse Vineyard video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  videoModal.hidden = false;
}

function closeVideoModal() {
  videoModal.hidden = true;
  videoModalFrame.innerHTML = '';
}

videoTrigger.addEventListener('click', openVideoModal);
videoModalClose.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (event) => {
  if (event.target === videoModal) closeVideoModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !videoModal.hidden) closeVideoModal();
});
