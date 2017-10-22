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
        var arrayLength = dataFromCart.length;
    }

    for (var i = 0; i < arrayLength; i++) {
        $("#cartTable").append('<div id=item' + [i] +'></div>');

        if (dataFromCart[i].flavor1 == null) {
            dataFromCart[i].flavor1 = " "
        }
        if (dataFromCart[i].flavor2 == null) {
            dataFromCart[i].flavor2 = " "
        }

        $("#item" + [i]).append(dataFromCart[i].amount + "  servings" + "  of  " + dataFromCart[i].packageType + "  " + dataFromCart[i].flavor1 + dataFromCart[i].flavor2 + dataFromCart[i].price);
        $("#item" + [i]).append('<button class=removeButton id=' + [i] + '>Remove Item</button>');
        console.log("#item" + [i]);
        }

    $('.removeButton').click(function(){
        var itemPosition = $(this).attr('id');
        $("#item"+itemPosition).remove();
        dataFromCart.splice(itemPosition, 1);
            });

/* End of doc ready */
});



