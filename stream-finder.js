javascript:!function(){let e=["mp4","mkv","webm","mov","avi","flv","m3u8","mpd","ts","m2ts","wmv","ogv"],t=new Set(["mp4","webm","m3u8","mpd","ogv","mov"]),a=`
        .stream-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 900px;
            max-height: 90vh;
            background: #1a1a1a;
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            z-index: 999999;
            font-family: 'Arial', sans-serif;
            overflow: hidden;
        }
        
        .modal-header {
            padding: 16px;
            background: #2a2a2a;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #3a3a3a;
        }
        
        .modal-title {
            font-size: 1.4em;
            font-weight: bold;
        }
        
        .close-btn {
            background: #ff4444;
            border: none;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .close-btn:hover {
            background: #ff6666;
        }
        
        .modal-content {
            padding: 16px;
            overflow-y: auto;
            max-height: 70vh;
        }
        
        .category-group {
            margin-bottom: 20px;
            background: #2a2a2a;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .category-header {
            padding: 12px 16px;
            background: #3a3a3a;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .link-item {
            padding: 12px 16px;
            border-bottom: 1px solid #3a3a3a;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }
        
        .link-url {
            flex: 1;
            min-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        
        .link-actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .preview-btn {
            background: #4CAF50;
            border: none;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            white-space: nowrap;
        }
        
        .preview-btn:hover {
            background: #66BB6A;
        }
        
        .download-btn {
            background: #2196F3;
            border: none;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            white-space: nowrap;
        }
        
        .download-btn:hover {
            background: #42A5F5;
        }
        
        .external-btn {
            background: #9C27B0;
            border: none;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            white-space: nowrap;
        }
        
        .external-btn:hover {
            background: #AB47BC;
        }
        
        .video-preview {
            margin-top: 12px;
            width: 100%;
            max-width: 600px;
            background: #000;
            border-radius: 6px;
            overflow: hidden;
            flex-basis: 100%;
        }
        
        .no-links-found {
            padding: 20px;
            text-align: center;
            color: #fff;
            background: #2a2a2a;
            margin: 16px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        
        .no-links-icon {
            font-size: 2em;
        }
        
        .file-info {
            font-size: 0.85em;
            color: #aaa;
            margin-top: 4px;
        }
    `;async function n(e){try{let t=await fetch(e,{method:"HEAD",mode:"no-cors"});return t.ok||0===t.status}catch(a){return!1}}async function i(e){try{var t;let a=await fetch(e,{method:"HEAD",mode:"no-cors"}),n=a.headers.get("content-length");return n?(t=n,("number"!=typeof t&&(t=parseInt(t)),isNaN(t))?"Size unknown":t<1024?t+" B":t<1048576?(t/1024).toFixed(1)+" KB":t<1073741824?(t/1048576).toFixed(1)+" MB":(t/1073741824).toFixed(1)+" GB"):"Size unknown"}catch(i){return"Size unknown"}}async function o(){let o=[...document.querySelectorAll("video, source, iframe, embed, object, a")],r={},d=RegExp(`\\.(${e.join("|")})(?:\\?|$)`,"i");e.forEach(e=>{r[e]=new Set});let l=[],s=[];for(let c of o){let p=c.src||c.href||c.getAttribute("data-src");if(!p||p.startsWith("blob:")||p.startsWith("data:"))continue;let m=p.match(d);if(!m)continue;let u=m[1].toLowerCase();l.push((async()=>{await n(p)&&(r[u].add(p),s.push({url:p,ext:u,size:await i(p)}))})())}await Promise.all(l);let v=document.createElement("div");v.className="stream-modal",v.innerHTML=`
            <div class="modal-header">
                <div class="modal-title">🎥 Streaming Links Found</div>
                <button class="close-btn">Close</button>
            </div>
            <div class="modal-content"></div>
        `;let f=v.querySelector(".modal-content"),h=!1;for(let[x,g]of Object.entries(r)){if(0===g.size)continue;h=!0;let b=document.createElement("div");b.className="category-group",b.innerHTML=`
                <div class="category-header">
                    <span>📁 ${x.toUpperCase()} Files (${g.size})</span>
                </div>
            `;let w=document.createElement("div");s.filter(e=>e.ext===x).forEach(e=>{let a=t.has(x),n=document.createElement("div");n.className="link-item",n.innerHTML=`
                    <div class="link-url" title="${e.url}">
                        ${e.url}
                        <div class="file-info">${e.size}</div>
                    </div>
                    <div class="link-actions">
                        ${a?`
                            <button class="preview-btn" data-link="${e.url}" data-ext="${x}">
                                Preview
                            </button>
                        `:""}
                        <a href="${e.url}" download class="download-btn" title="Download file">
                            ${a?"Download":"Download File"}
                        </a>
                        <a href="${e.url}" target="_blank" class="external-btn" title="Open in new tab">
                            ↗
                        </a>
                    </div>
                `,w.appendChild(n)}),b.appendChild(w),f.appendChild(b)}h||(f.innerHTML=`
                <div class="no-links-found">
                    <div class="no-links-icon">🔍</div>
                    <div>No valid streaming links found</div>
                    <div style="font-size: 0.9em; color: #aaa;">Checked for: ${e.join(", ")}</div>
                </div>
            `),v.querySelector(".close-btn").addEventListener("click",()=>v.remove()),v.querySelectorAll(".preview-btn").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.dataset.link,a=e.target.dataset.ext,n=document.createElement("div");n.innerHTML=function e(t,a){let n=`video-${btoa(t).replace(/[^a-z0-9]/gi,"")}`,i=`
            <div class="video-preview">
                <video id="${n}" controls style="width:100%; height:auto"></video>
            </div>
        `;return"m3u8"===a?i+=`
                <script>
                    (function() {
                        const video = document.getElementById('${n}');
                        if (Hls && Hls.isSupported()) {
                            const hls = new Hls();
                            hls.loadSource('${t}');
                            hls.attachMedia(video);
                            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                                video.play();
                            });
                        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                            video.src = '${t}';
                            video.addEventListener('loadedmetadata', function() {
                                video.play();
                            });
                        }
                    })();
                </script>
            `:"mpd"===a?i+=`
                <script>
                    (function() {
                        const video = document.getElementById('${n}');
                        if (dashjs) {
                            const player = dashjs.MediaPlayer().create();
                            player.initialize(video, '${t}', true);
                        }
                    })();
                </script>
            `:i+=`
                <script>
                    document.getElementById('${n}').src = '${t}';
                </script>
            `,i}(t,a);let i=e.target.closest(".link-item").querySelector(".video-preview");i?(i.remove(),e.target.textContent="Preview"):(e.target.closest(".link-item").appendChild(n),e.target.textContent="Hide Preview")})});let $=document.createElement("style");if($.textContent=a,document.head.appendChild($),document.body.appendChild(v),!window.Hls&&[...document.querySelectorAll(".stream-modal")].some(e=>e.innerHTML.includes("m3u8"))){let y=document.createElement("script");y.src="https://cdn.jsdelivr.net/npm/hls.js@latest",document.head.appendChild(y)}if(!window.dashjs&&[...document.querySelectorAll(".stream-modal")].some(e=>e.innerHTML.includes("mpd"))){let k=document.createElement("script");k.src="https://cdn.dashjs.org/latest/dash.all.min.js",document.head.appendChild(k)}}o()}();
