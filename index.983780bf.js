(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelector(".js-close-menu-first"),c=document.querySelector(".js-close-menu-second"),d=document.querySelector(".js-close-menu-third"),s=document.querySelector(".js-close-menu-fourth"),i=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",i),o.addEventListener("click",i),n.addEventListener("click",i),c.addEventListener("click",i),d.addEventListener("click",i),s.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const e=document.querySelector(".go-top");window.addEventListener("scroll",(function(){const t=window.pageYOffset,o=document.documentElement.clientHeight;t>o?e.classList.add("go-top--show"):e.classList.remove("go-top--show")})),e.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(e,0))}));
//# sourceMappingURL=index.983780bf.js.map
