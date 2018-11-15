//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
var servicea  = require('../service/services');
var indexview  = require('../views/indexview');
import '../css/home.css';
import '../css/bootstrap.css';




window.onload = ()=>{
    /* servicea.getpopular().then((data)=>{
      indexview.formatMostpoular(JSON.parse(data));
     });
      document.querySelector("#Search-results").style.display="none";
    document.getElementById("btnSearch").addEventListener("click",  function(e){
        document.querySelector("#Search-results").style.display="none";
        document.querySelector("#searchresults").innerHTML = "";
        e.preventDefault();
      let param=document.querySelector("#inprest").value;
      servicea.searchresults(param).then((data)=>{
        indexview.formatSearch(JSON.parse(data));
      });

      // formatSearch(searchresult);
    });*/
}

