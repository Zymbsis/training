import{S as n}from"./assets/vendor-b9b1d24b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const c=new n(".opp-img-swiper",{loop:!0,speed:1800,slidesPerView:1,centeredSlides:!0,initialSlide:0,spaceBetween:20,breakpoints:{768:{slidesPerView:2,centeredSlides:!1,spaceBetween:32},1440:{slidesPerView:3,centeredSlides:!0,spaceBetween:0}},on:{init:function(){setTimeout(()=>{document.querySelectorAll(".opp-img-wrapper").forEach(o=>o.classList.add("img-swiper-transition"))},1800)}}}),l=new n(".opp-text-swiper",{navigation:{prevEl:".opp-button-prev",nextEl:".opp-button-next"},loop:!0,speed:1800,slidesPerView:1,centeredSlides:!0,initialSlide:0,spaceBetween:20,effect:"creative",creativeEffect:{prev:{translate:[0,"260px",0],opacity:0},next:{translate:["384px",0,0],opacity:0}},breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:3,spaceBetween:32}}});c.controller.control=l;l.controller.control=c;
//# sourceMappingURL=commonHelpers.js.map
