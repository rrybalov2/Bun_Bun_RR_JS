function cartItem(packageType, amount, flavor1, flavor2, price){
    this.packageType=packageType;
    this.amount=amount;
    this.flavor1=flavor1;
    this.flavor2=flavor2;
    this.price=price;
}

/* Starting a JQuery document ready function to make sure the DOM is ready for JS */
$( document ).ready(function() {
    console.log( "ready!" );

    var dataFromCart = JSON.parse(localStorage.getItem("thingsInCartArray"));
    console.log(dataFromCart);

    if (dataFromCart == null) {}

    else {
        var arrayLength = dataFromCart.length
    }

    for (var i = 0; i < arrayLength; i++) {
        $("#cartTable").append('<div id=item' + [i] +'></div>' + '<button id=button' + [i] +'>REMOVE</button>');
        $("#item" + [i]).append(dataFromCart[i].packageType + " of " + dataFromCart[i].flavor1);

        //document.getElementById("cartTable").ParentNode.append(dataFromCart[i].packageType);
    }

    document.getElementById("add").addEventListener("click", storeItem)
        function storeItem() {
        }

/* End of doc ready */
});



