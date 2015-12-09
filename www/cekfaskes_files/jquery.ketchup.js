(function($){function squeeze(e){var t=fieldsToValidate(e);for(var n=0;n<t.length;n++){bindField(t[n])}e.submit(function(){var e=true;for(var n=0;n<t.length;n++){if(buildErrorList(extractValidations(t[n].blur()),t[n]).length)e=false}if(!e)return false})}function fieldsToValidate(e){var t="input textarea select".split(" ");var n=[];for(var r=0;r<t.length;r++){e.find(t[r]+"["+options.validationAttribute+"*="+validate+"]").each(function(){n.push($(this))})}return n}function bindField(e){var t=extractValidations(e);var n=e.after(options.errorContainer.clone()).next();var r=n.find("ol");var i=false;$(window).resize(function(){options.initialPositionContainer(n,e)}).trigger("resize");e.blur(function(){var s=buildErrorList(t,e);if(s.length){if(!i){r.html(s);options.showContainer(n);i=true}else{r.html(s)}options.positionContainer(n,e)}else{options.hideContainer(n);i=false}});if(e.attr("type")=="checkbox"){e.change(function(){$(this).blur()})}}function extractValidations(e){var t=e.attr(options.validationAttribute);t=t.substr(t.indexOf(validate)+validate.length+1);var n=[];var r="";var i=0;for(var s=0;s<t.length;s++){switch(t[s]){case",":if(i){r+=","}else{n.push(trim(r));r=""}break;case"(":r+="(";i++;break;case")":if(i){r+=")";i--}else{n.push(trim(r))}break;default:r+=t[s]}}return n}function trim(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}function getFunctionName(e){if(e.indexOf("(")!=-1){return e.substr(0,e.indexOf("("))}else{return e}}function buildParams(e){if(e.indexOf("(")!=-1){var t=e.substring(e.indexOf("(")+1,e.length-1).split(",");var n="";for(var r=0;r<t.length;r++){var i=trim(t[r]);if(parseInt(i)){n+=","+i}else{n+=',"'+i+'"'}}return n}else{return""}}function formatMessage(e,t){var n=e.split("$arg").length-1;if(n){var r=t.split(",");for(var i=1;i<r.length;i++){e=e.replace("$arg"+i,r[i])}}return e}function buildErrorList(validations,field){var list="";for(var i=0;i<validations.length;i++){var funcName=getFunctionName(validations[i]);var params=buildParams(validations[i]);if(!eval('$.fn.ketchup.validations["'+funcName+'"](field, field.val()'+params+")")){list+="<li>"+formatMessage($.fn.ketchup.messages[funcName],params)+"</li>"}}return list}var validate="validate";var errorContainer=$("<div>",{"class":"ketchup-error-container",html:"<ol></ol><span></span>"});var initialPositionContainer=function(e,t){var n=t.offset();e.css({left:n.left+t.width()-10,top:n.top-e.height()})};var positionContainer=function(e,t){e.animate({top:t.offset().top-e.height()})};var showContainer=function(e){e.fadeIn()};var hideContainer=function(e){e.fadeOut()};$.fn.ketchup=function(e){options=$.extend({},$.fn.ketchup.defaults,e);return this.each(function(){squeeze($(this))})};$.fn.ketchup.validation=function(e,t){$.fn.ketchup.validations.push(e);$.fn.ketchup.validations[e]=t};$.fn.ketchup.messages={};$.fn.ketchup.validations=[];var options;$.fn.ketchup.defaults={validationAttribute:"class",errorContainer:errorContainer,initialPositionContainer:initialPositionContainer,positionContainer:positionContainer,showContainer:showContainer,hideContainer:hideContainer}})(jQuery)