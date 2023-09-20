(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.myBundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*

 Copyright 2000, Silicon Graphics, Inc. All Rights Reserved.
 Copyright 2015, Google Inc. All Rights Reserved.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice including the dates of first publication and
 either this permission notice or a reference to http://oss.sgi.com/projects/FreeB/
 shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 SILICON GRAPHICS, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 Original Code. The Original Code is: OpenGL Sample Implementation,
 Version 1.2.1, released January 26, 2000, developed by Silicon Graphics,
 Inc. The Original Code is Copyright (c) 1991-2000 Silicon Graphics, Inc.
 Copyright in any portions created by third parties is as indicated
 elsewhere herein. All Rights Reserved.
*/
'use strict';var n;function t(a,b){return a.b===b.b&&a.a===b.a}function u(a,b){return a.b<b.b||a.b===b.b&&a.a<=b.a}function v(a,b,c){var d=b.b-a.b,e=c.b-b.b;return 0<d+e?d<e?b.a-a.a+d/(d+e)*(a.a-c.a):b.a-c.a+e/(d+e)*(c.a-a.a):0}function x(a,b,c){var d=b.b-a.b,e=c.b-b.b;return 0<d+e?(b.a-c.a)*d+(b.a-a.a)*e:0}function z(a,b){return a.a<b.a||a.a===b.a&&a.b<=b.b}function aa(a,b,c){var d=b.a-a.a,e=c.a-b.a;return 0<d+e?d<e?b.b-a.b+d/(d+e)*(a.b-c.b):b.b-c.b+e/(d+e)*(c.b-a.b):0}
function ba(a,b,c){var d=b.a-a.a,e=c.a-b.a;return 0<d+e?(b.b-c.b)*d+(b.b-a.b)*e:0}function ca(a){return u(a.b.a,a.a)}function da(a){return u(a.a,a.b.a)}function A(a,b,c,d){a=0>a?0:a;c=0>c?0:c;return a<=c?0===c?(b+d)/2:b+a/(a+c)*(d-b):d+c/(a+c)*(b-d)};function ea(a){var b=B(a.b);C(b,a.c);C(b.b,a.c);D(b,a.a);return b}function E(a,b){var c=!1,d=!1;a!==b&&(b.a!==a.a&&(d=!0,F(b.a,a.a)),b.d!==a.d&&(c=!0,G(b.d,a.d)),H(b,a),d||(C(b,a.a),a.a.c=a),c||(D(b,a.d),a.d.a=a))}function I(a){var b=a.b,c=!1;a.d!==a.b.d&&(c=!0,G(a.d,a.b.d));a.c===a?F(a.a,null):(a.b.d.a=J(a),a.a.c=a.c,H(a,J(a)),c||D(a,a.d));b.c===b?(F(b.a,null),G(b.d,null)):(a.d.a=J(b),b.a.c=b.c,H(b,J(b)));fa(a)}
function K(a){var b=B(a),c=b.b;H(b,a.e);b.a=a.b.a;C(c,b.a);b.d=c.d=a.d;b=b.b;H(a.b,J(a.b));H(a.b,b);a.b.a=b.a;b.b.a.c=b.b;b.b.d=a.b.d;b.f=a.f;b.b.f=a.b.f;return b}function L(a,b){var c=!1,d=B(a),e=d.b;b.d!==a.d&&(c=!0,G(b.d,a.d));H(d,a.e);H(e,b);d.a=a.b.a;e.a=b.a;d.d=e.d=a.d;a.d.a=e;c||D(d,a.d);return d}function B(a){var b=new M,c=new M,d=a.b.h;c.h=d;d.b.h=b;b.h=a;a.b.h=c;b.b=c;b.c=b;b.e=c;c.b=b;c.c=c;return c.e=b}function H(a,b){var c=a.c,d=b.c;c.b.e=b;d.b.e=a;a.c=d;b.c=c}
function C(a,b){var c=b.f,d=new N(b,c);c.e=d;b.f=d;c=d.c=a;do c.a=d,c=c.c;while(c!==a)}function D(a,b){var c=b.d,d=new ga(b,c);c.b=d;b.d=d;d.a=a;d.c=b.c;c=a;do c.d=d,c=c.e;while(c!==a)}function fa(a){var b=a.h;a=a.b.h;b.b.h=a;a.b.h=b}function F(a,b){var c=a.c,d=c;do d.a=b,d=d.c;while(d!==c);c=a.f;d=a.e;d.f=c;c.e=d}function G(a,b){var c=a.a,d=c;do d.d=b,d=d.e;while(d!==c);c=a.d;d=a.b;d.d=c;c.b=d};function ha(a){var b=0;Math.abs(a[1])>Math.abs(a[0])&&(b=1);Math.abs(a[2])>Math.abs(a[b])&&(b=2);return b};var O=4*1E150;function P(a,b){a.f+=b.f;a.b.f+=b.b.f}function ia(a,b,c){a=a.a;b=b.a;c=c.a;if(b.b.a===a)return c.b.a===a?u(b.a,c.a)?0>=x(c.b.a,b.a,c.a):0<=x(b.b.a,c.a,b.a):0>=x(c.b.a,a,c.a);if(c.b.a===a)return 0<=x(b.b.a,a,b.a);b=v(b.b.a,a,b.a);a=v(c.b.a,a,c.a);return b>=a}function Q(a){a.a.i=null;var b=a.e;b.a.c=b.c;b.c.a=b.a;a.e=null}function ja(a,b){I(a.a);a.c=!1;a.a=b;b.i=a}function ka(a){var b=a.a.a;do a=R(a);while(a.a.a===b);a.c&&(b=L(S(a).a.b,a.a.e),ja(a,b),a=R(a));return a}
function la(a,b,c){var d=new ma;d.a=c;d.e=na(a.f,b.e,d);return c.i=d}function oa(a,b){switch(a.s){case 100130:return 0!==(b&1);case 100131:return 0!==b;case 100132:return 0<b;case 100133:return 0>b;case 100134:return 2<=b||-2>=b}return!1}function pa(a){var b=a.a,c=b.d;c.c=a.d;c.a=b;Q(a)}function T(a,b,c){a=b;for(b=b.a;a!==c;){a.c=!1;var d=S(a),e=d.a;if(e.a!==b.a){if(!d.c){pa(a);break}e=L(b.c.b,e.b);ja(d,e)}b.c!==e&&(E(J(e),e),E(b,e));pa(a);b=d.a;a=d}return b}
function U(a,b,c,d,e,f){var g=!0;do la(a,b,c.b),c=c.c;while(c!==d);for(null===e&&(e=S(b).a.b.c);;){d=S(b);c=d.a.b;if(c.a!==e.a)break;c.c!==e&&(E(J(c),c),E(J(e),c));d.f=b.f-c.f;d.d=oa(a,d.f);b.b=!0;!g&&qa(a,b)&&(P(c,e),Q(b),I(e));g=!1;b=d;e=c}b.b=!0;f&&ra(a,b)}function sa(a,b,c,d,e){var f=[b.g[0],b.g[1],b.g[2]];b.d=null;b.d=a.o?a.o(f,c,d,a.c)||null:null;null===b.d&&(e?a.n||(V(a,100156),a.n=!0):b.d=c[0])}
function ta(a,b,c){var d=[null,null,null,null];d[0]=b.a.d;d[1]=c.a.d;sa(a,b.a,d,[.5,.5,0,0],!1);E(b,c)}function ua(a,b,c,d,e){var f=Math.abs(b.b-a.b)+Math.abs(b.a-a.a),g=Math.abs(c.b-a.b)+Math.abs(c.a-a.a),h=e+1;d[e]=.5*g/(f+g);d[h]=.5*f/(f+g);a.g[0]+=d[e]*b.g[0]+d[h]*c.g[0];a.g[1]+=d[e]*b.g[1]+d[h]*c.g[1];a.g[2]+=d[e]*b.g[2]+d[h]*c.g[2]}
function qa(a,b){var c=S(b),d=b.a,e=c.a;if(u(d.a,e.a)){if(0<x(e.b.a,d.a,e.a))return!1;if(!t(d.a,e.a))K(e.b),E(d,J(e)),b.b=c.b=!0;else if(d.a!==e.a){var c=a.e,f=d.a.h;if(0<=f){var c=c.b,g=c.d,h=c.e,k=c.c,l=k[f];g[l]=g[c.a];k[g[l]]=l;l<=--c.a&&(1>=l?W(c,l):u(h[g[l>>1]],h[g[l]])?W(c,l):va(c,l));h[f]=null;k[f]=c.b;c.b=f}else for(c.c[-(f+1)]=null;0<c.a&&null===c.c[c.d[c.a-1]];)--c.a;ta(a,J(e),d)}}else{if(0>x(d.b.a,e.a,d.a))return!1;R(b).b=b.b=!0;K(d.b);E(J(e),d)}return!0}
function wa(a,b){var c=S(b),d=b.a,e=c.a,f=d.a,g=e.a,h=d.b.a,k=e.b.a,l=new N;x(h,a.a,f);x(k,a.a,g);if(f===g||Math.min(f.a,h.a)>Math.max(g.a,k.a))return!1;if(u(f,g)){if(0<x(k,f,g))return!1}else if(0>x(h,g,f))return!1;var r=h,p=f,q=k,y=g,m,w;u(r,p)||(m=r,r=p,p=m);u(q,y)||(m=q,q=y,y=m);u(r,q)||(m=r,r=q,q=m,m=p,p=y,y=m);u(q,p)?u(p,y)?(m=v(r,q,p),w=v(q,p,y),0>m+w&&(m=-m,w=-w),l.b=A(m,q.b,w,p.b)):(m=x(r,q,p),w=-x(r,y,p),0>m+w&&(m=-m,w=-w),l.b=A(m,q.b,w,y.b)):l.b=(q.b+p.b)/2;z(r,p)||(m=r,r=p,p=m);z(q,y)||
(m=q,q=y,y=m);z(r,q)||(m=r,r=q,q=m,m=p,p=y,y=m);z(q,p)?z(p,y)?(m=aa(r,q,p),w=aa(q,p,y),0>m+w&&(m=-m,w=-w),l.a=A(m,q.a,w,p.a)):(m=ba(r,q,p),w=-ba(r,y,p),0>m+w&&(m=-m,w=-w),l.a=A(m,q.a,w,y.a)):l.a=(q.a+p.a)/2;u(l,a.a)&&(l.b=a.a.b,l.a=a.a.a);r=u(f,g)?f:g;u(r,l)&&(l.b=r.b,l.a=r.a);if(t(l,f)||t(l,g))return qa(a,b),!1;if(!t(h,a.a)&&0<=x(h,a.a,l)||!t(k,a.a)&&0>=x(k,a.a,l)){if(k===a.a)return K(d.b),E(e.b,d),b=ka(b),d=S(b).a,T(a,S(b),c),U(a,b,J(d),d,d,!0),!0;if(h===a.a){K(e.b);E(d.e,J(e));f=c=b;g=f.a.b.a;
do f=R(f);while(f.a.b.a===g);b=f;f=S(b).a.b.c;c.a=J(e);e=T(a,c,null);U(a,b,e.c,d.b.c,f,!0);return!0}0<=x(h,a.a,l)&&(R(b).b=b.b=!0,K(d.b),d.a.b=a.a.b,d.a.a=a.a.a);0>=x(k,a.a,l)&&(b.b=c.b=!0,K(e.b),e.a.b=a.a.b,e.a.a=a.a.a);return!1}K(d.b);K(e.b);E(J(e),d);d.a.b=l.b;d.a.a=l.a;d.a.h=xa(a.e,d.a);d=d.a;e=[0,0,0,0];l=[f.d,h.d,g.d,k.d];d.g[0]=d.g[1]=d.g[2]=0;ua(d,f,h,e,0);ua(d,g,k,e,2);sa(a,d,l,e,!0);R(b).b=b.b=c.b=!0;return!1}
function ra(a,b){for(var c=S(b);;){for(;c.b;)b=c,c=S(c);if(!b.b&&(c=b,b=R(b),null===b||!b.b))break;b.b=!1;var d=b.a,e=c.a,f;if(f=d.b.a!==e.b.a)a:{f=b;var g=S(f),h=f.a,k=g.a,l=void 0;if(u(h.b.a,k.b.a)){if(0>x(h.b.a,k.b.a,h.a)){f=!1;break a}R(f).b=f.b=!0;l=K(h);E(k.b,l);l.d.c=f.d}else{if(0<x(k.b.a,h.b.a,k.a)){f=!1;break a}f.b=g.b=!0;l=K(k);E(h.e,k.b);l.b.d.c=f.d}f=!0}f&&(c.c?(Q(c),I(e),c=S(b),e=c.a):b.c&&(Q(b),I(d),b=R(c),d=b.a));if(d.a!==e.a)if(d.b.a===e.b.a||b.c||c.c||d.b.a!==a.a&&e.b.a!==a.a)qa(a,
b);else if(wa(a,b))break;d.a===e.a&&d.b.a===e.b.a&&(P(e,d),Q(b),I(d),b=R(c))}}
function ya(a,b){a.a=b;for(var c=b.c;null===c.i;)if(c=c.c,c===b.c){var c=a,d=b,e=new ma;e.a=d.c.b;var f=c.f,g=f.a;do g=g.a;while(null!==g.b&&!f.c(f.b,e,g.b));var f=g.b,h=S(f),e=f.a,g=h.a;if(0===x(e.b.a,d,e.a))e=f.a,t(e.a,d)||t(e.b.a,d)||(K(e.b),f.c&&(I(e.c),f.c=!1),E(d.c,e),ya(c,d));else{var k=u(g.b.a,e.b.a)?f:h,h=void 0;f.d||k.c?(k===f?h=L(d.c.b,e.e):h=L(g.b.c.b,d.c).b,k.c?ja(k,h):(e=c,f=la(c,f,h),f.f=R(f).f+f.a.f,f.d=oa(e,f.f)),ya(c,d)):U(c,f,d.c,d.c,null,!0)}return}c=ka(c.i);e=S(c);f=e.a;e=T(a,
e,null);if(e.c===f){var f=e,e=f.c,g=S(c),h=c.a,k=g.a,l=!1;h.b.a!==k.b.a&&wa(a,c);t(h.a,a.a)&&(E(J(e),h),c=ka(c),e=S(c).a,T(a,S(c),g),l=!0);t(k.a,a.a)&&(E(f,J(k)),f=T(a,g,null),l=!0);l?U(a,c,f.c,e,e,!0):(u(k.a,h.a)?d=J(k):d=h,d=L(f.c.b,d),U(a,c,d,d.c,d.c,!1),d.b.i.c=!0,ra(a,c))}else U(a,c,e.c,f,f,!0)}function za(a,b){var c=new ma,d=ea(a.b);d.a.b=O;d.a.a=b;d.b.a.b=-O;d.b.a.a=b;a.a=d.b.a;c.a=d;c.f=0;c.d=!1;c.c=!1;c.h=!0;c.b=!1;d=a.f;d=na(d,d.a,c);c.e=d};function Aa(a){this.a=new Ba;this.b=a;this.c=ia}function na(a,b,c){do b=b.c;while(null!==b.b&&!a.c(a.b,b.b,c));a=new Ba(c,b.a,b);b.a.c=a;return b.a=a};function Ba(a,b,c){this.b=a||null;this.a=b||this;this.c=c||this};function X(){this.d=Y;this.p=this.b=this.q=null;this.j=[0,0,0];this.s=100130;this.n=!1;this.o=this.a=this.e=this.f=null;this.m=!1;this.c=this.r=this.i=this.k=this.l=this.h=null}var Y=0;n=X.prototype;n.x=function(){Z(this,Y)};n.B=function(a,b){switch(a){case 100142:return;case 100140:switch(b){case 100130:case 100131:case 100132:case 100133:case 100134:this.s=b;return}break;case 100141:this.m=!!b;return;default:V(this,100900);return}V(this,100901)};
n.y=function(a){switch(a){case 100142:return 0;case 100140:return this.s;case 100141:return this.m;default:V(this,100900)}return!1};n.A=function(a,b,c){this.j[0]=a;this.j[1]=b;this.j[2]=c};
n.z=function(a,b){var c=b?b:null;switch(a){case 100100:case 100106:this.h=c;break;case 100104:case 100110:this.l=c;break;case 100101:case 100107:this.k=c;break;case 100102:case 100108:this.i=c;break;case 100103:case 100109:this.p=c;break;case 100105:case 100111:this.o=c;break;case 100112:this.r=c;break;default:V(this,100900)}};
n.C=function(a,b){var c=!1,d=[0,0,0];Z(this,2);for(var e=0;3>e;++e){var f=a[e];-1E150>f&&(f=-1E150,c=!0);1E150<f&&(f=1E150,c=!0);d[e]=f}c&&V(this,100155);c=this.q;null===c?(c=ea(this.b),E(c,c.b)):(K(c),c=c.e);c.a.d=b;c.a.g[0]=d[0];c.a.g[1]=d[1];c.a.g[2]=d[2];c.f=1;c.b.f=-1;this.q=c};n.u=function(a){Z(this,Y);this.d=1;this.b=new Ca;this.c=a};n.t=function(){Z(this,1);this.d=2;this.q=null};n.v=function(){Z(this,2);this.d=1};
n.w=function(){Z(this,1);this.d=Y;var a=this.j[0],b=this.j[1],c=this.j[2],d=!1,e=[a,b,c];if(0===a&&0===b&&0===c){for(var b=[-2*1E150,-2*1E150,-2*1E150],f=[2*1E150,2*1E150,2*1E150],c=[],g=[],d=this.b.c,a=d.e;a!==d;a=a.e)for(var h=0;3>h;++h){var k=a.g[h];k<f[h]&&(f[h]=k,g[h]=a);k>b[h]&&(b[h]=k,c[h]=a)}a=0;b[1]-f[1]>b[0]-f[0]&&(a=1);b[2]-f[2]>b[a]-f[a]&&(a=2);if(f[a]>=b[a])e[0]=0,e[1]=0,e[2]=1;else{b=0;f=g[a];c=c[a];g=[0,0,0];f=[f.g[0]-c.g[0],f.g[1]-c.g[1],f.g[2]-c.g[2]];h=[0,0,0];for(a=d.e;a!==d;a=
a.e)h[0]=a.g[0]-c.g[0],h[1]=a.g[1]-c.g[1],h[2]=a.g[2]-c.g[2],g[0]=f[1]*h[2]-f[2]*h[1],g[1]=f[2]*h[0]-f[0]*h[2],g[2]=f[0]*h[1]-f[1]*h[0],k=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],k>b&&(b=k,e[0]=g[0],e[1]=g[1],e[2]=g[2]);0>=b&&(e[0]=e[1]=e[2]=0,e[ha(f)]=1)}d=!0}g=ha(e);a=this.b.c;b=(g+1)%3;c=(g+2)%3;g=0<e[g]?1:-1;for(e=a.e;e!==a;e=e.e)e.b=e.g[b],e.a=g*e.g[c];if(d){e=0;d=this.b.a;for(a=d.b;a!==d;a=a.b)if(b=a.a,!(0>=b.f)){do e+=(b.a.b-b.b.a.b)*(b.a.a+b.b.a.a),b=b.e;while(b!==a.a)}if(0>e)for(e=this.b.c,d=e.e;d!==
e;d=d.e)d.a=-d.a}this.n=!1;e=this.b.b;for(a=e.h;a!==e;a=d)if(d=a.h,b=a.e,t(a.a,a.b.a)&&a.e.e!==a&&(ta(this,b,a),I(a),a=b,b=a.e),b.e===a){if(b!==a){if(b===d||b===d.b)d=d.h;I(b)}if(a===d||a===d.b)d=d.h;I(a)}this.e=e=new Da;d=this.b.c;for(a=d.e;a!==d;a=a.e)a.h=xa(e,a);Ea(e);this.f=new Aa(this);za(this,-O);for(za(this,O);null!==(e=Fa(this.e));){for(;;){a:if(a=this.e,0===a.a)d=Ga(a.b);else if(d=a.c[a.d[a.a-1]],0!==a.b.a&&(a=Ga(a.b),u(a,d))){d=a;break a}if(null===d||!t(d,e))break;d=Fa(this.e);ta(this,e.c,
d.c)}ya(this,e)}this.a=this.f.a.a.b.a.a;for(e=0;null!==(d=this.f.a.a.b);)d.h||++e,Q(d);this.f=null;e=this.e;e.b=null;e.d=null;this.e=e.c=null;e=this.b;for(a=e.a.b;a!==e.a;a=d)d=a.b,a=a.a,a.e.e===a&&(P(a.c,a),I(a));if(!this.n){e=this.b;if(this.m)for(a=e.b.h;a!==e.b;a=d)d=a.h,a.b.d.c!==a.d.c?a.f=a.d.c?1:-1:I(a);else for(a=e.a.b;a!==e.a;a=d)if(d=a.b,a.c){for(a=a.a;u(a.b.a,a.a);a=a.c.b);for(;u(a.a,a.b.a);a=a.e);b=a.c.b;for(c=void 0;a.e!==b;)if(u(a.b.a,b.a)){for(;b.e!==a&&(ca(b.e)||0>=x(b.a,b.b.a,b.e.b.a));)c=
L(b.e,b),b=c.b;b=b.c.b}else{for(;b.e!==a&&(da(a.c.b)||0<=x(a.b.a,a.a,a.c.b.a));)c=L(a,a.c.b),a=c.b;a=a.e}for(;b.e.e!==a;)c=L(b.e,b),b=c.b}if(this.h||this.i||this.k||this.l)if(this.m)for(e=this.b,d=e.a.b;d!==e.a;d=d.b){if(d.c){this.h&&this.h(2,this.c);a=d.a;do this.k&&this.k(a.a.d,this.c),a=a.e;while(a!==d.a);this.i&&this.i(this.c)}}else{e=this.b;d=!!this.l;a=!1;b=-1;for(c=e.a.d;c!==e.a;c=c.d)if(c.c){a||(this.h&&this.h(4,this.c),a=!0);g=c.a;do d&&(f=g.b.d.c?0:1,b!==f&&(b=f,this.l&&this.l(!!b,this.c))),
this.k&&this.k(g.a.d,this.c),g=g.e;while(g!==c.a)}a&&this.i&&this.i(this.c)}if(this.r){e=this.b;for(a=e.a.b;a!==e.a;a=d)if(d=a.b,!a.c){b=a.a;c=b.e;g=void 0;do g=c,c=g.e,g.d=null,null===g.b.d&&(g.c===g?F(g.a,null):(g.a.c=g.c,H(g,J(g))),f=g.b,f.c===f?F(f.a,null):(f.a.c=f.c,H(f,J(f))),fa(g));while(g!==b);b=a.d;a=a.b;a.d=b;b.b=a}this.r(this.b);this.c=this.b=null;return}}this.b=this.c=null};
function Z(a,b){if(a.d!==b)for(;a.d!==b;)if(a.d<b)switch(a.d){case Y:V(a,100151);a.u(null);break;case 1:V(a,100152),a.t()}else switch(a.d){case 2:V(a,100154);a.v();break;case 1:V(a,100153),a.w()}}function V(a,b){a.p&&a.p(b,a.c)};function ga(a,b){this.b=a||this;this.d=b||this;this.a=null;this.c=!1};function M(){this.h=this;this.i=this.d=this.a=this.e=this.c=this.b=null;this.f=0}function J(a){return a.b.e};function Ca(){this.c=new N;this.a=new ga;this.b=new M;this.d=new M;this.b.b=this.d;this.d.b=this.b};function N(a,b){this.e=a||this;this.f=b||this;this.d=this.c=null;this.g=[0,0,0];this.h=this.a=this.b=0};function Da(){this.c=[];this.d=null;this.a=0;this.e=!1;this.b=new Ha}function Ea(a){a.d=[];for(var b=0;b<a.a;b++)a.d[b]=b;a.d.sort(function(a){return function(b,e){return u(a[b],a[e])?1:-1}}(a.c));a.e=!0;Ia(a.b)}function xa(a,b){if(a.e){var c=a.b,d=++c.a;2*d>c.f&&(c.f*=2,c.c=Ja(c.c,c.f+1));var e;0===c.b?e=d:(e=c.b,c.b=c.c[c.b]);c.e[e]=b;c.c[e]=d;c.d[d]=e;c.h&&va(c,d);return e}c=a.a++;a.c[c]=b;return-(c+1)}
function Fa(a){if(0===a.a)return Ka(a.b);var b=a.c[a.d[a.a-1]];if(0!==a.b.a&&u(Ga(a.b),b))return Ka(a.b);do--a.a;while(0<a.a&&null===a.c[a.d[a.a-1]]);return b};function Ha(){this.d=Ja([0],33);this.e=[null,null];this.c=[0,0];this.a=0;this.f=32;this.b=0;this.h=!1;this.d[1]=1}function Ja(a,b){for(var c=Array(b),d=0;d<a.length;d++)c[d]=a[d];for(;d<b;d++)c[d]=0;return c}function Ia(a){for(var b=a.a;1<=b;--b)W(a,b);a.h=!0}function Ga(a){return a.e[a.d[1]]}function Ka(a){var b=a.d,c=a.e,d=a.c,e=b[1],f=c[e];0<a.a&&(b[1]=b[a.a],d[b[1]]=1,c[e]=null,d[e]=a.b,a.b=e,0<--a.a&&W(a,1));return f}
function W(a,b){for(var c=a.d,d=a.e,e=a.c,f=b,g=c[f];;){var h=f<<1;h<a.a&&u(d[c[h+1]],d[c[h]])&&(h+=1);var k=c[h];if(h>a.a||u(d[g],d[k])){c[f]=g;e[g]=f;break}c[f]=k;e[k]=f;f=h}}function va(a,b){for(var c=a.d,d=a.e,e=a.c,f=b,g=c[f];;){var h=f>>1,k=c[h];if(0===h||u(d[k],d[g])){c[f]=g;e[g]=f;break}c[f]=k;e[k]=f;f=h}};function ma(){this.e=this.a=null;this.f=0;this.c=this.b=this.h=this.d=!1}function S(a){return a.e.c.b}function R(a){return a.e.a.b};this.libtess={GluTesselator:X,windingRule:{GLU_TESS_WINDING_ODD:100130,GLU_TESS_WINDING_NONZERO:100131,GLU_TESS_WINDING_POSITIVE:100132,GLU_TESS_WINDING_NEGATIVE:100133,GLU_TESS_WINDING_ABS_GEQ_TWO:100134},primitiveType:{GL_LINE_LOOP:2,GL_TRIANGLES:4,GL_TRIANGLE_STRIP:5,GL_TRIANGLE_FAN:6},errorType:{GLU_TESS_MISSING_BEGIN_POLYGON:100151,GLU_TESS_MISSING_END_POLYGON:100153,GLU_TESS_MISSING_BEGIN_CONTOUR:100152,GLU_TESS_MISSING_END_CONTOUR:100154,GLU_TESS_COORD_TOO_LARGE:100155,GLU_TESS_NEED_COMBINE_CALLBACK:100156},
gluEnum:{GLU_TESS_MESH:100112,GLU_TESS_TOLERANCE:100142,GLU_TESS_WINDING_RULE:100140,GLU_TESS_BOUNDARY_ONLY:100141,GLU_INVALID_ENUM:100900,GLU_INVALID_VALUE:100901,GLU_TESS_BEGIN:100100,GLU_TESS_VERTEX:100101,GLU_TESS_END:100102,GLU_TESS_ERROR:100103,GLU_TESS_EDGE_FLAG:100104,GLU_TESS_COMBINE:100105,GLU_TESS_BEGIN_DATA:100106,GLU_TESS_VERTEX_DATA:100107,GLU_TESS_END_DATA:100108,GLU_TESS_ERROR_DATA:100109,GLU_TESS_EDGE_FLAG_DATA:100110,GLU_TESS_COMBINE_DATA:100111}};X.prototype.gluDeleteTess=X.prototype.x;
X.prototype.gluTessProperty=X.prototype.B;X.prototype.gluGetTessProperty=X.prototype.y;X.prototype.gluTessNormal=X.prototype.A;X.prototype.gluTessCallback=X.prototype.z;X.prototype.gluTessVertex=X.prototype.C;X.prototype.gluTessBeginPolygon=X.prototype.u;X.prototype.gluTessBeginContour=X.prototype.t;X.prototype.gluTessEndContour=X.prototype.v;X.prototype.gluTessEndPolygon=X.prototype.w; if (typeof module !== 'undefined') { module.exports = this.libtess; }

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tesselator = exports.polygon = undefined;

var _tesselator = require('./tesselator');

var tess = _interopRequireWildcard(_tesselator);

var _polygon = require('./polygon');

var p = _interopRequireWildcard(_polygon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var polygon = exports.polygon = p;
var tesselator = exports.tesselator = tess;

if (typeof window !== 'undefined') {
  window.PolygonTools = {
    polygon: p,
    tesselator: tess,
    version: window.polygon_tools_version || '',
    build: window.polygon_tools_rev || ''
  };
}
},{"./polygon":3,"./tesselator":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WINDING_CW = exports.WINDING_CCW = exports.WINDING_UNKNOWN = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @module polygon
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


exports.ccw = ccw;
exports.normal = normal;
exports.area = area;
exports.centroid = centroid;
exports.is_ccw = is_ccw;
exports.is_cw = is_cw;
exports.winding = winding;
exports.bounds = bounds;
exports.ensure_cw = ensure_cw;
exports.ensure_ccw = ensure_ccw;
exports.triangulate = triangulate;
exports.subtract = subtract;
exports.union = union;
exports.intersection = intersection;

var _tesselator = require('./tesselator');

var tess = _interopRequireWildcard(_tesselator);

var _vec = require('./vec');

var vec = _interopRequireWildcard(_vec);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var WINDING_UNKNOWN = exports.WINDING_UNKNOWN = 0;
var WINDING_CCW = exports.WINDING_CCW = 1;
var WINDING_CW = exports.WINDING_CW = 2;

function ccw(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
}

/**
 * Polygon normal (2d / 3d)
 *
 * @param {Array} pts Points of the polygon
 * @param {Boolean} [forceNewell=false] Whether to force Newell's method
 *
 * @return {Array} Polygon normal or null if the polygon is degenerate
 */
function normal(pts) {
  var forceNewell = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


  if (pts.length < 3) return null;

  var vs = pts.map(function (p) {
    return p.length >= 3 ? p : [p[0], p[1], 0];
  });

  if (!forceNewell) {
    var _vs = _slicedToArray(vs, 3),
        a = _vs[0],
        b = _vs[1],
        c = _vs[2],
        ba = vec.subtract(b, a),
        ca = vec.subtract(c, a),
        cr = vec.normalize(vec.cross(ba, ca));

    if (cr.some(function (v) {
      return isNaN(v);
    })) {
      if (pts.length === 3) return null;
    } else {
      return cr;
    }
  }

  // fallback to Newell's method
  var n = [0, 0, 0];
  vs.forEach(function (v, i) {
    var w = vs[(i + 1) % pts.length];
    n[0] = n[0] + (v[1] - w[1]) * (v[2] + w[2]);
    n[1] = n[1] + (v[2] - w[2]) * (v[0] + w[0]);
    n[2] = n[2] + (v[0] - w[0]) * (v[1] + w[1]);
  });

  n = vec.normalize(n);

  return n.some(function (v) {
    return isNaN(v);
  }) ? null : n;
}

/**
 * Signed area of a polygon.
 * For 3d polygons a signed area can only be computed when the optional
 * polygon normal ```n``` is passed in.
 * @see http://stackoverflow.com/questions/12642256/python-find-area-of-polygon-from-xyz-coordinates
 *
 * @param {Array} pts Polygon points
 * @param {Array} [n=null] Optional polygon normal, needed to compute the signed area for 3d polygons
 *
 * @return {Number}
 */
function area(pts) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pts.length < 3) return 0;
  if (pts[0].length < 3) {
    return pts.reduce(function (a, p, i) {
      var pn = pts[i + 1] || pts[0];
      return a + p[0] * pn[1] - pn[0] * p[1];
    }, 0) / 2;
  } else {
    var num = pts.length,
        nrm = n || normal(pts),
        total = [0, 0, 0];
    if (!nrm) return 0;
    for (var i = 0; i < num; ++i) {
      var v = pts[i],
          w = pts[(i + 1) % num];
      total = vec.add(total, vec.cross(v, w));
    }
    return vec.dot(total, nrm) / 2;
  }
}

/**
 * Polygon centroid (2d)
 *
 * @param {Array} pts
 *
 * @return {Array}
 */
function centroid(pts) {
  var _pts$reduce = pts.reduce(function (_ref, p, i) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    var pn = pts[i + 1] || pts[0],
        c = p[0] * pn[1] - pn[0] * p[1];
    return [x + (p[0] + pn[0]) * c, y + (p[1] + pn[1]) * c];
  }, [0, 0]),
      _pts$reduce2 = _slicedToArray(_pts$reduce, 2),
      x = _pts$reduce2[0],
      y = _pts$reduce2[1];

  var ar = area(pts);
  if (x !== 0) {
    x = x / (Math.abs(ar) * 6);
  }
  if (y !== 0) {
    y = y / (Math.abs(ar) * 6);
  }

  if (ar < 0) {
    x = -x;
    y = -y;
  }
  return [x, y];
}

/**
 * Tests wether the polygon winding is counter clockwise
 *
 * @param {Array} pts
 * @param {Array} [n=null] Optional polygon normal, needed for 3d polygons
 *
 * @return {Boolean}
 */
function is_ccw(pts) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return area(pts, n) > 0;
}

/**
 * Tests wether the polygon winding is clockwise
 *
 * @param {Array} pts
 * @param {Array} [n=null] Optional polygon normal, needed for 3d polygons
 *
 * @return {Boolean}
 */
function is_cw(pts) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return area(pts, n) < 0;
}

/**
 * Polygon winding (2d only)
 *
 * @param {Array} pts
 * @param {Array} [n=null] Optional polygon normal, needed for 3d polygons
 *
 * @return {Number}
 */
function winding(pts) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var a = area(pts, n);
  if (a < 0) return WINDING_CW;
  if (a > 0) return WINDING_CCW;
  return WINDING_UNKNOWN;
}

/**
 * Polygon bounds.
 * @typedef {Object} PolygonBounds
 * @property {Number} xMin
 * @property {Number} yMin
 * @property {Number} xMax
 * @property {Number} yMax
 */

/**
 * Polygon bounds
 *
 * @param {Array} pts
 *
 * @return {PolygonBounds}
 */
function bounds(pts) {
  var min = [Number.MAX_VALUE, Number.MAX_VALUE],
      max = [-Number.MAX_VALUE, -Number.MAX_VALUE];

  pts.forEach(function (p) {
    for (var i = 0; i < Math.min(3, p.length); ++i) {
      min[i] = Math.min(min[i], p[i]);
      max[i] = Math.max(max[i], p[i]);
    }
  });

  return {
    xMin: min[0],
    yMin: min[1],
    xMax: max[0],
    yMax: max[1]
  };
}

/**
 * Ensures CW winding
 *
 * @param {Array} pts
 * @param {Array} [n=null] Optional polygon normal, needed for 3d polygons
 *
 * @return {Array}
 */
function ensure_cw(pts) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (is_ccw(pts, n)) pts.reverse();
  return pts;
}

/**
 * Ensures CCW winding
 *
 * @param {Array} pts
 * @param {Array} [n=null] Optional polygon normal, needed for 3d polygons
 *
 * @return {Array}
 */
function ensure_ccw(pts) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (is_cw(pts, n)) pts.reverse();
  return pts;
}

/**
 * Triangulates a polygon
 *
 * @param {Array} polygon
 * @param {Array.<Array>} holes
 *
 * @return triangles
 */
function triangulate(polygon, holes) {
  if (!polygon || polygon.length < 3) return polygon;

  var bp = bounds(polygon);

  holes = holes.filter(function (hole) {
    var b = bounds(hole),
        out = b.xMin > bp.xMax || b.yMin > bp.yMax || b.xMax < bp.xMin || b.yMax < bp.yMin;
    return !out;
  });

  var options = { polygons: [polygon], holes: holes };

  return tess.run(options).reduce(function (p, v) {
    return p.concat(v);
  }, []);
}

/**
 * Subtract polygons
 *
 * @param {Array} polygons
 *
 * @return {Array}
 */
function subtract() {
  for (var _len = arguments.length, polygons = Array(_len), _key = 0; _key < _len; _key++) {
    polygons[_key] = arguments[_key];
  }

  var options = {
    polygons: [ensure_ccw(polygons[0])],
    holes: polygons.slice(1).map(function (p) {
      return ensure_cw(p);
    }),
    boundaryOnly: true,
    autoWinding: false
  };
  return tess.run(options);
}

/**
 * Union of a set of polygons
 *
 * @param {Array} polygons
 *
 * @return {Array}
 */
function union() {
  for (var _len2 = arguments.length, polygons = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    polygons[_key2] = arguments[_key2];
  }

  var options = {
    polygons: polygons.map(function (p) {
      return ensure_ccw(p);
    }),
    boundaryOnly: true,
    autoWinding: false
  };
  return tess.run(options);
}

/**
 * Intersection of a set of polygons
 *
 * @param {Array} a First polygon
 * @param {Array} b Second polygon
 *
 * @return {Array}
 */
function intersection(a, b) {
  var options = {
    polygons: [ensure_ccw(a), ensure_ccw(b)],
    boundaryOnly: true,
    windingRule: tess.GLU_TESS_WINDING_ABS_GEQ_TWO,
    autoWinding: false
  };
  return tess.run(options);
}
},{"./tesselator":4,"./vec":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tesselator = exports.DEFAULT_OPTIONS = exports.GLU_TESS_WINDING_ABS_GEQ_TWO = exports.GLU_TESS_WINDING_NEGATIVE = exports.GLU_TESS_WINDING_POSITIVE = exports.GLU_TESS_WINDING_NONZERO = exports.GLU_TESS_WINDING_ODD = exports.GL_TRIANGLE_FAN = exports.GL_TRIANGLE_STRIP = exports.GL_TRIANGLES = exports.GL_LINE_LOOP = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.run = run;

var _libtess = require('libtess');

var _polygon = require('./polygon');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module tesselator
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GL_LINE_LOOP = _libtess.primitiveType.GL_LINE_LOOP,
    GL_TRIANGLES = _libtess.primitiveType.GL_TRIANGLES,
    GL_TRIANGLE_STRIP = _libtess.primitiveType.GL_TRIANGLE_STRIP,
    GL_TRIANGLE_FAN = _libtess.primitiveType.GL_TRIANGLE_FAN;
exports.GL_LINE_LOOP = GL_LINE_LOOP;
exports.GL_TRIANGLES = GL_TRIANGLES;
exports.GL_TRIANGLE_STRIP = GL_TRIANGLE_STRIP;
exports.GL_TRIANGLE_FAN = GL_TRIANGLE_FAN;
var GLU_TESS_WINDING_ODD = _libtess.windingRule.GLU_TESS_WINDING_ODD,
    GLU_TESS_WINDING_NONZERO = _libtess.windingRule.GLU_TESS_WINDING_NONZERO,
    GLU_TESS_WINDING_POSITIVE = _libtess.windingRule.GLU_TESS_WINDING_POSITIVE,
    GLU_TESS_WINDING_NEGATIVE = _libtess.windingRule.GLU_TESS_WINDING_NEGATIVE,
    GLU_TESS_WINDING_ABS_GEQ_TWO = _libtess.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO;

/**
 * Tesselator options.
 * @typedef {Object} TesselatorOptions
 * @property {Array} [polygons=[]] Array of polygons
 * @property {Array} [holes=[]] Array of holes
 * @property {Number} [vertexSize=2] Vertex size to use
 * @property {Number} [windingRule=GLU_TESS_WINDING_POSITIVE] Winding rule
 * @property {Boolean} [boundaryOnly=false] Whether to output boundaries only
 * @property {Array} [normal=null] Normal
 * @property {Boolean} [autoWinding=true] Whether to automatically set the correct winding on polygons
 */

exports.GLU_TESS_WINDING_ODD = GLU_TESS_WINDING_ODD;
exports.GLU_TESS_WINDING_NONZERO = GLU_TESS_WINDING_NONZERO;
exports.GLU_TESS_WINDING_POSITIVE = GLU_TESS_WINDING_POSITIVE;
exports.GLU_TESS_WINDING_NEGATIVE = GLU_TESS_WINDING_NEGATIVE;
exports.GLU_TESS_WINDING_ABS_GEQ_TWO = GLU_TESS_WINDING_ABS_GEQ_TWO;
var DEFAULT_OPTIONS = exports.DEFAULT_OPTIONS = {
  polygons: [],
  holes: [],
  windingRule: GLU_TESS_WINDING_POSITIVE,
  boundaryOnly: false,
  normal: null,
  autoWinding: true
};

var Tesselator = exports.Tesselator = function (_GluTesselator) {
  _inherits(Tesselator, _GluTesselator);

  function Tesselator() {
    var vsize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

    _classCallCheck(this, Tesselator);

    var _this = _possibleConstructorReturn(this, (Tesselator.__proto__ || Object.getPrototypeOf(Tesselator)).call(this));

    _this._vsize = vsize;
    _this._current = [];
    _this._out = [];
    _this._primitiveType = 0;

    _this.gluTessCallback(_libtess.gluEnum.GLU_TESS_VERTEX_DATA, _this._vertex);
    _this.gluTessCallback(_libtess.gluEnum.GLU_TESS_BEGIN, _this._begin);
    _this.gluTessCallback(_libtess.gluEnum.GLU_TESS_END, _this._end);
    _this.gluTessCallback(_libtess.gluEnum.GLU_TESS_ERROR, _this._error);
    _this.gluTessCallback(_libtess.gluEnum.GLU_TESS_COMBINE, _this._combine);
    _this.gluTessCallback(_libtess.gluEnum.GLU_TESS_EDGE_FLAG, _this._edge);
    return _this;
  }

  _createClass(Tesselator, [{
    key: 'start',
    value: function start(polygons, holes) {
      this._current = [];
      this._out = [];

      this.gluTessBeginPolygon();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = polygons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var poly = _step.value;

          this.gluTessBeginContour();
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = poly[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var v = _step3.value;

              this.gluTessVertex(v, v);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          this.gluTessEndContour();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = holes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _poly = _step2.value;

          this.gluTessBeginContour();
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = _poly[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _v = _step4.value;

              this.gluTessVertex(_v, _v);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          this.gluTessEndContour();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.gluTessEndPolygon();
    }
  }, {
    key: 'run',
    value: function run() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS;
      var opts = Object.assign({}, DEFAULT_OPTIONS, options),
          polygons = opts.polygons,
          holes = opts.holes,
          autoWinding = opts.autoWinding,
          boundaryOnly = opts.boundaryOnly;


      if (!polygons || !polygons.length) {
        throw new Error('need at least a single polygon');
      }

      if (autoWinding) {
        polygons = polygons.filter(function (p) {
          return Math.abs((0, _polygon.area)(p)) > 0;
        }).map(function (p) {
          if ((0, _polygon.is_cw)(p)) p.reverse();
          return p;
        });
        holes = holes.filter(function (p) {
          return Math.abs((0, _polygon.area)(p)) > 0;
        }).map(function (p) {
          if ((0, _polygon.is_ccw)(p)) p.reverse();
          return p;
        });
      }

      var _ref = opts.normal ? opts.normal : (0, _polygon.normal)(polygons[0], true),
          _ref2 = _slicedToArray(_ref, 3),
          nx = _ref2[0],
          ny = _ref2[1],
          nz = _ref2[2];

      this.gluTessNormal(nx, ny, nz);
      this.gluTessProperty(_libtess.gluEnum.GLU_TESS_BOUNDARY_ONLY, boundaryOnly);
      this.gluTessProperty(_libtess.gluEnum.GLU_TESS_WINDING_RULE, opts.windingRule);

      this.start(polygons, holes);

      return this._out;
    }
  }, {
    key: '_begin',
    value: function _begin(type) {
      this._primitiveType = type;
      this._current = [];
    }
  }, {
    key: '_end_fan',
    value: function _end_fan() {
      var c = this._current.shift(),
          p1 = this._current.shift();
      while (this._current.length) {
        var p2 = this._current.shift();
        this._out.push(c, p1, p2);
        p1 = p2;
      }
    }
  }, {
    key: '_end_strip',
    value: function _end_strip() {
      var p1 = this._current.shift(),
          p2 = this._current.shift();
      while (this._current.length) {
        var p3 = this._current.shift();
        this._out.push(p1, p2, p3);
        p1 = p2;
        p2 = p3;
      }
    }
  }, {
    key: '_end',
    value: function _end() {
      switch (this._primitiveType) {
        case GL_TRIANGLE_FAN:
          this._end_fan();
          break;
        case GL_TRIANGLE_STRIP:
          this._end_strip();
          break;
        case GL_TRIANGLES:
        case GL_LINE_LOOP:
        default:
          this._out.push(this._current);
          break;
      }
    }
  }, {
    key: '_vertex',
    value: function _vertex(v) {
      this._current.push(v);
    }
  }, {
    key: '_edge',
    value: function _edge() {}
  }, {
    key: '_error',
    value: function _error(errno) {
      console.error('error number: ' + errno);
    }
  }, {
    key: '_combine',
    value: function _combine(v, data, w) {
      for (var i = 0; i < 4; ++i) {
        if (!data[i]) {
          data[i] = new Array(this._vsize);
          for (var j = 0; j < this._vsize; ++j) {
            data[i][j] = 0;
          }
        }
      }
      var r = new Array(this._vsize);
      for (var _i = 0; _i < this._vsize; ++_i) {
        r[_i] = data[0][_i] * w[0] + data[1][_i] * w[1] + data[2][_i] * w[2] + data[3][_i] * w[3];
      }
      return r;
    }
  }]);

  return Tesselator;
}(_libtess.GluTesselator);

/**
 * Helper for triangulate
 * @private
 */


function to_triangles(data) {
  var result = [];
  for (var i = 0; i < data.length; i += 3) {
    result.push([data[i], data[i + 1], data[i + 2]]);
  }
  return result;
}

/**
 * Runs the tesselator
 * @see http://www.glprogramming.com/red/chapter11.html
 *
 * @param {TesselatorOptions} [options=TesselatorOptions] Options
 *
 * @returns {Array}
 */
function run() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS;

  var tesselator = new Tesselator(options.vertexSize),
      result = tesselator.run(options);
  return options.boundaryOnly ? result : result.map(to_triangles);
}
},{"./polygon":3,"libtess":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cross = cross;
exports.length = length;
exports.dot = dot;
exports.normalize = normalize;
exports.add = add;
exports.subtract = subtract;
/**
 * @module vec
 */

/**
 * Cross product
 *
 * @param {Array} a First vector
 * @param {Array} b Second vector
 *
 * @return {Array}
 */
function cross(a, b) {
  a = a.length === 2 ? [a[0], a[1], 0] : a;
  b = b.length === 2 ? [b[0], b[1], 0] : b;
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

/**
 * Length of vector
 *
 * @param {Array} v Vector
 *
 * @return {Number}
 */
function length(v) {
  return Math.sqrt(v.slice(0, 3).reduce(function (p, w, i) {
    return p + w * w;
  }, 0));
}

/**
 * Dot product
 *
 * @param {Array} a Vector
 * @param {Array} b Vector
 *
 * @return {Number}
 */
function dot(a, b) {
  return a.reduce(function (p, v, i) {
    return p + v * b[i];
  }, 0);
}

/**
 * Normalize a vector
 *
 * @param {Array} v Vector
 *
 * @return {Array}
 */
function normalize(v) {
  var len = length(v);
  return v.slice(0, 3).map(function (i) {
    return i / len;
  });
}

/**
 * Add
 *
 * @param {Array} a First vector
 * @param {Array} b Second vector
 *
 * @return {Array}
 */
function add(a, b) {
  return a.slice(0, 3).map(function (v, i) {
    return v + b[i];
  });
}

/**
 * Subtract
 *
 * @param {Array} a First vector
 * @param {Array} b Second vector
 *
 * @return {Array}
 */
function subtract(a, b) {
  return a.slice(0, 3).map(function (v, i) {
    return v - b[i];
  });
}

var sub = exports.sub = subtract;
},{}],6:[function(require,module,exports){
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&module.exports?module.exports=t():e.Quadtree=t()}(this,function(){return function(){function e(t){var n,i;if(this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this.maxElements=t.maxElements,null==this.width||null==this.height)throw new Error("Missing quadtree dimensions.");if(null==this.x&&(this.x=0),null==this.y&&(this.y=0),null==this.maxElements&&(this.maxElements=1),this.contents=[],this.oversized=[],this.size=0,this.width<1||this.height<1)throw new Error("Dimensions must be positive integers.");if(!Number.isInteger(this.x)||!Number.isInteger(this.y))throw new Error("Coordinates must be integers");if(this.maxElements<1)throw new Error("The maximum number of elements before a split must be a positive integer.");i=this,this.children={NW:{create:function(){return new e({x:i.x,y:i.y,width:Math.max(Math.floor(i.width/2),1),height:Math.max(Math.floor(i.height/2),1),maxElements:i.maxElements})},tree:null},NE:{create:function(){return new e({x:i.x+Math.max(Math.floor(i.width/2),1),y:i.y,width:Math.ceil(i.width/2),height:Math.max(Math.floor(i.height/2),1),maxElements:i.maxElements})},tree:null},SW:{create:function(){return new e({x:i.x,y:i.y+Math.max(Math.floor(i.height/2),1),width:Math.max(Math.floor(i.width/2),1),height:Math.ceil(i.height/2),maxElements:i.maxElements})},tree:null},SE:{create:function(){return new e({x:i.x+Math.max(Math.floor(i.width/2),1),y:i.y+Math.max(Math.floor(i.height/2),1),width:Math.ceil(i.width/2),height:Math.ceil(i.height/2),maxElements:i.maxElements})},tree:null}};for(n in this.children)this.children[n].get=function(){return null!=this.tree?this.tree:(this.tree=this.create(),this.tree)}}var t,n,i,r,h,l,o,s;return r=function(e){var t,n;return{x:Math.floor((null!=(t=e.width)?t:1)/2)+e.x,y:Math.floor((null!=(n=e.height)?n:1)/2)+e.y}},t=function(e,t){var n,i,r,h;return!(e.x>=t.x+(null!=(n=t.width)?n:1)||e.x+(null!=(i=e.width)?i:1)<=t.x||e.y>=t.y+(null!=(r=t.height)?r:1)||e.y+(null!=(h=e.height)?h:1)<=t.y)},n=function(e,t){var n;return n=r(t),e.x<n.x?e.y<n.y?"NW":"SW":e.y<n.y?"NE":"SE"},s=function(e){if("object"!=typeof e)throw new Error("Element must be an Object.");if(null==e.x||null==e.y)throw new Error("Coordinates properties are missing.");if((null!=e?e.width:void 0)<0||(null!=e?e.height:void 0)<0)throw new Error("Width and height must be positive integers.")},l=function(e){var t,n,i,r;return n=Math.max(Math.floor(e.width/2),1),i=Math.ceil(e.width/2),r=Math.max(Math.floor(e.height/2),1),t=Math.ceil(e.height/2),{NW:{x:e.x,y:e.y,width:n,height:r},NE:{x:e.x+n,y:e.y,width:i,height:r},SW:{x:e.x,y:e.y+r,width:n,height:t},SE:{x:e.x+n,y:e.y+r,width:i,height:t}}},i=function(e,n){var i,r,h,o;o=[],h=l(n);for(r in h)i=h[r],t(e,i)&&o.push(r);return o},h=function(e,t){var n;return(n=function(n){return e["_"+n]=e[n],Object.defineProperty(e,n,{set:function(e){return t.remove(this,!0),this["_"+n]=e,t.push(this)},get:function(){return this["_"+n]},configurable:!0})})("x"),n("y"),n("width"),n("height")},o=function(e){var t;return(t=function(t){if(null!=e["_"+t])return delete e[t],e[t]=e["_"+t],delete e["_"+t]})("x"),t("y"),t("width"),t("height")},e.prototype.clear=function(){var e,t;this.contents=[],this.oversized=[],this.size=0,t=[];for(e in this.children)t.push(this.children[e].tree=null);return t},e.prototype.push=function(e,t){return this.pushAll([e],t)},e.prototype.pushAll=function(e,t){var n,r,l,o,u,f,c,d,a,g,p,m,x,y,v,w,E,z,M,b;for(p=0,y=e.length;p<y;p++)g=e[p],s(g),t&&h(g,this);for(c=[{tree:this,elements:e}];c.length>0;){for(b=(E=c.shift()).tree,d={NW:null,NE:null,SW:null,SE:null},m=0,v=(f=E.elements).length;m<v;m++)if(u=f[m],b.size++,1!==(a=i(u,b)).length||1===b.width||1===b.height)b.oversized.push(u);else if(b.size-b.oversized.length<=b.maxElements)b.contents.push(u);else{for(o=a[0],M=b.children[o],null==d[o]&&(d[o]={tree:M.get(),elements:[]}),d[o].elements.push(u),x=0,w=(z=b.contents).length;x<w;x++)r=z[x],null==d[l=i(r,b)[0]]&&(d[l]={tree:b.children[l].get(),elements:[]}),d[l].elements.push(r);b.contents=[]}for(o in d)null!=(n=d[o])&&c.push(n)}return this},e.prototype.remove=function(e,t){var i,r;return s(e),(i=this.oversized.indexOf(e))>-1?(this.oversized.splice(i,1),this.size--,t||o(e),!0):(i=this.contents.indexOf(e))>-1?(this.contents.splice(i,1),this.size--,t||o(e),!0):!(null==(r=this.children[n(e,this)]).tree||!r.tree.remove(e,t)||(this.size--,0===r.tree.size&&(r.tree=null),0))},e.prototype.colliding=function(e,n){var r,h,l,o,u,f,c,d,a,g,p,m,x,y;for(null==n&&(n=t),s(e),u=[],l=[this];l.length>0;){for(f=0,a=(m=(y=l.shift()).oversized).length;f<a;f++)(h=m[f])!==e&&n(e,h)&&u.push(h);for(c=0,g=(x=y.contents).length;c<g;c++)(h=x[c])!==e&&n(e,h)&&u.push(h);for(0===(o=i(e,y)).length&&(o=[],e.x>=y.x+y.width&&o.push("NE"),e.y>=y.y+y.height&&o.push("SW"),o.length>0&&(1===o.length?o.push("SE"):o=["SE"])),d=0,p=o.length;d<p;d++)r=o[d],null!=y.children[r].tree&&l.push(y.children[r].tree)}return u},e.prototype.onCollision=function(e,n,r){var h,l,o,u,f,c,d,a,g,p,m,x,y;for(null==r&&(r=t),s(e),o=[this];o.length>0;){for(f=0,a=(m=(y=o.shift()).oversized).length;f<a;f++)(l=m[f])!==e&&r(e,l)&&n(l);for(c=0,g=(x=y.contents).length;c<g;c++)(l=x[c])!==e&&r(e,l)&&n(l);for(0===(u=i(e,y)).length&&(u=[],e.x>=y.x+y.width&&u.push("NE"),e.y>=y.y+y.height&&u.push("SW"),u.length>0&&(1===u.length?u.push("SE"):u=["SE"])),d=0,p=u.length;d<p;d++)h=u[d],null!=y.children[h].tree&&o.push(y.children[h].tree)}return null},e.prototype.get=function(e){return this.where(e)},e.prototype.where=function(e){var t,i,r,h,l,o,u,f,c,d,a,g,p;if("object"==typeof e&&(null==e.x||null==e.y))return this.find(function(t){var n,i;n=!0;for(i in e)e[i]!==t[i]&&(n=!1);return n});for(s(e),h=[],r=[this];r.length>0;){for(l=0,f=(d=(p=r.shift()).oversized).length;l<f;l++){i=d[l],t=!0;for(u in e)e[u]!==i[u]&&(t=!1);t&&h.push(i)}for(o=0,c=(a=p.contents).length;o<c;o++){i=a[o],t=!0;for(u in e)e[u]!==i[u]&&(t=!1);t&&h.push(i)}null!=(g=p.children[n(e,p)]).tree&&r.push(g.tree)}return h},e.prototype.each=function(e){var t,n,i,r,h,l,o,s,u,f;for(n=[this];n.length>0;){for(r=0,l=(s=(f=n.shift()).oversized).length;r<l;r++)i=s[r],"function"==typeof e&&e(i);for(h=0,o=(u=f.contents).length;h<o;h++)i=u[h],"function"==typeof e&&e(i);for(t in f.children)null!=f.children[t].tree&&n.push(f.children[t].tree)}return this},e.prototype.find=function(e){var t,n,i,r,h,l,o,s,u,f,c;for(n=[this],r=[];n.length>0;){for(h=0,o=(u=(c=n.shift()).oversized).length;h<o;h++)i=u[h],("function"==typeof e?e(i):void 0)&&r.push(i);for(l=0,s=(f=c.contents).length;l<s;l++)i=f[l],("function"==typeof e?e(i):void 0)&&r.push(i);for(t in c.children)null!=c.children[t].tree&&n.push(c.children[t].tree)}return r},e.prototype.filter=function(t){var n;return(n=function(i){var r,h,l,o,s,u,f,c,d,a,g;(h=new e({x:i.x,y:i.y,width:i.width,height:i.height,maxElements:i.maxElements})).size=0;for(r in i.children)null!=i.children[r].tree&&(h.children[r].tree=n(i.children[r].tree),h.size+=null!=(c=null!=(d=h.children[r].tree)?d.size:void 0)?c:0);for(o=0,u=(a=i.oversized).length;o<u;o++)l=a[o],(null==t||("function"==typeof t?t(l):void 0))&&h.oversized.push(l);for(s=0,f=(g=i.contents).length;s<f;s++)l=g[s],(null==t||("function"==typeof t?t(l):void 0))&&h.contents.push(l);return h.size+=h.oversized.length+h.contents.length,0===h.size?null:h})(this)},e.prototype.reject=function(e){return this.filter(function(t){return!("function"==typeof e?e(t):void 0)})},e.prototype.visit=function(e){var t,n,i;for(n=[this];n.length>0;){i=n.shift(),e.bind(i)();for(t in i.children)null!=i.children[t].tree&&n.push(i.children[t].tree)}return this},e.prototype.pretty=function(){var e,t,n,i,r,h,l;for(h="",n=function(e){var t,n,i;for(i="",t=n=e;n<=0?t<0:t>0;n<=0?++t:--t)i+="   ";return i},t=[{label:"ROOT",tree:this,level:0}];t.length>0;){h+=(i=n((l=t.shift()).level))+"| "+l.label+"\n"+i+"| ------------\n",l.tree.oversized.length>0&&(h+=i+"| * Oversized elements *\n"+i+"|   "+l.tree.oversized+"\n"),l.tree.contents.length>0&&(h+=i+"| * Leaf content *\n"+i+"|   "+l.tree.contents+"\n"),r=!1;for(e in l.tree.children)null!=l.tree.children[e].tree&&(r=!0,t.unshift({label:e,tree:l.tree.children[e].tree,level:l.level+1}));r&&(h+=i+"└──┐\n")}return h},e}()});


},{}],7:[function(require,module,exports){
module.exports={
  "palette": [
    {"name":"Chamoisee","rgb":[157,116,79]},
    {"name":"Lion","rgb":[169,138,101]},
    {"name":"Café noir","rgb":[89,60,32]},
    {"name":"Eerie black","rgb":[34,35,32]},
    {"name":"Bistre","rgb":[57,40,32]},
    {"name":"Lion","rgb":[197,154,106]},
    {"name":"Walnut brown","rgb":[90,76,62]},
    {"name":"Black bean","rgb":[60,27,13]},
    {"name":"Café noir","rgb":[64,51,32]},
    {"name":"Coyote","rgb":[140,94,45]},
    {"name":"Drab dark brown","rgb":[79,66,46]},
    {"name":"Bone","rgb":[226,220,206]},
    {"name":"Outer space","rgb":[65,75,82]},
    {"name":"Onyx","rgb":[56,61,69]},
    {"name":"Khaki","rgb":[191,178,152]},
    {"name":"Gray","rgb":[124,119,117]},
    {"name":"Raisin black","rgb":[42,34,30]},
    {"name":"Battleship gray","rgb":[140,146,152]},
    {"name":"Battleship gray","rgb":[143,136,122]},
    {"name":"Dim gray","rgb":[119,109,90]},
    {"name":"Umber","rgb":[107,88,71]},
    {"name":"Silver","rgb":[179,169,161]},
    {"name":"Liver","rgb":[97,75,67]},
    {"name":"Gunmetal","rgb":[53,60,66]},
    {"name":"Outer space","rgb":[72,82,89]},
    {"name":"Jet","rgb":[42,44,44]},
    {"name":"Dun","rgb":[203,192,179]},
    {"name":"Gray","rgb":[128,125,124]},
    {"name":"Van Dyke","rgb":[73,52,42]},
    {"name":"Khaki","rgb":[177,162,145]},
    {"name":"Dim gray","rgb":[97,97,97]},
    {"name":"Bistre","rgb":[43,36,27]},
    {"name":"Chamoisee","rgb":[150,130,97]},
    {"name":"Battleship gray","rgb":[148,138,126]},
    {"name":"Taupe","rgb":[67,62,57]},
    {"name":"Taupe gray","rgb":[152,149,148]},
    {"name":"Khaki","rgb":[195,182,165]},
    {"name":"Payne's gray","rgb":[99,110,125]},
    {"name":"Walnut brown","rgb":[105,93,78]},
    {"name":"Charcoal","rgb":[65,68,75]}

    ]
}

},{}],8:[function(require,module,exports){
const data = require('./pallete.json');

console.log(data);
const video = document.getElementById('video')

const polygon = require('polygon-tools').polygon;
const Quadtree = require("quadtree-lib")

 
//initiate button start
const click_button = document.getElementById('start');

//initiate canvas
let canvas = document.getElementById('resultado');

let context = canvas.getContext('2d');

//initiate landmarks canvas
const canvaslandmarks = document.getElementById('landmarks');
const contextlandmarks = canvaslandmarks.getContext('2d');





//canvassrm
const canvassrm = document.getElementById("canvassrm");
canvassrm.width = video.width;
canvassrm.height = video.height;
const ctxsrm = canvassrm.getContext('2d');

//canvasdtm
const canvasdtm = document.getElementById("canvasdtm");
canvasdtm.width = video.width;
canvasdtm.height = video.height;
const ctxdtm = canvasdtm.getContext('2d');


//canvasgrad
const canvasgrad = document.getElementById("canvasgrad");
canvasgrad.width = video.width;
canvasgrad.height = video.height;
const ctxgrad = canvasgrad.getContext('2d');

//canvasllm
const canvasllm = document.getElementById("canvasllm");
canvasllm.width = video.width;
canvasllm.height = video.height;
const ctxllm = canvasllm.getContext('2d');

//canvastiles
const canvastiles = document.getElementById("canvastiles");
canvastiles.width = video.width;
canvastiles.height = video.height;
const ctxtiles = canvastiles.getContext('2d');

//canvasmask
const canvasmask = document.getElementById("canvasmask");
canvasmask.width = video.width;
canvasmask.height = video.height;
const ctxmask = canvasmask.getContext('2d');

//foreground
const canvasfg = document.getElementById("foreground");
canvasfg.width = video.width;
canvasfg.height = video.height;
const ctxfg = canvasfg.getContext('2d');


 
const canvas2 = document.getElementById("canvas2");
canvas2.width = 720;
canvas2.height = 540;
const ctx = canvas2.getContext('2d');
//--------------------------------parametros--------------------------------

let tSize ; //3 5 7 10
let mSize ; //3 5 7 10
let snakeSize ; //0 2 3 5 8
let espacamento ;// 10 4 3 2 1 0
let palete;

let cordx;
let cordy;
let cordMap;
let coordsX;
//llm retas variables
let rcordx;
let rcordy;
let rcordMap = [];
let rindex = 0;
let index = 0;
let dtM;
let dtMr;
let gM;
let LLM;
let LLMr;
let w = canvas2.width;
let h = canvas2.height;
let imageData;

let jawOutline;
let nose;
let mouth;
let leftEye;
let rightEye;
let leftEyeBbrow;
let rightEyeBrow;

let nose_copy;
let rightEye_copy;
let leftEyeBbrow_copy;
let rightEyeBrow_copy;
let jawOutline_copy;

let t6;
let t0=performance.now();
let t7;
let t8;

let polygons = [];
var quadtree = new Quadtree({
	width: canvas2.width,
	height: canvas2.height
})


const model_path = "https://mosaicphpv4.beamadeira.repl.co/models";
/* const model_path = currentURL + "\\..\\models";
 */Promise.all([
	faceapi.nets.tinyFaceDetector.loadFromUri(model_path),
	faceapi.nets.faceLandmark68Net.loadFromUri(model_path),
	faceapi.nets.faceRecognitionNet.loadFromUri(model_path),
	faceapi.nets.faceExpressionNet.loadFromUri(model_path)
]).then(startVideo)

function startVideo() {
	navigator.getUserMedia(
		{ video: {} },
		stream => video.srcObject = stream,
		err => console.error(err)
	)
}
let vezes = 1;
let resizedDetections = null;


initStart();
async function initStart(){
	const click_button = document.getElementById('tirarFotoButton');
	click_button.addEventListener('click', async () => {
		handleVideo();
	});

}

async function handleVideo() {
	try {
		const canvas = faceapi.createCanvasFromMedia(video);
    const videoGrid = document.getElementById("videoGrid");

    canvas.classList.add("canvas");
		videoGrid.appendChild(canvas);
    
		const displaySize = { width: video.width, height: video.height }
		faceapi.matchDimensions(canvas, displaySize)

		setInterval(async () => {
			try {
				const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
				resizedDetections = faceapi.resizeResults(detections, displaySize)
				if (vezes >= 0) {
					//console.log(resizedDetections[0].landmarks._positions);
					vezes--;
				}
				canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
				//faceapi.draw.drawDetections(canvas, resizedDetections)
				faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
				//faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
			} catch (error) {
				//console.log("no face detected");
			}
		}, 200)
	} catch (error) {
		console.error("Error processing video:", error);
	  }
}

function cropCanvas(inputCanvas, outputCanvas, faceBox, landmarks, marginWidth = 0.05, marginHeight = 0.05) {
	// Get input and output contexts
	const outputCtx = outputCanvas.getContext('2d');

	// Get input dimensions
	const inputWidth = inputCanvas.width;
	const inputHeight = inputCanvas.height;

	// Calculate output dimensions (half of input)
	const x = 50;
	const outputWidth = x*9;
	const outputHeight = x*7;
	
	// Calculate the position of the face within the whole image
	let facePosition = {
		left: faceBox.topLeft.x,
		right: faceBox.topRight.x,
		top: faceBox.topLeft.y,
		bottom: faceBox.bottomLeft.y,
	};

	// Calculate how much to cut on each side while keeping the face in the frame
	let cutAmount = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	};
	//First we get the square around the face from the face detections (ABCD). 
	//Then a margin is added to the sides of the square (marginx and marginy) retulting in a bigger square (A'B'C'D')
	//This square is then mapped in a new image with the same size as the original image adding black bars to the sides if needed.
	// Calculate the margin around the face box
	const marginX = faceBox.width * marginWidth;
	const marginY = faceBox.height * marginHeight;

	//colocar caixa maior para nao cortar a cara
	facePosition.left -= marginX;
	facePosition.right += marginX;
	facePosition.top -= marginY;
	facePosition.bottom += marginY;

	//console.log(faceBox);
	// // Draw the cropped image on the output canvas
	outputCtx.fillStyle = "black";
	outputCtx.fillRect(0, 0, outputCanvas.width, outputCanvas.height);
	let heightfinal=facePosition.bottom - facePosition.top;
	let widthfinal=facePosition.right - facePosition.left;
  
  let cdW=outputCanvas.width;
  let cdH=outputCanvas.height;
  console.log(cdW);
  console.log(cdH);
  let cdR = cdW/cdH;
  
  let rectX=facePosition.left;
  let rectY=facePosition.top;
  let rectW=facePosition.right - facePosition.left;
  let rectH=facePosition.bottom - facePosition.top;
  
  let rectR = rectW/rectH;
  let marginBarraV;
  let marginBarraH;
  
  if (rectR > cdR) {
    // barras horiz
    fS = cdW/rectW;
    
    marginBarraH = (cdH-(rectH*fS))/2;
    
    outputCtx.drawImage(inputCanvas, rectX, rectY, rectW, rectH, 0, marginBarraH, cdW, (rectH*fS) );
    
    
  } else  {
     // barras vert.
     
    fS = cdH/rectH;
    
    marginBarraV = (cdW-(rectW*fS))/2;
    
    outputCtx.drawImage(inputCanvas, rectX, rectY, rectW, rectH, marginBarraV, 0, (rectW*fS), (cdH ));
  }
  
  //x,y corresponds in the new canvas to marginBarraV, 0
  //translate polygons coordinates
  let newLandmarks = translateLandmarks(landmarks, facePosition.left, facePosition.top, fS, marginBarraV, marginBarraH,rectX,rectY,rectW,rectH,cdW,cdH);
  
  
  return newLandmarks;
  
}

function translateLandmarks(landmarks, left, top, fS, marginBarraV, marginBarraH,rectX,rectY,rectW,rectH,cdW,cdH) {
	let newLandmarks = [];
	
	// Convert jawOutline coordinates to new canvas coordinates
for (let i = 0; i < jawOutline.length; i++) {
  jawOutline[i]._x = marginBarraV + (jawOutline[i]._x - rectX) * (rectW * fS) / rectW;
  jawOutline[i]._y = (jawOutline[i]._y - rectY) * cdH / rectH;
}

// Convert leftEye coordinates to new canvas coordinates
for (let i = 0; i < leftEye.length; i++) {
  leftEye[i]._x = marginBarraV + (leftEye[i]._x - rectX) * (rectW * fS) / rectW;
  leftEye[i]._y = (leftEye[i]._y - rectY) * cdH / rectH;
}

// Convert rightEye coordinates to new canvas coordinates
for (let i = 0; i < rightEye.length; i++) {
  rightEye[i]._x = marginBarraV + (rightEye[i]._x - rectX) * (rectW * fS) / rectW;
  rightEye[i]._y = (rightEye[i]._y - rectY) * cdH / rectH;
}

// Convert nose coordinates to new canvas coordinates
for (let i = 0; i < nose.length; i++) {
  nose[i]._x = marginBarraV + (nose[i]._x - rectX) * (rectW * fS) / rectW;
  nose[i]._y = (nose[i]._y - rectY) * cdH / rectH;
}

// Convert mouth coordinates to new canvas coordinates
for (let i = 0; i < mouth.length; i++) {
  mouth[i]._x = marginBarraV + (mouth[i]._x - rectX) * (rectW * fS) / rectW;
  mouth[i]._y = (mouth[i]._y - rectY) * cdH / rectH;
}

// Convert leftEyeBbrow coordinates to new canvas coordinates
for (let i = 0; i < leftEyeBbrow.length; i++) {
  leftEyeBbrow[i]._x = marginBarraV + (leftEyeBbrow[i]._x - rectX) * (rectW * fS) / rectW;
  leftEyeBbrow[i]._y = (leftEyeBbrow[i]._y - rectY) * cdH / rectH;
}

// Convert rightEyeBrow coordinates to new canvas coordinates
for (let i = 0; i < rightEyeBrow.length; i++) {
  rightEyeBrow[i]._x = marginBarraV + (rightEyeBrow[i]._x - rectX) * (rectW * fS) / rectW;
  rightEyeBrow[i]._y = (rightEyeBrow[i]._y - rectY) * cdH / rectH;
}


	
	return newLandmarks;
}

function setCanvasToSize(width, height, ...canvas) {
	canvas.map((ele) => {
		//console.log(ele)
		ele.width = width;
		ele.height = height;
		//console.log(ele)
	})
}
let difSizes ;
let image_data;
let image_data_fg;
const progressBar = document.getElementsByClassName('progress-bar')[0];

function updateProgressBar(x) {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + x); // You can adjust the increment as needed
}
//algorithm starts-------------------------------------------------
let handleAlgorithm = function (selected) {

	//await videoPlayPromise;

  tSize=3;
  	mSize=5;
  	snakeSize=3;
  	espacamento=1;
    difSizes=false;
  console.log(selected);
  if(selected==1){
  	tSize=3;
  	mSize=5;
  	snakeSize=3;
  	espacamento=1;
    difSizes=false;
    console.log("entrou")
  }else if(selected==2){
    tSize=5;
  	mSize=5;
  	snakeSize=3;
  	espacamento=1;
      difSizes = true;

    console.log("entrou2")
  }else if(selected==3){
    tSize=5;
  	mSize=5;
  	snakeSize=3;
  	espacamento=2;
      difSizes = true;

    console.log("entrou3")
  }


	//console.log(mSize,espacamento,snakeSize, tSize);
	//transform detections into guidelines

	context.drawImage(video, 0, 0, canvas2.width, canvas2.height);
  try{
  	jawOutline = resizedDetections[0].landmarks.getJawOutline()
  	nose = resizedDetections[0].landmarks.getNose()
  	mouth = resizedDetections[0].landmarks.getMouth()
  	leftEye = resizedDetections[0].landmarks.getLeftEye()
  	rightEye = resizedDetections[0].landmarks.getRightEye()
  	leftEyeBbrow = resizedDetections[0].landmarks.getLeftEyeBrow()
  	rightEyeBrow = resizedDetections[0].landmarks.getRightEyeBrow()
  }catch{
    //refresh php page
    location = location.href;
  }

	cropCanvas(canvas, canvas2, resizedDetections[0].detection.box, resizedDetections[0].landmarks._positions, 0.3, 0.5);
  
  const animation = document.getElementById('anim');
  animation.style.display = "";
  const bar = document.getElementById('bar');
  bar.removeAttribute("hidden");
  const progressBar = document.getElementsByClassName('progress-bar')[0]

  
  let computedStyle = getComputedStyle(progressBar)
  let width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)

  
  setTimeout(function(){
  
    //hide video
                
            
    
  //get elementbyid e draw image na canvas showcrop e ver se aparece
  
    
  	canvas = canvas2;
  	context = ctx;
  
    
    //add progress bar
    //atualizar progress bar ao longo do algoritmo
  
  	imageData = context.getImageData(0, 0, canvas2.width, canvas2.height);
  
  	image_data_url = canvas2.toDataURL('image/jpeg');
  
  
  	//let landmarkPositions = resizedDetections[0].landmarks._positions;
  
  	// or get the positions of individual contours,
  	// only available for 68 point face ladnamrks (FaceLandmarks68)
  
  	let jawOutline2 = [];
  
  	//convert jawoutline coordinates ._x ._y to x y
  	for (let i = 0; i < jawOutline.length; i++) {
  		jawOutline2.push([jawOutline[i]._x, jawOutline[i]._y]);
  	}
  
  
  	//-------------------snakesize------------------------------------------------------
  	//scale jawOutline using polygonScale function
  	//(2*tSize)-(2*0.85))/(2*tSize) 
  	//2--->4
  	//3--->
  
  	//(2 * tSize + (2 * (snakeSize)))) / (2 * tSize)
  	jawOutline2 = geometric.polygonScale(jawOutline2, (1+((2*tSize*(2*(snakeSize-1))))/100));
  
  
  	//convert jawoutline coordinates x y to ._x ._y
  	for (let i = 0; i < jawOutline.length; i++) {
  		jawOutline[i]._x = jawOutline2[i][0];
  		jawOutline[i]._y = jawOutline2[i][1];
  	}
  
  	/* canvaslandmarks.width = canvas2.width;
  	canvaslandmarks.height = canvas2.height;
  	canvasfg.width = canvas2.width;
  	canvasfg.height = canvas2.height; */
  
  	//draw consts in canvas
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(jawOutline[0]._x, jawOutline[0]._y);
  	ctxfg.moveTo(jawOutline[0]._x, jawOutline[0]._y);
  	for (let i = 1; i < jawOutline.length; i++) {
  		contextlandmarks.lineTo(jawOutline[i]._x, jawOutline[i]._y);
  		ctxfg.lineTo(jawOutline[i]._x, jawOutline[i]._y);
  
  	}
  	//draw arc that connects the last point to the first
  	let aux = mediumPoint(jawOutline[16]._x, jawOutline[16]._y, jawOutline[0]._x, jawOutline[0]._y)
  	contextlandmarks.arc(aux[0], aux[1],
  		euclideanDistance(jawOutline[16]._x, jawOutline[16]._y, jawOutline[0]._x, jawOutline[0]._y) / 2,
  		0, 3, true);
  	ctxfg.arc(aux[0], aux[1],
  		euclideanDistance(jawOutline[16]._x, jawOutline[16]._y, jawOutline[0]._x, jawOutline[0]._y) / 2,
  		0, 3, true);
  
  
  
  
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "red";
  	ctxfg.fill();
  
  	let newnose = [];
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(nose[0]._x, nose[0]._y);
  	ctxfg.moveTo(nose[0]._x, nose[0]._y);
  	newnose.push([nose[0]._x, nose[0]._y]);
  	for (let i = 4; i < nose.length; i++) {
  		contextlandmarks.lineTo(nose[i]._x, nose[i]._y);
  		ctxfg.lineTo(nose[i]._x, nose[i]._y);
  		newnose.push([nose[i]._x, nose[i]._y]);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  
  	let newmouth = [];
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(mouth[0]._x, mouth[0]._y);
  	ctxfg.moveTo(mouth[0]._x, mouth[0]._y);
  	newmouth.push([mouth[0]._x, mouth[0]._y]);
  	for (let i = 1; i < 13; i++) {
  		contextlandmarks.lineTo(mouth[i]._x, mouth[i]._y);
  		ctxfg.lineTo(mouth[i]._x, mouth[i]._y);
  		newmouth.push([mouth[i]._x, mouth[i]._y]);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(leftEye[0]._x, leftEye[0]._y);
  	ctxfg.moveTo(leftEye[0]._x, leftEye[0]._y);
  	for (let i = 1; i < leftEye.length; i++) {
  		contextlandmarks.lineTo(leftEye[i]._x, leftEye[i]._y);
  		ctxfg.lineTo(leftEye[i]._x, leftEye[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(rightEye[0]._x, rightEye[0]._y);
  	ctxfg.moveTo(rightEye[0]._x, rightEye[0]._y);
  	for (let i = 1; i < rightEye.length; i++) {
  		contextlandmarks.lineTo(rightEye[i]._x, rightEye[i]._y);
  		ctxfg.lineTo(rightEye[i]._x, rightEye[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(leftEyeBbrow[0]._x, leftEyeBbrow[0]._y);
  	ctxfg.moveTo(leftEyeBbrow[0]._x, leftEyeBbrow[0]._y);
  	for (let i = 1; i < leftEyeBbrow.length; i++) {
  		contextlandmarks.lineTo(leftEyeBbrow[i]._x, leftEyeBbrow[i]._y);
  		ctxfg.lineTo(leftEyeBbrow[i]._x, leftEyeBbrow[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	contextlandmarks.beginPath();
  	ctxfg.beginPath();
  	contextlandmarks.moveTo(rightEyeBrow[0]._x, rightEyeBrow[0]._y);
  	ctxfg.moveTo(rightEyeBrow[0]._x, rightEyeBrow[0]._y);
  	for (let i = 1; i < rightEyeBrow.length; i++) {
  		contextlandmarks.lineTo(rightEyeBrow[i]._x, rightEyeBrow[i]._y);
  		ctxfg.lineTo(rightEyeBrow[i]._x, rightEyeBrow[i]._y);
  	}
  	contextlandmarks.closePath();
  	ctxfg.closePath();
  	contextlandmarks.lineWidth = 1;
  	contextlandmarks.strokeStyle = 'red';
  	contextlandmarks.stroke();
  	ctxfg.fillStyle = "blue";
  	ctxfg.fill();
  
  	//get image data
   image_data = contextlandmarks.getImageData(0, 0, canvas2.width, canvas2.height);
  	 image_data_fg = ctxfg.getImageData(0, 0, canvas2.width, canvas2.height);
  	
  	leftEye_copy = transformCoordinates(leftEye);
  	rightEye_copy = transformCoordinates(rightEye);
  	leftEyeBbrow_copy = transformCoordinates(leftEyeBbrow);
  	rightEyeBrow_copy = transformCoordinates(rightEyeBrow);
  	jawOutline_copy = transformCoordinates(jawOutline);
  
  	console.log(newnose);
  	let centroid = geometric.polygonCentroid(newnose);
  	console.log(centroid);
  	let bounds = geometric.polygonBounds(newnose);
  	console.log(bounds);
  	let bound_a = bounds[0];
  	let bound_b = bounds[1];
  	//guidelines na quadtree e nos polygons
  	polygons.push(newnose);
  	cores.push([null, null, null, null]);
  
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: newnose,
  		index: polygons.length - 1
  	}, true)
  
  
  
  	centroid = geometric.polygonCentroid(newmouth);
  	polygons.push(newmouth);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(newmouth);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: newmouth,
  		index: polygons.length - 1
  	}, true)
  
  	centroid = geometric.polygonCentroid(leftEye_copy);
  	polygons.push(leftEye_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(leftEye_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: leftEye_copy,
  		index: polygons.length - 1
  	}, true)
  
  
  
  	centroid = geometric.polygonCentroid(rightEye_copy);
  	polygons.push(rightEye_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(rightEye_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: rightEye_copy,
  		index: polygons.length - 1
  	}, true)
  
  
  	centroid = geometric.polygonCentroid(leftEyeBbrow_copy);
  	polygons.push(leftEyeBbrow_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(leftEyeBbrow_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: leftEyeBbrow_copy,
  		index: polygons.length - 1
  	}, true)
  
  
  	centroid = geometric.polygonCentroid(rightEyeBrow_copy);
  	polygons.push(rightEyeBrow_copy);
  	cores.push([null, null, null, null]);
  	bounds = geometric.polygonBounds(rightEyeBrow_copy);
  	bound_a = bounds[0];
  	bound_b = bounds[1];
  	quadtree.push({
  		x: centroid[0],      //Mandatory
  		y: centroid[1],      //Mandatory
  		width: Math.abs(bound_b[0] - bound_a[0]),   //Optional, defaults to 1
  		height: Math.abs(bound_a[1] - bound_b[1]),  //Optional, defaults to 1
  		points: rightEyeBrow_copy,
  		index: polygons.length - 1
  	}, true)
  
  	//polygons.push(jawOutline_copy);
  
  	//function to work on guidelines, that is, cordmap[i][j] = 1 if image_data[i][j] is red, else 0
  	//Start measuring time
  },0);
    
      updateProgressBar(10)
      
      setTimeout(function(){

  		initializeGuidelines(image_data.data, canvas2.width, canvas2.height);
  		//End measuring time of initializeGuidelines
  		let t1 = performance.now();
  		//console.log("Call to initializeGuidelines took " + (t1 - t0) + " milliseconds.")
  		drawCordMap(canvas2.width, canvas2.height);
  		//End measuring time of drawGuideLines
  		let t2 = performance.now();
  		//console.log("Call to drawGuideLines took " + (t2 - t1) + " milliseconds.")
        
  		calculatedtM(coordsX, w, h)
  		calculatedtMr(rcordx, w, h)
  		//End measuring time of calculatedtM
  		let t3 = performance.now();
  		//console.log("Call to calculatedtM took " + (t3 - t2) + " milliseconds.")
        updateProgressBar(20)

         },0);
    
      
      
      setTimeout(function(){
  		calculategM(dtM, w, h)
  		//End measuring time of calculategM
  		let t4 = performance.now();
  		//console.log("Call to calculategM took " + (t4 - t3) + " milliseconds.")
  		calculateLLM(dtM, tSize, w, h, image_data_fg)
  		//End measuring time of calculateLLM
  		let t5 = performance.now();
  		//console.log("Call to calculateLLM took " + (t5 - t4) + " milliseconds.")
  		drawLLM(LLMr, w, h)
  		//End measuring time of drawLLM
  		t6 = performance.now();
  		//console.log("Call to drawLLM took " + (t6 - t5) + " milliseconds.")
  		drawTiles3(gM, w, h, tSize,image_data_fg);
  		//End measuring time of drawTiles3
  		
  /* 		console.log("end");
  		console.log("guidelines,crop,facedetection", (t1 - t0)+(t2 - t1));
  		console.log("matrices",(t3 - t2) +(t4 - t3)+(t5 - t4)+(t6 - t5));
  		console.log("generate tiles",(t7 - t6));
  		console.log("cut tiles",(t8 - t7));
  		console.log("color tiles",(t10 - t8));
  		console.log("total",(t10 - t0));
  		console.log("poly",polygons.length); */
  	//drawTriangles(gM,w,h);
  },0);
};

//function to calculate euclidean distance between two points
function euclideanDistance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

//function to calculate the medium point between two points
function mediumPoint(x1, y1, x2, y2) {

	return [(x1 + x2) / 2, (y1 + y2) / 2];
}

function initializeGuidelines(image_data, w, h) {

	cordx = [];
	cordy = [];
	cordMap = [];
	index = 0;

	//llm retas variables
	rcordx = [];
	rcordy = [];
	rcordMap = [];
	rindex = 0;

	//iterate through image data and find red pixels



	for (let i = 0; i < h; i++) {
		cordMap[i] = new Array(w)
		rcordMap[i] = new Array(w)

		for (let j = 0; j < w; j++) {
			//check if is not guideline pixel
			//if imagedata[i][j] is red, then image_data[i][j] = 255
			if (i == 0 || j == 0 || i == h - 1 || j == w - 1) {
				rcordMap[i][j] = 1;
				rcordx[rindex] = i;
				rcordy[rindex] = j;

				rindex++;
				cordMap[i][j] = 0;
				/*  cordx[index] = i;
				 cordy[index] = j;
				 index++; */
			} else if (image_data[(((i * w) + j) * 4)] == 255 && image_data[(((i * w) + j) * 4) + 1] == 0 && image_data[(((i * w) + j) * 4) + 2] == 0) {
				cordMap[i][j] = 1;
				cordx[index] = i;
				cordy[index] = j;
				index++;
			} else {
				cordMap[i][j] = 0;
				rcordMap[i][j] = 0;

			}
		}
	}
	//console.log(rcordx, rcordy);
}

//function to draw cordmap
function drawCordMap(w, h) {
	let guidelineImageData = new Uint8ClampedArray(w * h * 4)

	for (let i = 0; i < rcordx.length; i++) {
		let guidex = rcordx[i];
		let guidey = rcordy[i];
		guidelineImageData[((guidex * w) + guidey) * 4] = 0;
		guidelineImageData[(((guidex * w) + guidey) * 4) + 1] = 0;
		guidelineImageData[(((guidex * w) + guidey) * 4) + 2] = 0;
		guidelineImageData[(((guidex * w) + guidey) * 4) + 3] = 255;
	}
	//console.log(guidelineImageData)
	const newImageData = new ImageData(guidelineImageData, w, h);
	ctxsrm.putImageData(newImageData, 0, 0);
}

//--------------------calculate dtM--------------------

function calculatedtM(coordsX, w, h) {
	//calculate the minimum distance between the pixels in the image and the guidelines
	dtM = new Array(h);
	for (let i = 0; i < h; i++) {
   
		dtM[i] = new Array(w)
		for (let j = 0; j < w; j++) {
      

			dtM[i][j] = Math.floor(getMinDistance(i, j, coordsX, h, w))
		}
     
    
      
     
	}
	//console.log(dtM)
	for (let i = 0; i < h; i = i + 10) {
		for (let j = 0; j < w; j = j + 10) {
			if (dtM[i][j] != 0) {
				ctxdtm.font = "6px serif";
				ctxdtm.fillText(Math.round(dtM[i][j]), j, i);
			}
		}
	}
	//console.log("dtm", dtM)




}

function calculatedtMr(rcordx, w, h) {
	dtMr = new Array(h);
	for (let i = 0; i < h; i++) {
		dtMr[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			dtMr[i][j] = Math.floor(mindistretas(i, j, coordsX, h, w))
		}
	}

	//console.log("dtmr", dtMr)
}

function mindistretas(x, y, coordsX, h, w) {

	//euclidian dinstance between  pixel 0,0 and pixel h-1,w-1
	let minDistance = Math.pow((h), 2) + Math.pow((w), 2)

	//iterate over cordsX and cordsY and check the distance between the pixel and that guideline
	for (let i = 0; i < rcordx.length; i++) {
		//calculate the distance between the pixel and the guideline
		let distance = Math.pow((x - rcordx[i]), 2) + Math.pow((y - rcordy[i]), 2)
		//minDistance = (distance < minDistance ) * distance + (distance >= minDistance) * minDistance;
		if (distance < minDistance) {
			minDistance = distance
		}
	}
	return Math.sqrt(minDistance)
}

function getMinDistance(x, y, coordsX, h, w) {

	//euclidian dinstance between  pixel 0,0 and pixel h-1,w-1
	let minDistance = Math.pow((h), 2) + Math.pow((w), 2)

	//iterate over cordsX and cordsY and check the distance between the pixel and that guideline
	for (let i = 0; i < cordx.length; i++) {
		//calculate the distance between the pixel and the guideline
		let distance = Math.pow((x - cordx[i]), 2) + Math.pow((y - cordy[i]), 2)
		//minDistance = (distance < minDistance ) * distance + (distance >= minDistance) * minDistance;
		if (distance < minDistance) {
			minDistance = distance
		}
	}
	return Math.sqrt(minDistance)
}

//--------------------calculate gM--------------------
let gMr;
function calculategM(dtM, w, h) {
	//declare gM
	gM = new Array(h);
	for (let i = 0; i < h; i++) {
		gM[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			//check if the indices are within the bounds of dtM before accessing them
			if (i > 0 && i < h - 1 && j > 0 && j < w - 1) {
				//get calc dtM[i][j+1]-dtM[i][j-1]
				let calc = (dtM[i][j + 1] - dtM[i][j - 1])
				//get calc dtM[i+1][j]-dtM[i-1][j]
				let calc2 = (dtM[i + 1][j] - dtM[i - 1][j])
				//get the arctan of the division
				gM[i][j] = Math.atan(calc2 / calc)
				//gM[i][j] = (Math.atan2(calc, calc2) % (2 * Math.PI))

			} else {  //set to nan if indices are out of bounds 
				gM[i][j] = NaN;
			}
		}
	}
	//console.log(gM)
	//drawgM(gM, w, h)
	drawTriangles(gM, w, h);

	gMr = new Array(h);
	for (let i = 0; i < h; i++) {
		gMr[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			//check if the indices are within the bounds of dtM before accessing them
			if (i > 0 && i < h - 1 && j > 0 && j < w - 1) {
				//get calc dtM[i][j+1]-dtM[i][j-1]
				let calc = (dtMr[i][j + 1] - dtMr[i][j - 1])
				//get calc dtMr[i+1][j]-dtMr[i-1][j]
				let calc2 = (dtMr[i + 1][j] - dtMr[i - 1][j])
				//get the arctan of the division
				gMr[i][j] = Math.atan(calc2 / calc)
				//gMr[i][j] = (Math.atan2(calc, calc2) % (2 * Math.PI))

			} else {  //set to nan if indices are out of bounds 
				gMr[i][j] = NaN;
			}
		}
	}

}

function drawTriangles(gM, w, h) {
	//draw the triangles usind drawShape and gM matrix
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			//check if is not guideline pixel
			if (gM[i][j] != undefined && gM[i][j] != null && !isNaN(gM[i][j])) {
				//draw the shape
				ctxgrad.save();
				ctxgrad.translate(j, i);
				//ctxgrad.rotate(90+45);
				ctxgrad.rotate(gM[i][j]);
				//ctxgrad.font = "6px Arial";
				//ctxgrad.strokeText((Math.round((gM[i][j] + Number.EPSILON) * 1000) / 1000) + "", 0, 0);
				drawShape(5);
				ctxgrad.restore();
			}
			j = j + tSize + 1;
		}
		i = i + tSize + 1;
	}
}

function drawShape(radius) {
	ctxgrad.beginPath();
	ctxgrad.save();
	ctxgrad.translate(1, radius);
	ctxgrad.moveTo(0, 0);
	ctxgrad.lineTo(0, 0 - radius);
	ctxgrad.rotate(Math.PI / 6);
	ctxgrad.lineTo(0, 0 - radius);
	ctxgrad.rotate(Math.PI / 6);
	ctxgrad.restore();
	ctxgrad.fill();
	ctxgrad.closePath();
	ctxgrad.stroke();


}

//--------------------calculate LLM--------------------

function calculateLLM(dtM, tSize, w, h, image_data_fg) {
	//declare LLM cara
	LLM = new Array(h);
	let aux_size = tSize;
	for (let i = 0; i < h; i++) {
		LLM[i] = new Array(w)
		for (let j = 0; j < w; j++) {

			//if [i][j] inside mouth nose or eyes (if its blue) then use math.floor(tSize/2)
      if(difSizes==true){
  			if (image_data_fg.data[(i * w + j) * 4 + 2] == 255) {
  				aux_size = Math.floor(tSize * 0.60);
  			} else {
  				aux_size = tSize;
  			}  
      }else{
        aux_size = tSize;
      }
			//if module of dtm(i,j) , 2*tSize is 0 then LLM(i,j) = 1
			if (dtM[i][j] % (2 * aux_size) == 0) {
				LLM[i][j] = 1
			} else //if module of dtm(i,j), 2*aux_size is equal to aux_size then LLM(i,j) = 2
				if (dtM[i][j] % (2 * aux_size) == aux_size) {
					LLM[i][j] = 2
				} else { //LLM(i,j) = 0
					LLM[i][j] = 0;
				}
		}
	}


	//llm linhas retas 
	//calc dtm p linhas retas
	//calc llm p linhas retas
	LLMr = new Array(h);

	for (let i = 0; i < h; i++) {
		LLMr[i] = new Array(w)
		for (let j = 0; j < w; j++) {
			//if module of dtm(i,j) , 2*tSize is 0 then LLMr(i,j) = 1
			if (dtMr[i][j] % (2 * tSize) == 0) {
				LLMr[i][j] = 1
			} else //if module of dtmr(i,j), 2*tSize is equal to tSize then LLMr(i,j) = 2
				if (dtMr[i][j] % (2 * tSize) == tSize) {
					LLMr[i][j] = 2
				} else { //LLMr(i,j) = 0
					LLMr[i][j] = 0;
				}
		}
	}
	//scale poligon cara  

	//juntar llms
	//if llm retas point is inside poligons da cara substituir por llm cara
	//if imagedata is red, llmr[i][j] =llm[i][j]
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			r = image_data_fg.data[(i * w + j) * 4]; // red value
			g = image_data_fg.data[(i * w + j) * 4 + 1]; // green value
			b = image_data_fg.data[(i * w + j) * 4 + 2]; // blue value (set to 0)
			a = image_data_fg.data[(i * w + j) * 4 + 3]; // alpha value (set to 255)

			if (r == 255 || b == 255) {
				LLMr[i][j] = LLM[i][j]
				gMr[i][j] = gM[i][j]
			}
		}
	}

	//switch llmr and llm
	LLM = LLMr;
	gM = gMr;


}

function drawLLM(LLM, w, h) {
	//draw the LLM on the canvas knowing that the value 1 is black and the value 2 is green 
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			if (LLM[i][j] == 1) {
				ctxllm.fillStyle = 'black'
				ctxllm.fillRect(j, i, 1, 1)
				/* ctxmask.fillStyle = 'black'
				ctxmask.fillRect(j, i, 1, 1) */
				//ctxtiles.fillStyle = 'red'
				//ctxtiles.fillRect(j, i, 1, 1)
			} else if (LLM[i][j] == 2) {
				ctxllm.fillStyle = 'green'
				ctxllm.fillRect(j, i, 1, 1)
				//ctxtiles.fillStyle = 'green'
				//ctxtiles.fillRect(j, i, 1, 1)
			} else {
				ctxllm.fillStyle = 'white'
				ctxllm.fillRect(j, i, 1, 1)
			}
		}
	}
}

let coordinates = [];

let cores = [];
function drawSquare(gM, tSize, i, j, h, w, image_data_fg) {

	ctxtiles.save();
	ctxtiles.beginPath();
	// move the rotation point to the center of the rect
	ctxtiles.translate(j, i);
	ctxtiles.rotate(gM[i][j]);

 if(difSizes==true){
  	  if (image_data_fg.data[(i * w + j) * 4 + 2] == 255) {
		aux_size = Math.floor(tSize * 0.60);
	} else {
		aux_size = tSize;
	}
	tSize = aux_size;
	mSize = aux_size;    
 }

	ctxtiles.translate(tSize, mSize);
	// draw the rect on the transformed context
	// Note: after transforming [0,0] is visually [x,y]
	//       so the rect needs to be offset accordingly when drawn
	//    ctxtiles.fillStyle = "black";
	r = imageData.data[(i * w + j) * 4]; // red value
	g = imageData.data[(i * w + j) * 4 + 1]; // green value
	b = imageData.data[(i * w + j) * 4 + 2]; // blue value (set to 0)
	a = imageData.data[(i * w + j) * 4 + 3]; // alpha value (set to 255)
	ctxtiles.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	//console.log(ctxtiles.fillStyle)
	ctxtiles.fillRect(-tSize * 2, -mSize * 2, tSize * 2, mSize * 2);
	// restore the context to its untranslated/unrotated state
	ctxtiles.restore();

	//calculate 4 vertices of square centered in i,j and with side 2*tSize
	let angle = gM[i][j];
	if (isNaN(angle))
		angle = 0;
	let Cx = j, Cy = i;
	let dot1 = [Cx - tSize, Cy - mSize];
	let dot2 = [Cx - tSize, Cy + mSize];
	let dot3 = [Cx + tSize, Cy + mSize];
	let dot4 = [Cx + tSize, Cy - mSize];
	let rotatedPoints = [
		[
			Math.cos(angle) * (dot1[0] - Cx) - Math.sin(angle) * (dot1[1] - Cy) + Cx,
			Math.sin(angle) * (dot1[0] - Cx) + Math.cos(angle) * (dot1[1] - Cy) + Cy
		], [
			Math.cos(angle) * (dot2[0] - Cx) - Math.sin(angle) * (dot2[1] - Cy) + Cx,
			Math.sin(angle) * (dot2[0] - Cx) + Math.cos(angle) * (dot2[1] - Cy) + Cy
		], [
			Math.cos(angle) * (dot3[0] - Cx) - Math.sin(angle) * (dot3[1] - Cy) + Cx,
			Math.sin(angle) * (dot3[0] - Cx) + Math.cos(angle) * (dot3[1] - Cy) + Cy
		], [
			Math.cos(angle) * (dot4[0] - Cx) - Math.sin(angle) * (dot4[1] - Cy) + Cx,
			Math.sin(angle) * (dot4[0] - Cx) + Math.cos(angle) * (dot4[1] - Cy) + Cy
		]
	]


	//instead of drawing the square, save it in a matrix as a list of points(polygon) 
	/* let Px = Math.cos(angle) * (j - Cx) - Math.sin(angle) * (i - Cy) + Cx;
	let Py = Math.sin(angle) * (j - Cx) + Math.cos(angle) * (i - Cy) + Cy; */
	//console.log("points", [dot1, dot2, dot3, dot4], "rotatedPoints", rotatedPoints, i, j, angle)

	// add rotated points to polygons array
	polygons.push(rotatedPoints);
	cores.push([r, g, b, a]);

	quadtree.push({
		x: Cx,      //Mandatory
		y: Cy,      //Mandatory
		width: tSize * 3,   //Optional, defaults to 1
		height: mSize * 3,  //Optional, defaults to 1
		points: rotatedPoints,
		index: polygons.length - 1
	}, true) //Optional, defaults to false

	/* if (asjdnask > 0) {
		checkoverlaps(i, j, tSize, h,  ;
	}
	asjdnask--; */



}


function checksquare(i, j, Cx, Cy, Rx, Ry) {
	let pertence = false;

	//check if the point ij is inside the drawn square
	let Vy, Vx;

	/* Px=j;
	Py=i; */

	/*  console.log("gm",Cx,Cy);
	 console.log("gmlength",gM.length,"gM[0]length",gM[0].length);
	 console.log("CXCY GM",gM[Cy][Cx]); */
	let angle = gM[Cy][Cx] * (Math.PI / 180);
	//apply angle rotation to point ij
	let Px = Math.cos(angle) * (j - Cx) - Math.sin(angle) * (i - Cy) + Cx;
	let Py = Math.sin(angle) * (j - Cx) + Math.cos(angle) * (i - Cy) + Cy;
	//distance between the center of the square and the point Px,Py
	let dist = Math.sqrt(Math.pow(Cx - Px, 2) + Math.pow(Cy - Py, 2));

	if (dist <= Rx[0] && dist <= Ry[1]) {
		//console.log(i,j,Vx[0] <= Rx[0] && Vy[1] <= Ry[1],Vx,Vy,Rx,Ry,Cx,Cy)
		LLM[i][j] = 3;
		//console.log("llmcheck", i, j);

		if (i - 1 >= 0) {
			//check pixel on the top
			if (LLM[i - 1][j] == 2) {
				checksquare(i - 1, j, Cx, Cy, Rx, Ry);
			}
		}
		if (i - 1 >= 0 && j + 1 < LLM[0].length) {
			//check pixel on the top right
			if (LLM[i - 1][j + 1] == 2) {
				checksquare(i - 1, j + 1, Cx, Cy, Rx, Ry);
			}
		}
		//check pixel on the right
		if (j + 1 < LLM[0].length) {
			if (LLM[i][j + 1] == 2) {
				checksquare(i, j + 1, Cx, Cy, Rx, Ry);
			}
		}
		if (i + 1 < LLM.length && j + 1 < LLM[0].length) {
			//check pixel on the bottom right
			if (LLM[i + 1][j + 1] == 2) {
				checksquare(i + 1, j + 1, Cx, Cy, Rx, Ry);
			}
		}
		if (i + 1 < LLM.length) {
			//check pixel on the bottom
			if (LLM[i + 1][j] == 2) {
				checksquare(i + 1, j, Cx, Cy, Rx, Ry);
			}
		}
		if (i + 1 < LLM.length && j - 1 >= 0) {
			//check pixel on the bottom left
			if (LLM[i + 1][j - 1] == 2) {
				checksquare(i + 1, j - 1, Cx, Cy, Rx, Ry);
			}
		}

		if (j - 1 >= 0) {
			//check pixel on the left
			if (LLM[i][j - 1] == 2) {
				checksquare(i, j - 1, Cx, Cy, Rx, Ry);
			}
		}
		if (i - 1 >= 0 && j - 1 >= 0) {
			//check pixel on the top left
			if (LLM[i - 1][j - 1] == 2) {
				checksquare(i - 1, j - 1, Cx, Cy, Rx, Ry);
			}
		}


	} else {
		return;
	}

}

const swapElements = function (array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
	return array;
};


let polyEqualsPoly = function (poly_a, poly_b) {
	//make sure poly_a and poly_b are not the same points and are both defined
	if (poly_a == undefined || poly_b == undefined) { return undefined }
	else if (poly_a.length != poly_b.length) { return false; }
	else if (poly_a.length == poly_b.length) {
		let equal = true;
		for (let i = 0; i < poly_a.length; i++) {
			if (poly_a[i][0] != poly_b[i][0] || poly_a[i][1] != poly_b[i][1]) {
				equal = false;
				break;
			}
		}
		return equal;
	}
	else { return false; }
}
//make sure poly_a and poly_b are not the same points
let intersectionPolygon = function (polygon_a, polygon_b) { return polygon.intersection(polygon_a, polygon_b) };


let point_prints = 20;
let intersection_prints = 20;
let lines_prints = 20;
let intersectionLine = function (polygon_a, polygon_b, inter_poly) {

	//if it's not defined, it means that the polygons don't intersect so we can return an empty array
	if (inter_poly == undefined) { return []; }
	let linePoints = [];
	let EPSILON = 0.00001;

	//check if interpoly is bigger than 2 points
	if (inter_poly.length <= 2) return [];

	for (let point of inter_poly) {
		//check if point is on both polygons at the same time	
		let intersects = geometric.pointOnPolygon(point, polygon_a, EPSILON) && geometric.pointOnPolygon(point, polygon_b, EPSILON);
		if (intersects) {
			linePoints.push(point);
		}
	}
	if (lines_prints > 0) {
		// console.log("linePoints", linePoints);
		lines_prints--;
	}
	if (linePoints.length == 0 || linePoints.length > 2 || linePoints == undefined) return [];

	return linePoints;
}
let cutSquareByLine = function (intline, polygon_a, polygon_b, inter_poly, new_poly, EPSILON) {

	for (let i = 0; i < polygon_a.length; i++) {
		let vertice_a = polygon_a[i];
		let vertice_b = polygon_a[(i + 1) % polygon_a.length];

		let line = [vertice_a, vertice_b];
		//verify if if intline[0] is in line [a,b] using geometric.pointOnLine
		let onLine1 = geometric.pointOnLine(intline[0], line, EPSILON);
		let onLine2 = geometric.pointOnLine(intline[1], line, EPSILON);

		if ((onLine1 && !onLine2 && !geometric.pointInPolygon(vertice_a, polygon_b, EPSILON))) {
			//add vertice_a and intline points to new_poly_a
			new_poly.push(vertice_a);
			new_poly.push(intline[0]);
			new_poly.push(intline[1]);
		} else if (!onLine1 && onLine2 && !geometric.pointInPolygon(vertice_a, polygon_b, EPSILON)) {
			//add vertice_a and intline points to new_poly
			new_poly.push(vertice_a);
			new_poly.push(intline[1]);
			new_poly.push(intline[0]);
		} else if (!geometric.pointInPolygon(vertice_a, polygon_b, EPSILON)) {
			new_poly.push(vertice_a);
		}

	}
	return new_poly;
}


let cutSquaresByLine = function (intline, polygon_a, polygon_b, inter_poly) {
	let EPSILON = 0.1;

	//console.log("polygon a e b",polygon_a, polygon_b)

	let new_poly_a = cutSquareByLine(intline, polygon_a, polygon_b, inter_poly, [], EPSILON);
	let new_poly_b = cutSquareByLine(intline, polygon_b, polygon_a, inter_poly, [], EPSILON);

	if (new_poly_a.length <= 2) {
		new_poly_a = polygon_a;
	}
	if (new_poly_b.length <= 2) {
		new_poly_b = polygon_b;
	}

	//return new_poly_a and new_poly_b in polygons array
	return [new_poly_a, new_poly_b];

}



function cuttilesstepone(poly_a, poly_b) {
	//iterate over landmarks
	//if polygon intercects landmark, get points of intersection
	//console.log("polygon a e b",poly_a, poly_b)
	//make sure poly_a and poly_b are not the same points and are both defined
	let areEqual = polyEqualsPoly(poly_a, poly_b);
	if (areEqual == undefined || areEqual == true) { return; }
	let inter_poly;
	try {
		//console.log(poly_a, poly_b);
		inter_poly = intersectionPolygon(poly_a, poly_b)[0];
	} catch (error) {
		console.log("erro")
		return;
	}

	let intersection_line = intersectionLine(poly_a, poly_b, inter_poly);
	if (intersection_line.length < 2) return;
	// console.log("intersection_line", intersection_line);
	let cut_squares = cutSquaresByLine(intersection_line, poly_a, poly_b, inter_poly);
	if (cut_squares.length == 0 || cut_squares.length > 2) return;
	//console.log("cut_squares", cut_squares);
	//save cut_squares in polygons array

	return [cut_squares[0], cut_squares[1]];

}



//function to transform coordinates from .x and .y to [x,y] for one polygon
function transformCoordinates(polygon) {
	let new_polygon = [];
	for (var i = 0; i < polygon.length; i++) {
		new_polygon.push([polygon[i].x, polygon[i].y]);
	}
	return new_polygon;
}

let auxtemp;
let auxtemp2;

function cutSquares(h, w) {
let x=20;
	quadtree.each(function (element) {
		quadtree.onCollision({
			x: element.x,
			y: element.y,
			width: element.width, //Optional
			height: element.height, //Optional
			points: element.points, //Optional
			index: element.index
		}, function (item) {

      setTimeout(function(){
      updateProgressBar(x)

        
			let poly_a = polygons[element.index];
			let poly_b = polygons[item.index];

			//trim tiles against guidelines
			//transform coordinates of landmarks
			//make sure poly_a and poly_b are not the same points and are both defined
			let areEqual = polyEqualsPoly(poly_a, poly_b);
			if (areEqual == undefined || areEqual == true) { return; }
			let inter_poly;
			try {
				inter_poly = intersectionPolygon(poly_a, poly_b)[0];
			} catch (error) {
				console.log("erro")

				return;
			}

			let intersection_line = intersectionLine(poly_a, poly_b, inter_poly);
			if (intersection_line.length < 2) return;
			// console.log("intersection_line", intersection_line);
			let cut_squares = cutSquaresByLine(intersection_line, poly_a, poly_b, inter_poly);
			if (cut_squares.length == 0 || cut_squares.length > 2) return;
			//console.log("cut_squares", cut_squares);
			//save cut_squares in polygons array
			let ordered_element = geometric.polygonWind(cut_squares[0]);
			let ordered_item = geometric.polygonWind(cut_squares[1]);
			polygons[element.index] = ordered_element;
			polygons[item.index] = ordered_item;

      x=x+2;
    },0);
        
		}, function (element1, element2) {
			//check if element1 and element2 collide by checking their points
			return polygon.intersection(element1.points, element2.points);
		});
		// As with all iterative methods, modifying the quadtree or its contents is discouraged. //
	 
  })

	//scale polygons
	quadtree.each(function (element) {
		polygons[element.index] = geometric.polygonScale(polygons[element.index], ((2 * tSize) - (2 * espacamento)) / (2 * tSize));

	});
}


const ref_X = 95.047;
const ref_Y = 100.000;
const ref_Z = 108.883;

function XYZtoLAB([x, y, z]) {
	const [var_X, var_Y, var_Z] = [x / ref_X, y / ref_Y, z / ref_Z]
		.map(a => a > 0.008856
			? Math.pow(a, 1 / 3)
			: (7.787 * a) + (16 / 116))

	CIE_L = (116 * var_Y) - 16
	CIE_a = 500 * (var_X - var_Y)
	CIE_b = 200 * (var_Y - var_Z)

	return [CIE_L, CIE_a, CIE_b]
}

function RGBtoXYZ([R, G, B]) {
	const [var_R, var_G, var_B] = [R, G, B]
		.map(x => x / 255)
		.map(x => x > 0.04045
			? Math.pow(((x + 0.055) / 1.055), 2.4)
			: x / 12.92)
		.map(x => x * 100)

	// Observer. = 2°, Illuminant = D65
	X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
	Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
	Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
	return [X, Y, Z]
}

function getColourPalete(r, g, b) {
	//ler file das cores json

	let mind = 9999;
	let color = [];

	let aux_matrix_image = [[r], [g], [b]];
	//rbg to xyz
	//xyz to lab
	//imagem
	let xyz = RGBtoXYZ(aux_matrix_image);
	let lab_image = XYZtoLAB(xyz);

	for (let i = 0; i < data.palette.length; i++) {
		let pr = (data.palette[i])["rgb"][0];
		let pg = (data.palette[i])["rgb"][1];
		let pb = (data.palette[i])["rgb"][2];

		let aux_matrix_pallete = [[pr], [pg], [pb]];

		//palete
		let xyz2 = RGBtoXYZ(aux_matrix_pallete);
		let lab_palete = XYZtoLAB(xyz2);

		let d = Math.sqrt(
			Math.pow(lab_palete[0] - lab_image[0], 2) +
			Math.pow(lab_palete[1] - lab_image[1], 2) +
			Math.pow(lab_palete[2] - lab_image[2], 2)
		);

		let d2 = Math.sqrt(
			Math.pow(lab_image[0] - lab_palete[0], 2) +
			Math.pow(lab_image[1] - lab_palete[1], 2) +
			Math.pow(lab_image[2] - lab_palete[2], 2)
		);

		let dnormal = Math.sqrt(
			Math.pow(pr - r, 2) +
			Math.pow(pg - g, 2) +
			Math.pow(pb - b, 2)
		);

		if (d2 < mind) {
			mind = d2;
			color = [pr, pg, pb];
			//console.log("entrou");
		}
	}
	return color;
}

function downloadAsPng(imageData, fileName) {
	const downloadLink = document.createElement('a');
	downloadLink.href = imageData;
	downloadLink.download = fileName;
  
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
  }
  
  let t10;
//function to draw polygons in the canvas using the points saved in the 
function drawPolygons(tSize, h, w) {

	ctxmask.fillStyle = "gray";
	ctxmask.fillRect(0, 0, canvasmask.width, canvasmask.height);

	for (let i = 0; i < polygons.length; i++) {



		if (cores[i][0] != null) {

			// ctxmask.translate(0.5, 0.5);
			ctxmask.beginPath();

			ctxmask.moveTo(polygons[i][0][0] /* + 0.5 */, polygons[i][0][1] /* + 0.5 */);
			for (let k = 1; k < polygons[i].length; k++) {
				ctxmask.lineTo(polygons[i][k][0] /* + 0.5 */, polygons[i][k][1] /* + 0.5 */);
			}
			ctxmask.closePath();
			// ctxmask.translate(-0.5, -0.5);
			r = cores[i][0]; // red value
			g = cores[i][1]; // green value
			b = cores[i][2]; // blue value (set to 0)
			a = cores[i][3]; // alpha value (set to 255)
			let color_palete = getColourPalete(r, g, b);
			//console.log("color_palete",color_palete);
			ctxmask.fillStyle = "rgb(" + color_palete[0] + "," + color_palete[1] + "," + color_palete[2] + ")";
			//ctxmask.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
			ctxmask.fill();
		}
	}
	//console.log("download")
	 t10 = performance.now();
	//console.log("drawpolygons ", t10 - t8);
	//console.log("total ", t10 - t0,t10);
	const imageData = canvasmask.toDataURL('image/png');
	
/* 	console.log("imagedataaa",imageData);
 */	let filename = "70_1_4"+tSize+"_"+mSize+"_"+espacamento+"_"+snakeSize+"_"+t10+".jpg";
	// Download the image as a PNG file
	//downloadAsPng(imageData, filename);

}

let time = 60;
const timerWrapper = document.getElementById("timerWrapper");
const timer = document.getElementById("timer");
  
function drawTiles3(gM, w, h, tSize, image_data_fg) {
	let Rx = [tSize * 2 + 1, 0];
	let Ry = [0, mSize * 2 + 1];

	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			//se pixel atual for 2 e a mask for 0 entao desenhar o tile
			if (LLM[i][j] == 2) {
				//if(vezes>0){
				drawSquare(gM, tSize, i, j, h, w, image_data_fg);
				//vezes--;
				//}
				//recursive function over the 8 neighbor pixels of i,j and check if they are 2
				let Cx = j;
				let Cy = i;
				//ctxtiles.fillStyle = 'blue'
				//ctxtiles.fillRect(Cx, Cy, 1, 1)
        if(difSizes==true){
       if (image_data_fg.data[(i * w + j) * 4 + 2] == 255) {
					Rx = [(tSize * 0.60 * 2 + 1), 0];
					Ry = [0, (mSize * 0.60 * 2 + 1)];
				} else {
					Rx = [tSize * 2 + 1, 0];
					Ry = [0, mSize * 2 + 1];
				}}
        else{
          Rx = [tSize * 2 + 1, 0];
					Ry = [0, mSize * 2 + 1];
        }
				checksquare(i, j, Cx, Cy, Rx, Ry);//checks points of llm that r inside the square

				//if they are 2, check if they are inside the square
				//if they are inside the square, mark them as 3
				//the recursive function will stop when it reaches a pixel that is not 2

				//checkoverlaps(i,j, Cx, Cy, Rx, Ry);
				//start in ij =0,0 and check if it overlaps with top right left bottom
				//if those r 0 call recursively, if those r different then 0 check if they overlap, if they do cut and call recursively
				//if they dont overlap end recursive

			}
		}
	}
  
      updateProgressBar(50)
      setTimeout(function(){
      
      
      	t7 = performance.now();
      	cutSquares(h, w);
      	
      	 console.log("Call to generate tiles " + (t7 - t6) + " milliseconds.") 
          updateProgressBar(70)
      
      },0);
      setTimeout(function(){
      	t8 = performance.now();
      
      /* 	console.log("Call to cutSquares took " + (t8 - t7) + " milliseconds.") */
      
      	drawPolygons(tSize, h, w);
        //updateProgressBar(90) 
      },0);

      
      setTimeout(function(){
        const form = document.getElementById("pictureForm");
        console.log(form);
        fillForm();
        submitForm(form);
        
        timerWrapper.style.display = "block";
        //timer.innerText = `Page reloads in ${time}s...`;
        
        setInterval(() => {
          time -= 1;
          //console.log(time);
          if(time<=0)
            location.reload()
          //timer.innerText =`Page reloads in ${time}s...`;
        }, 1000);
          
      },0);
  
}

function fillForm(){

	const imageData = canvasmask.toDataURL('image/png');
	
/* 	console.log("imagedataaa",imageData);
 */  
  let filename = "70_1_4"+tSize+"_"+mSize+"_"+espacamento+"_"+snakeSize+"_"+t10+".jpg";
	// Download the image as a PNG file
	//downloadAsPng(imageData, filename);
  let fileInput = document.getElementById("ficheiro");
  let fileName = document.getElementById("nome");
  fileInput.value = imageData;
  fileName.value = filename;

}

function submitForm(form){
  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);
/*   if(!form.checkValidity())
    form.reportValidity(); */
  // form.submit();\
  fetch('process-form.php',{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
    },
    body: formDataJsonString,// body data type must match "Content-Type" header
    }).then((result) => {
      return result.json();
    }).then((data)=> {
      console.log(data);

    
  //tirar barra e animacao e foto e titulo colocar mosaico
  let progressbar = document.getElementById("bar");
  progressbar.setAttribute("hidden", "hidden");

  
  let animacao = document.getElementById("anim");
  animacao.style.display="none";

  canvas2.style.display="none";


  canvasmask.removeAttribute("hidden", "hidden");

    

      let qrCode = document.getElementById("QRCode")
      qrCode.src = data['message']
      qrCode.style.display = "block";

    });
}

module.exports = { handleAlgorithm: handleAlgorithm };



},{"./pallete.json":7,"polygon-tools":2,"quadtree-lib":6}]},{},[8])(8)
});
