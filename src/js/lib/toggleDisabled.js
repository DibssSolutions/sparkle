/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.79
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b) {'function'==typeof define&&define.amd?define(['jquery'],function(a) {return b(a);}):'object'==typeof module&&module.exports?module.exports=b(require('jquery')):b(a.jQuery);}(this,function(a) {!function(a,b,c) {'use strict';function d(b,c,d) {var e=!0;return b.find('[data-validation]').each(function() {if(this!==c) {var b=a(this),f=b.hasClass(d.successElementClass),g='true'===b.valAttr('optional'),h=b.hasClass(d.errorElementClass);if(h||!f&&!g)return e=!1,!1;}}),e;}a.formUtils.registerLoadedModule('toggleDisabled');var e=function(a,b) {'disabled'===b?a.find('*[type="submit"]').addClass('disabled').attr('disabled','disabled'):a.find('*[type="submit"]').removeClass('disabled').removeAttr('disabled');},f=!1;a.formUtils.$win.bind('validatorsLoaded formValidationSetup',function(b,g,h) {var i=h.disabledFormFilter?g.filter(h.disabledFormFilter):g,j=h.showErrorDialogs===c||h.showErrorDialogs,k=function(b,c,d) {var e=a(this);d&&d.indexOf('blur')>-1?e.unbind('afterValidation',k):c.isValid?e.unbind('afterValidation',k):e.valAttr('have-been-blurred')||(c.shouldChangeDisplay=!1);};i.addClass(j?'disabled-with-errors':'disabled-without-errors').on('reset',function() {e(a(this),'disabled');}).find('*[data-validation]').valAttr('event','keyup change').on('validation',function(b,c) {if(!f) {f=!0;var g=a(this).closest('form');c&&d(g,this,h)?e(g,'enabled'):e(g,'disabled'),f=!1;}}).on('afterValidation',k).on('blur',function() {a(this).valAttr('have-been-blurred',1);}).each(function() {var b=a(this),c=b.attr('data-validation');c.indexOf('checkbox_group')>-1&&b.closest('form').find('input[name="'+b.attr('name')+'"]').each(function() {a(this).on('change',function() {b.validate();});});}),i.find('[data-validation-async]').valAttr('event','change'),e(i,'disabled'),i.validateOnEvent(h.language,h);}).on('validationErrorDisplay',function(a,b,c) {b.closest('form').hasClass('disabled-without-errors')&&c.hide();});}(a,window);});
