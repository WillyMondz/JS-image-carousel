function carrosselImgs() {
  let time = 4000,
  currentImageIndex = 0,
  images = document.querySelectorAll('#carrossel img')
  max = images.length
  function nextImg() {
    images[currentImageIndex].classList.remove('img-active')
    currentImageIndex++
    if(currentImageIndex>= max)
      currentImageIndex = 0
    
  images[currentImageIndex].classList.add('img-active')
  }
  function start(){
  setInterval(() =>{
  nextImg()
  }, time)
  }
  window.addEventListener('load', start)
  }
  carrosselImgs()