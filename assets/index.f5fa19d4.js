var S=Object.defineProperty,_=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(t,e,s)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,C=(t,e)=>{for(var s in e||(e={}))B.call(e,s)&&x(t,s,e[s]);if(K)for(var s of K(e))z.call(e,s)&&x(t,s,e[s]);return t},R=(t,e)=>_(t,O(e));var l=(t,e,s)=>(x(t,typeof e!="symbol"?e+"":e,s),s);import{l as I,j as H,r as p,u as P,s as q,h as U,p as W,$ as Q,R as V,a as X}from"./vendor.510b2741.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};Y();const Z="git-visual",ee="main",te={type:"commit",hash:"a51d7221847553fa7dfe33bac62e6b9111a2f269",parent:"1c2498387d3cba17e78c8b61efe1974516234e70",parent2:null,author:{name:"Thomas Hoffmann Kilbak",email:"thki@queue-it.com",timestamp:1645462176,timezone:"+0100"},committer:{name:"Jonas Glerup R\xF8ssum",email:"1959615+joglr@users.noreply.github.com",timestamp:1645462319,timezone:"+0100"},message:"Fix muted colors in visualisation",description:"",coauthors:[],tree:{type:"tree",path:"git-visual",name:".",hash:"d8be2f1257a37f4a921af10dc60b9e62b993a99c",children:[{type:"tree",path:"git-visual/.github",name:".github",hash:"0557527329c9d10c7e7d6c96c4e880e85d200518",children:[{type:"tree",path:"git-visual/.github/workflows",name:"workflows",hash:"af65ccf9f270a7a19d5df8a9e6d425ca37d6522c",children:[{type:"blob",hash:"b0bf3397d7c11d52bad66ab8f3cc5f4aa0bfb554",path:"git-visual/.github/workflows/build-and-deploy.yml",name:"build-and-deploy.yml",content:"",authors:{"Jonas Glerup R\xF8ssum":15},noLines:33,noCommits:5},{type:"blob",hash:"5d8014b5bfa120b2ddc435a9da7d1562a5c7026b",path:"git-visual/.github/workflows/test-parser.yml",name:"test-parser.yml",content:"",authors:{"Thomas Hoffmann Kilbak":32,"Jonas Glerup R\xF8ssum":32},noLines:32,noCommits:1}]}]},{type:"blob",hash:"548c91f9b2d2a75723fbdf88e7e6abc8760505c8",path:"git-visual/.gitignore",name:".gitignore",content:"",authors:{"Jonas R\xF8ssum":2,tjomson:3},noLines:2,noCommits:2},{type:"blob",hash:"cce9d3c0801773cf33a36f6e57afe78a06eebb89",path:"git-visual/.prettierrc",name:".prettierrc",content:"",authors:{"Kristoffer H\xF8jelse":3,joglr:3},noLines:3,noCommits:1},{type:"blob",hash:"483a9c42c3c288cca80f49be1a584f507977fc4c",path:"git-visual/.truckignore",name:".truckignore",content:"",authors:{"Thomas Hoffmann Kilbak":1},noLines:1,noCommits:1},{type:"tree",path:"git-visual/.vscode",name:".vscode",hash:"4fac3787ff2fddd81312d761d1cafe7f15594c84",children:[{type:"blob",hash:"fd23abad1b76b7c985cad2e21d0ba0d7fd6b7e45",path:"git-visual/.vscode/launch.json",name:"launch.json",content:"",authors:{"Jonas Glerup R\xF8ssum":5,joglr:25,"Kristoffer H\xF8jelse":25,emiljapelt:25},noLines:24,noCommits:3}]},{type:"blob",hash:"45fd5a057d0d944709b8e665c811a4e716ebdc02",path:"git-visual/README.md",name:"README.md",content:"",authors:{"Kristoffer H\xF8jelse":2},noLines:2,noCommits:1},{type:"tree",path:"git-visual/parser",name:"parser",hash:"09f1bd1e81d1b6c564c1d9fc171973f1d25fae94",children:[{type:"blob",hash:"9ea49e0da7b2511c1010f8e40c40eb1be0cd48ab",path:"git-visual/parser/.eslintrc.json",name:".eslintrc.json",content:"",authors:{"Thomas Hoffmann Kilbak":1,tjomson:20},noLines:21,noCommits:2},{type:"blob",hash:"1a7284c4cc30147a0c21466cf52651458b821e99",path:"git-visual/parser/.gitignore",name:".gitignore",content:"",authors:{"Thomas Hoffmann Kilbak":1,"Jonas Glerup R\xF8ssum":1,"Jonas R\xF8ssum":1},noLines:5,noCommits:2},{type:"blob",hash:"5f006100d90c00b0b1a52ccffbc8d3133371eb8f",path:"git-visual/parser/README.md",name:"README.md",content:"",authors:{tjomson:21,"Jonas Glerup R\xF8ssum":31,"Jonas R\xF8ssum":17,joglr:2},noLines:38,noCommits:9},{type:"blob",hash:"e7b98b3edae948a697b9624dffae366ebf24047f",path:"git-visual/parser/jest.config.js",name:"jest.config.js",content:"",authors:{"Thomas Hoffmann Kilbak":7,"Jonas Glerup R\xF8ssum":7},noLines:7,noCommits:1},{type:"blob",hash:"d44c49f04ab08b0aa51cccb8a91890f3109fe250",path:"git-visual/parser/package.json",name:"package.json",content:"",authors:{"Thomas Hoffmann Kilbak":15,"Jonas Glerup R\xF8ssum":16,tjomson:26,"Jonas R\xF8ssum":2,joglr:4},noLines:32,noCommits:7},{type:"tree",path:"git-visual/parser/src",name:"src",hash:"9eaffd99cf403556dd8227c871b0b038ac77402b",children:[{type:"blob",hash:"3623b62d2c022316d4f3d2f5f58b7cb979e88565",path:"git-visual/parser/src/TruckIgnore.ts",name:"TruckIgnore.ts",content:"",authors:{tjomson:10,"Thomas Hoffmann Kilbak":15},noLines:20,noCommits:2},{type:"blob",hash:"6512024344cf5d1ad1709f74b32ebff1948f7bd4",path:"git-visual/parser/src/constants.ts",name:"constants.ts",content:"",authors:{"Thomas Hoffmann Kilbak":1},noLines:1,noCommits:1},{type:"blob",hash:"46d1aa2736fb22d0200a0179e3e8f483f684ac8e",path:"git-visual/parser/src/hydrate.ts",name:"hydrate.ts",content:"",authors:{"Thomas Hoffmann Kilbak":10,"Jonas Glerup R\xF8ssum":47,emiljapelt:10},noLines:104,noCommits:4},{type:"blob",hash:"e72211488bec72c7b5ec1f23bff2f85546b59f5f",path:"git-visual/parser/src/index.ts",name:"index.ts",content:"",authors:{"Thomas Hoffmann Kilbak":62,"Jonas Glerup R\xF8ssum":316,joglr:62,"Kristoffer H\xF8jelse":6,emiljapelt:2,"Jonas R\xF8ssum":58,tjomson:61},noLines:5,noCommits:23},{type:"blob",hash:"2e578b6b19f40216292395fe47f95a0b624e2a2f",path:"git-visual/parser/src/log.ts",name:"log.ts",content:"",authors:{"Jonas Glerup R\xF8ssum":79},noLines:75,noCommits:2},{type:"blob",hash:"06dabb1d5e9178ff1bb249cae6e2fc597e4b0ef8",path:"git-visual/parser/src/model.ts",name:"model.ts",content:"",authors:{"Jonas Glerup R\xF8ssum":26,tjomson:36,emiljapelt:47,joglr:36,"Kristoffer H\xF8jelse":14,"Thomas Hoffmann Kilbak":20,"Jonas R\xF8ssum":20},noLines:67,noCommits:17},{type:"blob",hash:"cfc78127f7cade704b797ef2a378993f9ec54379",path:"git-visual/parser/src/parse.ts",name:"parse.ts",content:"",authors:{"Jonas Glerup R\xF8ssum":135,tjomson:12,"Thomas Hoffmann Kilbak":152,emiljapelt:40,joglr:40,"Kristoffer H\xF8jelse":21,"Jonas R\xF8ssum":125},noLines:192,noCommits:22},{type:"blob",hash:"9d7310c382b9f2b5d70c2b569db603318b189a22",path:"git-visual/parser/src/util.test.ts",name:"util.test.ts",content:"",authors:{"Thomas Hoffmann Kilbak":8,"Jonas Glerup R\xF8ssum":8},noLines:8,noCommits:1},{type:"blob",hash:"8ed24baf4a963d33962c548c378bb647502602cf",path:"git-visual/parser/src/util.ts",name:"util.ts",content:"",authors:{"Jonas Glerup R\xF8ssum":254,tjomson:14,"Thomas Hoffmann Kilbak":19,joglr:9,"Kristoffer H\xF8jelse":52,emiljapelt:9,"Jonas R\xF8ssum":107},noLines:158,noCommits:25}]},{type:"blob",hash:"7b4fc6c0186f6e43d3d82d0b73ea091d1c5918ad",path:"git-visual/parser/tsconfig.json",name:"tsconfig.json",content:"",authors:{"Thomas Hoffmann Kilbak":2,"Jonas Glerup R\xF8ssum":2,joglr:7,tjomson:20},noLines:21,noCommits:4}]},{type:"blob",hash:"38bef5ed49d7774c58dd4c6a4784d42d433fda85",path:"git-visual/project-statement.md",name:"project-statement.md",content:"",authors:{"Jonas Glerup R\xF8ssum":43},noLines:43,noCommits:1},{type:"tree",path:"git-visual/prototype1",name:"prototype1",hash:"b7a407bca4cd1317e0f59e025443f69160fcc796",children:[{type:"blob",hash:"3cb2fbf36df89f91b777b6bcfb6920955831e4fd",path:"git-visual/prototype1/.gitignore",name:".gitignore",content:"",authors:{"Jonas Glerup R\xF8ssum":2,"Kristoffer H\xF8jelse":24,joglr:24},noLines:26,noCommits:2},{type:"blob",hash:"7f5a42da005b478bd3e2f6be42708c0520448658",path:"git-visual/prototype1/README.md",name:"README.md",content:"",authors:{"Jonas Glerup R\xF8ssum":8,"Jonas R\xF8ssum":6,joglr:16},noLines:20,noCommits:4},{type:"blob",hash:"c4142215b63138c07c1648a037f156f93b79f321",path:"git-visual/prototype1/index.html",name:"index.html",content:"",authors:{joglr:23,"Kristoffer H\xF8jelse":23},noLines:13,noCommits:4},{type:"blob",hash:"bb8e28d7805c080b1547851f548169d2befe5f27",path:"git-visual/prototype1/package.json",name:"package.json",content:"",authors:{emiljapelt:2,"Jonas Glerup R\xF8ssum":13,"Thomas Hoffmann Kilbak":2,"Jonas R\xF8ssum":1,"Kristoffer H\xF8jelse":32,joglr:32},noLines:29,noCommits:11},{type:"tree",path:"git-visual/prototype1/src",name:"src",hash:"84db1c242f84d8b8cb5ba67945a473c5cf0ce8cf",children:[{type:"blob",hash:"e02146c17ac63071e110390a59e3d8bf864cc916",path:"git-visual/prototype1/src/App.css",name:"App.css",content:"",authors:{"Thomas Hoffmann Kilbak":54,"Jonas Glerup R\xF8ssum":53,tjomson:6,emiljapelt:33,joglr:57,"Kristoffer H\xF8jelse":57},noLines:60,noCommits:7},{type:"blob",hash:"c0285b6efcd35a08df34d9da9578b5edce475253",path:"git-visual/prototype1/src/App.tsx",name:"App.tsx",content:"",authors:{"Jonas Glerup R\xF8ssum":397,tjomson:16,emiljapelt:306,"Kristoffer H\xF8jelse":815,joglr:815,"Jonas R\xF8ssum":6},noLines:29,noCommits:30},{type:"blob",hash:"19b16eaf595eab66ffc619f25cd661076319611b",path:"git-visual/prototype1/src/colors.ts",name:"colors.ts",content:"",authors:{"Thomas Hoffmann Kilbak":26,emiljapelt:140,"Jonas Glerup R\xF8ssum":14,"Kristoffer H\xF8jelse":2},noLines:69,noCommits:5},{type:"tree",path:"git-visual/prototype1/src/components",name:"components",hash:"19294fbcac00ebecd9424b0dc078dc73cdbda56e",children:[{type:"blob",hash:"1029bc5f1ffe879c786cca7cb2e53dba3ee60b52",path:"git-visual/prototype1/src/components/BubbleChart.tsx",name:"BubbleChart.tsx",content:"",authors:{"Thomas Hoffmann Kilbak":5,"Jonas Glerup R\xF8ssum":220,tjomson:2,emiljapelt:220},noLines:219,noCommits:4},{type:"blob",hash:"01b5d54b3c3d7f6e56e3aba363c73cc1e4f3ccbf",path:"git-visual/prototype1/src/components/MetaDataInfo.tsx",name:"MetaDataInfo.tsx",content:"",authors:{"Jonas Glerup R\xF8ssum":14,tjomson:14},noLines:14,noCommits:1},{type:"blob",hash:"d0476717430f67511f7f5b86fa1a9e6008bddfc0",path:"git-visual/prototype1/src/components/MetricSelect.tsx",name:"MetricSelect.tsx",content:"",authors:{"Jonas Glerup R\xF8ssum":25,tjomson:2,emiljapelt:25},noLines:25,noCommits:2},{type:"blob",hash:"8ab6c99ef5031aafc49cbfe374c74d6ef0bf2c79",path:"git-visual/prototype1/src/components/Spacer.tsx",name:"Spacer.tsx",content:"",authors:{"Jonas Glerup R\xF8ssum":5,tjomson:5},noLines:5,noCommits:1}]},{type:"blob",hash:"357522dcb261069403169e4a0c0d7aa7a135c8c0",path:"git-visual/prototype1/src/const.ts",name:"const.ts",content:"",authors:{"Thomas Hoffmann Kilbak":8,emiljapelt:2,"Jonas Glerup R\xF8ssum":2},noLines:8,noCommits:2},{type:"blob",hash:"b751c9dae3115cb615ffb5592f044da3ed49180f",path:"git-visual/prototype1/src/data.ts",name:"data.ts",content:"",authors:{"Jonas Glerup R\xF8ssum":7,tjomson:4,joglr:140,"Kristoffer H\xF8jelse":140,emiljapelt:4,"Jonas R\xF8ssum":138},noLines:5,noCommits:8},{type:"blob",hash:"3a264444ada2c4038887104bcb52f57eb85e72ca",path:"git-visual/prototype1/src/index.css",name:"index.css",content:"",authors:{"Jonas Glerup R\xF8ssum":9,"Kristoffer H\xF8jelse":13,joglr:13},noLines:22,noCommits:2},{type:"blob",hash:"606a3cf44ec02bf1c481354445f110f547f5cec2",path:"git-visual/prototype1/src/main.tsx",name:"main.tsx",content:"",authors:{"Kristoffer H\xF8jelse":11,joglr:11},noLines:11,noCommits:1},{type:"blob",hash:"e3c0c374ce9ae392969f9ebbc62bf7ced3af2ae0",path:"git-visual/prototype1/src/metrics.ts",name:"metrics.ts",content:"",authors:{emiljapelt:6,"Jonas Glerup R\xF8ssum":6},noLines:6,noCommits:1},{type:"blob",hash:"2f7d16ac0d18d1cc0733baec74803ca523417567",path:"git-visual/prototype1/src/util.ts",name:"util.ts",content:"",authors:{"Thomas Hoffmann Kilbak":14},noLines:14,noCommits:1},{type:"blob",hash:"11f02fe2a0061d6e6e1f271b21da95423b448b32",path:"git-visual/prototype1/src/vite-env.d.ts",name:"vite-env.d.ts",content:"",authors:{"Kristoffer H\xF8jelse":1,joglr:1},noLines:1,noCommits:1}]},{type:"blob",hash:"3d0a51a86e202419758206adb6effe775229ba38",path:"git-visual/prototype1/tsconfig.json",name:"tsconfig.json",content:"",authors:{joglr:39,"Kristoffer H\xF8jelse":39},noLines:21,noCommits:3},{type:"blob",hash:"e993792cb12c9d8223f5a731f2d662ab553180f2",path:"git-visual/prototype1/tsconfig.node.json",name:"tsconfig.node.json",content:"",authors:{"Jonas Glerup R\xF8ssum":15,emiljapelt:17,"Kristoffer H\xF8jelse":8,joglr:8},noLines:8,noCommits:4},{type:"blob",hash:"b1b5f91e5ffd7f66fc94356a571e3c60a689c4e5",path:"git-visual/prototype1/vite.config.ts",name:"vite.config.ts",content:"",authors:{"Kristoffer H\xF8jelse":7,joglr:7},noLines:7,noCommits:1}]}]},minNoCommits:1,maxNoCommits:30};var se={repo:Z,branch:ee,commit:te};const L=se;var u=(t=>(t.FileExtension="File extension",t.HeatMap="Heat map",t.ColdMap="Cold map",t.Dominated="Dominated files",t))(u||{});const j=30,ae=5,oe=[["joglr","Jonas Glerup R\xF8ssum","Jonas R\xF8ssum"],["tjomson","Thomas Hoffmann Kilbak","Thomas Kilbak"],["hojelse","Kristoffer H\xF8jelse"],["emiljapelt","Emil J\xE4pelt"]];function T(t){return Object.entries(t.authors).reduce((e,[s,c])=>{const o=oe.find(h=>h.includes(s));if(!o)throw Error("Author not found: "+s);const[n]=o;return delete e[s],e[n]=e[n]||0,e[n]+=c,e},t.authors)}function ne(t){let e=I.ext(t.name.substring(t.name.lastIndexOf(".")+1));return typeof e=="undefined"?"grey":e.color}function re(t){switch(Object.keys(T(t)).length){case 1:return"red";default:return"cadetblue"}}class G{constructor(e,s,c,o){l(this,"scale");l(this,"offset");l(this,"target_max");l(this,"target_min");this.scale=(o-c)/(s-e),this.offset=e*this.scale-c,this.target_max=o,this.target_min=c}translate(e){return e*this.scale-this.offset}inverseTranslate(e){return this.target_max-this.translate(e)+this.target_min}}class ie{constructor(e,s){l(this,"translator");l(this,"min_lightness",35);l(this,"max_lightness",90);this.translator=new G(e,s,this.min_lightness,this.max_lightness)}getColor(e){return`hsl(240,100%,${this.translator.translate(e.noCommits)}%)`}}class ce{constructor(e,s){l(this,"translator");l(this,"min_lightness",30);l(this,"max_lightness",95);this.translator=new G(e,s,this.min_lightness,this.max_lightness)}getColor(e){return`hsl(0,100%,${this.translator.inverseTranslate(e.noCommits)}%)`}}const r=H.exports.jsx,m=H.exports.jsxs,le=H.exports.Fragment;function me(t){const[e,s]=p.exports.useState(null),c=p.exports.useMemo(()=>new ce(t.data.minNoCommits,t.data.maxNoCommits),[t.data.minNoCommits,t.data.maxNoCommits]),o=p.exports.useMemo(()=>new ie(t.data.minNoCommits,t.data.maxNoCommits),[t.data.minNoCommits,t.data.maxNoCommits]);let n=p.exports.useRef(null),h=p.exports.useRef(null),y=P(0,0),b={height:y.height-j*2,width:y.width-j*2};function J(f){let i=f.target.__data__.data;i&&i.type==="blob"&&s(i)}function E(f,i,d,M){let N=f.tree,$=U(N).sum(a=>a.noLines).sort((a,g)=>g.value!==void 0&&a.value!==void 0?g.value-a.value:0),A=W().size([i.width,i.height]).padding(j)($);const v=d.selectAll("circle.node").data(A).enter().append("g").classed("entry",!0),D=v.append("circle");function F(a,g){switch(g){case u.Dominated:return re(a);case u.FileExtension:return ne(a);case u.HeatMap:return c.getColor(a);case u.ColdMap:return o.getColor(a);default:throw new Error(`Metric option is invalid: ${g}`)}}D.classed("file",a=>a.data.type==="blob").classed("folder",a=>a.data.type==="tree").attr("cx",a=>a.x).attr("cy",a=>a.y).attr("r",a=>a.r).style("fill",a=>a.data.type==="blob"?F(a.data,M):"none").enter();const k=v.append("path");k.attr("d",a=>he(a.x,a.y,a.r+ae)).classed("name-path",!0).attr("cx",a=>a.x).attr("cy",a=>a.y).attr("r",a=>a.r).attr("id",a=>a.data.path),new URL(window.location.toString()).searchParams.get("debug")==="true"&&k.classed("name-path debug",!0),v.append("text").append("textPath").attr("startOffset","50%").attr("dominant-baseline","bottom").attr("text-anchor","middle").attr("xlink:href",a=>`#${a.data.path}`).text(a=>a.data.name).style("font-size","0.8em").style("font-weight",a=>a.data.type==="tree"?"bold":"normal")}return p.exports.useEffect(()=>{const i=q(h.current).append("g");E(t.data,b,i,t.metric);let d=i.node();return d&&d.addEventListener("click",J),()=>{d&&d.removeEventListener("click",J),i.remove()}},[b,t.metric]),m("div",{className:"container",children:[r("svg",R(C({className:"visualization"},b),{ref:h,xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${b.width} ${b.height}`})),e!==null?m("div",{ref:n,className:"file-details box",children:[r("b",{style:{fontSize:"1.5rem"},children:e.name}),m("div",{children:["Number of lines: ",e.noLines]}),r("div",{children:"Author distribution:"}),r("br",{}),Object.entries(fe(e)).sort((f,i)=>f[1]<i[1]?1:-1).map(([f,i])=>m("div",{children:[m("b",{children:[f,":"]})," ",(i*100).toFixed(2),"%"]},`${f}${i}`))]}):null]})}function he(t,e,s){return`M${t},${e}
          m0,${s}
          a${s},${s} 0 1,1 0,${-s*2}
          a${s},${s} 0 1,1 0,${s*2}`}function fe(t){const e=T(t),s=Object.values(e).reduce((o,n)=>o+n,0);return Object.entries(e).reduce((o,[n,h])=>{const y=h/s;return R(C({},o),{[n]:y})},{})}function w(){return r("div",{className:"spacer"})}function pe(t){let e=Q();return m("div",{className:"stack",children:[r("label",{className:"option-text",htmlFor:e,children:"Color metric"}),r(w,{}),r("select",{id:e,onChange:s=>t.onChange(s.target.value),children:Object.values(u).map(s=>r("option",{value:s,children:s},s))})]})}function ue(t){return m("div",{children:[m("label",{children:[r("strong",{children:"Repository:"})," ",t.repoName]}),r("br",{}),m("label",{children:[r("strong",{children:"Branch: "}),t.branchName]})]})}document.documentElement.style.setProperty("--padding",`${j}px`);function de(){const[t,e]=p.exports.useState(u.FileExtension);return m(le,{children:[r(me,{data:L.commit,metric:t}),m("div",{className:"box options",children:[r(ue,{repoName:L.repo,branchName:L.branch}),r(w,{}),r(pe,{onChange:s=>e(s)})]})]})}V.render(r(X.StrictMode,{children:r(de,{})}),document.getElementById("root"));
