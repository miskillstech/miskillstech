/*!CK:3974221326!*//*1456170550,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["59jr7"]); }

__d('legacy:DynamicFriendListEducation',['DynamicFriendListEducation'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.DynamicFriendListEducation=c('DynamicFriendListEducation');},3);
__d('FriendListMenu',['Event','Arbiter','AsyncRequest','CSS','DOM','HTML','Focus','Input','Keys','MenuDeprecated','Parent'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i){c('MenuDeprecated').register(i,false);var j=c('DOM').find(i,'.FriendListCreateTrigger'),k=c('DOM').find(i,'.CreateListInputItem'),l=c('DOM').find(k,'.createListInput');c('MenuDeprecated').subscribe('select',function(m,n){if(n.item==j){c('CSS').addClass(i,'FriendListMenuCreate');c('Focus').set(l);}});c('Event').listen(l,'blur',function(m){if(c('Input').isEmpty(l))c('CSS').removeClass(i,'FriendListMenuCreate');});c('Event').listen(l,'keydown',function(m){if(c('Event').getKeyCode(m)==c('Keys').RETURN&&/[^\s]/.test(l.value))new (c('AsyncRequest'))().setURI('/ajax/friends/lists/create.php').setData({name:l.value,id:i.id}).setHandler(function(){c('Input').reset(l);c('CSS').removeClass(i,'FriendListMenuCreate');}).send();});c('Arbiter').subscribe('friend-list/new',function(m,n){var o=c('HTML')(n.new_li).getRootNode();c('DOM').insertBefore(j,o);if(n.id===i.id){c('MenuDeprecated').focusItem(o);c('MenuDeprecated').inform('select',{menu:c('Parent').byClass(o,'uiMenu'),item:o});}else c('MenuDeprecated').toggleItem(o);});c('Arbiter').subscribe('friend-list/close_editor',function(){var m=c('Parent').byClass(i,'FlyoutFriendMenu');c('CSS').removeClass(m,'addToListsOpen');c('CSS').addClass(m,'addToListsClosed');});},addToAnotherList:function(i,j){c('Event').listen(i,'click',function(event){var k=c('Parent').byClass(i,'FlyoutFriendMenu');c('CSS').removeClass(k,'addToListsClosed');c('CSS').addClass(k,'addToListsOpen');});},goBack:function(i,j){c('Event').listen(i,'click',function(event){var k=c('Parent').byClass(i,'FlyoutFriendMenu');c('CSS').removeClass(k,'addToListsOpen');c('CSS').addClass(k,'addToListsClosed');});}};f.exports=h;},null);
__d('RestrictedFriendListEducation',['Arbiter','AsyncRequest'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i;function j(l,m){if(m.flid==h)if(l=='FriendListHovercard/add'){if(i)return;i=true;new (c('AsyncRequest'))().setURI('/ajax/friends/lists/restricted_edu.php').setData({target:m.uid,flid:m.flid}).send();}else if(l=='RestrictedListNUX/okay')new (c('AsyncRequest'))().setURI('/ajax/friends/lists/nux_log.php').setData(m).send();return true;}var k={init:function(l){h=l;c('Arbiter').subscribe(['FriendListHovercard/add','RestrictedListNUX/okay'],j);}};f.exports=k;},null);