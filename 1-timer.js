import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as p}from"./assets/vendor-BbSUbo7J.js";const r=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),b=document.querySelector("span[data-days]"),D=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");r.classList.add("date");e.classList.add("button-start");e.disabled=!0;let u;const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=l.defaultDate?(e.disabled=!0,p.error({message:"Please choose a date in the future",messageColor:"white",position:"topRight",backgroundColor:"rgb(255, 76, 76)",close:!1,progressBar:!1,theme:"dark",timeout:3e3})):(e.disabled=!1,u=t[0])}};y(r,l);e.addEventListener("click",C);function C(){e.disabled=!0,r.disabled=!0;const t=setInterval(()=>{let i=u-new Date;const{days:d,hours:o,minutes:n,seconds:a}=q(i);b.textContent=s(d),D.textContent=s(o),S.textContent=s(n),g.textContent=s(a),[d,o,n,a].every(h=>h===0)&&(clearInterval(t),r.disabled=!1)},1e3)}const s=t=>t.toString().padStart(2,"0");function q(t){const o=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),a=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:n,minutes:a,seconds:c}}
//# sourceMappingURL=1-timer.js.map