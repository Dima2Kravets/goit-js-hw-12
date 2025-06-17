import{a as d,S as f,i}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(n){const t=new URLSearchParams({key:"50818565-86d44cf91814c3f45e3f7ee49",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return d(`https://pixabay.com/api/?${t}`).then(o=>o.data)}const c=document.querySelector("#loader"),m=new f(".gallery a");function y(n){return n.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:s,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${t}" alt="${a}" />
        </a>
        <div class="card">
          <p><span>👍 Likes</span>${e}</p>
          <p><span>👁 Views</span>${r}</p>
          <p><span>💬 Comments</span>${s}</p>
          <p><span>⬇ Downloads</span>${u}</p>
        </div>
      </li>
    `).join("")}function g(){const n=document.querySelector(".gallery");n.innerHTML=""}function h(){c.classList.remove("hidden")}function l(){c.classList.add("hidden")}const L=document.querySelector(".gallery"),S=document.querySelector(".form");S.addEventListener("submit",b);function b(n){n.preventDefault();const t=n.target.elements[0].value.trim();t&&(h(),p(t).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g();return}L.innerHTML=y(o.hits),m.refresh()}).catch(o=>{console.error("Error:",o),l(),i.error({message:"Error loading images",position:"topRight"})}).finally(()=>{l()}))}
//# sourceMappingURL=index.js.map
