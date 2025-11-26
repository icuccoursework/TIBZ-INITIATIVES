
// Mobile nav
const hamb = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if(hamb){
  hamb.addEventListener('click', ()=> nav.classList.toggle('show'));
}

// Slider initializer for any .slider on page
function initSliders(){
  document.querySelectorAll('.slider').forEach(slider=>{
    const container = slider.querySelector('.slides');
    const slides = container.children;
    let idx = 0;
    const total = slides.length;
    // create dots
    const dots = document.createElement('div');
    dots.className = 'dots';
    dots.style.position='absolute';
    dots.style.left='50%';
    dots.style.bottom='12px';
    dots.style.transform='translateX(-50%)';
    dots.style.display='flex';
    dots.style.gap='8px';
    slider.appendChild(dots);
    for(let i=0;i<total;i++){
      const d = document.createElement('button');
      d.style.width='10px';
      d.style.height='10px';
      d.style.borderRadius='50%';
      d.style.border='none';
      d.style.background='rgba(255,255,255,0.6)';
      d.addEventListener('click', ()=>{ idx=i; update(); });
      dots.appendChild(d);
    }
    function update(){
      container.style.transform = 'translateX(' + (-idx*100) + '%)';
      Array.from(dots.children).forEach((b,bi)=> b.style.opacity = bi===idx? '1':'0.6');
    }
    update();
    setInterval(()=>{ idx = (idx+1)%total; update(); }, 3500);
  });
}
document.addEventListener('DOMContentLoaded', initSliders);

// Contact form -> open WhatsApp with filled message
function submitToWhatsApp(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.querySelector('[name=name]').value || 'No name');
  const phone = encodeURIComponent(form.querySelector('[name=phone]').value || '');
  const email = encodeURIComponent(form.querySelector('[name=email]').value || '');
  const service = encodeURIComponent(form.querySelector('[name=service]').value || '');
  const message = encodeURIComponent(form.querySelector('[name=message]').value || '');
  const text = `Contact%20from%20Tibs%20Website%0AName:%20${name}%0APhone:%20${phone}%0AEmail:%20${email}%0AService:%20${service}%0AMessage:%20${message}`;
  const wa = 'https://wa.me/256772373473?text=' + text;
  window.open(wa,'_blank');
  return false;
}
