"use strict";(self.webpackChunk_3d_examples=self.webpackChunk_3d_examples||[]).push([[82],{1935:function(e,t,r){r.d(t,{xC:function(){return c}});var i=r(5671),s=r(3144),n=r(3562),a=r(3500),o=r(136),h=r(9388),l=r(6531),u=function(e){(0,o.Z)(r,e);var t=(0,h.Z)(r);function r(e,s){var a;return(0,i.Z)(this,r),(a=t.call(this)).textureID=void 0!==s?s:"tDiffuse",e instanceof n.jyz?(a.uniforms=e.uniforms,a.material=e):e&&(a.uniforms=n.rDY.clone(e.uniforms),a.material=new n.jyz({defines:Object.assign({},e.defines),uniforms:a.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),a.fsQuad=new l.T(a.material),a}return(0,s.Z)(r,[{key:"render",value:function(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}]),r}(l.w),f=function(e){(0,o.Z)(r,e);var t=(0,h.Z)(r);function r(e,s){var n;return(0,i.Z)(this,r),(n=t.call(this)).scene=e,n.camera=s,n.clear=!0,n.needsSwap=!1,n.inverse=!1,n}return(0,s.Z)(r,[{key:"render",value:function(e,t,r){var i,s,n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,i,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}]),r}(l.w),d=function(e){(0,o.Z)(r,e);var t=(0,h.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.call(this)).needsSwap=!1,e}return(0,s.Z)(r,[{key:"render",value:function(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}]),r}(l.w),c=function(){function e(t,r){if((0,i.Z)(this,e),this.renderer=t,void 0===r){var s={minFilter:n.wem,magFilter:n.wem,format:n.wk1},o=t.getSize(new n.FM8);this._pixelRatio=t.getPixelRatio(),this._width=o.width,this._height=o.height,(r=new n.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio,s)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===a.C&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===u&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new u(a.C),this.clock=new n.SUY}return(0,s.Z)(e,[{key:"swapBuffers",value:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}},{key:"addPass",value:function(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}},{key:"insertPass",value:function(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}},{key:"removePass",value:function(e){var t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}},{key:"isLastEnabledPass",value:function(e){for(var t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}},{key:"render",value:function(e){void 0===e&&(e=this.clock.getDelta());for(var t=this.renderer.getRenderTarget(),r=!1,i=0,s=this.passes.length;i<s;i++){var n=this.passes[i];if(!1!==n.enabled){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),n.needsSwap){if(r){var a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==f&&(n instanceof f?r=!0:n instanceof d&&(r=!1))}}this.renderer.setRenderTarget(t)}},{key:"reset",value:function(e){if(void 0===e){var t=this.renderer.getSize(new n.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}},{key:"setSize",value:function(e,t){this._width=e,this._height=t;var r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(var s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)}},{key:"setPixelRatio",value:function(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}]),e}(),v=(new n.iKG(-1,1,1,-1,0,1),new n.u9r);v.setAttribute("position",new n.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new n.a$l([0,2,0,0,2,0],2))},6531:function(e,t,r){r.d(t,{T:function(){return l},w:function(){return a}});var i=r(5671),s=r(3144),n=r(3562),a=function(){function e(){(0,i.Z)(this,e),this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}return(0,s.Z)(e,[{key:"setSize",value:function(){}},{key:"render",value:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}]),e}(),o=new n.iKG(-1,1,1,-1,0,1),h=new n.u9r;h.setAttribute("position",new n.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new n.a$l([0,2,0,0,2,0],2));var l=function(){function e(t){(0,i.Z)(this,e),this._mesh=new n.Kj0(h,t)}return(0,s.Z)(e,[{key:"dispose",value:function(){this._mesh.geometry.dispose()}},{key:"render",value:function(e){e.render(this._mesh,o)}},{key:"material",get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}]),e}()},6938:function(e,t,r){r.d(t,{C:function(){return h}});var i=r(5671),s=r(3144),n=r(136),a=r(9388),o=r(3562),h=function(e){(0,n.Z)(r,e);var t=(0,a.Z)(r);function r(e,s,n,a,h){var l;return(0,i.Z)(this,r),(l=t.call(this)).scene=e,l.camera=s,l.overrideMaterial=n,l.clearColor=a,l.clearAlpha=void 0!==h?h:0,l.clear=!0,l.clearDepth=!1,l.needsSwap=!1,l._oldClearColor=new o.Ilk,l}return(0,s.Z)(r,[{key:"render",value:function(e,t,r){var i,s,n=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,i),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=n}}]),r}(r(6531).w)},3500:function(e,t,r){r.d(t,{C:function(){return i}});var i={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform float opacity;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 texel = texture2D( tDiffuse, vUv );\n\t\t\tgl_FragColor = opacity * texel;\n\n\t\t}"}},5349:function(e,t,r){r.d(t,{Y:function(){return i}});var i={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new(r(3562).Ilk)(0)},defaultOpacity:{value:0}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform vec3 defaultColor;\n\t\tuniform float defaultOpacity;\n\t\tuniform float luminosityThreshold;\n\t\tuniform float smoothWidth;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 texel = texture2D( tDiffuse, vUv );\n\n\t\t\tvec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n\t\t\tfloat v = dot( texel.xyz, luma );\n\n\t\t\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );\n\n\t\t\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );\n\n\t\t\tgl_FragColor = mix( outputColor, texel, alpha );\n\n\t\t}"}}}]);