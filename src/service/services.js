
let userKey = '90a96745b76dadf7a7e66bf0c24b2ae8';
var state= require('../state/state');

function getallusercollection() {
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/collections');
        xhr.onload =  function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });
}


function savecollection(param) {
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:3000/collections');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload =  function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(param));
    });
}

function updatecollection(param, id) {
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", 'http://localhost:3000/collections/' + id);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(param));
    });
}



function searchresults(param) {


    var xmlHttp = new XMLHttpRequest();
    var params = "entity_id=4&count=6&q=" + param;
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://developers.zomato.com/api/v2.1/search?' + params, true);
        xhr.onload =  function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.setRequestHeader("user-key", userKey);
        xhr.send(null);
    });
    /*var params = "entity_id=4&count=6&q=" + param;
    jQuery.ajax({
        type: "GET",
        url: 'https://developers.zomato.com/api/v2.1/search?' + params,
        cache: false,
        success: function(data){
            formatSearch(data);
        }
      });*/

}

function geteachusercollection(param) {

    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/collections/' + param);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });

}

function getcollectiondeatils(params) {

    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/collections/'+ params, true);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                let parsedata=JSON.parse(xhr.response);
                state.store.dispatch({type: 'initiate', data:{parsedata}});
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror =  function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });
}


function deleteRestaurant(params,id) {

    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", 'http://localhost:3000/collections/'+id, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror =  function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(params));
    });
}


function getcollectiondetails(param, collectioname) {
    var params = "entity_id=4&count=12&collection_id=" + param;
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://developers.zomato.com/api/v2.1/search?'+ params, true);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror =  function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.setRequestHeader("user-key", userKey);
        xhr.send(null);
    });


}

function getrestaurantdetails(param) {


    var xmlHttp = new XMLHttpRequest();
    var params = "res_id=" + param;
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://developers.zomato.com/api/v2.1/restaurant?' + params, true);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror =  function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.setRequestHeader("user-key", userKey);
        xhr.send(null);
    });
    /*var params = "entity_id=4&count=6&q=" + param;
    jQuery.ajax({
        type: "GET",
        url: 'https://developers.zomato.com/api/v2.1/search?' + params,
        cache: false,
        success: function(data){
            formatSearch(data);
        }
      });*/

}




function getmostpoularcollections() {

    var xmlHttp = new XMLHttpRequest();
    var params = "city_id=4&count=12";
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://developers.zomato.com/api/v2.1/collections?' + params, true);
        xhr.onload =  function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.setRequestHeader("user-key", userKey);
        xhr.send(null);
    });

}

function getusercollections() {
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/collections', true);
        xhr.onload =  function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function (){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });

}

function deleteCollection(param) {

    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:3000/collections/' + param);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });
}


module.exports = {
    getpopular: getmostpoularcollections,
    getcoll: getcollectiondetails,
    getrestaurantdetails: getrestaurantdetails,
    getallusercollection: getallusercollection,
    geteachusercollection: geteachusercollection,
    updatecollection: updatecollection,
    getusercollections: getusercollections,
    savecollection: savecollection,
    getcollectiondeatils: getcollectiondeatils,
    deleteCollection: deleteCollection,
    searchresults:searchresults,
    deleteRestaurant:deleteRestaurant
}