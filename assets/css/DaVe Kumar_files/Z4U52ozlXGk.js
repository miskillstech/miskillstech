/*!CK:1652535330!*//*1457974115,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BnFQo"]); }

__d('ReactComposerInstantMediaAttachmentSelector.react',['cx','fbt','ReactComposerContextMixin','ReactComposerMediaAttachmentSelector.react','ComposerTargetData','Bootloader','DOM','DOMContainer.react','Event','FileInput.react','FileInput','ReactComponentWithPureRenderMixin','React','ReactDOM','SubscriptionsHandler','VideoUploadConfig'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ReactComposerInstantMediaAttachmentSelector',_prefillFileInput:null,_subscriptions:null,mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],propTypes:{disableFaceRecognition:j.bool.isRequired,fileInputDOM:j.any,mediaAcceptParam:j.shape({photos:j.string,both:j.string}).isRequired,onClick:j.func.isRequired,onFilesSelected:j.func.isRequired,photoLimit:j.number.isRequired,targetData:j.instanceOf(c('ComposerTargetData')).isRequired},componentDidMount:function(){if(this.props.fileInputDOM){var l=c('DOM').find(c('ReactDOM').findDOMNode(this),'input[type="file"]');if(l.files&&l.files.length>0)this._uploadExistingFiles(l.files);this._prefillFileInput=new (c('FileInput'))(c('ReactDOM').findDOMNode(this.refs.prefillContainer),c('ReactDOM').findDOMNode(this.refs.prefillSelector),l);this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(c('Event').listen(l,'change',this._onFilesSelected));}},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var l=this.props.fileInputDOM;if(l)return (c('React').createElement('span',{className:"_yt4"+(' '+"_m"),onClick:this.props.onClick,ref:'prefillContainer'},c('React').createElement(c('ReactComposerMediaAttachmentSelector.react'),{label:c('VideoUploadConfig').allowMultimedia?i._("Add Photos\/Videos"):i._("Add Photo\/Video"),ref:'prefillSelector'}),c('React').createElement(c('DOMContainer.react'),null,l)));return (c('React').createElement(c('FileInput.react'),{accept:this.props.mediaAcceptParam.both,containerClassName:"_yt4",display:'inline',multiple:this.props.targetData.targetSupportsMultiplePhotos,name:'composer_photo[]',onChange:this._onFilesSelected,onClick:this.props.onClick,ref:'fileInput',role:'button',tabIndex:'0','data-testid':'instant-media-attachment-selector'},c('React').createElement(c('ReactComposerMediaAttachmentSelector.react'),{label:i._("Add Photos\/Video")})));},_onFilesSelected:function(event){this.props.onFilesSelected(event,this._prefillFileInput);c('Bootloader').loadModules(["ReactComposerMediaUtils"],function(l){l.clearInput(this._prefillFileInput||this.refs.fileInput.getFileInput());}.bind(this));},_uploadExistingFiles:function(l){c('Bootloader').loadModules(["ReactComposerMediaUtils","ReactComposerPhotoUploader"],function(m,n){return (m.uploadPhotosOrVideo(this.context.composerID,Array.prototype.slice.call(l),new n(this.context,this.props.photoLimit,{disableFaceRecognition:this.props.disableFaceRecognition}),this.props.targetData.targetSupportsMultiplePhotos));}.bind(this));}});f.exports=k;},null);
__d('ReactComposerMediaFilePickerMixin',['invariant','ReactComposerContextMixin','Bootloader'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={mixins:[c('ReactComposerContextMixin')],componentWillMount:function(){!this.props.photoLimit?h(0):undefined;!this.props.targetData?h(0):undefined;},_onFileInputClick:function(j){c('Bootloader').loadModules(["ReactComposerAttachmentLoader","ReactComposerAttachmentType","ReactComposerMediaInitUtils","ReactComposerPhotoUploadActions","ReactComposerLoggingStore"],function(k,l,m,n,o){n.inputClicked(this.context.composerID);k.load(this.context.composerID,l.MEDIA,typeof j==='function'?j:m.bootload,m.getBootstrapURI(this.context.composerID,this.context.composerType,this.context.targetID,this.context.actorID));}.bind(this));},_onFilesSelected:function(event,j){c('Bootloader').loadModules(["ReactComposerAttachmentType","ReactComposerAttachmentActions","ReactComposerPhotoUploader","ReactComposerMediaUtils","ReactComposerVideoXUploadStore"],function(k,l,m,n,o){var p=n.handleSpecialMediaUpload(event,j,this.props.mediaConfig,this.context);if(p)return;var q=new m(this.context,this.props.photoLimit,{disableFaceRecognition:this.props.disableFaceRecognition});l.selectAttachment(this.context.composerID,k.MEDIA,true);var r=o.getUploader(this.context.composerID);n.uploadPhotosOrVideoFromTarget(this.context.composerID,event.target,q,r,this.props.targetData.targetSupportsMultiplePhotos);}.bind(this));}};f.exports=i;},null);
__d('ReactComposerInstantMediaAttachmentSelectorContainer.react',['ReactComposerInstantMediaAttachmentSelector.react','ReactComposerMediaFilePickerMixin','ComposerTargetData','ReactComponentWithPureRenderMixin','React','curry'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'ReactComposerInstantMediaAttachmentSelectorContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerMediaFilePickerMixin')],propTypes:{bootload:h.func,disableFaceRecognition:h.bool.isRequired,fileInputPrefillConfig:h.object,mediaAcceptParam:h.shape({photos:h.string,both:h.string}).isRequired,photoLimit:h.number.isRequired,targetData:h.instanceOf(c('ComposerTargetData')).isRequired},getDefaultProps:function(){return {disableFaceRecognition:false};},render:function(){var j=this.props.prefillConfig&&this.props.prefillConfig.instantMediaSelector&&this.props.prefillConfig.instantMediaSelector.fileInputDOM;return (c('React').createElement(c('ReactComposerInstantMediaAttachmentSelector.react'),babelHelpers['extends']({},this.props,{fileInputDOM:j,onClick:c('curry')(this._onFileInputClick,this.props.bootload),onFilesSelected:this._onFilesSelected})));}});f.exports=i;},null);
__d("XNotesComposerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notes\/composer\/",{page_id:{type:"Int"}});},null);
__d('ReactComposerNotesAttachmentSelector.react',['fbt','ix','ReactComposerAttachmentSelectorContainer.react','ReactComposerAttachmentType','ReactComposerContextMixin','AsyncRequest','Bootloader','ReactComponentWithPureRenderMixin','React','XNotesComposerController'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ReactComposerNotesAttachmentSelector',mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],propTypes:{label:j.string},getDefaultProps:function(){return {label:h._("Write Note")};},render:function(){return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'),{attachmentID:c('ReactComposerAttachmentType').NOTES,label:this.props.label,icon:i('/images/litestand/composer/icons/note.png'),onSelected:this._onSelected}));},_onSelected:function(){c('Bootloader').loadModules(["AsyncDialog"],function(l){var m=c('XNotesComposerController').getURIBuilder().getURI(),n=new (c('AsyncRequest'))(m).setMethod('POST').setStatusElement(this.context.composerID);l.send(n);}.bind(this));}});f.exports=k;},null);
__d('ReactFeedComposer.react',['cx','fbt','ReactComposer.react','ReactComposerAlbumAttachmentSelector.react','ReactComposerAttachmentType','ReactComposerBodyContainer.react','ReactComposerConfig','ReactComposerContextConfig','ReactComposerContextProviderMixin','ReactComposerFeedBootloader','ReactComposerLazyHeader.react','ReactComposerMediaAttachmentSelector.react','ReactComposerInstantMediaAttachmentSelectorContainer.react','ReactComposerMediaLazyAttachment.react','ReactComposerNotesAttachmentSelector.react','ReactComposerMLEAttachmentSelector.react','ReactComposerMLELazyAttachment.react','ReactComposerQAndAAttachmentSelector.react','ReactComposerQAndALazyAttachment.react','ReactComposerStatusAttachmentSelector.react','ReactComposerStatusLazyAttachment.react','Bootloader','DOMContainer.react','React','LitestandComposer'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'ReactFeedComposer',mixins:[c('ReactComposerContextProviderMixin')],propTypes:{contextConfig:c('ReactComposerContextConfig').isRequired,config:c('ReactComposerConfig').isRequired},componentDidMount:function(){c('LitestandComposer').initComposer(this.props.contextConfig.composerID);},statics:{preload:function(){}},render:function(){var k=this._getAdditionalAttachmentComponents(),l=k[0],m=k[1];return (c('React').createElement(c('ReactComposer.react'),{className:"_5n2b",loggingConfig:this.props.config.loggingConfig},c('React').createElement(c('ReactComposerLazyHeader.react'),{showDelimiter:true},c('React').createElement(c('ReactComposerStatusAttachmentSelector.react'),{label:i._(["Update Status","155d6cd2b97f05fd0d45ff038fb8f47d"])}),l),c('React').createElement(c('ReactComposerBodyContainer.react'),{expanded:this.props.config.showExpandedComposer},c('React').createElement(c('ReactComposerStatusLazyAttachment.react'),{bootloader:c('ReactComposerFeedBootloader'),config:this.props.config,selected:true,expanded:this.props.config.showExpandedComposer}),m)));},_getAdditionalAttachmentComponents:function(){var k=this.props.config.attachmentsConfig,l=[],m=[],n=k[c('ReactComposerAttachmentType').ALBUM].enabled,o=k[c('ReactComposerAttachmentType').NOTES].enabled,p=k[c('ReactComposerAttachmentType').QANDA].enabled,q=k[c('ReactComposerAttachmentType').MLE].enabled;l.push(this._getMediaAttachmentSelector());m.push(c('React').createElement(c('ReactComposerMediaLazyAttachment.react'),{key:'media',config:this.props.config,bootloader:c('ReactComposerFeedBootloader')}));if(n)l.push(c('React').createElement(c('ReactComposerAlbumAttachmentSelector.react'),{key:'album',createAlbumLink:k[c('ReactComposerAttachmentType').ALBUM].createAlbumLink}));if(o)l.push(c('React').createElement(c('ReactComposerNotesAttachmentSelector.react'),{key:'notes'}));if(p){l.push(c('React').createElement(c('ReactComposerQAndAAttachmentSelector.react'),{key:'qanda'}));m.push(c('React').createElement(c('ReactComposerQAndALazyAttachment.react'),{key:'qanda',config:this.props.config,bootloader:c('ReactComposerFeedBootloader')}));}if(q){l.push(c('React').createElement(c('ReactComposerMLEAttachmentSelector.react'),{key:'mle',label:i._("Add a Life Event")}));m.push(c('React').createElement(c('ReactComposerMLELazyAttachment.react'),{key:'mle',config:this.props.config}));}return [l,m];},_getMediaAttachmentSelector:function(){var k=this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').MEDIA];if(k.openFileBrowserImmediately)return (c('React').createElement(c('ReactComposerInstantMediaAttachmentSelectorContainer.react'),{key:'media',disableFaceRecognition:k.disableFaceboxTagger,mediaAcceptParam:this.props.config.mediaAcceptParam,photoLimit:k.photoLimit,targetData:this.props.config.targetData,bootload:function(l){return c('Bootloader').loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerFeedMediaPostButtonContainer.react"],l);},mediaConfig:k}));return (c('React').createElement(c('ReactComposerMediaAttachmentSelector.react'),{key:'media',label:i._("Add Photos\/Video")}));}});f.exports=j;},null);