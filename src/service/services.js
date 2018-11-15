
let userKey = '90a96745b76dadf7a7e66bf0c24b2ae8';
var state= require('../state/state');

function getShoppingBag() {
    return new Promise( (resolve, reject)=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'db.json');
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





module.exports = {
    getShoppingBag: getShoppingBag,
    deleteRestaurant:deleteRestaurant
}