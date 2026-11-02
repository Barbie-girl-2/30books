
(function(){
const track=document.querySelector('.shelf .covers');if(!track)return;
const items=Array.from(track.children);if(items.length<2)return;
items.forEach(el=>{const clone=el.cloneNode(true);clone.setAttribute('aria-hidden','true');track.appendChild(clone)});
let previous=0,hold=0;
['pointerdown','touchstart','wheel'].forEach(evt=>track.addEventListener(evt,()=>{hold=performance.now()+2800},{passive:true}));
function tick(t){const delta=previous?Math.min(50,t-previous):0;previous=t;
const length=track.children[items.length].offsetLeft-track.children[0].offsetLeft;
if(length>0){if(track.scrollLeft>=length)track.scrollLeft-=length;
if(t>hold&&!document.hidden&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)track.scrollLeft+=delta*.045;}
requestAnimationFrame(tick)}requestAnimationFrame(tick);
})();
