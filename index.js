import{a as f,S as u,i as a}from"./assets/vendor-CqoLp5UU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="58321598-67404884f8deeffb5d54b2073",h=s=>f.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data),c=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250}),y=s=>{const o=s.map(t=>`<li class="gallery-item">
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
</li>`).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()},b=()=>{c.innerHTML=""},L=()=>{d.classList.remove("hidden")},l=()=>{d.classList.add("hidden")},v=document.querySelector(".form");v.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){a.error({title:"Error",message:"Please fill out the search field!",position:"topRight"});return}b(),L(),h(o).then(t=>{if(l(),t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(t=>{l(),a.error({title:"Error",message:t.message,position:"topRight"})})});
//# sourceMappingURL=index.js.map
