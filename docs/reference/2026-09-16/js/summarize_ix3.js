const [inter,tls]=JSON.parse(require('fs').readFileSync('ix3.json'));
const tlById=Object.fromEntries(tls.map(t=>[t.id,t]));
const tgt=t=>t.map(x=>x[0]==='wf:class'?'.'+x[1].join(' .'):x[0]==='wf:trigger-only'?'(trigger)':x[0]==='wf:selector'?x[1]:x[0]+':'+JSON.stringify(x[1])).join(' | ');
for(const i of inter){
  console.log('\n=== '+i.id+' scope='+JSON.stringify(i.scope)+(i.conditionalPlayback?' cond='+JSON.stringify(i.conditionalPlayback):''));
  for(const tr of i.triggers){
    const [ev,cfg,target]=tr;
    console.log('  trigger',ev,JSON.stringify(cfg),'on',tgt([target]));
  }
  for(const tid of i.timelineIds){
    const tl=tlById[tid]; if(!tl){console.log('  MISSING',tid);continue;}
    console.log('  timeline',tid);
    for(const a of tl.actions){
      console.log('    ',tgt(a.targets),'|',JSON.stringify(a.timing),(a.tt!==undefined?'tt='+a.tt:''),'|',JSON.stringify(a.properties));
    }
  }
}
