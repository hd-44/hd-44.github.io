//<![CDATA[
var s96net={};s96net.util={keyCode:function(b){if(!b){var b=window.event}if($.browser.mozilla){var a=b.keyCode;switch(a){case 59:a=186;break;case 107:a=187;break;case 109:a=189;break}return a}if($.browser.opera){var a=b.keyCode;switch(a){case 59:a=186;break;case 61:a=187;break;case 109:a=189;break}return a}return b.keyCode},isCtrl:function(a){if(!a){var a=window.event}return a.ctrlKey},isAlt:function(a){if(!a){var a=window.event}return a.altKey},isShift:function(a){if(!a){var a=window.event}return a.shiftKey},insertAtCaret:function(c,d){var f=this.getSelectionStart(c);var b=this.getSelectionEnd(c);var a=c.value.length;c.value=c.value.substring(0,f)+d+c.value.substring(b,a);this.setCaretPosition(c,f+d.length,0)},deleteAtCaret:function(d,c,g){var h=this.getSelectionStart(d);var b=this.getSelectionEnd(d);var a=d.value.length;if(c>h){c=h}if(b+g>a){g=a-b}var f=d.value.substring(h-c,b+g);d.value=d.value.substring(0,h-c)+d.value.substring(b+g);this.setCaretPosition(d,h-c,0);return f},getSelectionStart:function(d){d.focus();if(d.selectionStart!==undefined){return d.selectionStart}else{if(document.selection){var b=document.selection.createRange();if(b==null){return 0}var a=d.createTextRange();var c=a.duplicate();a.moveToBookmark(b.getBookmark());c.setEndPoint("EndToStart",a);return c.text.length}}return 0},getSelectionEnd:function(d){d.focus();if(d.selectionEnd!==undefined){return d.selectionEnd}else{if(document.selection){var b=document.selection.createRange();if(b==null){return 0}var a=d.createTextRange();var c=a.duplicate();a.moveToBookmark(b.getBookmark());c.setEndPoint("EndToStart",a);return c.text.length+b.text.length}}return d.value.length},setCaretPosition:function(d,f,c){var a=d.value.length;if(f>a){f=a}if(f+c>a){c=a-c}d.focus();if(d.setSelectionRange){d.setSelectionRange(f,f+c)}else{if(d.createTextRange){var b=d.createTextRange();b.collapse(true);b.moveEnd("character",f+c);b.moveStart("character",f);b.select()}}d.focus()},selectAll:function(a){this.setCaretPosition(a,0,a.value.length)}};s96net.layout=function(){this.keys=[];this.deadkeys=[];this.dir="ltr";this.name="US";this.lang="en"};s96net.layout.prototype.loadDefault=function(){this.keys=[{i:"k0",c:"0",n:"`",s:"~"},{i:"k1",c:"0",n:"1",s:"!"},{i:"k2",c:"0",n:"2",s:"@"},{i:"k3",c:"0",n:"3",s:"#"},{i:"k4",c:"0",n:"4",s:"$"},{i:"k5",c:"0",n:"5",s:"%"},{i:"k6",c:"0",n:"6",s:"^"},{i:"k7",c:"0",n:"7",s:"&"},{i:"k8",c:"0",n:"8",s:"*"},{i:"k9",c:"0",n:"9",s:"("},{i:"k10",c:"0",n:"0",s:")"},{i:"k11",c:"0",n:"-",s:"_"},{i:"k12",c:"0",n:"=",s:"+"},{i:"k13",c:"1",n:"q",s:"Q"},{i:"k14",c:"1",n:"w",s:"W"},{i:"k15",c:"1",n:"e",s:"E"},{i:"k16",c:"1",n:"r",s:"R"},{i:"k17",c:"1",n:"t",s:"T"},{i:"k18",c:"1",n:"y",s:"Y"},{i:"k19",c:"1",n:"u",s:"U"},{i:"k20",c:"1",n:"i",s:"I"},{i:"k21",c:"1",n:"o",s:"O"},{i:"k22",c:"1",n:"p",s:"P"},{i:"k23",c:"0",n:"[",s:"{"},{i:"k24",c:"0",n:"]",s:"}"},{i:"k26",c:"1",n:"a",s:"A"},{i:"k27",c:"1",n:"s",s:"S"},{i:"k28",c:"1",n:"d",s:"D"},{i:"k29",c:"1",n:"f",s:"F"},{i:"k30",c:"1",n:"g",s:"G"},{i:"k31",c:"1",n:"h",s:"H"},{i:"k32",c:"1",n:"j",s:"J"},{i:"k33",c:"1",n:"k",s:"K"},{i:"k34",c:"1",n:"l",s:"L"},{i:"k35",c:"0",n:";",s:":"},{i:"k36",c:"0",n:"'",s:'"'},{i:"k37",c:"1",n:"z",s:"Z"},{i:"k38",c:"1",n:"x",s:"X"},{i:"k39",c:"1",n:"c",s:"C"},{i:"k40",c:"1",n:"v",s:"V"},{i:"k41",c:"1",n:"b",s:"B"},{i:"k42",c:"1",n:"n",s:"N"},{i:"k43",c:"1",n:"m",s:"M"},{i:"k44",c:"0",n:",",s:"<"},{i:"k45",c:"0",n:".",s:">"},{i:"k46",c:"0",n:":",s:"?"},{i:"k47",c:"0",n:"?",s:"|"}];this.dir="ltr";this.name="US";this.lang="en"};s96net.layout.prototype.load=function(a){this.keys=a.keys;this.deadkeys=a.deadkeys;this.dir=a.dir;this.name=a.name;this.lang=a.lang?a.lang:"en"};s96net.layout.parser={keyCodes:[192,49,50,51,52,53,54,55,56,57,48,189,187,81,87,69,82,84,89,85,73,79,80,219,221,220,65,83,68,70,71,72,74,75,76,186,222,90,88,67,86,66,78,77,188,190,191,220],getKeyCode:function(d,b,e){var a=d.length;for(var c=0;c<a;c++){if(d[c].i==e){return b==1?(d[c].s?d[c].s:""):(d[c].n?d[c].n:"")}}return 0},getKey:function(c,d){var a=c.length;for(var b=0;b<a;b++){if(c[b].i==d){return c[b]}}return null},isDeadkey:function(b,d){if(!b){return false}var a=b.length;for(var c=0;c<a;c++){if(b[c].k==d){return true}}return false},getMappedValue:function(b,e,d){if(!b){return""}var a=b.length;for(var c=0;c<a;c++){if(b[c].k==d&&b[c].b==e){return b[c].c}}return""},getKeyId:function(b){for(var a=0;a<48;a++){if(this.keyCodes[a]==b){return a}}return -1},getState:function(d,f,a,b,e){var c="n";if(!f&&!a&&d){c="n"}else{if(!f&&a&&!d){c="s"}else{if(!f&&a&&d){c="s"}else{if(f&&!a&&!d){c="n"}else{if(f&&!a&&d){c="t"}else{if(f&&a&&!d){c="s"}else{if(f&&a&&d){c="f"}}}}}}}if((c=="n"||c=="s")&&b){if(e=="1"){if(c=="n"){c="s"}else{c="n"}}if(e=="SGCap"){if(c=="n"){c="y"}else{if(c=="s"){c="z"}}}}return c}};s96net.keyboard=function(a,b){this.defaultLayout=new s96net.layout();this.defaultLayout.loadDefault();this.virtualLayout=new s96net.layout();this.virtualLayout.loadDefault();this.currentLayout=this.virtualLayout;this.shift=false;this.caps=false;this.alt=false;this.ctrl=false;this.counter=0;this.interval=0;this.prev="";this.cancelkeypress=false;this.customOnBackspace=function(e){};this.customOnEnter=function(){};this.customOnSpace=function(){return false};this.customOnKey=function(e){return false};this.customOnEsc=function(){};this.customDrawKeyboard=function(e){return e};this.textbox=$("#"+b);this.nativeTextbox=document.getElementById(b);var d=['<div id="s96net-keyboard">'];for(var c=0;c<13;c++){d.push('<button id="s96net-k',c,'" class="s96net-key"></button>')}d.push('<button id="s96net-backspace"><span>Backspace</span></button>');d.push('<div class="s96net-clear"></div>');d.push('<button id="s96net-k01" class="s96net-key"><span>Ø¢</span></button>');for(var c=13;c<25;c++){d.push('<button id="s96net-k',c,'" class="s96net-key"></button>')}d.push('<button id="s96net-k25" onclick="cleatTextAtea();"><span>Ù…Ø³Ø­ Ø§Ù„ÙƒÙ„</span></button>');d.push('<div class="s96net-clear"></div>');d.push('<button id="s96net-k03" class="s96net-key"><span>Ø¥</span></button>');d.push('<button id="s96net-k02" class="s96net-key"><span>\</span></button>');for(var c=26;c<37;c++){d.push('<button id="s96net-k',c,'" class="s96net-key"></button>')}d.push('<button id="s96net-enter" class="s96net-enter"><span>Enter</span></button>');d.push('<div class="s96net-clear"></div>');d.push('<button id="s96net-k04" class="s96net-key"><span>!</span></button>');d.push('<button id="s96net-k47" class="s96net-key"><span>ØŸ</span></button>');for(var c=37;c<47;c++){d.push('<button id="s96net-k',c,'" class="s96net-key"></button>')}d.push('<button id="s96net-right-shift"><span>Shift</span></button>');d.push('<div class="s96net-clear"></div>');d.push('<button id="s96net-left-ctrl"><span>Ctrl</span></button>');d.push('<button id="s96net"><span>Key69</span></button>');d.push('<button id="s96net-left-alt"><span>Alt</span></button>');d.push('<button id="s96net-space"><span>Space</span></button>');d.push('<button id="s96net-right-alt"><span>Alt</span></button>');d.push('<button id="s96net-escape" title="Turn on/off keyboard input conversion"><span>EN/AR</span></button>');d.push('<div class="s96net-clear"></div>');d.push("</div>");document.getElementById(a).innerHTML=d.join("");this.wireEvents();this.drawKeyboard()};s96net.keyboard.prototype.loadDefaultLayout=function(a){this.defaultLayout.load(a);this.drawKeyboard()};s96net.keyboard.prototype.loadVirtualLayout=function(a){this.virtualLayout.load(a);this.drawKeyboard();this.textbox.attr("dir",this.attr("dir"))};s96net.keyboard.prototype.switchLayout=function(){this.currentLayout=(this.currentLayout===this.defaultLayout)?this.virtualLayout:this.defaultLayout;this.reset();this.drawKeyboard();this.textbox.attr("dir",this.attr("dir"))};s96net.keyboard.prototype.onEsc=function(){this.switchLayout();this.customOnEsc()};s96net.keyboard.prototype.onShift=function(){this.shift=!this.shift;this.drawKeyboard()};s96net.keyboard.prototype.onAlt=function(){this.alt=!this.alt;this.drawKeyboard()};s96net.keyboard.prototype.onCtrl=function(){this.ctrl=!this.ctrl;this.drawKeyboard()};s96net.keyboard.prototype.onCapsLock=function(){this.caps=!this.caps;this.drawKeyboard()};s96net.keyboard.prototype.onBackspace=function(){if(this.prev!=""){this.prev="";this.shift=false;this.drawKeyboard()}else{var a=s96net.util.deleteAtCaret(this.nativeTextbox,1,0);this.customOnBackspace(a)}};s96net.keyboard.prototype.onEnter=function(){s96net.util.insertAtCaret(this.nativeTextbox,"\u000A");this.customOnEnter()};s96net.keyboard.prototype.onSpace=function(){if(!this.customOnSpace()){s96net.util.insertAtCaret(this.nativeTextbox,"\u0020")}};s96net.keyboard.prototype.attr=function(a){if(a=="dir"){return this.currentLayout.dir}else{if(a=="lang"){return this.currentLayout.lang}else{if(a=="name"){return this.currentLayout.name}}}return""};s96net.keyboard.prototype.reset=function(){this.shift=false;this.caps=false;this.alt=false;this.ctrl=false;this.counter=0;this.interval=0;this.prev=""};s96net.keyboard.prototype.stopRepeat=function(){if(this.interval!=0){clearInterval(this.interval);this.counter=0;this.interval=0}};s96net.keyboard.prototype.onKey=function(e){var b=s96net.layout.parser.getKey(this.currentLayout.keys,e);if(b){var d=s96net.layout.parser.getState(this.ctrl,this.alt,this.shift,this.caps,b.c?b.c:"0");var c=b[d]?b[d]:"";if(this.prev!=""){var a=s96net.layout.parser.getMappedValue(this.currentLayout.deadkeys,c,this.prev);if(a!=""){s96net.util.insertAtCaret(this.nativeTextbox,a)}this.prev=""}else{if(s96net.layout.parser.isDeadkey(this.currentLayout.deadkeys,c)){this.prev=c}else{if(c!=""){if(!this.customOnKey(c)){s96net.util.insertAtCaret(this.nativeTextbox,c)}}}}}};s96net.keyboard.prototype.drawKeyboard=function(){if(!this.currentLayout.keys){return}var d,c,f,e;var a=this.currentLayout.keys.length;for(var b=0;b<a;b++){c=this.currentLayout.keys[b];if(!$("s96net-"+c.i)){continue}f=s96net.layout.parser.getState(this.ctrl,this.alt,this.shift,this.caps,c.c?c.c:"0");e=c[f]?c[f]:"";if(this.prev!=""){e=s96net.layout.parser.getMappedValue(this.currentLayout.deadkeys,e,this.prev)}if(!this.shift){e=this.customDrawKeyboard(e);if(e==""){e="&nbsp;"}d='<div class="s96net-label-reference"></div><div class="s96net-label-natural">'+e+"</div>"}else{if(e==""){e="&nbsp;"}d='<div class="s96net-label-reference"></div></div><div class="s96net-label-shift">'+e+"</div>"}document.getElementById("s96net-"+c.i).innerHTML=d}if(this.ctrl){$("#s96net-left-ctrl").addClass("s96net-recessed")}else{$("#s96net-left-ctrl").removeClass("s96net-recessed")}if(this.alt){$("#s96net-left-alt").addClass("s96net-recessed");$("#s96net-right-alt").addClass("s96net-recessed")}else{$("#s96net-left-alt").removeClass("s96net-recessed");$("#s96net-right-alt").removeClass("s96net-recessed")}if(this.shift){$("#s96net-left-shift").addClass("s96net-recessed");$("#s96net-right-shift").addClass("s96net-recessed")}else{$("#s96net-left-shift").removeClass("s96net-recessed");$("#s96net-right-shift").removeClass("s96net-recessed")}if(this.caps){$("#s96net-caps-lock").addClass("s96net-recessed")}else{$("#s96net-caps-lock").removeClass("s96net-recessed")}};s96net.keyboard.prototype.wireEvents=function(){var a=this;$("#s96net-keyboard").delegate("button","mousedown",function(c){var b=this.id;a.interval=setInterval(function(){a.counter++;if(a.counter>5){switch(b){case"s96net-backspace":a.onBackspace();break;default:if(b.search("s96net-k([0-9])|([1-3][0-9])|(4[0-7])")!=-1){a.onKey(b.substr(7));a.shift=false;a.alt=false;a.ctrl=false;a.drawKeyboard()}break}}},50)});$("#s96net-keyboard").delegate("button","mouseup",function(b){a.stopRepeat()});$("#s96net-keyboard").delegate("button","mouseout",function(b){a.stopRepeat()});$("#s96net-keyboard").delegate("button","click",function(c){var b=this.id;switch(b){case"s96net-left-shift":case"s96net-right-shift":a.onShift();break;case"s96net-left-alt":case"s96net-right-alt":a.onCtrl();a.onAlt();break;case"s96net-left-ctrl":a.onAlt();a.onCtrl();break;case"s96net-escape":a.onEsc();break;case"s96net-caps-lock":a.onCapsLock();break;case"s96net-backspace":a.onBackspace();break;case"s96net-enter":a.onEnter();break;case"s96net-space":a.onSpace();break;default:if(b.search("s96net-k([0-9])|([1-3][0-9])|(4[0-7])")!=-1){a.onKey(b.substr(7));a.shift=false;a.alt=false;a.ctrl=false;a.drawKeyboard()}break}});a.textbox.bind("keydown",function(d){var c=s96net.util.keyCode(d);if((c==65||c==67||c==86||c==88||c==89||c==90)&&(a.ctrl&&!a.alt&&!a.shift)){return}if(a.currentLayout==a.defaultLayout&&c!=27){return}switch(c){case 17:a.ctrl=false;a.onCtrl();break;case 18:a.alt=false;a.onAlt();break;case 16:a.shift=false;a.onShift();break;case 27:a.onEsc();break;case 8:a.onBackspace();d.preventDefault();break;case 32:a.onSpace();d.preventDefault();break;case 10:a.onEnter();d.preventDefault();break;default:var b=s96net.layout.parser.getKeyId(s96net.util.keyCode(d));if(b!=-1){a.onKey("k"+b);a.drawKeyboard();d.preventDefault();a.cancelkeypress=true}break}});if($.browser.opera){a.textbox.bind("keypress",function(b){if(this.cancelkeypress){b.preventDefault();a.cancelkeypress=false}})}a.textbox.bind("keyup",function(b){switch(s96net.util.keyCode(b)){case 17:a.ctrl=true;a.onCtrl();break;case 18:a.alt=true;a.onAlt();break;case 16:a.shift=true;a.onShift();break;default:}})};
var textbox = document.getElementById("editor"); $("#selectAll").bind("click", function () { s96net.util.setCaretPosition(textbox, 0, textbox.value.length); ga("send", "event", "Keyboard", "click", "Select"); });
//]]>
