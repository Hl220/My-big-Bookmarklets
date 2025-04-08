javascript:!function(){let e=document.createElement("div");e.style="position:fixed;top:20px;right:20px;z-index:999999;background:#222;color:#fff;padding:15px;border-radius:8px;box-shadow:0 2px 15px rgba(0,0,0,0.5);font-family:Arial,sans-serif;width:320px;max-height:80vh;overflow:auto;";let t=document.createElement("button");t.textContent="✕",t.style="position:absolute;top:5px;right:5px;background:transparent;color:#fff;border:none;font-size:16px;cursor:pointer;padding:5px;";let o=document.createElement("div");o.style="display:flex;margin-bottom:10px;border-bottom:1px solid #444;";let n={css:r("CSS"),html:r("HTML"),js:r("JavaScript")};function r(e){let t=document.createElement("button");return t.textContent=e,t.style="background:none;border:none;color:#bbb;padding:5px 10px;margin-right:5px;cursor:pointer;font-size:13px;flex:1;text-align:center;",t.onclick=function(){Object.keys(i).forEach(e=>{i[e].style.display="none",n[e].style.color="#bbb",n[e].style.borderBottom="none"}),i["CSS"===e?"css":"HTML"===e?"html":"js"].style.display="block",t.style.color="#fff",t.style.borderBottom="2px solid #3498db"},t}o.appendChild(n.css),o.appendChild(n.html),o.appendChild(n.js);let i={css:document.createElement("div"),html:document.createElement("div"),js:document.createElement("div")};Object.values(i).forEach(e=>{e.style="margin-top:10px;display:none;"}),i.css.style.display="block",n.css.style.color="#fff",n.css.style.borderBottom="2px solid #3498db",e.appendChild(t),e.appendChild(o),e.appendChild(i.css),e.appendChild(i.html),e.appendChild(i.js),document.body.appendChild(e);let l=document.createElement("style");l.textContent=`
        .element-inspector-highlight {
            outline: 2px solid #f00 !important;
            box-shadow: 0 0 0 2px rgba(255,0,0,0.5) !important;
            background: rgba(255,0,0,0.1) !important;
            transition: all 0.2s ease;
        }
    `,document.head.appendChild(l);let s=null;function p(e){s&&s.classList.remove("element-inspector-highlight"),e&&e!==document.body&&(e.classList.add("element-inspector-highlight"),s=e)}let a=function(t){if(e.contains(t.target))return;t.preventDefault(),t.stopPropagation();let o=t.target;p(o);let n=window.getComputedStyle(o),r='<div style="max-height:300px;overflow:auto;"><strong>Computed Styles:</strong><pre style="background:#333;padding:10px;border-radius:5px;font-size:12px;max-height:250px;overflow:auto;">';for(let l=0;l<n.length;l++){let s=n[l];r+=`${s}: ${n.getPropertyValue(s)};
`}r+="</pre></div>",r+='<div style="margin-top:15px;"><strong>Applied CSS Rules:</strong><pre style="background:#333;padding:10px;border-radius:5px;font-size:12px;max-height:250px;overflow:auto;">';let a=document.styleSheets;for(let c=0;c<a.length;c++)try{let g=a[c].cssRules||a[c].rules;if(g)for(let x=0;x<g.length;x++)o.matches(g[x].selectorText)&&(r+=`${g[x].selectorText} {
  ${g[x].style.cssText.replace(/;/g,";\n  ")}
}

`)}catch(m){r+=`/* Could not read stylesheet: ${a[c].href} */
`}r+="</pre></div>",i.css.innerHTML=r,i.html.innerHTML=`
            <div style="max-height:300px;overflow:auto;">
                <strong>Outer HTML:</strong>
                <button style="background:#2ecc71;color:white;border:none;padding:3px 6px;border-radius:4px;cursor:pointer;margin-left:10px;font-size:12px;" 
                    onclick="navigator.clipboard.writeText(this.nextElementSibling.textContent).then(()=>{
                        const msg = document.createElement('div');
                        msg.textContent = 'Copied HTML!';
                        msg.style = 'color:#2ecc71;font-size:12px;text-align:center;margin-top:5px;';
                        this.parentNode.appendChild(msg);
                        setTimeout(()=>msg.remove(),2000);
                    })">Copy</button>
                <pre style="background:#333;padding:10px;border-radius:5px;font-size:12px;max-height:250px;overflow:auto;">${d(o.outerHTML)}</pre>
                
                <strong style="margin-top:15px;display:block;">Inner HTML:</strong>
                <button style="background:#2ecc71;color:white;border:none;padding:3px 6px;border-radius:4px;cursor:pointer;margin-left:10px;font-size:12px;" 
                    onclick="navigator.clipboard.writeText(this.nextElementSibling.textContent).then(()=>{
                        const msg = document.createElement('div');
                        msg.textContent = 'Copied HTML!';
                        msg.style = 'color:#2ecc71;font-size:12px;text-align:center;margin-top:5px;';
                        this.parentNode.appendChild(msg);
                        setTimeout(()=>msg.remove(),2000);
                    })">Copy</button>
                <pre style="background:#333;padding:10px;border-radius:5px;font-size:12px;max-height:250px;overflow:auto;">${d(o.innerHTML)}</pre>
            </div>
        `;let h='<div style="max-height:300px;overflow:auto;">';h+='<strong>Event Listeners:</strong><pre style="background:#333;padding:10px;border-radius:5px;font-size:12px;max-height:250px;overflow:auto;">';let u=getEventListeners(o);if(u)for(let f in u)u[f].forEach(e=>{h+=`${f}: ${e.listener.toString().split("\n")[0]}
`});else h+="Note: Event listeners are only available in Chrome DevTools\n",h+="You can check them manually in the Elements panel\n";for(let b in h+="</pre>",h+='<div style="margin-top:15px;"><strong>Properties/Methods:</strong><pre style="background:#333;padding:10px;border-radius:5px;font-size:12px;max-height:250px;overflow:auto;">',o)try{"function"==typeof o[b]?h+=`${b}()
`:h+=`${b}: ${typeof o[b]}
`}catch($){h+=`${b}: [inaccessible]
`}h+="</pre></div>",i.js.innerHTML=h};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}document.addEventListener("mousemove",function(t){e.contains(t.target)||p(t.target)}),document.addEventListener("click",a,!0),t.onclick=function(){s&&s.classList.remove("element-inspector-highlight"),l.remove(),e.remove(),document.removeEventListener("click",a,!0),document.removeEventListener("mousemove",p)}}();
