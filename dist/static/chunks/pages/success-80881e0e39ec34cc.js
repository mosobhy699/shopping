(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{9869:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return n(5740)}])},5740:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(5893),i=n(7294),r=n(1664),o=n.n(r),s=n(3750);n(1163);var l=n(8894),c={};!function e(t,n,a,i){var r,o,s,l,c,u,h,f,d,m=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function g(){}function b(e){var a=n.exports.Promise,i=void 0!==a?a:t.Promise;return"function"==typeof i?new i(e):(e(g,g),null)}var p=(s=Math.floor(1e3/60),l={},c=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(r=function(e){var t=Math.random();return l[t]=requestAnimationFrame(function n(a){c===a||c+s-1<a?(c=a,delete l[t],e()):l[t]=requestAnimationFrame(n)}),t},o=function(e){l[e]&&cancelAnimationFrame(l[e])}):(r=function(e){return setTimeout(e,s)},o=function(e){return clearTimeout(e)}),{frame:r,cancel:o}),v=(f={},function(){if(u)return u;if(!a&&m){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{u=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("\uD83C\uDF8A Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,a,i){if(h)return t(n,null),h;var r=Math.random().toString(36).slice(2);return h=b(function(a){function o(t){t.data.callback===r&&(delete f[r],e.removeEventListener("message",o),h=null,i(),a())}e.addEventListener("message",o),t(n,r),f[r]=o.bind(null,{data:{callback:r}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),f)f[t](),delete f[t]}}(u)}return u}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(e,t,n){var a;return a=e&&null!=e[t]?e[t]:y[t],n?n(a):a}function M(e){return e<0?0:Math.floor(e)}function x(e){return parseInt(e,16)}function C(e){return e.map(T)}function T(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:x(t.substring(0,2)),g:x(t.substring(2,4)),b:x(t.substring(4,6))}}function k(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function N(e,n){var r,o=!e,s=!!w(n||{},"resize"),l=w(n,"disableForReducedMotion",Boolean),c=m&&w(n||{},"useWorker")?v():null,u=o?k:E,h=!!e&&!!c&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function d(n){var d,m=l||w(n,"disableForReducedMotion",Boolean),g=w(n,"zIndex",Number);if(m&&f)return b(function(e){e()});o&&r?e=r.canvas:o&&!e&&((d=document.createElement("canvas")).style.position="fixed",d.style.top="0px",d.style.left="0px",d.style.pointerEvents="none",d.style.zIndex=g,e=d,document.body.appendChild(e)),s&&!h&&u(e);var v={width:e.width,height:e.height};function y(){if(c){var t={getBoundingClientRect:function(){if(!o)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}v.width=v.height=null}function x(){r=null,s&&t.removeEventListener("resize",y),o&&e&&(document.body.removeChild(e),e=null,h=!1)}return(c&&!h&&c.init(e),h=!0,c&&(e.__confetti_initialized=!0),s&&t.addEventListener("resize",y,!1),c)?c.fire(n,v,x):function(t,n,o){for(var s,l,c,h,f,d,m,g=w(t,"particleCount",M),v=w(t,"angle",Number),y=w(t,"spread",Number),x=w(t,"startVelocity",Number),T=w(t,"decay",Number),k=w(t,"gravity",Number),E=w(t,"drift",Number),N=w(t,"colors",C),I=w(t,"ticks",Number),S=w(t,"shapes"),_=w(t,"scalar"),F=((s=w(t,"origin",Object)).x=w(s,"x",Number),s.y=w(s,"y",Number),s),P=g,j=[],O=e.width*F.x,R=e.height*F.y;P--;)j.push(function(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar}}({x:O,y:R,angle:v,spread:y,startVelocity:x,color:N[P%N.length],shape:S[Math.floor(Math.random()*(S.length-0))+0],ticks:I,decay:T,gravity:k,drift:E,scalar:_}));return r?r.addFettis(j):(l=e,f=j.slice(),d=l.getContext("2d"),m=b(function(e){function t(){c=h=null,d.clearRect(0,0,n.width,n.height),o(),e()}c=p.frame(function e(){a&&!(n.width===i.width&&n.height===i.height)&&(n.width=l.width=i.width,n.height=l.height=i.height),n.width||n.height||(u(l),n.width=l.width,n.height=l.height),d.clearRect(0,0,n.width,n.height),(f=f.filter(function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n,a,i,r,o,s=t.tick++/t.totalTicks,l=t.x+t.random*t.tiltCos,c=t.y+t.random*t.tiltSin,u=t.wobbleX+t.random*t.tiltCos,h=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-s)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(u-l)*t.ovalScalar,Math.abs(h-c)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(n=t.x,a=t.y,i=Math.abs(u-l)*t.ovalScalar,r=Math.abs(h-c)*t.ovalScalar,o=Math.PI/10*t.wobble,e.save(),e.translate(n,a),e.rotate(o),e.scale(i,r),e.arc(0,0,1,0,2*Math.PI,void 0),e.restore());else if("star"===t.shape)for(var f=Math.PI/2*3,d=4*t.scalar,m=8*t.scalar,g=t.x,b=t.y,p=5,v=Math.PI/5;p--;)g=t.x+Math.cos(f)*m,b=t.y+Math.sin(f)*m,e.lineTo(g,b),f+=v,g=t.x+Math.cos(f)*d,b=t.y+Math.sin(f)*d,e.lineTo(g,b),f+=v;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(c)),e.lineTo(Math.floor(u),Math.floor(h)),e.lineTo(Math.floor(l),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}(d,e)})).length?c=p.frame(e):t()}),h=t}),(r={addFettis:function(e){return f=f.concat(e),m},canvas:l,promise:m,reset:function(){c&&p.cancel(c),h&&h()}}).promise)}(n,v,x)}return d.reset=function(){c&&c.reset(),r&&r.reset()},d}function I(){return d||(d=N(null,{useWorker:!0,resize:!0})),d}n.exports=function(){return I().apply(this,arguments)},n.exports.reset=function(){I().reset()},n.exports.create=N}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),c,!1);var u=c.exports;c.exports.create;let h=()=>{var e=Date.now()+5e3,t=["#bb0000","#ffffff"];!function n(){u({particleCount:2,angle:60,spread:55,origin:{x:0},colors:t}),u({particleCount:2,angle:120,spread:55,origin:{x:1},colors:t}),Date.now()<e&&requestAnimationFrame(n)}()};var f=()=>{let{setcartItems:e,settotalPrice:t,settotalQuantity:n}=(0,l.F)(),[r,c]=(0,i.useState)(null);return(0,i.useEffect)(()=>{localStorage.clear(),e([]),t(0),n(0),h()},[]),(0,a.jsx)("div",{className:"success-wrapper",children:(0,a.jsxs)("div",{className:"success",children:[(0,a.jsx)("p",{className:"icon",children:(0,a.jsx)(s.Vno,{})}),(0,a.jsx)("h2",{children:"Thank you for your order!"}),(0,a.jsx)("p",{className:"email-msg",children:"Check your email inbox for the receipt."}),(0,a.jsxs)("p",{className:"description",children:["If you have any questions, please email",(0,a.jsx)("a",{className:"email",href:"mailto:mohamedsobhy7899@gmail.com",children:"mohamedsobhy7899@gmail.com"})]}),(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("button",{type:"button",width:"300px",className:"btn",children:"Continue Shopping"})})]})})}},1163:function(e,t,n){n(6885)}},function(e){e.O(0,[13,774,888,179],function(){return e(e.s=9869)}),_N_E=e.O()}]);