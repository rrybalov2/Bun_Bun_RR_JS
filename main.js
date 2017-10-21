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

/* Using a switch statement to bundle actions together */
document.getElementById("bun-pack-type").onchange = function(){
    switch(document.getElementById("bun-pack-type").value) {
        case "sixpack":
            //image from Tesco: https://img.tesco.com/Groceries/pi/000/0286020000000/IDShot_540x540.jpg
            document.getElementById("mainBun").src="./Assets/sixpackrolls.jpg";
            document.getElementById("showP").innerHTML = "$8 per six pack";
            document.getElementById("showDesc").innerHTML = "Get them by the six pack!";
            document.getElementById("first-flavor").style.display='block';
            document.getElementById("second-flavor").style.display='block';
        break;

        case "single":
            document.getElementById("mainBun").src="./Assets/originalbun.jpg";
            document.getElementById("showP").innerHTML = "$1.50 per single bun";
            document.getElementById("showDesc").innerHTML = "Get them one at a time!";
            document.getElementById("first-flavor").style.display='none';
            document.getElementById("second-flavor").style.display='none';
        break;


        case "dozen":
            //image from WalMart: https://i5.walmartimages.com/asr/4ac34003-9e2c-40e9-ad98-c2edc7974d8b_1.7719a321fbd636849bd03dba73969a09.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF
            document.getElementById("mainBun").src="./Assets/dozenpackrolls.jpg";
            document.getElementById("showP").innerHTML = "$15 per dozen";
            document.getElementById("showDesc").innerHTML = "Get them by the dozen!";
            document.getElementById("first-flavor").style.display='block';
            document.getElementById("second-flavor").style.display='block';
        break;

        case "sixpackmixed":
            //image from Tesco: https://img.tesco.com/Groceries/pi/000/0286020000000/IDShot_540x540.jpg
            document.getElementById("mainBun").src="./Assets/sixpackrollsextra.jpg";
            document.getElementById("showP").innerHTML = "$8 per six pack";
            document.getElementById("showDesc").innerHTML = "Get them by the six pack - pick some more flavors!";
            document.getElementById("first-flavor").style.display='block';
            document.getElementById("second-flavor").style.display='block';
        break;

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
    numForCart++;
    document.getElementById("numForCart").innerHTML = numForCart;
}


});



