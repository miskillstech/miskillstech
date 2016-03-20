/*!CK:2010913774!*//*1458252426,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["edTtx"]); }

__d("PromptsInteractionsEventNames",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={OPEN_SELECTING_CONTENT:"open_selecting_content",OPEN_SUGGESTING_CONTENT:"open_suggesting_content",CLOSE_SUGGESTION:"close_suggestion",SELECT_SUGGESTION:"select_suggestion",CANCEL_COMPOSER:"cancel_composer",POST_PROMPT:"post_prompt",POST_WITHOUT_PROMPT:"post_without_prompt",IMPRESSION:"impression",SHOW_SUGGESTION:"show_suggestion",HIDE_SUGGESTION:"hide_suggestion",PROMPT_AVAILABLE:"prompt_available",PROMPT_NOT_CONSIDERED:"prompt_not_considered",DEIMPRESSION:"deimpression",CLICK_TAGGER:"og-tagger-click",UNDO_DISMISS:"undo_dismiss"};},null);
__d('ReactFeedComposerXPromptInteractionsModule',['csx','cx','ReactComposerEvents','PromptsInteractionsEventNames','Arbiter','Bootloader','CSS','Event','SubscriptionsHandler','requireWeak'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={VISIBLE:'visible',HIDDEN:'hidden'};function k(l,m,n,o,p,q){'use strict';this.$ReactFeedComposerXPromptInteractionsModule2=q;this.$ReactFeedComposerXPromptInteractionsModule3=false;this.$ReactFeedComposerXPromptInteractionsModule1=new (c('SubscriptionsHandler'))();this.$ReactFeedComposerXPromptInteractionsModule1.addSubscriptions(c('Event').listen(o,'click',function(event){this.closePrompt(l,n);}.bind(this)),c('Event').listen(n,'click',function(event){this.togglePrompt(l,n);}.bind(this)),c('Event').listen(m,'click',function(event){this.$ReactFeedComposerXPromptInteractionsModule4(c('PromptsInteractionsEventNames').OPEN_SELECTING_CONTENT);if(p.profilePictureOverlayID){this.$ReactFeedComposerXPromptInteractionsModule5(p);return;}if(p.trendingMemes){this.$ReactFeedComposerXPromptInteractionsModule6(p.composerID);return;}this.fillComposerTags(p);c('Bootloader').loadModules(["DOM","ReactComposerFeedXMinutiaeBootloadStore"],function(r,s){s.setMinutiaeData(p.taggerData);s.setPromptData(q);c('CSS').hide(l);c('CSS').hide(n);var t=r.scry(document,"img._3cr_")[0];if(t)c('CSS').show(t);});}.bind(this)),c('Arbiter').subscribeOnce(c('ReactComposerEvents').POST_SUCCEEDED+p.composerID,this.$ReactFeedComposerXPromptInteractionsModule7.bind(this)));}k.prototype.$ReactFeedComposerXPromptInteractionsModule5=function(l){'use strict';c('Bootloader').loadModules(["XProfilePictureOverlayAsyncDialogController","AsyncRequest"],function(m,n){var o=m.getURIBuilder().setInt('selected_page_id',l.profilePictureOverlayID).setStringToStringMap('prompt_data',this.$ReactFeedComposerXPromptInteractionsModule2).getURI();new n().setURI(o).send();}.bind(this));};k.prototype.$ReactFeedComposerXPromptInteractionsModule6=function(l){'use strict';if(!this.$ReactFeedComposerXPromptInteractionsModule3){this.$ReactFeedComposerXPromptInteractionsModule3=true;c('Bootloader').loadModules(["ReactComposerMemePickerLogger"],function(m){m.logMemePromptClicked();this.$ReactFeedComposerXPromptInteractionsModule8(l);this.$ReactFeedComposerXPromptInteractionsModule1.addSubscriptions(c('Arbiter').subscribeOnce('ReactComposerStatusEagerAttachment/mounted',function(n,o){if(o===l)this.$ReactFeedComposerXPromptInteractionsModule8(l);}.bind(this)));}.bind(this));}else c('Bootloader').loadModules(["ReactComposerMemePickerLogger"],function(m){m.logMemePromptClicked();});};k.prototype.$ReactFeedComposerXPromptInteractionsModule8=function(l){'use strict';c('Bootloader').loadModules(["ReactComposerMemePickerActions"],function(m){m.setShouldShowMemePickerDialog(l,true);});};k.prototype.fillComposerTags=function(l){'use strict';c('requireWeak')('ReactComposerTaggerActions',function(m){c('requireWeak')('ReactComposerTaggerType',function(n){setTimeout(function(){if(l.taggerData[n.ACTIVITY])m.setTaggerData(l.composerID,n.ACTIVITY,l.taggerData[n.ACTIVITY]);if(l.taggerData[n.LOCATION])m.setTaggerData(l.composerID,n.LOCATION,l.taggerData[n.LOCATION]);c('Arbiter').inform(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+l.composerID);},0);});});};k.prototype.togglePrompt=function(l,m){'use strict';if(c('CSS').hasClass(l,"_3crz")){this.openPrompt(l,m);}else this.closePrompt(l,m);};k.prototype.closePrompt=function(l,m){'use strict';if(!c('CSS').hasClass(l,"_3crz")){c('CSS').addClass(l,"_3crz");c('CSS').addClass(m,"_3cr-");this.$ReactFeedComposerXPromptInteractionsModule4(c('PromptsInteractionsEventNames').IMPRESSION,j.HIDDEN);this.$ReactFeedComposerXPromptInteractionsModule4(c('PromptsInteractionsEventNames').HIDE_SUGGESTION);}};k.prototype.openPrompt=function(l,m){'use strict';c('CSS').removeClass(l,"_3crz");c('CSS').removeClass(m,"_3cr-");this.$ReactFeedComposerXPromptInteractionsModule4(c('PromptsInteractionsEventNames').IMPRESSION,j.VISIBLE);this.$ReactFeedComposerXPromptInteractionsModule4(c('PromptsInteractionsEventNames').SHOW_SUGGESTION);};k.prototype.$ReactFeedComposerXPromptInteractionsModule7=function(){'use strict';this.$ReactFeedComposerXPromptInteractionsModule1.release();c('requireWeak')('ReactComposerFeedXMinutiaeBootloadStore',function(l){l.setPromptData(null);});};k.prototype.$ReactFeedComposerXPromptInteractionsModule4=function(l){var m=arguments.length<=1||arguments[1]===undefined?null:arguments[1];'use strict';c('Bootloader').loadModules(["XReactFeedComposerXPromptDismissController","AsyncRequest"],function(n,o){var p=n.getURIBuilder().getURI();new o().setURI(p).setData({user_action:l,prompt_id:this.$ReactFeedComposerXPromptInteractionsModule2.promptID,prompt_type:this.$ReactFeedComposerXPromptInteractionsModule2.promptType,prompt_tracking_string:this.$ReactFeedComposerXPromptInteractionsModule2.trackingString,prompt_state:m}).send();}.bind(this));};f.exports=k;},null);