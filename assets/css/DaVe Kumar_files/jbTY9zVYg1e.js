/*!CK:544011309!*//*1456170664,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LesYI"]); }

__d('ReactComposerTimelineStore',['ReactComposerActionStore','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerMediaConfig','ReactComposerPostUtils','PageTransitions','TimelineComposer','curry'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('ReactComposerActionStore'));i=h&&h.prototype;function j(){'use strict';i.constructor.call(this);}j.prototype.__onPostStarted=function(k){'use strict';var l=c('ReactComposerAttachmentStore').getSelectedAttachmentID(k.composerID);c('ReactComposerPostUtils').post({actorID:k.actorID,composerID:k.composerID,contextInfo:k.config.contextInfo,targetID:k.targetID,onPostSuccess:c('curry')(this.__onPostSuccess,l)});};j.prototype.__onPostSuccess=function(k,l){'use strict';if(!k)return;var m=k===c('ReactComposerAttachmentType').LIFE_EVENT;if(m)c('PageTransitions').go(l.payload);};j.prototype.__canPost=function(k){'use strict';return !c('ReactComposerPostUtils').isPostButtonDisabled(k.composerID,c('ReactComposerMediaConfig').photo.limit);};j.prototype.__cleanup=function(k){'use strict';c('TimelineComposer').destroy();};f.exports=new j();},null);