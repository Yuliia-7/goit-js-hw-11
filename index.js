import{a as d,S as f,i as a}from"./assets/vendor-CqoLp5UU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",m="58321598-67404884f8deeffb5d54b2073",p=s=>d.get(u,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),y=s=>{const o=s.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
      width='360' 
      height='200'
    />
  </a>
  <div class='info'>
  <p class='info-item'><b>Likes</b>${t.likes}</p>
  <p class='info-item'><b>Views</b>${t.views}</p>
  <p class='info-item'><b>Comments</b>${t.comments}</p>
  <p class='info-item'><b>Downloads</b>${t.downloads}</p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()},g=()=>{l.innerHTML=""},b=()=>{c.classList.remove("hidden")},L=()=>{c.classList.add("hidden")},v=document.querySelector(".form");v.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){a.error({title:"Error",message:"Please fill out the search field!",position:"topRight"});return}g(),b(),p(o).then(t=>{if(t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(t=>{a.error({title:"Error",message:t.message,position:"topRight"})}).finally(()=>L())});
//# sourceMappingURL=index.js.map
