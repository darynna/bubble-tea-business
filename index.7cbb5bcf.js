!function(){var e,t,o,n,c,d,r,i;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelector(".js-close-menu-first"),c=document.querySelector(".js-close-menu-second"),d=document.querySelector(".js-close-menu-third"),r=document.querySelector(".js-close-menu-fourth"),i=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",i),o.addEventListener("click",i),n.addEventListener("click",i),c.addEventListener("click",i),d.addEventListener("click",i),r.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var s=document.querySelector(".go-top");window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?s.classList.add("go-top--show"):s.classList.remove("go-top--show")})),s.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(e,0))}))}();
//# sourceMappingURL=index.7cbb5bcf.js.map
