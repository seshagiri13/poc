//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
var servicea  = require('../service/services');
var indexview  = require('../views/indexview');
import '../css/home.css';
import '../css/bootstrap.css';




window.onload = ()=>{
     servicea.getShoppingBag().then((data)=>{
     indexview.formatMostpoular(JSON.parse(data));
     })
}

