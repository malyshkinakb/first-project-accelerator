const buttonVideo = document.querySelector('.about__video-play');
const blockVideo = document.querySelector('.about__video');

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.classList.add('about__video-iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  blockVideo.appendChild(iframe);
};

const initVideo = () => {
  buttonVideo.addEventListener ('click', () => {
    createIframe();
  });
};

export {initVideo};
