function formatMostpoular(collection) {
    let mostpopular = document.querySelector(".basket-product-list");
    for (var coll in collection.shoppingbag[0].items) {
        const markup =`<div class="basket-product">
         
         <div class="item">
           <div class="product-image">
             <img src=${collection.shoppingbag[0].items[coll].Img_Url} alt="Placholder Image 2" class="product-frame">
           </div>
           <div class="product-details">
            <h5><span class="item-quantity"></span>${collection.shoppingbag[0].items[coll].Name}</h5>
            <p>Style #:${collection.shoppingbag[0].items[coll].Style}</p>
            <p>Color:${collection.shoppingbag[0].items[coll].Color}</p>
          </div>
           </div>
           <div class="price">${collection.shoppingbag[0].items[coll].Size}</div>
        <div class="quantity">
          <input type="number" value=${collection.shoppingbag[0].items[coll].Quantity} min="1" class="quantity-field">
        </div>
        <div class="subtotal">${collection.shoppingbag[0].items[coll].Price}</div>
        <div class="remove">
          <button data-toggle="modal" data-target="#exampleModal">EDIT |</button>
          <button>REMOVE |</button>
          <button>SAVE FOR LATER</button>
        </div>
           <div>`;
        mostpopular.innerHTML +=markup;
       
    }
}

function formatSearch(collection) {
    let seacrhpopular = document.querySelector("#searchresults");
    for (var coll in collection.restaurants) {
        document.querySelector("#Search-results").style.display = "block";
        var card = document.createElement('div');
        card.id = collection.restaurants[coll].restaurant.R.res_id;
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection.restaurants[coll].restaurant.name + '</strong>';
        card.appendChild(cardheader);
        cardheader.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });

        var cardimage = document.createElement('img');

        cardimage.className = 'card-img-top';
        cardimage.setAttribute('src', collection.restaurants[coll].restaurant.featured_image);
        cardimage.setAttribute('alt', collection.restaurants[coll].restaurant.name);
        card.appendChild(cardimage);
        cardimage.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });

        var cardbody = document.createElement('div');

        cardbody.className = 'card-body';
        cardbody.innerHTML = collection.restaurants[coll].restaurant.cuisines + "<br>" + collection.restaurants[coll].restaurant.location.city;
        card.appendChild(cardbody);
        cardbody.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });
        card.className = 'card col-sm-3 text-white bg-dark most-pop';
        seacrhpopular.appendChild(card);
        card.addEventListener("click", function click(e) {
            var resid = e.target.id
            window.location.href = "restaurantdetails.html?resid=" + resid;
        });
    }
}

module.exports={
    formatMostpoular:formatMostpoular,
    formatSearch:formatSearch
}