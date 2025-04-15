(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const g=document.querySelector(".diahes-list"),f=cardsData.map(e=>(e.name.toUpperCase,`<li class="diahes-item">
                <div class="diahes-item-container">
                  <svg class="diahes-fav-icon" width="" height="">
                    <use href=""></use>
                  </svg>
                  <p class="diahes-item-title">${e.name}</p>
                  <p class="diahes-item-des">
                    ${e.description}
                  </p>
                  <div class="diahes-rating-container">
                    <p>${e.rating}</p>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                  </div>
                  <button class="see-recipe-button" type="button">See recipe</button>
                </div>
              </li>`)).join("");g.innerHTML=f;const p=document.querySelector(".loader-wrapper");setTimeout(()=>{p.classList.add("is-hidden")},2e3);(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open")}})();let n=0;function u(e){const t=document.querySelector(".hero-shefs-container"),r=document.querySelectorAll(".spot-nav");n=e,t.style.transform=`translateX(-${e*100}%)`,r.forEach(c=>c.classList.remove("active")),r[e].classList.add("active")}let d=0,l=0;document.querySelector(".hero-shefs-parent-container").addEventListener("touchstart",e=>{d=e.touches[0].clientX});document.querySelector(".hero-shefs-parent-container").addEventListener("touchend",e=>{l=e.changedTouches[0].clientX,d-l>50?n<2&&u(n+1):l-d>50&&n>0&&u(n-1)});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".switch-container-universal, .switch-container-mob").forEach(t=>{t.addEventListener("click",function(){document.body.classList.toggle("dark"),t.classList.toggle("dark")})})});const v=document.querySelectorAll(".switch-container-universal, .switch-container-mob"),h=document.querySelectorAll(".switch-small-circle"),m=document.querySelectorAll(".switch-overlay");v.forEach((e,t)=>{e.addEventListener("click",()=>y(t))});let i=0;function y(e){i+=24,i>=26&&(i=0,m[e].style.backgroundColor="#CECDCD"),h[e].style.top="3%",h[e].style.left=`${i}px`,m[e].style.backgroundColor="#9bb537"}
//# sourceMappingURL=index.js.map
