/*!CK:3808544764!*//*1456170674,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vQmBY"]); }

__d('NotificationJewelReminder',['cx','fbt','$','Arbiter','ContextualDialog','ContextualDialogXUITheme','DOM','Event','ImageBlock.react','LayerFadeOnHide','LayerFadeOnShow','NotificationStore','NotificationUpdates','React','ReactDOM','SubscriptionsHandler','Toggler','clearTimeout','ge','intlList','setTimeout'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=2,k='fbRequestsJewel',l='fbNotificationsJewel';function m(n){'use strict';this.$NotificationJewelReminder1=n;if(n.request.count>0&&n.show_request){this.$NotificationJewelReminder2(k);}else this.$NotificationJewelReminder3();}m.prototype.$NotificationJewelReminder3=function(){'use strict';if(!this.$NotificationJewelReminder1.show_notif){return;}else{this.$NotificationJewelReminder4();return;}};m.prototype.$NotificationJewelReminder4=function(){'use strict';this.$NotificationJewelReminder5=c('NotificationUpdates').subscribe('update-notifications',function(n,o){if(o.nodes)this.$NotificationJewelReminder6(o.nodes);}.bind(this));c('NotificationStore').getNotifications(Number.isInteger(this.$NotificationJewelReminder1.show_notif)?this.$NotificationJewelReminder1.show_notif:0,this.$NotificationJewelReminder6.bind(this));};m.prototype.$NotificationJewelReminder6=function(n){'use strict';if(this.$NotificationJewelReminder5){this.$NotificationJewelReminder5.unsubscribe();this.$NotificationJewelReminder5=null;}var o=c('ge')(l);if(!o||c('Toggler').getInstance(o).isShown())return;var p=[],q;n=n.filter(function(w){return w.seen_state==='UNSEEN_AND_UNREAD';});var r=Object.keys(n);for(var s=0;s<r.length;s++){if(!n[r[s]].showBeep)continue;var t=n[r[s]].actors;if(t.length===0)continue;for(var u=0;u<t.length;u++){q=q||t[u].profile_picture.uri;if(p.length<j&&t[u].name&&p.indexOf(t[u].name)===-1)p.push(t[u].name);}if(p.length===j)break;}if(p.length===0||!q)return;var v=this.$NotificationJewelReminder7(q,p,r.length,l);this.$NotificationJewelReminder8(v);};m.prototype.$NotificationJewelReminder7=function(n,o,p,q){'use strict';var r=c('React').createElement('div',{className:"_5bov"},c('React').createElement(c('ImageBlock.react'),null,c('React').createElement('img',{className:"_5bow",src:n}),c('React').createElement('div',null,this.$NotificationJewelReminder9(p,o,q)))),s=c('DOM').create('div');c('ReactDOM').render(r,s);var t=new (c('ContextualDialog'))({alignment:'right',contextSelector:'#'+q+' a.jewelButton',offsetY:-10,position:'below',theme:c('ContextualDialogXUITheme'),width:210},s);t.enableBehaviors([c('LayerFadeOnShow'),c('LayerFadeOnHide')]);return t;};m.prototype.$NotificationJewelReminder9=function(n,o,p){'use strict';o=o.map(function(q){return c('React').createElement('b',null,q);});if(p===l){return i._({"*":{"notifications":"{number} notifications from {notification senders}","notification":"{number} notification from {notification senders}"}},[i.param('number',n,[0]),i['enum'](n>1?'notifications':'notification',{notifications:'notifications',notification:'notification'}),i.param('notification senders',c('intlList')(o))]);}else return i._({"*":{"requests":"{number} friend requests from {request senders}","request":"{number} friend request from {request senders}"}},[i.param('number',n,[0]),i['enum'](n>1?'requests':'request',{requests:'requests',request:'request'}),i.param('request senders',c('intlList')(o))]);};m.prototype.$NotificationJewelReminder8=function(n){'use strict';n.show();this.$NotificationJewelReminder10=n;var o=n.getRoot();this.$NotificationJewelReminder11=c('setTimeout')(this.$NotificationJewelReminder12.bind(this),this.$NotificationJewelReminder1.show_time);this.$NotificationJewelReminder13=new (c('SubscriptionsHandler'))();this.$NotificationJewelReminder13.addSubscriptions(c('Arbiter').subscribe('layer_shown',function(p,q){if(q&&q.type==='Jewel')this.$NotificationJewelReminder12();}.bind(this)),c('Event').listen(o,'mouseenter',function(){c('clearTimeout')(this.$NotificationJewelReminder11);}.bind(this)),c('Event').listen(o,'mouseleave',this.$NotificationJewelReminder12.bind(this)),c('Event').listen(o,'click',function(){this.$NotificationJewelReminder12();c('Toggler').show(c('$')(l));}.bind(this)));};m.prototype.$NotificationJewelReminder12=function(){'use strict';c('clearTimeout')(this.$NotificationJewelReminder11);this.$NotificationJewelReminder10.hide();this.$NotificationJewelReminder13.release();};m.prototype.$NotificationJewelReminder2=function(n){'use strict';if(!this.$NotificationJewelReminder1.show_request||!this.$NotificationJewelReminder1.request.count)return;var o=c('ge')(n);if(!o||c('Toggler').getInstance(o).isShown())return;var p=this.$NotificationJewelReminder7(this.$NotificationJewelReminder1.request.pics[0],this.$NotificationJewelReminder1.request.names,this.$NotificationJewelReminder1.request.count,n);this.$NotificationJewelReminder14(p);};m.prototype.$NotificationJewelReminder14=function(n){'use strict';n.show();this.$NotificationJewelReminder15=n;var o=n.getRoot();this.$NotificationJewelReminder16=c('setTimeout')(this.$NotificationJewelReminder17.bind(this),this.$NotificationJewelReminder1.show_time);this.$NotificationJewelReminder18=new (c('SubscriptionsHandler'))();this.$NotificationJewelReminder18.addSubscriptions(c('Arbiter').subscribe('layer_shown',function(p,q){if(q&&q.type==='Jewel')this.$NotificationJewelReminder17();}.bind(this)),c('Event').listen(o,'mouseenter',function(){c('clearTimeout')(this.$NotificationJewelReminder16);}.bind(this)),c('Event').listen(o,'mouseleave',this.$NotificationJewelReminder17.bind(this)),c('Event').listen(o,'click',function(){this.$NotificationJewelReminder17();c('Toggler').show(c('$')(k));}.bind(this)));};m.prototype.$NotificationJewelReminder17=function(){'use strict';c('clearTimeout')(this.$NotificationJewelReminder16);this.$NotificationJewelReminder15.hide();this.$NotificationJewelReminder18.release();this.$NotificationJewelReminder3();};f.exports=m;},null);