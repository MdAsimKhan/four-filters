function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=n.parcelRequire0063;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequire0063=o),o("27Lyk").register(JSON.parse('{"7Qt3z":"one.9069976a.js","1YdiR":"worker.7eb94a02.js","e0xw1":"zappar-cv.315eebda.wasm","eYcMP":"face_mesh_face_model.9f3b859a.zbin","e6ghN":"face_mesh_full_head_simplified_model.caf9de0a.zbin","ih7P4":"face_tracking_model.624095d1.zbin","9gvkQ":"videorecorder.fd59f5ae.wasm","b1Asn":"recorder-worker.e7190aa3.js","kX1mg":"racer_helmet.483f6b34.glb","hp2O3":"index.3e9ba42a.css","6GlBA":"index.c7c7a8b8.js","aeMeN":"one.4026c946.js","8KnAb":"one.38d1601d.js"}'));var r=o("ilwiq"),d=o("2dyhB"),i=o("7lx9d"),c=o("fuYhq"),s=o("dlmvV");if(d.browserIncompatible())throw d.browserIncompatibleUI(),new Error("Unsupported browser");const l=new d.LoadingManager,m=new r.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!0}),u=new r.Scene;document.body.appendChild(m.domElement),m.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",(()=>{m.setSize(window.innerWidth,window.innerHeight)}));const f=new d.Camera;d.permissionRequestUI().then((e=>{e?f.start(!0):d.permissionDeniedUI()})),d.glContextSet(m.getContext()),u.background=f.backgroundTexture;const w=new d.FaceTrackerLoader(l).load(),_=new d.FaceAnchorGroup(f,w);u.add(_),_.visible=!1;const b=(new d.HeadMaskMeshLoader).load();_.add(b);var p;p=new URL(o("27Lyk").resolve("kX1mg"),import.meta.url).toString();const g=new URL(p).href;new(0,i.GLTFLoader)(l).load(g,(e=>{e.scene.position.set(0,-.8,0),e.scene.scale.set(2.3,2.3,2.3),e.scene.rotation.set(0,Math.PI,0),console.log(e.scene),_.add(e.scene)}),void 0,(()=>{console.log("An error ocurred loading the GLTF model")}));const h=new r.DirectionalLight("white",.8);h.position.set(0,5,0),h.lookAt(0,0,0),u.add(h);const v=new r.AmbientLight("white",.4);u.add(v),_.faceTracker.onVisible.bind((()=>{_.visible=!0})),_.faceTracker.onNotVisible.bind((()=>{_.visible=!1}));(document.getElementById("snapshot")||document.createElement("div")).addEventListener("click",(()=>{const n=(document.querySelector("canvas")||document.createElement("canvas")).toDataURL("image/jpeg",.8);e(c)({data:n})}));const E=document.getElementById("videocapture")||document.createElement("div"),H=document.getElementById("stopcapture")||document.createElement("div"),R=document.querySelector("canvas")||document.createElement("canvas");s.createCanvasVideoRecorder(R,{}).then((n=>{E.addEventListener("click",(()=>{n.start()})),H.addEventListener("click",(()=>{n.stop()})),n.onComplete.bind((async n=>{e(c)({data:await n.asDataURL()})}))})),function e(){f.updateFrame(m),b.updateFromFaceAnchorGroup(_),m.render(u,f),requestAnimationFrame(e)}();
//# sourceMappingURL=one.9069976a.js.map
