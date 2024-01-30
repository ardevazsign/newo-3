// array of images

const images = [
  'image/png/ardevaz1.png',
  'image/png/ardevaz2.png',
  'image/png/ardevaz3.png',
  'image/png/ardevaz4.png',
  'image/png/ardevaz5.png'
];

const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
  
  // get image tag
  const imageTag = document.getElementById('image');
  currentImage++;// 1
  if (currentImage >= lastImage) {
    currentImage = 4;
  }
  imageTag.src = images[currentImage];
  document.getElementById('info-slider').innerHTML = (currentImage + 1) + '  - 5';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', () => {

  // get image tag
  const imageTag = document.getElementById('image');
  currentImage--;// 1
  if (currentImage <= firstImage) {
    currentImage = 0;
  }
  imageTag.src = images[currentImage];
  document.getElementById('info-slider').innerHTML = (currentImage + 1) + '  - 5';
  
})
