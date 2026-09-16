const ix2=JSON.parse(require('fs').readFileSync('ix2.json'));
for(const [id,ev] of Object.entries(ix2.events)){
  console.log('\n=== EVENT',id,ev.eventTypeId,'target',JSON.stringify(ev.target),'\n   config',JSON.stringify(ev.config),'\n   action',JSON.stringify(ev.action));
}
for(const [id,al] of Object.entries(ix2.actionLists)){
  console.log('\n=== ACTIONLIST',id,al.title,'continuous',al.continuousParameterGroups?'yes':'no');
  const groups = al.actionItemGroups || [];
  groups.forEach((g,gi)=>{ console.log('  group',gi); g.actionItems.forEach(a=>console.log('    ',a.actionTypeId,JSON.stringify(a.config.target),JSON.stringify({d:a.config.duration,delay:a.config.delay,ease:a.config.easing,v:{x:a.config.xValue,y:a.config.yValue,z:a.config.zValue,unit:a.config.xUnit,yu:a.config.yUnit,val:a.config.value,vu:a.config.unit,w:a.config.widthValue,wu:a.config.widthUnit,h:a.config.heightValue,hu:a.config.heightUnit,r:a.config.rValue,g:a.config.gValue,b:a.config.bValue,a:a.config.aValue}}))); });
  (al.continuousParameterGroups||[]).forEach(g=>{ console.log('  continuous',g.type,JSON.stringify(g.parameterLabel)); g.continuousActionGroups.forEach(cg=>{console.log('   @',cg.keyframe); cg.actionItems.forEach(a=>console.log('      ',a.actionTypeId,JSON.stringify(a.config.target),JSON.stringify({ease:a.config.easing,x:a.config.xValue,y:a.config.yValue,xu:a.config.xUnit,yu:a.config.yUnit,val:a.config.value,vu:a.config.unit,w:a.config.widthValue,wu:a.config.widthUnit,h:a.config.heightValue,hu:a.config.heightUnit})))})});
}
