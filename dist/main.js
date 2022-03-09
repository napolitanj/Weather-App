(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function r(r){t(1,arguments);var a=n(r);return e(1e3*a)}function a(e){return t(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function o(n){if(t(1,arguments),!a(n)&&"number"!=typeof n)return!1;var r=e(n);return!isNaN(Number(r))}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var c,s={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?f(c,(function(t){return t.test(u)})):m(c,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(u.length);return{value:i,rest:d}}}function m(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function f(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const g={code:"en-US",formatDistance:function(t,e,n){var r,a=i[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:s,formatRelative:function(t,e,n,r){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(c.matchPattern);if(!n)return null;var r=n[0],a=t.match(c.parsePattern);if(!a)return null;var o=c.valueCallback?c.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(r,a){t(2,arguments);var o=e(r).getTime(),i=n(a);return new Date(o+i)}function y(e,r){t(2,arguments);var a=n(r);return w(e,-a)}var v=864e5;function b(n){t(1,arguments);var r=1,a=e(n),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function p(n){t(1,arguments);var r=e(n),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=b(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=b(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=c.getTime()?a:a-1}function C(e){t(1,arguments);var n=p(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=b(r);return a}var T=6048e5;function M(r,a){t(1,arguments);var o=a||{},i=o.locale,u=i&&i.options&&i.options.weekStartsOn,c=null==u?0:n(u),s=null==o.weekStartsOn?c:n(o.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=e(r),l=d.getUTCDay(),h=(l<s?7:0)+l-s;return d.setUTCDate(d.getUTCDate()-h),d.setUTCHours(0,0,0,0),d}function x(r,a){t(1,arguments);var o=e(r),i=o.getUTCFullYear(),u=a||{},c=u.locale,s=c&&c.options&&c.options.firstWeekContainsDate,d=null==s?1:n(s),l=null==u.firstWeekContainsDate?d:n(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,l),h.setUTCHours(0,0,0,0);var m=M(h,a),f=new Date(0);f.setUTCFullYear(i,0,l),f.setUTCHours(0,0,0,0);var g=M(f,a);return o.getTime()>=m.getTime()?i+1:o.getTime()>=g.getTime()?i:i-1}function D(e,r){t(1,arguments);var a=r||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:n(i),c=null==a.firstWeekContainsDate?u:n(a.firstWeekContainsDate),s=x(e,r),d=new Date(0);d.setUTCFullYear(s,0,c),d.setUTCHours(0,0,0,0);var l=M(d,r);return l}var E=6048e5;function S(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const k=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return S("yy"===e?r%100:r,e.length)},P=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):S(n+1,2)},W=function(t,e){return S(t.getUTCDate(),e.length)},U=function(t,e){return S(t.getUTCHours()%12||12,e.length)},N=function(t,e){return S(t.getUTCHours(),e.length)},Y=function(t,e){return S(t.getUTCMinutes(),e.length)},O=function(t,e){return S(t.getUTCSeconds(),e.length)},q=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return S(Math.floor(r*Math.pow(10,n-3)),e.length)};function B(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+S(o,2)}function F(t,e){return t%60==0?(t>0?"-":"+")+S(Math.abs(t)/60,2):j(t,e)}function j(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+S(Math.floor(a/60),2)+n+S(a%60,2)}const H={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return k(t,e)},Y:function(t,e,n,r){var a=x(t,r),o=a>0?a:1-a;return"YY"===e?S(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):S(o,e.length)},R:function(t,e){return S(p(t),e.length)},u:function(t,e){return S(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return S(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return P(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,o){var i=function(n,r){t(1,arguments);var a=e(n),o=M(a,r).getTime()-D(a,r).getTime();return Math.round(o/E)+1}(n,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):S(i,r.length)},I:function(n,r,a){var o=function(n){t(1,arguments);var r=e(n),a=b(r).getTime()-C(r).getTime();return Math.round(a/T)+1}(n);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):S(o,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):W(t,e)},D:function(n,r,a){var o=function(n){t(1,arguments);var r=e(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/v)+1}(n);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):S(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return S(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return S(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return S(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):N(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Y(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):O(t,e)},S:function(t,e){return q(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return F(a);case"XXXX":case"XX":return j(a);default:return j(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return F(a);case"xxxx":case"xx":return j(a);default:return j(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(a,":");default:return"GMT"+j(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(a,":");default:return"GMT"+j(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return S(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return S((r._originalDate||t).getTime(),e.length)}};function I(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function L(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var z={p:L,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return I(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",I(a,e)).replace("{{time}}",L(o,e))}};const A=z;function Q(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var G=["D","DD"],X=["YY","YYYY"];function R(t){return-1!==G.indexOf(t)}function J(t){return-1!==X.indexOf(t)}function _(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,Z=/''/g,tt=/[a-zA-Z]/;function et(t){return t.match($)[1].replace(Z,"'")}const nt=async function(t){try{const n=await async function(t){try{const e=await fetch(function(t){return"https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=0102347143dfbb9da8fa1a6c7f338297"}(t)),n=await e.json();return{name:n.name,lon:n.coord.lon,lat:n.coord.lat}}catch{console.log("city error")}}(t),r=await fetch((e=n,"minutely,alerts","https://api.openweathermap.org/data/2.5/onecall?lat="+e.lat+"&lon="+e.lon+"&exclude=minutely,alerts&appid=0102347143dfbb9da8fa1a6c7f338297"),{mode:"cors"}),a=await r.json();return a.locationName=n.name,a}catch{console.log("error")}var e};function rt(t){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.floor(t/22.5+.5)%16]}function at(){return document.getElementById("search").value}let ot="chicago";document.getElementById("searchButton").addEventListener("click",(()=>(ot=at(),function(){const t=document.getElementById("weatherChart");for(;t.firstChild;)t.removeChild(t.firstChild)}(),void gt())));const it=document.getElementById("tempSwitch");it.addEventListener("change",(()=>lt()));const ut=document.getElementById("checkbox");function ct(t){return(1.8*t+32).toPrecision(3)}function st(t){return(5/9*(t-32)).toPrecision(3)}function dt(t){document.querySelectorAll(".weeklyTemp").forEach((e=>{let n=Number(e.textContent.replace("Temp: ",""));e.textContent="Temp: "+t(n)}))}function lt(){const t=document.getElementById("celcius"),e=document.getElementById("fahrenheit");!0===ut.checked?(dt(st),ut.checked=!1,e.style.color="#999999",e.style.opacity="0.5",t.style.color="#F67280",t.style.opacity="1"):(dt(ct),ut.checked=!0,e.style.color="#F67280",e.style.opacity="1",t.style.color="#999999",t.style.opacity="0.5"),ut.checked=!ut.checked,mt()}function ht(t){return!0===ut.checked?function(t){return(t-273.15).toPrecision(3)}(t):function(t){return(1.8*(t-273.15)+32).toPrecision(3)}(t)}function mt(){nt(ot).then((function(t){var e;e=ht(t.current.temp),document.getElementById("currentTemp").textContent=e}))}function ft(a){let i=r(a);return function(r,a,i){t(2,arguments);var u=String(a),c=i||{},s=c.locale||g,d=s.options&&s.options.firstWeekContainsDate,l=null==d?1:n(d),h=null==c.firstWeekContainsDate?l:n(c.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=s.options&&s.options.weekStartsOn,f=null==m?0:n(m),w=null==c.weekStartsOn?f:n(c.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var v=e(r);if(!o(v))throw new RangeError("Invalid time value");var b=Q(v),p=y(v,b),C={firstWeekContainsDate:h,weekStartsOn:w,locale:s,_originalDate:v};return u.match(V).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,A[e])(t,s.formatLong,C):t})).join("").match(K).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return et(t);var n=H[e];if(n)return!c.useAdditionalWeekYearTokens&&J(t)&&_(t,a,r),!c.useAdditionalDayOfYearTokens&&R(t)&&_(t,a,r),n(p,t,s.localize,C);if(e.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}(new Date(i),"K':'mm bbbb")}function gt(){nt(ot).then((function(t){var e;e="http://openweathermap.org/img/wn/"+t.current.weather[0].icon+"@2x.png",document.getElementById("currentIcon").src=e})),mt(),lt(),nt(ot).then((function(t){var e;e=t.daily[0].pop,document.getElementById("currentPrecip").textContent="Preciptition: "+100*e+"%"})),nt(ot).then((function(t){var e;e=t.current.humidity,document.getElementById("currentHumid").textContent="Humidity: "+e+"%"})),nt(ot).then((function(t){var e,n;e=t.current.wind_speed,n=t.current.wind_deg,document.getElementById("currentWind").textContent="Wind: "+Math.round(e)+"mph "+rt(n)})),nt(ot).then((function(t){var e;e=ft(t.current.sunrise),document.getElementById("sunrise").textContent="Sunrise: "+e})),nt(ot).then((function(t){var e;e=ft(t.current.sunset),document.getElementById("sunset").textContent="Sunset: "+e})),nt(ot).then((function(t){var e;e=t.locationName,document.getElementById("location").textContent="Showing weather for "+e})),nt(ot).then((function(t){var e;e=ft(t.current.dt),document.getElementById("time").textContent="Last updated at: "+e})),at(),function(){const t=document.getElementById("weatherChart");nt(ot).then((function(e){e.daily.forEach((e=>{let n=function(t){let e=r(t).getDay();return 0===e?"Sunday":1===e?"Monday":2===e?"Tuesday":3===e?"Wednesday":4===e?"Thursday":5===e?"Friday":6===e?"Saturday":void 0}(e.dt),a=function(t){let e=r(t).getMonth(),n=r(t).getDate();return 0===e?"Jan "+n:1===e?"Feb "+n:2===e?"Mar "+n:3===e?"Apr "+n:4===e?"May "+n:5===e?"Jun "+n:6===e?"Jul "+n:7===e?"Aug "+n:8===e?"Sep "+n:9===e?"Oct "+n:10===e?"Nov "+n:11===e?"Dec "+n:void 0}(e.dt),o="http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png";t.appendChild(function(t,e,n,r,a,o){const i=document.createElement("div"),u=document.createElement("h3"),c=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p"),l=document.createElement("img");return i.classList.add("weatherItem"),s.classList.add("weeklyTemp"),u.textContent=t,c.textContent=e,s.textContent="Temp: "+n,d.textContent="Wind: "+Math.round(r)+"mph "+rt(a),l.src=o,i.appendChild(u),i.appendChild(c),i.appendChild(s),i.appendChild(d),i.appendChild(l),i}(n,a,ht(e.temp.day),e.wind_speed,e.wind_deg,o))}))}))}()}console.log(it,ut),gt()})();