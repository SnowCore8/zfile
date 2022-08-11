import{aA as x,_ as C,a2 as f,a as g,f as I,u as e,Q as U,b as A,e as l,h as a,k as M,J as u,U as D,V as R,p as w}from"./index.43b3cbf5.js";import{r as L}from"./base.4ef7f45b.js";/* empty css                */import{Z as z,a as P}from"./ZFormItem.899c4541.js";/* empty css               */import"./tooltip.f118fcb0.js";import{E as J}from"./popper.718d36e0.js";/* empty css              */import{E as B}from"./switch.87050cd5.js";import{E as O}from"./radio.35753592.js";import{l as j,b as N}from"./admin-setting.28847312.js";import{c as p}from"./common.72335e7c.js";import{E as q}from"./request.e2daed10.js";import{b}from"./route-block.9b0645f8.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import{r as F}from"./BadgeCheckIcon.8153a115.js";import{E as H}from"./index.da7dbe5d.js";import{v as Q}from"./directive.378eb0e0.js";import"./index.5cf4e3bb.js";import"./focus-trap.4cfde4b4.js";import"./event.3ec63147.js";import"./validator.b1ae6965.js";import"./event.776e7e11.js";function G(){const{data:m,loading:_,reload:o}=x(j,{formatResult:t=>{let i=t.data;return i.customVideoSuffix||(i.customVideoSuffix=p.constant.fileTypeMap.video.join(",")),i.customImageSuffix||(i.customImageSuffix=p.constant.fileTypeMap.image.join(",")),i.customAudioSuffix||(i.customAudioSuffix=p.constant.fileTypeMap.audio.join(",")),i.customTextSuffix||(i.customTextSuffix=p.constant.fileTypeMap.text.join(",")),i.announcement||(i.announcement=""),i}}),{loading:c,run:V}=x(N,{manual:!0,onSuccess(){q({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:m,dataLoading:_,reload:o,saveData:()=>{V(m.value)},saveLoading:c}}const E=m=>(D("data-v-33c2bf6c"),m=m(),R(),m),K=u(" \u663E\u793A\u4FE1\u606F "),W=u(" \u6B64\u9875\u9762\u663E\u793A\u7F51\u7AD9\u524D\u53F0\u7684\u663E\u793A\u76F8\u5173\u7684\u4FE1\u606F "),X=u("\u5168\u5C4F"),Y=u("\u5C45\u4E2D"),$=u(" \u6839\u76EE\u5F55\u662F\u5426\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90, \u5982\u679C\u4E3A true, \u5219\u6839\u76EE\u5F55\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90\u5217\u8868, \u5982\u679C\u4E3A false, \u5219\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u7B2C\u4E00\u4E2A\u5B58\u50A8\u6E90. "),ee=u("\u5355\u51FB\u8FDB\u5165"),oe=u("\u53CC\u51FB\u8FDB\u5165"),te=u(" \u63A7\u5236\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7684\u70B9\u51FB\u4E60\u60EF, \u5355\u51FB/\u53CC\u51FB\u6253\u5F00\u6587\u4EF6\u5939\u6216\u9884\u89C8\u6587\u4EF6 "),le=u(" \u81EA\u5B9A\u4E49\u8BC6\u522B\u4E3A\u89C6\u9891\u683C\u5F0F\u7684\u6587\u4EF6\u540E\u7F00\uFF0C\u591A\u4E2A\u7528\u9017\u53F7\u5206\u5F00\uFF0C\u5982 'mp4,avi,mkv', \u5728\u6B64\u5217\u8868\u4E2D\u7684\u5C06\u8C03\u7528\u64AD\u653E\u5668\u6253\u5F00\uFF08\u80FD\u5426\u64AD\u653E\u8981\u53D6\u51B3\u4E8E\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E00\u822C\u53EA\u652F\u6301\u5C01\u88C5\u683C\u5F0F\u4E3A h.264 (mp4) \u7684\u7F16\u7801\u683C\u5F0F\uFF09 "),ae=u(" \u5728\u6587\u4EF6\u5217\u8868\u4E0B\uFF0C\u663E\u793A\u5F53\u524D\u6587\u4EF6\u5939\u7684\u76EE\u5F55\u6587\u6863 "),ne=E(()=>w("i",{class:"el-icon-info zfile-info-tooltip"},null,-1)),ie=u(" \u7F51\u7AD9\u9876\u90E8\uFF0C\u663E\u793A\u516C\u544A\u5185\u5BB9\uFF0C\u652F\u6301 HTML \u8BED\u6CD5 "),ue=E(()=>w("i",{class:"el-icon-info zfile-info-tooltip"},null,-1)),se=u(" \u652F\u6301 Markdown \u8BED\u6CD5, \u5DE6\u53F3\u5206\u680F, \u6240\u89C1\u5373\u6240\u5F97, \u53EF\u4EE5\u4F7F\u7528 HTML \u8BED\u6CD5 "),de=u(" \u81EA\u5B9A\u4E49 CSS \u5185\u5BB9, \u65E0\u987B\u5199 <style></style> \u6807\u7B7E "),me=u(" \u81EA\u5B9A\u4E49 JS \u811A\u672C, <script><\/script> \u53EF\u5199\u53EF\u4E0D\u5199\uFF0C\u4F1A\u81EA\u52A8\u517C\u5BB9. "),re=u("\u4FDD\u5B58\u8BBE\u7F6E"),y={__name:"view-setting",setup(m){const _=C(()=>new Promise((S,t)=>{(async function(){try{const i=await f(()=>import("./base-editor.1e65d904.js").then(function(d){return d.b}),["assets/base-editor.1e65d904.js","assets/index.43b3cbf5.js","assets/index.6c6f5d5b.css","assets/vue.runtime.esm-bundler.196f46c4.js"]);await f(()=>Promise.resolve({}),["assets/base-editor.59951ec0.css"]),await f(()=>Promise.resolve({}),["assets/vuepress.5dbd54dc.css"]);const s=await f(()=>import("./vuepress.9d7fea63.js").then(function(d){return d.v}),["assets/vuepress.9d7fea63.js","assets/index.43b3cbf5.js","assets/index.6c6f5d5b.css"]),r=await f(()=>import("./prism.5ebc80eb.js").then(function(d){return d.p}),["assets/prism.5ebc80eb.js","assets/index.43b3cbf5.js","assets/index.6c6f5d5b.css"]);i.use(s,{Prism:r}),S(i)}catch(i){t(i)}})()})),{data:o,saveData:c,saveLoading:V}=G();return(S,t)=>{const i=O,s=z,r=B,d=H,v=J,T=L,h=P,k=Q;return g(),I("div",null,[e(o)?U((g(),A(h,{key:0,model:e(o),"element-loading-text":"\u4FDD\u5B58\u4E2D..."},{"form-title":l(()=>[K]),"form-sub-title":l(()=>[W]),footer:l(()=>[a(T,{type:"primary",size:"default",icon:e(F),onClick:e(c)},{default:l(()=>[re]),_:1},8,["icon","onClick"])]),default:l(()=>[a(s,{label:"\u9875\u9762\u5E03\u5C40"},{default:l(()=>[a(i,{modelValue:e(o).layout,"onUpdate:modelValue":t[0]||(t[0]=n=>e(o).layout=n),label:"full"},{default:l(()=>[X]),_:1},8,["modelValue"]),a(i,{modelValue:e(o).layout,"onUpdate:modelValue":t[1]||(t[1]=n=>e(o).layout=n),label:"center"},{default:l(()=>[Y]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u6839\u76EE\u5F55\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90"},{tips:l(()=>[$]),default:l(()=>[a(r,{modelValue:e(o).rootShowStorage,"onUpdate:modelValue":t[2]||(t[2]=n=>e(o).rootShowStorage=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u6587\u4EF6\u64CD\u4F5C\u4E60\u60EF"},{tips:l(()=>[te]),default:l(()=>[a(i,{modelValue:e(o).fileClickMode,"onUpdate:modelValue":t[3]||(t[3]=n=>e(o).fileClickMode=n),label:"click"},{default:l(()=>[ee]),_:1},8,["modelValue"]),a(i,{modelValue:e(o).fileClickMode,"onUpdate:modelValue":t[4]||(t[4]=n=>e(o).fileClickMode=n),label:"dbclick"},{default:l(()=>[oe]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u89C6\u9891\u6587\u4EF6\u540E\u7F00"},{tips:l(()=>[le]),default:l(()=>[a(d,{modelValue:e(o).customVideoSuffix,"onUpdate:modelValue":t[5]||(t[5]=n=>e(o).customVideoSuffix=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u56FE\u50CF\u6587\u4EF6\u540E\u7F00"},{default:l(()=>[a(d,{modelValue:e(o).customImageSuffix,"onUpdate:modelValue":t[6]||(t[6]=n=>e(o).customImageSuffix=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u97F3\u9891\u6587\u4EF6\u540E\u7F00"},{default:l(()=>[a(d,{modelValue:e(o).customAudioSuffix,"onUpdate:modelValue":t[7]||(t[7]=n=>e(o).customAudioSuffix=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u6587\u672C\u6587\u4EF6\u540E\u7F00"},{default:l(()=>[a(d,{modelValue:e(o).customTextSuffix,"onUpdate:modelValue":t[8]||(t[8]=n=>e(o).customTextSuffix=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u663E\u793A\u6587\u6863\u533A"},{default:l(()=>[a(r,{modelValue:e(o).showDocument,"onUpdate:modelValue":t[9]||(t[9]=n=>e(o).showDocument=n)},null,8,["modelValue"]),a(v,{placement:"right"},{content:l(()=>[ae]),default:l(()=>[ne]),_:1})]),_:1}),a(s,{label:"\u663E\u793A\u516C\u544A"},{default:l(()=>[a(r,{modelValue:e(o).showAnnouncement,"onUpdate:modelValue":t[10]||(t[10]=n=>e(o).showAnnouncement=n)},null,8,["modelValue"]),a(v,{placement:"right"},{content:l(()=>[ie]),default:l(()=>[ue]),_:1})]),_:1}),a(s,{label:"\u516C\u544A\u5185\u5BB9"},{tips:l(()=>[se]),default:l(()=>[a(e(_),{modelValue:e(o).announcement,"onUpdate:modelValue":t[11]||(t[11]=n=>e(o).announcement=n),height:"400px"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u81EA\u5B9A\u4E49 CSS"},{tips:l(()=>[de]),default:l(()=>[a(d,{type:"textarea",autosize:{minRows:3},placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 CSS \u5185\u5BB9",modelValue:e(o).customCss,"onUpdate:modelValue":t[12]||(t[12]=n=>e(o).customCss=n)},null,8,["modelValue"])]),_:1}),a(s,{label:"\u81EA\u5B9A\u4E49 JS"},{tips:l(()=>[me]),default:l(()=>[a(d,{type:"textarea",autosize:{minRows:3},placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 JS \u5185\u5BB9",modelValue:e(o).customJs,"onUpdate:modelValue":t[13]||(t[13]=n=>e(o).customJs=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[k,e(V)]]):M("",!0)])}}};typeof b=="function"&&b(y);var Le=Z(y,[["__scopeId","data-v-33c2bf6c"]]);export{Le as default};