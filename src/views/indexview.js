import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
var state= require('../state/state');



state.store.subscribe(()=>{
    formatMostpoular(state.store.getState().parsedata); 
});


function formatMostpoular(collection) {
     let mostpopular = document.querySelector(".basket-product-list");
     let subtotal = document.querySelector(".subtotal-value");
     let totval= document.querySelector(".total-value");
     let totitem= document.querySelector(".item-heading");
    mostpopular.innerHTML="";
    subtotal.innerHTML="";
    totitem.innerHTML="";
    var subtot=0;
    var totvalue=0;
    var totitemno=0;
    for (var coll in collection.shoppingbag[0].items) {
        totitemno++;
        const markup =`<div class="basket-product">
         
         <div class="item">
           <div class="product-image">
             <img src=${collection.shoppingbag[0].items[coll].Img_Url} alt="Placholder Image 2" class="product-frame">
           </div>
           <div class="product-details">
            <h5><span class="item-quantity"></span>${collection.shoppingbag[0].items[coll].Name}</h5>
            <p>Style #:${collection.shoppingbag[0].items[coll].Style}</p>
            <p>Color:${collection.shoppingbag[0].items[coll].Color}</p>
            <div class="mobile">
            <div class="pricemob">SIZE:${collection.shoppingbag[0].items[coll].Size}</div>
            <div class="quantitymob"><strong>QTY:</strong>
          <input type="number" value=${collection.shoppingbag[0].items[coll].Quantity} disabled="disabled" min="1" class="quantity-field">
        </div>
        <div class="subtotalmob"><h4>$${collection.shoppingbag[0].items[coll].Price*collection.shoppingbag[0].items[coll].Quantity}</h4></div>
            </div>
           </div>
           </div>
           <div class="price">${collection.shoppingbag[0].items[coll].Size}</div>
        <div class="quantity">
          <input type="number" value=${collection.shoppingbag[0].items[coll].Quantity} disabled="disabled" min="1" class="quantity-field">
        </div>
        <div class="subtotal">${collection.shoppingbag[0].items[coll].Price*collection.shoppingbag[0].items[coll].Quantity}</div>
        <div class="remove">
          <button data-toggle="modal" id=${collection.shoppingbag[0].items[coll].id} class="open-AddBookDialog">EDIT |</button>
          <button id=${collection.shoppingbag[0].items[coll].id} class="delete-item">REMOVE |</button>
          <button>SAVE FOR LATER</button>
        </div>
           <div>`;
        mostpopular.innerHTML +=markup;
        subtot=subtot+parseInt(`${collection.shoppingbag[0].items[coll].Price*collection.shoppingbag[0].items[coll].Quantity}`,10);
       
    }
    totvalue=subtot-7;
    subtotal.innerHTML=subtot;
    totval.innerHTML=totvalue;
    totitem.innerHTML=totitemno+" ITEMS";
}

$(document).on("click", ".open-AddBookDialog", function () {
    var myBookId = this.id ;
    let list=state.store.getState().parsedata.shoppingbag[0].items;
    var newArray = list.filter(function (el) {
        return el.id==myBookId
          });
          $(".modal-body #itemname").text( newArray[0].Name );
          $(".modal-body #modalpic").attr('src',newArray[0].Img_Url);
          $(".modal-body .edit").attr('id',newArray[0].id);
          $('select[name^="itemsize"] option:selected').attr("selected",null);
          $('select[name^="itemsize"] option:selected').attr("selected",null);
          $('select[name^="itemsize"] option[value='+newArray[0].Size+']').attr("selected","selected");
          $('select[name^="quantity"] option[value='+newArray[0].Quantity+']').attr("selected","selected");
        $('#exampleModal').modal('show');
});

$(document).on("click", ".delete-item", function () {
    var myBookId = this.id ;
    state.store.dispatch({type: 'DELETE', data:{id:myBookId}});
});

$(document).on("click", ".edit", function () {
    var myBookId = this.id ;
    var siz=$('#itemsize').val();
    var quant=$('#quantity').val();
    state.store.dispatch({type: 'EDIT', data:{id:myBookId,size:siz,quantity:quant}});
    $('#exampleModal').modal('hide');
});


module.exports={
    formatMostpoular:formatMostpoular
}