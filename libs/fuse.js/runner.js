// build time:Mon May 28 2018 17:16:17 GMT+0800 (CST)
const util=require("util");const Fuse=require("./src");const needle="Ildaf Samiev";const haystack=[{name:"Ildaf Rafi Samier"},{name:"Ildaf Rafi Saitor"}];var fuse=new Fuse(haystack,{includeScore:true,keys:["name"],verbose:true});const result=fuse.search(needle);
//rebuild by neat 