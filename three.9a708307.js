function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=n.parcelRequire0063;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire0063=a),a("27Lyk").register(JSON.parse('{"lWepB":"three.9a708307.js","1YdiR":"worker.7eb94a02.js","e0xw1":"zappar-cv.315eebda.wasm","eYcMP":"face_mesh_face_model.9f3b859a.zbin","e6ghN":"face_mesh_full_head_simplified_model.caf9de0a.zbin","ih7P4":"face_tracking_model.624095d1.zbin","9gvkQ":"videorecorder.fd59f5ae.wasm","b1Asn":"recorder-worker.e7190aa3.js","j0yp2":"cheek_paint.7fb61bca.png","hp2O3":"index.3e9ba42a.css","6GlBA":"index.c7c7a8b8.js","8KnAb":"one.38d1601d.js"}'));var i,r=a("2dyhB"),d=a("ilwiq"),c=a("fuYhq"),s=a("dlmvV");i=new URL(a("27Lyk").resolve("j0yp2"),import.meta.url).toString();const l=new URL(i).href;if(r.browserIncompatible())throw r.browserIncompatibleUI(),new Error("Unsupported browser");const p=new r.LoadingManager,f=new d.WebGLRenderer({antialias:!0}),w=new d.Scene;document.body.appendChild(f.domElement),f.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",(()=>{f.setSize(window.innerWidth,window.innerHeight)}));const m=new r.Camera;r.permissionRequestUI().then((e=>{e?m.start(!0):r.permissionDeniedUI()})),r.glContextSet(f.getContext()),w.background=m.backgroundTexture;const u=new r.FaceTrackerLoader(p).load(),_=new r.FaceAnchorGroup(m,u);w.add(_);const b=new r.FaceMeshLoader(p).load(),h=new r.FaceBufferGeometry(b),E=new d.TextureLoader(p).load(l);E.flipY=!1;const g=new d.Mesh(h,new d.MeshStandardMaterial({map:E,transparent:!0}));_.add(g);const H=new d.DirectionalLight("white",.8);H.position.set(0,5,0),H.lookAt(0,0,0),w.add(H);const v=new d.AmbientLight("white",.4);w.add(v),_.faceTracker.onVisible.bind((()=>{_.visible=!0})),_.faceTracker.onNotVisible.bind((()=>{_.visible=!1}));(document.getElementById("snapshot")||document.createElement("div")).addEventListener("click",(()=>{const n=new d.PlaneGeometry(2,2),t=new d.MeshBasicMaterial({color:16777215}),o=new d.Mesh(n,t);w.add(o);const a=m.position.clone();m.position.set(o.position.x,o.position.y,o.position.z+5),m.lookAt(o.position),f.render(w,m);const i=f.domElement.toDataURL("image/png");e(c)({data:i}),m.position.copy(a),m.lookAt(0,0,0)}));const A=document.getElementById("videocapture")||document.createElement("div"),R=document.getElementById("stopcapture")||document.createElement("div"),F=document.querySelector("canvas")||document.createElement("canvas");s.createCanvasVideoRecorder(F,{}).then((n=>{A.addEventListener("click",(()=>{n.start()})),R.addEventListener("click",(()=>{n.stop()})),n.onComplete.bind((async n=>{e(c)({data:await n.asDataURL()})}))})),function e(){m.updateFrame(f),h.updateFromFaceAnchorGroup(_),f.render(w,m),requestAnimationFrame(e)}();
//# sourceMappingURL=three.9a708307.js.map
