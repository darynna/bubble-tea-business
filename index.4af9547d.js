!function(){var e,t,o,n;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var c=document.querySelector(".go-top");window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?c.classList.add("go-top--show"):c.classList.remove("go-top--show")})),c.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(e,0))}))}();
//# sourceMappingURL=index.4af9547d.js.map
