document.addEventListener("feedback-submit",function(){for(var i,e=document.querySelectorAll('[name="ratingA"]'),t=0;t<e.length;t++)e[t].checked&&(i=5-t);function n(t){let e;for(const o of 3<i?document.querySelectorAll('input[name="rating1"]'):document.querySelectorAll('input[name="rating2"]'))if(o.checked){e=o.nextElementSibling.innerHTML;break}var n=[location.protocol,"//",location.host,location.pathname].join(""),r={title:document.title,star:i,radioResponse:e,freeText:document.querySelector("#formGroupExampleInputWithHelp").value,page:n};!async function(e){return(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":t},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(r)})).json()}("./api/v1/create/valutazione").then(e=>{document.getElementById("rating-feedback").innerHTML="Grazie, il tuo parere ci aiuterà a migliorare il servizio!"}).catch(e=>{document.getElementById("rating-feedback").innerHTML="Ops, si è verificato un errore."})}{var r=function(e){n(e)};const o=fetch("session/token").then(e=>e.text());(async()=>{var e=await o;r(e)})()}},!1);