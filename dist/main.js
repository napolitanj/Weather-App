(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}const r=async function(t){try{const n=await async function(t){try{const e=await fetch(function(t){return"https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=0102347143dfbb9da8fa1a6c7f338297"}(t)),n=await e.json();return{name:n.name,lon:n.coord.lon,lat:n.coord.lat}}catch{console.log("city error")}}(t),r=await fetch((e=n,"minutely,alerts","https://api.openweathermap.org/data/2.5/onecall?lat="+e.lat+"&lon="+e.lon+"&exclude=minutely,alerts&appid=0102347143dfbb9da8fa1a6c7f338297"),{mode:"cors"}),o=await r.json();return o.locationName=n.name,o}catch{console.log("error")}var e};function o(){return document.getElementById("search").value}let a="chicago";function c(r){let o=function(r){return t(1,arguments),e(1e3*n(r))}(r),a=o.getHours();return console.log(a),a<12?String(o.getHours())+":"+String(o.getMinutes()+" a.m."):String(o.getHours()-12)+":"+String(o.getMinutes()+" p.m.")}function u(){r(a).then((function(t){var e;e="http://openweathermap.org/img/wn/"+t.current.weather[0].icon+"@2x.png",document.getElementById("currentIcon").src=e})),r(a).then((function(t){var e;e=t.current.temp,document.getElementById("currentTemp").textContent=(1.8*(e-273.15)+32).toPrecision(3)})),r(a).then((function(t){var e;e=t.daily[0].pop,document.getElementById("currentPrecip").textContent="Preciptition: "+100*e+"%"})),r(a).then((function(t){var e;e=t.current.humidity,document.getElementById("currentHumid").textContent="Humidity: "+e})),r(a).then((function(t){var e,n,r;e=t.current.wind_speed,n=t.current.wind_deg,document.getElementById("currentWind").textContent="Wind: "+Math.round(e)+"mph "+(r=n,["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.floor(r/22.5+.5)%16])})),r(a).then((function(t){var e;e=c(t.current.sunrise),document.getElementById("sunrise").textContent="Sunrise: "+e})),r(a).then((function(t){var e;e=c(t.current.sunset),document.getElementById("sunset").textContent="Sunset: "+e})),r(a).then((function(t){var e;e=t.locationName,document.getElementById("location").textContent=e})),r(a).then((function(t){var e;console.log(t.current.dt),e=c(t.current.dt),document.getElementById("time").textContent="Updated at "+e})),o()}document.getElementById("searchButton").addEventListener("click",(()=>(a=o(),console.log(a),void u()))),u()})();