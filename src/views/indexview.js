function formatMostpoular(collection) {
    let mostpopular = document.querySelector("#mostpopular");
    for (var coll in collection.collections) {

        var card = document.createElement('div');
        card.id = collection.collections[coll].collection.collection_id;
        card.title = collection.collections[coll].collection.title;
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection.collections[coll].collection.title + '</strong>';
        card.appendChild(cardheader);
        cardheader.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
        var cardimage = document.createElement('img');

        cardimage.className = 'card-img-top';
        cardimage.setAttribute('src', collection.collections[coll].collection.image_url);
        cardimage.setAttribute('alt', collection.collections[coll].collection.title);
        card.appendChild(cardimage);
        cardimage.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });

        var cardbody = document.createElement('div');

        cardbody.className = 'card-body';
        cardbody.innerHTML = collection.collections[coll].collection.description;
        card.appendChild(cardbody);
        cardbody.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
        card.className = 'card col-sm-3 text-white bg-dark most-pop';
        mostpopular.appendChild(card);
        card.addEventListener("click", function click(e) {
            var collid = e.target.id
            var collname = e.target.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
        });
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