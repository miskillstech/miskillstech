/*!CK:1337714364!*//*1456170616,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BbsVE"]); }

__d("XCollectionRecommendationCarouselController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/timeline\/app_collection\/recommendation\/carousel\/",{collection_token:{type:"String",required:true},cursor:{type:"String",required:true},id:{type:"String",required:true},itemsize:{type:"Int",required:true},itemsperpage:{type:"Int",required:true},itemstooverfetch:{type:"Int",required:true},surface:{type:"String",required:true},surface_collection_id:{type:"Int",required:true}});},null);
__d('OGCollectionRecommendationCarousel',['csx','cx','Arbiter','AsyncRequest','CSS','DataStore','DOM','Event','PageLikeConstants','Parent','XCollectionRecommendationCarouselController','tidyEvent'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='OGCollectionRecommendationCarousel',k={},l={};function m(u,v,w,x){'use strict';this.$OGCollectionRecommendationCarousel1=v;this.$OGCollectionRecommendationCarousel2=x.collection_token;this.$OGCollectionRecommendationCarousel3=w;this.$OGCollectionRecommendationCarousel4=v.getNode().id;this.$OGCollectionRecommendationCarousel5=x.surface;this.$OGCollectionRecommendationCarousel6=x.surface_collection_id;this.$OGCollectionRecommendationCarousel7=u;this.$OGCollectionRecommendationCarousel8=x.item_size;this.$OGCollectionRecommendationCarousel9=x.items_per_page;this.$OGCollectionRecommendationCarousel10=x.items_to_over_fetch;k[u]={carousel:v,collectionToken:x.collection_token};c('DataStore').set(j,this.$OGCollectionRecommendationCarousel4,this);c('DataStore').set(j,this.$OGCollectionRecommendationCarousel2,this);if(!w){v.endCarousel();return;}c('tidyEvent')([this.$OGCollectionRecommendationCarousel1.subscribe('needsitems',this.$OGCollectionRecommendationCarousel11.bind(this))]);c('Arbiter').subscribe(c('PageLikeConstants').LIKED,this.$OGCollectionRecommendationCarousel12.bind(this));c('Arbiter').subscribe(c('PageLikeConstants').UNLIKED,this.$OGCollectionRecommendationCarousel13.bind(this));}m.prototype.$OGCollectionRecommendationCarousel11=function(){'use strict';new (c('AsyncRequest'))(c('XCollectionRecommendationCarouselController').getURIBuilder().setString('collection_token',this.$OGCollectionRecommendationCarousel2).setString('cursor',this.$OGCollectionRecommendationCarousel3).setString('id',this.$OGCollectionRecommendationCarousel4).setInt('itemsize',this.$OGCollectionRecommendationCarousel8).setInt('itemsperpage',this.$OGCollectionRecommendationCarousel9).setInt('itemstooverfetch',this.$OGCollectionRecommendationCarousel10).setString('surface',this.$OGCollectionRecommendationCarousel5).setInt('surface_collection_id',this.$OGCollectionRecommendationCarousel6).getURI()).send();};m.prototype.$OGCollectionRecommendationCarousel12=function(u,v){'use strict';var w=c('Parent').bySelector(v.target,"._58rc");if(!w)return;l[v.profile_id]=w;n(w,true);var x=c('Parent').bySelector(w,"._596n");if(x&&this.$OGCollectionRecommendationCarousel7===x.id)t(x.id);};m.prototype.$OGCollectionRecommendationCarousel13=function(u,v){'use strict';var w=l[v.profile_id];if(!w)return;n(w,false);};m.prototype.$OGCollectionRecommendationCarousel14=function(u,v){'use strict';if(!v||!u||u.length===0){this.$OGCollectionRecommendationCarousel1.endCarousel();return;}this.$OGCollectionRecommendationCarousel3=v;this.$OGCollectionRecommendationCarousel1.addItems(u);};m.update=function(u,v,w){'use strict';var x=c('DataStore').get(j,w);if(x)x.$OGCollectionRecommendationCarousel14(u,v);};m.removeItemFromRecommendations=function(u,v){'use strict';return s(u,v);};m.plusRecommendation=function(u,v,w,x,y,z){'use strict';var aa=k[v];if(u!=v&&aa){var ba=c('DOM').scry(aa.carousel.getNode(),'[data-obj="'+x+'"]');if(ba&&ba.length>0){var ca=c('Parent').bySelector(ba[0],"._58rc");r(v,ca);}}var da=null;if(z){da=s(u,w);}else da=p(u,w);return {ignored_item_ids:da};};m.postPlusRecommendation=function(u,v){'use strict';var w=m.getWrapperID(u,v);t(w);};m.slideLeftOneUnitAfterAction=function(u){'use strict';t(u);};m.getWrapperID=function(u,v){'use strict';return 'recommendation_carousel_'+u+'_'+v;};function n(u,v){var w=c('DOM').scry(u,"._vfm")[0],x="_4rtx";if(w)v?c('CSS').addClass(w,x):c('CSS').removeClass(w,x);}function o(u){var v=c('DOM').scry(u,"._3owb")[0];if(v)return v.getAttribute('data-obj');}function p(u,v){var w=[],x=k[u].carousel.getVisibleNodes(),y=o(v);for(var z=0;z<x.length;++z){var aa=o(x[z]);if(y===aa)break;if(aa)w.push(aa);}return w;}function q(u){c('CSS').addClass(u,"_42fn");var v=c('Event').listen(u,'mouseover',function(){c('CSS').removeClass(u,"_42fn");v.remove();});}function r(u,v){if(v){var w=v.nextSibling;w&&q(w);k[u].carousel.removeItem(v);}k[u].carousel.refresh();}function s(u,v){var w=p(u,v);r(u,v);return w;}function t(u){var v=k[u].carousel;if(v){var w=v._carousel._grid.querySelector(':hover');v.slide(1,300);var x=w.nextSibling;if(x){c('CSS').addClass(x,"_46lc");var y=c('Event').listen(x,'mouseover',function(){c('CSS').removeClass(x,"_46lc");y.remove();});}}}f.exports=m;},null);
__d('OGCollectionRecommendationQuestionWrapper',['csx','cx','CSS','Event','OGCollectionRecommendationCarousel','Parent','tidyEvent'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m,n,o,p,q){'use strict';this.$OGCollectionRecommendationQuestionWrapper1=k;this.$OGCollectionRecommendationQuestionWrapper2=l;this.$OGCollectionRecommendationQuestionWrapper3=m;this.$OGCollectionRecommendationQuestionWrapper4=n;this.$OGCollectionRecommendationQuestionWrapper5=p;this.$OGCollectionRecommendationQuestionWrapper6=q;c('tidyEvent')(o.subscribe('answered',function(r,s){var t=c('Parent').byClass(this.$OGCollectionRecommendationQuestionWrapper5,'selected');if(s==='yes'){var u=this.$OGCollectionRecommendationQuestionWrapper4;if(this.$OGCollectionRecommendationQuestionWrapper6)u=c('OGCollectionRecommendationCarousel').getWrapperID(this.$OGCollectionRecommendationQuestionWrapper2,this.$OGCollectionRecommendationQuestionWrapper1);c('CSS').hide(t);var v=c('OGCollectionRecommendationCarousel').plusRecommendation(this.$OGCollectionRecommendationQuestionWrapper4,u,c('Parent').bySelector(this.$OGCollectionRecommendationQuestionWrapper5,"._58rc"),this.$OGCollectionRecommendationQuestionWrapper3,this.$OGCollectionRecommendationQuestionWrapper1,this.$OGCollectionRecommendationQuestionWrapper6);return Object.assign(v,{collection_token:this.$OGCollectionRecommendationQuestionWrapper1,show_edit_menu:false,show_added_check:true});}else{var w=c('OGCollectionRecommendationCarousel').slideLeftOneUnitAfterAction(this.$OGCollectionRecommendationQuestionWrapper4);c('CSS').addClass(t,"_2pbd");var x=c('Event').listen(t.parentNode,'mouseover',function(){c('CSS').removeClass(t,"_2pbd");x.remove();});return {ignored_item_ids:w,objectid:this.$OGCollectionRecommendationQuestionWrapper3};}}.bind(this)));}f.exports=j;},null);
__d('CollectionSuggestionAddQuestion',['AsyncRequest','Event','TidyArbiterMixin','mixin','tidyEvent'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('mixin')(c('TidyArbiterMixin')));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this);this.$CollectionSuggestionAddQuestion1=m;c('tidyEvent')(c('Event').listen(k.yes,'click',this.handleClick.bind(this).bind(null,'yes',l.yes)));if(k.no)c('tidyEvent')(c('Event').listen(k.no,'click',this.handleClick.bind(this).bind(null,'no',l.no)));if(k.want)c('tidyEvent')(c('Event').listen(k.want,'click',this.handleClick.bind(this).bind(null,'want',l.want)));}j.prototype.handleClick=function(k,l){'use strict';var m=this.inform('answered',k);new (c('AsyncRequest'))(l).setRelativeTo(this.$CollectionSuggestionAddQuestion1).setData(m).send();};f.exports=j;},null);
__d('EgoCollectionsRecommendation',['csx','Arbiter','AsyncRequest','DOM','DOMClone','Tooltip','isEmpty'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={},j={},k=1500;function l(o,p){new (c('AsyncRequest'))(o).setHandler(function(q){if(!q.payload)return;var r=null;for(var s in p){if(!r){c('DOM').setContent(p[s],q.payload.icon);r=p[s].firstChild;}else c('DOM').setContent(p[s],r=c('DOMClone').shallowClone(r));c('Tooltip').set(r,q.payload.tooltip);}}).send();}function m(o,p,event,q){if(q.category!==o)return;var r=j[o];if(!c('isEmpty')(r))setTimeout(l.bind(null,p,r),k);}var n={keepIconSynced:function(o,p,q){if(!i[q])i[q]=c('Arbiter').subscribe('AudienceSelector/syncNonSelectorIcon',m.bind(null,q,p));j[q]||(j[q]={});j[q][o.id]=o;},replaceOrInsertTopUnit:function(o,p){if(!o)return;var q=c('DOM').scry(o,'^.ego_unit_container')[0];if(!q)return;var r=c('DOM').scry(q,"._53ee");if(r[0]){c('DOM').replace(r[0],p);}else c('DOM').prependContent(q,p);}};f.exports=n;},null);