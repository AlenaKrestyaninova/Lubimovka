function palyVideo() {
  const videos = document.querySelectorAll('.video__content');
  videos.forEach(video => setVideo(video));
}

function setVideo(video) {
  const coverLink = video.querySelector('.video__img');
  const videoLink = video.querySelector('.video__link');
  const cover = video.querySelector('.video__cover');
  const id = parseVideoURL(videoLink);
  coverLink.setAttribute('src', `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`)
  
  video.addEventListener('click', () => {
    cover.classList.add('hidden');
    videoLink.remove();
    const iframe = createIframe(id);
    video.appendChild(iframe);
  })
  videoLink.removeAttribute('href');
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
  iframe.classList.add('video__iframe');

  return iframe;
}

function parseVideoURL(media) {
  let regexp = /https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i;
  let url = media.href;
  let match = url.match(regexp);

  return match[1];
}

palyVideo()
