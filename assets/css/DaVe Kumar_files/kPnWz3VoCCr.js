/*!CK:1624003441!*//*1456170457,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ksYzR"]); }

__d('EntityInteractionLogger',['BanzaiLogger','Event','ScriptPath','collectDataAttributes','pageID'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='EntityInteractionLoggerConfig';function i(event){var l=event.target||event.srcElement,m=j(l);if(m!==false){var n={client_time:Date.now(),event:'generic',session_id:c('pageID'),surface_tag:c('ScriptPath').getScriptPath()};Object.assign(n,m);c('BanzaiLogger').log(h,n);}}function j(l){var m=c('collectDataAttributes')(l,['et'],['href']),n=m.normal.href;if((!n||n==='#')&&(!m.et||!m.et.click_point))return false;return m.et;}var k={setup:function(l){c('Event').listen(l,{click:i});},handleEvent:i};f.exports=k;},null);
__d('SaveState',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SAVING:'saving',SAVED:'saved',UNSAVING:'unsaving',UNSAVED:'unsaved'};f.exports=h;},null);
__d('SaveStateHandler',['Run','SaveState'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;function i(){'use strict';this.$SaveStateHandler1={};this.$SaveStateHandler2={};c('Run').onLeave(function(){h=null;});}i.prototype.addListener=function(j,k){'use strict';if(!this.$SaveStateHandler1[j])this.$SaveStateHandler1[j]=[];this.$SaveStateHandler1[j].push(k);};i.prototype.setState=function(j,k){'use strict';j.forEach(function(l){this.$SaveStateHandler2[l]=k;if(!this.$SaveStateHandler1[l])return;var m=this.$SaveStateHandler1[l];m.forEach(function(n){try{n.call(window,k);}catch(o){}});},this);};i.prototype.getState=function(j){'use strict';return this.$SaveStateHandler2[j];};i.$SaveStateHandler3=function(){'use strict';if(!h)h=new i();return h;};i.listen=function(j,k){'use strict';this.$SaveStateHandler3().addListener(j,k);};i.getState=function(j){'use strict';this.$SaveStateHandler3().getState(j);};i.saving=function(j){'use strict';this.$SaveStateHandler3().setState(j,c('SaveState').SAVING);};i.saved=function(j){'use strict';this.$SaveStateHandler3().setState(j,c('SaveState').SAVED);};i.unsaving=function(j){'use strict';this.$SaveStateHandler3().setState(j,c('SaveState').UNSAVING);};i.unsaved=function(j){'use strict';this.$SaveStateHandler3().setState(j,c('SaveState').UNSAVED);};i.isSaveAction=function(j){'use strict';var k=this.$SaveStateHandler3().getState(j);return k==c('SaveState').UNSAVED||k==c('SaveState').UNSAVING;};f.exports=i;},null);
__d('CurationToggleButton',['cx','CSS','Event','SaveState','SaveStateHandler','tidyEvent'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i="_vu",j="_vv";function k(l,m,n,o,p){'use strict';this.$CurationToggleButton1=false;this.$CurationToggleButton2=p;c('tidyEvent')([c('Event').listen(m,'click',this.setSaving.bind(this)),c('Event').listen(m,'error',this.setUnsaved.bind(this)),c('Event').listen(n,'click',this.setUnsaving.bind(this)),c('Event').listen(n,'error',this.setSaved.bind(this))]);c('SaveStateHandler').listen(o,function(q){switch(q){case c('SaveState').SAVING:c('CSS').addClass(l,i);c('CSS').addClass(l,j);n.setAttribute('rel','');this.$CurationToggleButton1=true;break;case c('SaveState').SAVED:c('CSS').addClass(l,i);c('CSS').removeClass(l,j);n.setAttribute('rel','async-post');this.$CurationToggleButton1=false;break;case c('SaveState').UNSAVING:c('CSS').removeClass(l,i);c('CSS').addClass(l,j);m.setAttribute('rel','');this.$CurationToggleButton1=true;break;case c('SaveState').UNSAVED:c('CSS').removeClass(l,i);c('CSS').removeClass(l,j);m.setAttribute('rel','async-post');this.$CurationToggleButton1=false;break;}}.bind(this));}k.prototype.setSaving=function(){'use strict';if(!this.$CurationToggleButton1)c('SaveStateHandler').saving(this.$CurationToggleButton2);};k.prototype.setUnsaving=function(){'use strict';if(!this.$CurationToggleButton1)c('SaveStateHandler').unsaving(this.$CurationToggleButton2);};k.prototype.setSaved=function(){'use strict';c('SaveStateHandler').saved(this.$CurationToggleButton2);};k.prototype.setUnsaved=function(){'use strict';c('SaveStateHandler').unsaved(this.$CurationToggleButton2);};f.exports=k;},null);