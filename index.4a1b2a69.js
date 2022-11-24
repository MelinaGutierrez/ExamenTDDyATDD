const e=document.querySelector("#publicacion"),n=document.querySelector("#tweet-form"),t=document.querySelector("#resultado-div");n.addEventListener("submit",(n=>{n.preventDefault();const r=e.value;if(t.innerHTML=t.innerHTML+"<p> - "+r+"</p>",""!=r)t.innerHTML=t.innerHTML+"<p> - "+r+"</p>";else{alert("No se puede ingresar un post sin texto")}}));
//# sourceMappingURL=index.4a1b2a69.js.map
