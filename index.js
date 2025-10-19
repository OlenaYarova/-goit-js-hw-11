import{a as d,S as m,i as n}from"./assets/vendor-D8hBcPQM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="51059240-278fa1e6f61101335ccd91301";function h(s){return d.get("https://pixabay.com/api/",{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error(t),t})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let g=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:f,downloads:p})=>`
        <li class = "gallery-item">
        <a href="${i}" class="gallery-link">
            <img src="${o}"
             alt="${e}"
              width="360"
              height = "200"
              loading="lazy" />
               <div class="info">
          <p class ="gallery-text"> Likes: ${r}</p>
          <p class="gallery-text">Views: ${a}</p>
          <p class="gallery-text">Comments: ${f}</p>
          <p class="gallery-text">Downloads:${p}</p>
        </div>
           </a>
        </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),g.refresh()}function v(){l.innerHTML=""}function b(){c.classList.add("active")}function q(){c.classList.remove("active")}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');u.addEventListener("submit",x);function x(s){s.preventDefault();const t=S.value.trim();if(!t){n.error({title:"Error",message:"Please enter a search term!",close:!1,position:"topRight"});return}v(),b(),h(t).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,close:!1,position:"topRight"});return}L(o.hits)}).catch(o=>{console.error(o)}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
