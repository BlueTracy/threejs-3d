"use strict";(self.webpackChunk_3d_examples=self.webpackChunk_3d_examples||[]).push([[762],{708:function(t,e,n){var i=n(6892),a={animateCamera:function(t,e,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2e3,o=arguments.length>5?arguments[5]:void 0,s=new i.w.Tween({x1:t.position.x,y1:t.position.y,z1:t.position.z,x2:e.target.x,y2:e.target.y,z2:e.target.z});s.to({x1:n.x,y1:n.y,z1:n.z,x2:a.x,y2:a.y,z2:a.z},r),s.onUpdate((function(n){t.position.x=n.x1,t.position.y=n.y1,t.position.z=n.z1,e.target.x=n.x2,e.target.y=n.y2,e.target.z=n.z2,e.update()})),s.onComplete((function(){e.enabled=!0,o()})),s.easing(i.w.Easing.Cubic.InOut),s.start()}};e.Z=a},6762:function(t,e,n){n.r(e),n.d(e,{default:function(){return I}});var i=n(5861),a=n(5671),r=n(3144),o=n(7326),s=n(136),u=n(9388),h=n(7757),c=n.n(h),l=n(7313),d=n(3562),f=n(4686),p=n(2518),_=n(6892),w=n(4112),v=n(3817),m=n(5018),g=n(2210),y=n(8086),b=n(708),x=n(6417),I=function(t){(0,s.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,a.Z)(this,n);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return(t=e.call.apply(e,[this].concat(s))).state={loadingProcess:0},t.initThree=function(){var e,n,a,r,s,u,h=null,l=[],x=(0,o.Z)(t);function I(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}!function(){e=document.getElementById("container"),(s=new d.CP7({antialias:!0})).setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),s.shadowMap.enabled=!0,s.shadowMap.needsUpdate=!0,e.appendChild(s.domElement),(r=new d.xsS).background=(new d.dpR).load(y),(a=new d.cPb(60,window.innerWidth/window.innerHeight,.1,1e3)).position.set(0,0,0),a.lookAt(new d.Pa4(0,0,0));var t=new d.DvJ(.001,.001,.001),o=new d.YBo({color:16777215}),_=new d.Kj0(t,o);_.position.set(0,0,0),(u=new d.Ox3(16777215,1)).intensity=1,u.position.set(18,20,60),u.castShadow=!0,u.target=_,u.shadow.mapSize.width=6144,u.shadow.mapSize.height=6144,u.shadow.camera.top=80,u.shadow.camera.bottom=-80,u.shadow.camera.left=-80,u.shadow.camera.right=80,r.add(u);var k=new d.Mig(16777215);k.intensity=.8,r.add(k);var M=new d.vmT(16777215,16776192);M.intensity=.3,r.add(M),(n=new p.z(a,s.domElement)).target.set(0,0,0),n.enableDamping=!0,n.enableZoom=!1,n.enablePan=!1,n.rotateSpeed=.2,window.addEventListener("resize",I,!1);var S=new d.VLJ(200,200,16777215,16777215);S.position.set(0,-30,-50),S.material.transparent=!0,S.material.opacity=.1,r.add(S);var C=new d._12(200,200),T=new d.Tn7({opacity:.5}),j=new d.Kj0(C,T);j.rotation.x=-.5*Math.PI,j.position.set(0,-30,-50),j.receiveShadow=!0,r.add(j);var P=new d.EJi({map:(new d.dpR).load(v),normalMap:(new d.dpR).load(m)}),E=new d.EJi({map:(new d.dpR).load(g)}),O=[E,E,E,E,P,P];(h=new d.Kj0(new d.DvJ(297,456,12),O)).material.map((function(t){return t.metalness=.5,t.roughness=.4,t.refractionRatio=1,t})),h.scale.set(.085,.085,.085),h.position.set(-22,2,0),h.castShadow=!0,l.push(h),r.add(h);var z=new d.lLk;z.onProgress=function(){var t=(0,i.Z)(c().mark((function t(e,i,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:100===Math.floor(i/r*100)?(x.loadingProcessTimeout&&clearTimeout(x.loadingProcessTimeout),x.loadingProcessTimeout=setTimeout((function(){x.setState({loadingProcess:Math.floor(i/r*100)}),b.Z.animateCamera(a,n,{x:0,y:4,z:60},{x:0,y:0,z:0},3600,(function(){}))}),800)):x.setState({loadingProcess:Math.floor(i/r*100)});case 1:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}(),new f.y(z).load(w,(function(t){t.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.material.metalness=1,e.material.roughness=.2,l.push(t))})),t.position.set(16,-4,0),t.rotation.x=Math.PI/2,t.scale.set(.08,.08,.08),r.add(t)}))}(),function t(){requestAnimationFrame(t),s.render(r,a),n&&n.update(),_.w&&_.w.update(),h&&(h.rotation.y+=.04)}()},t}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.initThree()}},{key:"render",value:function(){return(0,x.jsxs)("div",{className:"segment_fault_page",children:[(0,x.jsx)("div",{id:"container"}),100===this.state.loadingProcess?"":(0,x.jsx)("div",{className:"segment_fault_loading",children:(0,x.jsxs)("div",{className:"box",children:[this.state.loadingProcess," %"]})}),(0,x.jsx)("div",{className:"firework_1"}),(0,x.jsx)("div",{className:"firework_2"}),(0,x.jsx)("div",{className:"firework_3"}),(0,x.jsx)("div",{className:"firework_4"}),(0,x.jsx)("div",{className:"firework_5"}),(0,x.jsx)("div",{className:"firework_6"}),(0,x.jsx)("div",{className:"firework_7"}),(0,x.jsx)("div",{className:"firework_8"}),(0,x.jsx)("div",{className:"firework_9"}),(0,x.jsx)("div",{className:"firework_10"})]})}}]),n}(l.Component)},8086:function(t,e,n){t.exports=n.p+"static/media/bg.700c341b505be28fc58e.webp"},4112:function(t,e,n){t.exports=n.p+"static/media/text.a6b8eb3b3fe823772af7.fbx"},2210:function(t,e,n){t.exports=n.p+"static/media/metal.e5cc6953a43824df83e7.png"},5018:function(t,e,n){t.exports=n.p+"static/media/normalMap.7706710b833084c7b855.png"},3817:function(t,e,n){t.exports=n.p+"static/media/texture.23a648b555ff9cbc2523.png"},6892:function(t,e,n){n.d(e,{w:function(){return r}});var i=function(){this._tweens={},this._tweensAddedDuringUpdate={}};i.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,e){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(t=void 0!==t?t:r.now();0<n.length;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var a=this._tweens[n[i]];a&&!1===a.update(t)&&(a._isPlaying=!1,e||delete this._tweens[n[i]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var a,r=new i;r.Group=i,r._nextId=0,r.nextId=function(){return r._nextId++},"undefined"==typeof self&&"undefined"!=typeof process&&process.hrtime?r.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?r.now=self.performance.now.bind(self.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()},r.Tween=function(t,e){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=r.Easing.Linear.None,this._interpolationFunction=r.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||r,this._id=r.nextId()},r.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},duration:function(t){return this._duration=t,this},start:function(t){for(var e in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?r.now()+parseFloat(t):t:r.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}void 0!==this._object[e]&&(this._valuesStart[e]=this._object[e],this._valuesStart[e]instanceof Array==0&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var e,n,i;if(t<this._startTime)return!0;for(e in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(t-this._startTime)/this._duration,n=0===this._duration||1<n?1:n,i=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[e]){var a=this._valuesStart[e]||0,r=this._valuesEnd[e];r instanceof Array?this._object[e]=this._interpolationFunction(r,i):("string"==typeof r&&(r="+"===r.charAt(0)||"-"===r.charAt(0)?a+parseFloat(r):parseFloat(r)),"number"==typeof r&&(this._object[e]=a+(r-a)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1!==n)return!0;if(0<this._repeat){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var o=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=o}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,u=this._chainedTweens.length;s<u;s++)this._chainedTweens[s].start(this._startTime+this._duration);return!1}},r.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){return t*t*(2.70158*t-1.70158)},Out:function(t){return--t*t*(2.70158*t+1.70158)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((1+e)*t-e)*.5:.5*((t-=2)*t*((1+e)*t+e)+2)}},Bounce:{In:function(t){return 1-r.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*r.Easing.Bounce.In(2*t):.5*r.Easing.Bounce.Out(2*t-1)+.5}}},r.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),o=r.Interpolation.Utils.Linear;return e<0?o(t[0],t[1],i):1<e?o(t[n],t[n-1],n-i):o(t[a],t[n<a+1?n:a+1],i-a)},Bezier:function(t,e){for(var n=0,i=t.length-1,a=Math.pow,o=r.Interpolation.Utils.Bernstein,s=0;s<=i;s++)n+=a(1-e,i-s)*a(e,s)*t[s]*o(i,s);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),o=r.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(a=Math.floor(i=n*(1+e))),o(t[(a-1+n)%n],t[a],t[(a+1)%n],t[(a+2)%n],i-a)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-i)-t[0]):1<e?t[n]-(o(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):o(t[a?a-1:0],t[a],t[n<a+1?n:a+1],t[n<a+2?n:a+2],i-a)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=r.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;1<i;i--)n*=i;return t[e]=n}}(),CatmullRom:function(t,e,n,i,a){var r=.5*(n-t),o=.5*(i-e),s=a*a;return(2*e-2*n+r+o)*(a*s)+(-3*e+3*n-2*r-o)*s+r*a+e}}},a=void 0,"function"==typeof define&&define.amd?define([],(function(){return r})):"undefined"!=typeof module&&"object"==typeof exports?module.exports=r:void 0!==a&&(a.TWEEN=r)}}]);