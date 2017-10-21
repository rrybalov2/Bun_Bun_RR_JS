/*
function changeMainPhoto() {
    var bunType = document.getElementById("bun-pack-type").value;

    if (bunType == "single") {
        document.getElementById("mainBun").src="./Assets/baconbun.jpg";
    }
    else if (bunType == "sixpack") {
        document.getElementById("mainBun").src="./Assets/blackberrybun.jpg";
    }
    else if (bunType == "dozen") {
        document.getElementById("mainBun").src="./Assets/birthdaycake.jpg";
    }
} */


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

/*
document.getElementById("bun-pack-type").onchange = function() {
    if (document.getElementById("bun-pack-type").value === "sixpack") {
        document.getElementById("mainBun").src="./Assets/baconbun.jpg";
    }


}
*/

//function

    var dataFromCart = JSON.parse(localStorage.getItem("thingsInCartArray"));
    console.log(dataFromCart);

/* Using a switch statement to bundle actions together */
document.getElementById("bun-pack-type").onchange = function(){
    switch(document.getElementById("bun-pack-type").value) {
        //Dropdown option: Six Pack of Original Buns
        case "sixpack":
            //image from Tesco: https://img.tesco.com/Groceries/pi/000/0286020000000/IDShot_540x540.jpg
            document.getElementById("mainBun").src="./Assets/sixpackrolls.jpg";
            document.getElementById("showP").innerHTML = "$8 per six pack";
            document.getElementById("showDesc").innerHTML = "Get them by the six pack!";
            document.getElementById("first-flavor").style.display='block';
            document.getElementById("second-flavor").style.display='block';
        break;

        //Dropdown option: Single Bun
        case "single":
            document.getElementById("mainBun").src="./Assets/originalbun.jpg";
            document.getElementById("showP").innerHTML = "$1.50 per single bun";
            document.getElementById("showDesc").innerHTML = "Get them one at a time!";
            document.getElementById("first-flavor").style.display='none';
            document.getElementById("second-flavor").style.display='none';
        break;

        //Dropdown option: Dozen Original Buns
        case "dozen":
            //image from WalMart: https://i5.walmartimages.com/asr/4ac34003-9e2c-40e9-ad98-c2edc7974d8b_1.7719a321fbd636849bd03dba73969a09.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF
            document.getElementById("mainBun").src="./Assets/dozenpackrolls.jpg";
            document.getElementById("showP").innerHTML = "$15 per dozen";
            document.getElementById("showDesc").innerHTML = "Get them by the dozen!";
            document.getElementById("first-flavor").style.display='block';
            document.getElementById("second-flavor").style.display='block';
        break;

        //Dropdown option: Six Pack of Mixed Buns
        case "sixpackmixed":
            //image from Tesco: https://img.tesco.com/Groceries/pi/000/0286020000000/IDShot_540x540.jpg
            document.getElementById("mainBun").src="./Assets/sixpackrollsextra.jpg";
            document.getElementById("showP").innerHTML = "$8 per six pack";
            document.getElementById("showDesc").innerHTML = "Get them by the six pack - pick some more flavors!";
            document.getElementById("first-flavor").style.display='block';
            document.getElementById("second-flavor").style.display='block';
        break;

        //Dropdown option: Dozen of Mixed Buns
        case "dozenmixed":
            //image from WalMart: https://i5.walmartimages.com/asr/4ac34003-9e2c-40e9-ad98-c2edc7974d8b_1.7719a321fbd636849bd03dba73969a09.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF
            document.getElementById("mainBun").src="./Assets/dozenpackrollsmixed.jpg";
            document.getElementById("showP").innerHTML = "$15 per dozen";
            document.getElementById("showDesc").innerHTML = "Get them by the dozen - pick some more flavors!";
            document.getElementById("first-flavor").style.display='block';
            document.getElementById("second-flavor").style.display='block';
        break;
    }
}

/* Manipulating number at the top of the cart */
//cart # - change variables
var numForCart = 0;
// add is my button
document.getElementById("add").addEventListener("click", addCart)
function addCart() {
    console.log( "function ready!" );
    numForCart++
    //+== getElementById("amount-select").value;
    document.getElementById("numForCart").innerHTML = numForCart;
}

/* */
document.getElementById("add").addEventListener("click", storeItem)
function storeItem() {
    var chosenPackageType = document.getElementById("bun-pack-type");
    var chosenPackageTypeValue = chosenPackageType.options[chosenPackageType.selectedIndex].value;
    var chosenAmount = document.getElementById("amount-select");
    var chosenAmountValue = chosenAmount.options[chosenAmount.selectedIndex].value;
    var chosenFirstFlavor = document.getElementById("dropdown1");
    var chosenFirstFlavorValue = chosenFirstFlavor.options[chosenFirstFlavor.selectedIndex].value;

    var userChoice = new cartItem(chosenPackageTypeValue, chosenAmountValue, chosenFirstFlavorValue);

    var thingsInCart = JSON.parse(localStorage.getItem("thingsInCartArray")) || [];
    thingsInCart.push(userChoice);

    localStorage.setItem("thingsInCartArray", JSON.stringify(thingsInCart));
    console.log(thingsInCart);

}

/* End of doc ready */
});



