// Language toggle
const toggle = document.getElementById('langToggle');
if(toggle){
  toggle.addEventListener('click', ()=>{
    document.querySelectorAll('.cn').forEach(e=>e.classList.toggle('hidden'));
    document.querySelectorAll('.en').forEach(e=>e.classList.toggle('hidden'));
  });
}

// WeChat popup
const popup = document.getElementById('wechatPopup');
function openWechat(){ 
  if(popup){ popup.style.display='flex'; document.body.style.overflow='hidden'; } 
}
function closeWechat(){ 
  if(popup){ popup.style.display='none'; document.body.style.overflow=''; } 
}

// Slider
function prevSlide(btn){
  const slider = btn.parentElement;
  const images = JSON.parse(slider.dataset.images);
  let img = slider.querySelector('img');
  let index = images.indexOf(img.src.split('/').pop());
  index = (index-1+images.length)%images.length;
  img.src = images[index];
}
function nextSlide(btn){
  const slider = btn.parentElement;
  const images = JSON.parse(slider.dataset.images);
  let img = slider.querySelector('img');
  let index = images.indexOf(img.src.split('/').pop());
  index = (index+1)%images.length;
  img.src = images[index];
}
