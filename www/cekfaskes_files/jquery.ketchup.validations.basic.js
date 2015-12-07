function watchSelect(e){$("input["+$.fn.ketchup.defaults.validationAttribute+'*="'+e+'"]').each(function(){var t=$(this);$('input[name="'+t.attr("name")+'"]').each(function(){var n=$(this);if(n.attr($.fn.ketchup.defaults.validationAttribute).indexOf(e)==-1)n.blur(function(){t.blur()})})})}$.fn.ketchup.validation("required",function(e,t){if(e.attr("type")=="checkbox"){if(e.attr("checked")==true)return true;else return false}else{if(t.length==0)return false;else return true}});$.fn.ketchup.validation("minlength",function(e,t,n){if(t.length<n)return false;else return true});$.fn.ketchup.validation("maxlength",function(e,t,n){if(t.length>n)return false;else return true});$.fn.ketchup.validation("rangelength",function(e,t,n,r){if(t.length>=n&&t.length<=r)return true;else return false});$.fn.ketchup.validation("min",function(e,t,n){if(parseInt(t)<n)return false;else return true});$.fn.ketchup.validation("max",function(e,t,n){if(parseInt(t)>n)return false;else return true});$.fn.ketchup.validation("range",function(e,t,n,r){if(parseInt(t)>=n&&parseInt(t)<=r)return true;else return false});$.fn.ketchup.validation("number",function(e,t){if(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(t))return true;else return false});$.fn.ketchup.validation("digits",function(e,t){if(/^\d+$/.test(t))return true;else return false});$.fn.ketchup.validation("email",function(e,t){if(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(t))return true;else return false});$.fn.ketchup.validation("url",function(e,t){if(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t))return true;else return false});$.fn.ketchup.validation("username",function(e,t){if(/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/.test(t))return true;else return false});$.fn.ketchup.validation("match",function(e,t,n){if($(n).val()!=t)return false;else return true});$.fn.ketchup.validation("date",function(e,t){if(!/Invalid|NaN/.test(new Date(t)))return true;else return false});$(document).ready(function(){watchSelect("minselect");watchSelect("maxselect");watchSelect("rangeselect")});$.fn.ketchup.validation("minselect",function(e,t,n){if($('input[name="'+e.attr("name")+'"]:checked').length>=n)return true;else return false});$.fn.ketchup.validation("maxselect",function(e,t,n){if($('input[name="'+e.attr("name")+'"]:checked').length<=n)return true;else return false});$.fn.ketchup.validation("rangeselect",function(e,t,n,r){var i=$('input[name="'+e.attr("name")+'"]:checked');if(i.length>=n&&i.length<=r)return true;else return false})