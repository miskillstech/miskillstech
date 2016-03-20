/*!CK:1771528694!*//*1457925619,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["seQmN"]); }

__d("PhotoEditorTargetType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER:"composer",COMMENT:"comment",PAGE_PRODUCT_COMPOSER:"page_product_composer",PROFILE_PIC:"profile_pic"};},null);
__d("SocialGoodCharityActionsLoggerEvents",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={INITIALIZATION_BEGIN:"initialization_begin",INITIALIZATION:"initialization",PREPARE_PAYMENT_METHOD:"prepare_payment_method",PUX_METHOD:"pux_method",NUX_METHOD:"nux_method",FRAUD_CHECK_BEGIN:"fraud_check_begin",FRAUD_CHECK:"fraud_check",CHARGE_CREDENTIAL:"charge_credential",COMPLETE_DONATE:"complete_donate",FUNDRAISER_PAGE_SHARE_IMPRESSION:"fundraiser_page_share_impression",CREATE_FUNDRAISER_BEGIN:"create_fundraiser_begin",CREATE_FUNDRAISER_COMPLETE:"create_fundraiser_complete",CHANGE_DONATION_AMOUNT:"change_donation_amount",CHOOSE_PAYMENT_METHOD:"choose_payment_method",CLICK_ADD_PAYMENT_METHOD:"click_add_payment_method",ADD_PAYMENT_METHOD:"add_payment_method",DONATE_CLICK:"donate_click",DONATE_CANCEL:"donate_cancel",LEARN_MORE_CLICK:"learn_more_click",INVITE_CLICK:"invite_click",INVITE_COMPLETE:"invite_complete",SHARE_CLICK:"share_click",SHARE_CLICK_CANCEL:"share_click_cancel",SHARE_COMPLETE:"share_complete",JOIN_CLICK:"join_click",JOIN_COMPLETE:"join_complete",LEAVE_CLICK:"leave_click",LEAVE_COMPLETE:"leave_complete",UNFOLLOW_CLICK:"unfollow_click",UNFOLLOW_COMPLETE:"unfollow_complete",FOLLOW_CLICK:"follow_click",FOLLOW_COMPLETE:"follow_complete",VIEW_FUNDRAISER:"view_fundraiser",PAGE_VERIFICATION_INITIALIZED:"page_verification_initialized",PAGE_TERM_REVIEW_INITIALIZED:"page_term_review_initialized",PAYMENT_APPLICATION_INITIALIZED:"payment_application_initialized",ORGANIZATION_DETAILS:"organization_details",LEADERSHIP_INFO:"leadership_info",ADMINS_INFO:"admins_info",PAYMENT_INFO:"payment_info",ENTITY_CREATION:"entity_creation",MISSING_GRAPHQL_FIELDS:"fundraiser_page_missing_fields",GOTO_PAGE_SUBTITLE:"fundraiser_charity_page_subtitle",GOTO_PAGE_ACTIONBAR:"fundraiser_page_tapped_go_to_page"};},null);
__d("SocialGoodCharityActionsLoggerParentEvents",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DONATE:"donate",INTERACT:"interact",CREATE:"create",ONBOARDING:"onboarding"};},null);
__d('FileInput.react',['cx','invariant','FileInput','InlineBlock.react','React','ReactDOM','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'FileInput',propTypes:{containerClassName:j.string,display:j.oneOf(['inline-block','inline'])},getDefaultProps:function(){return {display:'inline-block'};},render:function(){var l=c('joinClasses')("_m",this.props.containerClassName),m="container",n=c('React').createElement('input',babelHelpers['extends']({},this.props,{type:'file',className:c('joinClasses')(this.props.className,"_n"),ref:'fileInput'}),undefined);if(this.props.display==='inline-block')return (c('React').createElement(c('InlineBlock.react'),{className:l,ref:m},this.props.children,n));return (c('React').createElement('span',{className:l,ref:m},this.props.children,n));},componentDidMount:function(){var l=c('ReactDOM').findDOMNode(this.refs.fileInput),m=c('ReactDOM').findDOMNode(this.refs.container),n=m.firstChild;!(n.nodeName==='A')?i(0):undefined;n.setAttribute('rel','ignore');this._fileInput=new (c('FileInput'))(m,n,l);},componentWillUnmount:function(){this._fileInput.destroy();this._fileInput=null;},getFileInput:function(){return this._fileInput;},focus:function(){var l=c('ReactDOM').findDOMNode(this.refs.fileInput);if(!l.disabled)l.focus();}});f.exports=k;},null);
__d('MenuSeparator.react',['MenuSeparator'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){j.isReactLegacyFactory={};j.type=j;}var i=c('MenuSeparator');h(i);f.exports=i;},null);
__d('ScrollColumn.react',['cx','invariant','joinClasses','throttle','tidyEvent','Arbiter','Event','React','ReactDOM','Vector','ViewportBounds'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k='ScrollColumn/adjust',l=c('React').createClass({displayName:'ScrollColumn',propTypes:{topOffset:j.number,zIndex:j.number},getDefaultProps:function(){return {topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function(){var m='auto',n=this.state.fixedLeft,o='auto';if(this.state.fixed==='bottom'){m=this.state.fixedBottom;}else if(this.state.fixed==='top'){o=this.state.fixedTop;}else{n='auto';o=this.state.top;}var p=c('joinClasses')(this.props.className,"_5ss7");return (c('React').createElement('div',{className:p,ref:'container'},c('React').createElement('div',{className:"_5ss8"+(this.state.fixed?' '+"fixed_always":''),ref:'column',style:{bottom:m,left:n,top:o,zIndex:this.props.zIndex}},this.props.children)));},componentDidMount:function(){this.setState({adjustEventListener:c('tidyEvent')(c('Arbiter').subscribe(k,function(){this._adjust();}.bind(this))),resizeListener:c('tidyEvent')(c('Event').listen(window,'resize',c('throttle')(this._adjust))),scrollListener:c('tidyEvent')(c('Event').listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:c('tidyEvent')(c('ViewportBounds').subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function(m,n){if(n.fixed!==this.state.fixed)c('Arbiter').inform('reflow');},componentWillUnmount:function(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function(event){var m=c('Vector').getScrollPosition().y;this._scrollDelta=m-this._scroll;this._scroll=m;this._adjust();},_adjust:function(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var m=this._getTopPositionForRef('column'),n=this._getTopPositionForRef('container'),o=m-n;this._setNotFixed(o);},_getTopPositionForRef:function(m){var n=this.refs[m];!n?i(0):undefined;var o=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(n),'viewport').y;if(this._scroll<0)o+=this._scroll;return o;},_getTopBoundWithOffset:function(){return c('ViewportBounds').getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function(){var m=this._getTopPositionForRef('container');return m>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function(){var m=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom()-this._getTopBoundWithOffset();return c('ReactDOM').findDOMNode(this.refs.column).offsetHeight>m;},_isBottomOfColumnVisible:function(){var m=this._getTopPositionForRef('column'),n=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.column),'viewport').y,o=m+n;return o<=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom();},_isTopOfColumnVisible:function(){var m=this._getTopPositionForRef('column');return m>=this._getTopBoundWithOffset();},_getFixedLeft:function(){return (c('Vector').getElementPosition(c('ReactDOM').findDOMNode(this.refs.container),'viewport').x);},_setFixedToBottom:function(){this.setState({fixed:'bottom',fixedBottom:c('ViewportBounds').getBottom(),fixedLeft:this._getFixedLeft()});},_setFixedToTop:function(){this.setState({fixed:'top',fixedLeft:this._getFixedLeft(),fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function(m){this.setState({fixed:false,top:m});},_updateContainerHeight:function(){c('ReactDOM').findDOMNode(this.refs.container).style.height=c('ReactDOM').findDOMNode(this.refs.column).offsetHeight+this.state.top+'px';},_updateColumnWidth:function(){c('ReactDOM').findDOMNode(this.refs.column).style.width=c('ReactDOM').findDOMNode(this.refs.container).offsetWidth+'px';}});l.EVENT_SHOULD_ADJUST=k;f.exports=l;},null);
__d('XUIDialogCloseButton.react',['fbt','React','XUIDialogButton.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUIDialogCloseButton',render:function(){return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'cancel',label:h._("Close")})));}});f.exports=i;},null);
__d('XUIDialogSaveButton.react',['fbt','React','XUIDialogButton.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUIDialogSaveButton',render:function(){return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'confirm',label:h._("Save")})));}});f.exports=i;},null);
__d('XUIMenuSeparator.react',['MenuSeparator.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('MenuSeparator.react');f.exports=h;},null);
__d('ConnectionsPYMLTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ConnectionsPYMLLoggerConfig',this.$ConnectionsPYMLTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ConnectionsPYMLLoggerConfig',this.$ConnectionsPYMLTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ConnectionsPYMLTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ConnectionsPYMLTypedLogger1=babelHelpers['extends']({},this.$ConnectionsPYMLTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$ConnectionsPYMLTypedLogger1.event=j;return this;};h.prototype.setLikeSource=function(j){this.$ConnectionsPYMLTypedLogger1.like_source=j;return this;};h.prototype.setPageID=function(j){this.$ConnectionsPYMLTypedLogger1.page_id=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$ConnectionsPYMLTypedLogger1=babelHelpers['extends']({},this.$ConnectionsPYMLTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={event:true,like_source:true,page_id:true};f.exports=h;},null);
__d('SocialGoodCharityActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:SocialGoodCharityActionsLoggerConfig',this.$SocialGoodCharityActionsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:SocialGoodCharityActionsLoggerConfig',this.$SocialGoodCharityActionsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$SocialGoodCharityActionsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$SocialGoodCharityActionsTypedLogger1=babelHelpers['extends']({},this.$SocialGoodCharityActionsTypedLogger1,j);return this;};h.prototype.setAbTestNamesToGroups=function(j){this.$SocialGoodCharityActionsTypedLogger1.ab_test_names_to_groups=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setAttributes=function(j){this.$SocialGoodCharityActionsTypedLogger1.attributes=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setCampaignID=function(j){this.$SocialGoodCharityActionsTypedLogger1.campaign_id=j;return this;};h.prototype.setCampaignType=function(j){this.$SocialGoodCharityActionsTypedLogger1.campaign_type=j;return this;};h.prototype.setEvent=function(j){this.$SocialGoodCharityActionsTypedLogger1.event=j;return this;};h.prototype.setFundraiserID=function(j){this.$SocialGoodCharityActionsTypedLogger1.fundraiser_id=j;return this;};h.prototype.setHasPaymentMethodOnFile=function(j){this.$SocialGoodCharityActionsTypedLogger1.has_payment_method_on_file=j;return this;};h.prototype.setParentEventType=function(j){this.$SocialGoodCharityActionsTypedLogger1.parent_event_type=j;return this;};h.prototype.setSourceAttributes=function(j){this.$SocialGoodCharityActionsTypedLogger1.source_attributes=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setVC=function(j){this.$SocialGoodCharityActionsTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$SocialGoodCharityActionsTypedLogger1=babelHelpers['extends']({},this.$SocialGoodCharityActionsTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={ab_test_names_to_groups:true,attributes:true,campaign_id:true,campaign_type:true,event:true,fundraiser_id:true,has_payment_method_on_file:true,parent_event_type:true,source_attributes:true,vc:true};f.exports=h;},null);
__d('Tour',['Arbiter','LayerDestroyOnHide','LayerHideOnEscape','NavigationMessage','PageEvents'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';if(h._instance)h._instance.setTourComplete();h._instance=this;}h.prototype.init=function(){'use strict';this._pageLeaveToken=c('Arbiter').subscribe(c('PageEvents').AJAXPIPE_ONUNLOAD,this.handleLeavePage.bind(this));this._navigationBeginToken=c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.handleTransition.bind(this));this.steps={};return this;};h.prototype.registerStep=function(i,j){'use strict';i.disableBehavior(c('LayerDestroyOnHide'));i.disableBehavior(c('LayerHideOnEscape'));this.steps[j]=i;i.subscribe('show',function(){i.inform('tour-dialog-show',i);});if(!this.getTourStarted())this.setTourStart();};h.prototype._unsubscribeSubscriptions=function(){'use strict';this._navigationBeginToken.unsubscribe();this._pageLeaveToken.unsubscribe();};h.prototype.handleLeavePage=function(){'use strict';this._unsubscribeSubscriptions();};h.prototype.handleTransition=function(){'use strict';this._unsubscribeSubscriptions();};h.prototype.handleTourStart=function(){'use strict';};h.prototype.handleTourStop=function(){'use strict';};h.prototype.handleTourComplete=function(){'use strict';};h.prototype.showStep=function(i){'use strict';var j=this.steps[i];if(!(this.openDialog==j))this.hideOpenDialog();if(!j)return;this.openDialog=j;j.show();};h.prototype.hideOpenDialog=function(){'use strict';if(this.openDialog){this.openDialog.hide();this.openDialog=null;}};h.prototype.getTourStarted=function(){'use strict';return this.tourStarted;};h.prototype.setTourStart=function(){'use strict';this.tourStarted=true;this.handleTourStart();};h.prototype.setTourStop=function(){'use strict';this.tourStarted=false;this.hideOpenDialog();this.handleTourStop();};h.prototype.setTourComplete=function(){'use strict';if(this.tourComplete)return;this.setTourStop();this.tourComplete=true;this.handleTourComplete();};h.prototype.hideStep=function(i){'use strict';var j=this.steps[i];j&&j.hide();};h.getInstance=function(){'use strict';return h._instance||(h._instance=new h());};Object.assign(h.prototype,{tourStarted:false,tourComplete:false,_navigationBeginToken:null,_pageLeaveToken:null,steps:{},openDialog:null});f.exports=h;},null);
__d('PageFanning',['Animation','AsyncRequest','CSS','DOM','Parent','URI','ActorURI','$','collectDataAttributes','ConnectionsPYMLTypedLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={setFanStatus:function(j,k,l,m,n,o,p){var q={ft:{}};if(j)q={ft:c('collectDataAttributes')(j,['ft']).ft};var r=new (c('URI'))(window.location.href).getQueryData();if(l)if(r.ref==='pyml_feed'){new (c('ConnectionsPYMLTypedLogger'))().setEvent('like_page').setLikeSource('profile').setPageID(parseInt(k,10)).log();}else if(r.ref==='pyml_permalink')new (c('ConnectionsPYMLTypedLogger'))().setEvent('like_page').setLikeSource('post_permalink').setPageID(parseInt(k,10)).log();n=n||function(v){var w=v.getPayload();if(!w||!j)return;if(w.reload){h.reloadOnFanStatusChanged();}else i(j,w);};var s={fbpage_id:k,add:l,reload:m};if(p!=null)Object.assign(s,p);Object.assign(s,q);var t='/ajax/pages/fan_status.php';if(p!=null&&p.actor_id!=null)t=c('ActorURI').create(t,p.actor_id);var u=new (c('AsyncRequest'))().setURI(t).setData(s).setNectarModuleDataSafe(j).setHandler(n);if(o)u.setErrorHandler(o);u.send();return false;},reloadOnFanStatusChanged:function(){var j=c('URI').getRequestURI();window.location.href=j;},toggleLikeOnFanStatusChanged:function(j,k){var l=c('$')('liked_pages_like_action_'+j),m=c('$')('liked_pages_undo_action_'+j);c('CSS').conditionClass(l,'hidden_elem',k);c('CSS').conditionClass(m,'hidden_elem',!k);}};function i(j,k){var l=k.feedback;if(!l)return;if(c('Parent').byClass(j,'fbTimelineEscapeSectionItem'))j=c('Parent').byClass(j,'fan_status_inactive')||j;var m=c('DOM').create('span',{className:'fan_status_inactive'},l);j.parentNode.replaceChild(m,j);var n=function(){if(k.can_repeat_action)m.parentNode.replaceChild(j,m);};new (c('Animation'))(m).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(n).go();}f.exports=h;},null);
__d('SocialGoodCharityActionsLoggerUtils',['SocialGoodCharityActionsLoggerEvents','SocialGoodCharityActionsLoggerParentEvents','SocialGoodCharityActionsTypedLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={logAction:function(event,i,j,k){new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(i).setCampaignID(j.campaign_id).setCampaignType(j.campaign_type).setAttributes(j.attributes).setSourceAttributes(j.source_attributes).setFundraiserID(j.fundraiser_id).log();},logOnboarding:function(event,i){new (c('SocialGoodCharityActionsTypedLogger'))().setEvent(event).setParentEventType(c('SocialGoodCharityActionsLoggerParentEvents').ONBOARDING).setAttributes(i).log();},logJoinActionClick:function(i,j){var event=i?c('SocialGoodCharityActionsLoggerEvents').JOIN_CLICK:c('SocialGoodCharityActionsLoggerEvents').LEAVE_CLICK;this.logAction(event,c('SocialGoodCharityActionsLoggerParentEvents').INTERACT,j);},logFollowActionClick:function(i,j){var event=i?c('SocialGoodCharityActionsLoggerEvents').FOLLOW_CLICK:c('SocialGoodCharityActionsLoggerEvents').UNFOLLOW_CLICK;this.logAction(event,c('SocialGoodCharityActionsLoggerParentEvents').INTERACT,j);},logShareActionClick:function(i){this.logAction(c('SocialGoodCharityActionsLoggerEvents').SHARE_CLICK,c('SocialGoodCharityActionsLoggerParentEvents').INTERACT,i);},logInviteActionClick:function(i){this.logAction(c('SocialGoodCharityActionsLoggerEvents').INVITE_CLICK,c('SocialGoodCharityActionsLoggerParentEvents').INTERACT,i);}};f.exports=h;},null);
__d("XPagesLikeCountController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/x\/updateLikeCountDomString\/",{page_id:{type:"Int",required:true},like_id:{type:"String",required:true}});},null);
__d('PageLikeButton',['Arbiter','AsyncRequest','AsyncResponse','DOM','EditSubscriptions','Event','FeedBlacklistButton','PageFanning','PageLikeConstants','SocialGoodCharityActionsLoggerUtils','SubscribeButton','Tour','XPagesLikeCountController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j,k,l,m,n,o,p,q,r,s,t){var u=this._getOption(t,'isLazy');this._subscribe(c('PageLikeConstants').LIKED,u,function(w,x){if(this._shouldUpdateButton(l,t,x)){i.swap();if(!q)k.suppressNextMouseEnter&&k.suppressNextMouseEnter();if(this._getOption(t,'is_fundraiser'))c('EditSubscriptions').toggleNotificationsOnJoin(l,true);}}.bind(this));this._subscribe(c('PageLikeConstants').UNLIKED,u,function(w,x){if(this._shouldUpdateButton(l,t,x)){i.unswap();k.hideFlyout&&k.hideFlyout();if(this._getOption(t,'is_fundraiser'))c('EditSubscriptions').toggleNotificationsOnJoin(l,false);}}.bind(this));if(s)this._subscribe(c('PageLikeConstants').SPM_CALLOUT,u,function(w,x){if(this._shouldUpdateButton(l,t,x)){s.show();c('Arbiter')._releaseAllEvents(c('PageLikeConstants').SPM_CALLOUT);}}.bind(this));var v=function(event){var w=i.getCurrentButton();this._likeButtonAction(l,m,n,o,w,event,t);}.bind(this);c('Event').listen(j,'click',v);if(u)c('Arbiter').subscribe(c('PageLikeConstants').LAZY_CLICK,function(w,x){var event=x.event,y=x.node;if(y!==j)return;v(event);});},_subscribe:function(event,i,j){var k=i?[event,event+'.lazy']:[event];c('Arbiter').subscribe(k,j);},initCallout:function(i,j){var k=document.getElementById('pageActionLikeCalloutButton');c('Event').listen(k,'click',this._likeButtonAction(i,j,null,null,null));},initUnlike:function(i,j,k,l){var m=this._getOption(l,'actor_id');c('Event').listen(i,'click',function(event){this.doUnlikeAction(event,j,k,m,l);}.bind(this));},initUnlikeAndHide:function(i,j,k,l){var m=this._getOption(l,'actor_id');c('Event').listen(i,'click',function(event){this.doUnlikeAction(event,j,k,m,l);c('DOM').remove(i);}.bind(this));},doUnlikeAction:function(event,i,j,k,l){this._saveLike(event.getTarget(),i,false,function(m){c('Arbiter').inform(c('PageLikeConstants').LIKED,{profile_id:i,actor_id:k});c('AsyncResponse').defaultErrorHandler(m);},j,null,null,l);this.informUnlike(i,k);},informLike:function(i,j,k,l){var m=this._getOption(l,'actor_id'),n={profile_id:i,actor_id:m,target:j,origin:k};c('Arbiter').inform(c('PageLikeConstants').LIKED,n);n.connected=true;c('Arbiter').inform(c('SubscribeButton').SUBSCRIBED,n);c('Arbiter').inform(c('FeedBlacklistButton').UNBLACKLIST,n);},informLikeSuccess:function(i){var j={profile_id:i};c('Arbiter').inform(c('PageLikeConstants').LIKED_SUCCESS,j);c('Arbiter').inform(c('PageLikeConstants').SPM_CALLOUT,j);},informUnlike:function(i,j){var k={profile_id:i,actor_id:j};setTimeout(c('Arbiter').inform.bind(c('Arbiter'),c('PageLikeConstants').UNLIKED,k),0);k.connected=false;setTimeout(c('Arbiter').inform.bind(c('Arbiter'),c('SubscribeButton').UNSUBSCRIBED,k),0);c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,k);},updateLikeCount:function(i,j){c('Arbiter').subscribe(c('PageLikeConstants').LIKED_SUCCESS,function(k,l){var m=l.profile_id;if(j==m){var n=c('XPagesLikeCountController').getURIBuilder().setInt('page_id',j).setString('like_id',i).getURI();new (c('AsyncRequest'))().setURI(n).send();}});},_saveLike:function(i,j,k,l,m,n,o,p){var q=this._getOption(p,'actor_id');c('Tour').getInstance().hideStep('low_page_likes');if(this._getOption(p,'is_fundraiser')&&this._getOption(p,'logging_info'))c('SocialGoodCharityActionsLoggerUtils').logJoinActionClick(k,this._getOption(p,'logging_info'));c('PageFanning').setFanStatus(i,j,k,false,function(){h.informLikeSuccess(j);if(!k&&this._getOption(p,'reload_on_unlike')||k&&this._getOption(p,'reload_on_like'))location.reload();}.bind(this),l,{fan_origin:m,fan_source:n,cat:o,actor_id:q});},_likeButtonAction:function(i,j,k,l,m,event,n){var o=this._getOption(n,'actor_id');this._saveLike(event.getTarget(),i,true,function(p){c('Arbiter').inform(c('PageLikeConstants').UNLIKED,{profile_id:i,actor_id:o});c('AsyncResponse').defaultErrorHandler(p);},j,k,l,n);h.informLike(i,m,j,n);},_shouldUpdateButton:function(i,j,k){var l=this._getOption(j,'actor_id');if(i===k.profile_id){if(l===null)return true;if(k.actor_id!==null&&l===k.actor_id)return true;}return false;},_getOption:function(i,j){if(i&&j in i)return i[j];return null;}};f.exports=h;b.PageLikeButton=h;},null);
__d('PageGetNotificationConstants',['fbt','keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={Events:c('keyMirror')({CHANGE:null,NEWSFEED_CHANGE:null,NOTIFICATION_CHANGE:null}),Title:{video:h._("Videos"),photo:h._("Photos"),link:h._("Links"),others:h._("Status Updates"),event:h._("Events"),live_video:h._("Live Videos"),all_posts:h._("All Posts"),none:h._("None"),all_on:h._("All On"),on:h._("On")},NewsFeedTitle:{unfollow:h._("Unfollow"),see_first:h._("See First"),follow:h._("Default")},PostSubscriptionType:c('keyMirror')({video:null,photo:null,link:null,others:null}),PostSubscriptionTypeArray:['video','photo','link','others'],EventSubscriptionType:c('keyMirror')({event:null}),LiveVideoSubscriptionType:c('keyMirror')({live_video:null})};f.exports=i;},null);
__d('PageGetNotificationUtil',['PageGetNotificationConstants'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={subtitleForPageGetNotification:function(i){var j=c('PageGetNotificationConstants').PostSubscriptionTypeArray.map(function(m){return i[m];}),k=j.reduce(function(m,n){return m&&n;},true),l=[];if(k){l.push(c('PageGetNotificationConstants').Title.all_posts);}else c('PageGetNotificationConstants').PostSubscriptionTypeArray.map(function(m){if(i[m])l.push(c('PageGetNotificationConstants').Title[m]);});if(i[c('PageGetNotificationConstants').EventSubscriptionType.event])l.push(c('PageGetNotificationConstants').Title.event);if(i[c('PageGetNotificationConstants').LiveVideoSubscriptionType.live_video])l.push(c('PageGetNotificationConstants').Title.live_video);if(l.length!==0)return l.join(', ');return c('PageGetNotificationConstants').Title.none;},isNotificationStatusOn:function(i){var j=c('PageGetNotificationConstants').PostSubscriptionTypeArray.map(function(k){return i[k];});return j.filter(function(k){return k;}).length>0||i[c('PageGetNotificationConstants').EventSubscriptionType.event]||i[c('PageGetNotificationConstants').LiveVideoSubscriptionType.live_video];},isNotificationStatusAllOn:function(i){var j=c('PageGetNotificationConstants').PostSubscriptionTypeArray.map(function(k){return i[k];});j.push(i[c('PageGetNotificationConstants').EventSubscriptionType.event]);if(c('PageGetNotificationConstants').LiveVideoSubscriptionType.live_video in i)j.push(i[c('PageGetNotificationConstants').LiveVideoSubscriptionType.live_video]);return j.filter(function(k){return k;}).length===j.length;},titleForTurnOnNotificationOption:function(i){var j=this.isNotificationStatusOn(i),k=this.isNotificationStatusAllOn(i);if(!j)return c('PageGetNotificationConstants').Title.all_on;return [k?c('PageGetNotificationConstants').Title.all_on:c('PageGetNotificationConstants').Title.on,' (',this.subtitleForPageGetNotification(i),')'].join('');}};f.exports=h;},null);
__d("XPageUserFanningSettingsStatusController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/get_notification\/status\/",{page_id:{type:"String",required:true}});},null);
__d('PageLikeHoverButton',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','DOMQuery','PageGetNotificationConstants','PageGetNotificationUtil','PageLikeButton','PageLikeConstants','Parent','Run','SubscriptionsHandler','XPageUserFanningSettingsStatusController','ge'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m,n){var o=arguments.length<=4||arguments[4]===undefined?'':arguments[4],p=arguments.length<=5||arguments[5]===undefined?false:arguments[5];'use strict';this.$PageLikeHoverButton1=n;this.$PageLikeHoverButton2=l;this.$PageLikeHoverButton3=m;this.$PageLikeHoverButton4=o;this.$PageLikeHoverButton5=p;this.$PageLikeHoverButton6=new (c('SubscriptionsHandler'))();this.$PageLikeHoverButton6.addSubscriptions(k.subscribe('itemclick',function(q,r){return this.$PageLikeHoverButton7(r);}.bind(this)),c('Arbiter').subscribe(c('PageGetNotificationConstants').Events.CHANGE,function(q,r){if(n===r.pageid)this.$PageLikeHoverButton8(r);}.bind(this)),c('Arbiter').subscribe(c('PageGetNotificationConstants').Events.NEWSFEED_CHANGE,function(q,r){if(n===r.pageid&&'follow_status' in r)this.$PageLikeHoverButton9(r.follow_status);}.bind(this)),c('Arbiter').subscribe(c('PageGetNotificationConstants').Events.NOTIFICATION_CHANGE,function(q,r){if(n===r.pageid)this.$PageLikeHoverButton10(r);}.bind(this)),c('Arbiter').subscribe(c('PageLikeConstants').LIKED_SUCCESS,function(q,r){return this.$PageLikeHoverButton11(r);}.bind(this)),c('Arbiter').subscribe(c('PageLikeConstants').UNLIKED,function(q,r){return this.$PageLikeHoverButton12(r);}.bind(this)));c('Run').onLeave(function(){return this.cleanUp;}.bind(this));}j.prototype.$PageLikeHoverButton7=function(k){'use strict';if(typeof k.item.getValue=='function'&&k.item.getValue()==='Unlike.'+this.$PageLikeHoverButton1){c('PageLikeButton').doUnlikeAction(k.event,this.$PageLikeHoverButton1,this.$PageLikeHoverButton4,this.$PageLikeHoverButton3);return;}var l=c('Parent').bySelector(k.event.getTarget(),"._54ni");if(c('CSS').hasClass(l,"_5jwk")){c('Arbiter').inform(c('PageGetNotificationConstants').Events.NEWSFEED_CHANGE,{pageid:this.$PageLikeHoverButton1,follow_status:l.getAttribute('data-value')});}else if(c('CSS').hasClass(l,"_5jwl")){var m=l.getAttribute('data-value')==='on',n={};c('PageGetNotificationConstants').PostSubscriptionTypeArray.map(function(o){n[o]=m;});n[c('PageGetNotificationConstants').EventSubscriptionType.event]=m;if(this.$PageLikeHoverButton5)n[c('PageGetNotificationConstants').LiveVideoSubscriptionType.live_video]=m;c('Arbiter').inform(c('PageGetNotificationConstants').Events.NOTIFICATION_CHANGE,babelHelpers['extends']({pageid:this.$PageLikeHoverButton1},n));}};j.prototype.$PageLikeHoverButton8=function(k){'use strict';if('follow_status' in k){this.$PageLikeHoverButton9(k.follow_status);this.$PageLikeHoverButton10(k);return;}var l=c('XPageUserFanningSettingsStatusController').getURIBuilder().setString('page_id',this.$PageLikeHoverButton1).getURI();new (c('AsyncRequest'))(l).setHandler(function(m){this.$PageLikeHoverButton10(m.payload);this.$PageLikeHoverButton9(m.payload.follow_status);}.bind(this)).send();};j.prototype.$PageLikeHoverButton11=function(k){'use strict';if(k.profile_id===this.$PageLikeHoverButton1){if(this.$PageLikeHoverButton2)this.$PageLikeHoverButton2.show();var l=c('XPageUserFanningSettingsStatusController').getURIBuilder().setString('page_id',this.$PageLikeHoverButton1).getURI();new (c('AsyncRequest'))(l).setHandler(function(m){this.$PageLikeHoverButton10(m.payload);this.$PageLikeHoverButton9('follow');}.bind(this)).send();}};j.prototype.$PageLikeHoverButton12=function(k){'use strict';if(k.profile_id===this.$PageLikeHoverButton1){if(this.$PageLikeHoverButton2)this.$PageLikeHoverButton2.hide();var l=c('XPageUserFanningSettingsStatusController').getURIBuilder().setString('page_id',this.$PageLikeHoverButton1).getURI();new (c('AsyncRequest'))(l).setHandler(function(m){this.$PageLikeHoverButton10(m.payload);this.$PageLikeHoverButton9('unfollow');}.bind(this)).send();}};j.prototype.$PageLikeHoverButton9=function(k){'use strict';var l=c('DOMQuery').scry(c('ge')('pageLikeHoverButtonMenu_'+this.$PageLikeHoverButton1),"._5jwk");l.forEach(function(m){if(m.getAttribute('data-value')===k){c('CSS').addClass(m,"_5jwm");}else c('CSS').removeClass(m,"_5jwm");});};j.prototype.$PageLikeHoverButton10=function(k){'use strict';var l=c('PageGetNotificationUtil').isNotificationStatusOn(k)?'on':'off',m=c('DOMQuery').scry(c('ge')('pageLikeHoverButtonMenu_'+this.$PageLikeHoverButton1),"._5jwl");m.forEach(function(n){if(n.getAttribute('data-value')===l){c('CSS').addClass(n,"_5jwm");}else c('CSS').removeClass(n,"_5jwm");if(n.getAttribute('data-value')==='on'){var o=c('DOMQuery').find(n,"._5jwn");c('DOM').setContent(o,c('PageGetNotificationUtil').titleForTurnOnNotificationOption(k));}});};j.prototype.$PageLikeHoverButton13=function(){'use strict';var k=c('DOMQuery').scry(c('ge')('pageLikeHoverButtonMenu_'+this.$PageLikeHoverButton1),"._5jwk");k.forEach(function(l){if(c('CSS').hasClass(l,"_5jwm"))return l.getAttribute('data-value');});return null;};j.prototype.cleanUp=function(){'use strict';this.$PageLikeHoverButton6&&this.$PageLikeHoverButton6.release();this.$PageLikeHoverButton6=null;};f.exports=j;},null);
__d('PagesComposerTargeting.react',['PagesComposerAdsTargetingSection.react','React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'PagesComposerTargeting',propTypes:{initialTargetingSpec:h.object,onTargetingChange:h.func.isRequired,canSeeCompleteList:h.bool,useTargetingAsFilter:h.bool,feedTargetingReachEstimateGK:h.bool,canSeeDemographicOptions:h.bool},render:function(){return (c('React').createElement(c('PagesComposerAdsTargetingSection.react'),this.props));}});f.exports=i;},null);
__d('ScrollColumnRenderer',['DOMContainer.react','React','ReactRenderer','ScrollColumn.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j,k){c('ReactRenderer').constructAndRenderComponentAcrossTransitions(c('ScrollColumn.react'),babelHelpers['extends']({children:[c('React').createElement(c('DOMContainer.react'),{key:'content'},i)]},k),j);}};f.exports=h;},null);
__d("XStickerPhotoEditorController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/editor\/sticker_editor\/",{grid_id:{type:"String"},feedback_id:{type:"String"},target_type:{type:"Enum",required:true,enumType:1},photo_fbid:{type:"Int",required:true},latest_fbid:{type:"Int"},initial_tab:{type:"Enum",enumType:1}});},null);