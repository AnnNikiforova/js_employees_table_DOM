var e=document.querySelector("table"),t=e.querySelectorAll("th"),n=e.querySelector("tbody"),a=-1;t.forEach(function(e){return e.dataset.sortOrder="asc"}),t.forEach(function(e,t){e.addEventListener("click",function(){t!==a&&(e.dataset.sortOrder="asc");var r=e.dataset.sortOrder,o=Array.from(n.querySelectorAll("tr")).sort(function(e,n){var a=e.querySelectorAll("td")[t].textContent.trim().replace(/[$,]/g,""),o=n.querySelectorAll("td")[t].textContent.trim().replace(/[$,]/g,""),c=0;return c=isNaN(parseFloat(a))||isNaN(parseFloat(o))?a.localeCompare(o):parseFloat(a)-parseFloat(o),"asc"===r?c:-c});a=t,e.dataset.sortOrder="asc"===r?"desc":"asc",o.forEach(function(e){return n.appendChild(e)})})}),n.addEventListener("click",function(e){var t=e.target.closest("tr");n.querySelectorAll("tr").forEach(function(e){e.classList.remove("active")}),t.classList.add("active")});var r=document.createElement("form");function o(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"text",r=document.createElement("label");r.textContent=e+": ";var o=document.createElement("input");return o.name=t,o.type=a,o.setAttribute("data-qa",n),o.required=!0,r.appendChild(o),r}r.className="new-employee-form",r.appendChild(o("Name","name","name")),r.appendChild(o("Position","position","position"));var c=document.createElement("label");c.textContent="Office: ";var l=document.createElement("select");l.name="office",l.setAttribute("data-qa","office"),l.required=!0,["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,l.appendChild(t)}),c.appendChild(l),r.appendChild(c),r.appendChild(o("Age","age","age","number")),r.appendChild(o("Salary","salary","salary","number"));var d=document.createElement("button");function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");n.setAttribute("data-qa","notification"),n.className=t?"error":"success",n.classList.add("notification");var a=document.createElement("h2"),r=document.createElement("p");a.classList.add("title"),a.textContent=t?"Error":"Success",r.textContent=e,n.append(a,r),document.body.append(n),setTimeout(function(){n.style.display="none"},5e3)}d.type="submit",d.textContent="Save to table",r.appendChild(d),document.body.append(r),d.addEventListener("click",function(e){e.preventDefault();var t=r.name.value,a=r.position.value,o=r.office.value,c=parseFloat(r.age.value,10),l=parseFloat(r.salary.value),d=!0,s="";if(t.length<4&&(d=!1,s+="Name must be at least 4 characters long. "),(c<18||c>90)&&(d=!1,s+="Age must be between 18 and 90. "),a.trim().length<4&&(d=!1,s+="Position must be at least 4 characters long. "),!d){i(s,!0);return}var u=document.createElement("tr"),m=document.createElement("td");m.textContent=t,u.appendChild(m);var p=document.createElement("td");p.textContent=a,u.appendChild(p);var v=document.createElement("td");v.textContent=o,u.appendChild(v);var f=document.createElement("td");f.textContent=c,u.appendChild(f);var E=document.createElement("td");E.textContent=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(l),u.appendChild(E),n.appendChild(u),r.reset(),i("Employee successfully added to the table!")}),n.addEventListener("dblclick",function(e){var t=e.target.closest("td");if(t&&"true"!==t.contentEditable){t.contentEditable="true",t.focus();var n=function(){t.contentEditable="false",t.removeEventListener("blur",n),t.removeEventListener("keydown",a)},a=function(t){"Enter"===t.key&&(e.preventDefault(),n())};t.addEventListener("blur",n),t.addEventListener("keydown",a)}});
//# sourceMappingURL=index.800c6157.js.map
