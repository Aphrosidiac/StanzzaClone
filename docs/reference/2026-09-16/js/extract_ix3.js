const fs=require('fs');
let src=fs.readFileSync('webflow.f9c49967.f4d03e4468ffe476.js','utf8');
// IX3
let s=src.indexOf('t.register(');
let e=src.indexOf('window.dispatchEvent(new CustomEvent("__wf_ix3_ready"))');
let body=src.slice(s+'t.register('.length, e);
body=body.trim().replace(/\)\s*,\s*$/,'');
const args=eval('['+body+']');
fs.writeFileSync('ix3.json',JSON.stringify(args,null,1));
console.log('ix3 args',args.length,args.map(a=>a.length));
// IX2
let s2=src.indexOf('Webflow.require("ix2").init(');
let e2=src.indexOf('Webflow.require("ix2").init');
// find matching paren
let depth=0,i=s2+'Webflow.require("ix2").init'.length;
let start=i;
for(;i<src.length;i++){const c=src[i]; if(c==='(')depth++; else if(c===')'){depth--; if(depth===0)break;}}
let ix2=src.slice(start+1,i);
const ix2obj=eval('('+ix2+')');
fs.writeFileSync('ix2.json',JSON.stringify(ix2obj,null,1));
console.log('ix2 keys',Object.keys(ix2obj), Object.keys(ix2obj.events||{}).length, Object.keys(ix2obj.actionLists||{}).length);
