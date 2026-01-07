// Hamburger toggle
document.getElementById('hamburger').onclick = ()=>{
  document.getElementById('mobileMenu').classList.toggle('hidden');
};

// Language toggle
function toggleLang(){
  document.querySelectorAll('.cn').forEach(e=>e.classList.toggle('hidden'));
  document.querySelectorAll('.en').forEach(e=>e.classList.toggle('hidden'));
}

document.getElementById('langToggleDesktop')?.addEventListener('click', toggleLang);
document.getElementById('langToggleMobile')?.addEventListener('click', toggleLang);

// Floating WeChat popup
function openWechat(){ 
  document.getElementById('wechatPopup').style.display='flex'; 
  document.body.style.overflow='hidden';
}
function closeWechat(){ 
  document.getElementById('wechatPopup').style.display='none'; 
  document.body.style.overflow='';
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
