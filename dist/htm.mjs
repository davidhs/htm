const t=(e,s,n,h)=>{let u;s[0]=0;for(let l=1;l<s.length;l++){const p=s[l++],r=s[l]?(s[0]|=p?1:2,n[s[l++]]):s[++l];3===p?h[0]=r:4===p?h[1]=Object.assign(h[1]||{},r):5===p?(h[1]=h[1]||{})[s[++l]]=r:6===p?h[1][s[++l]]+=r+"":p?(u=e.apply(r,t(e,r,n,["",null])),h.push(u),r[0]?s[0]|=2:(s[l-2]=0,s[l]=u)):h.push(r)}return h},e=function(t){let e,s,n=1,h="",u="",l=[0];const p=t=>{1===n&&(t||(h=h.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,t,h):3===n&&(t||h)?(l.push(3,t,h),n=2):2===n&&"..."===h&&t?l.push(4,t,0):2===n&&h&&!t?l.push(5,0,!0,h):n>=5&&((h||!t&&5===n)&&(l.push(n,0,h,s),n=6),t&&(l.push(n,t,0,s),n=6)),h=""};for(let r=0;r<t.length;r++){r&&(1===n&&p(),p(r));for(let o=0;o<t[r].length;o++)e=t[r][o],1===n?"<"===e?(p(),l=[l],n=3):h+=e:4===n?"--"===h&&">"===e?(n=1,h=""):h=e+h[0]:u?e===u?u="":h+=e:'"'===e||"'"===e?u=e:">"===e?(p(),n=1):n&&("="===e?(n=5,s=h,h=""):"/"===e&&(n<5||">"===t[r][o+1])?(p(),3===n&&(l=l[0]),n=l,(l=l[0]).push(2,0,n),n=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(p(),n=2):h+=e),3===n&&"!--"===h&&(n=4,l=l[0])}return p(),l},s=new Map;var n=function(n){let h=s.get(this);return h||(h=new Map,s.set(this,h)),h=t(this,h.get(n)||(h.set(n,h=e(n)),h),arguments,[]),h.length>1?h:h[0]};export{n as default};
