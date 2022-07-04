

var today = new Date();
var eid_day = new Date("10 july 2022")


diff= eid_day-today








document.getElementById("eid_text").innerText=`First day of Eid ${Math.round(diff/(1000*60*60*24))   }  hourse  ${Math.round(diff/(1000*60*60))   } min left ${Math.round(diff/(1000*60))   }`