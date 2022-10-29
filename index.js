//функционал облжки видео
function playVideo() {
  const videos = document.querySelectorAll('.video__content');
  videos.forEach(video => setVideo(video));
}

function setVideo(video) {
  const coverLink = video.querySelector('.video__img');
  const videoLink = video.querySelector('.video__link');
  const cover = video.querySelector('.video__cover');
  const id = parseVideoURL(videoLink);
  coverLink.setAttribute('src', `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);

  video.addEventListener('click', () => {
    videoLink.removeAttribute('href');
    cover.classList.add('hidden')
    const iframe = createIframe(id);
    video.appendChild(iframe);
  })

  /* stopVideo(video, cover, id); */
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
//функция остановки видео при пролистывании слайдера
/* function stopVideo(video, cover, id) {
  const slids = document.querySelectorAll('.swiper-wrapper');
  slids.forEach(slid => {
    slid.addEventListener('transitionend', () => {
      const iframe = video.querySelector('.video__iframe');
      if(!video.classList.contains('swiper-slide-active') && video.classList.contains('swiper-slide')) {
        if (iframe !== null) {
          iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=0`);
          cover.classList.remove('hidden')
          iframe.remove()
        }  
      }
    })
  })
} */

//функционал слайдера
let sliderTwoVideo
function initTwoVideoSlider () {
  const videoSection = document.querySelector('.two-video')
  const slider = videoSection.querySelector('.swiper-container');
  if(window.innerWidth < 899) {
    sliderTwoVideo = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      mousewheel: true,
      breakpoints: {
        768: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        }
      }
    })  
} else {
  if (slider.classList.contains('swiper-container-initialized')) {
    sliderTwoVideo.destroy();
  } 
}
}

let sliderThreeVideo
function initThreeVideoSlider () {
  const videoSection = document.querySelector('.three-video')
  const slider = videoSection.querySelector('.swiper-container');
  if(window.innerWidth < 1378) {
    sliderThreeVideo = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      mousewheel: true,
      breakpoints: {
        798: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        }
      },
    })  
} else {
  if (slider.classList.contains('swiper-container-initialized')) {
    sliderThreeVideo.destroy();
  } 
}
}
initThreeVideoSlider();
initTwoVideoSlider();
playVideo();
addEventListener('resize', initThreeVideoSlider);
addEventListener('resize', initTwoVideoSlider);