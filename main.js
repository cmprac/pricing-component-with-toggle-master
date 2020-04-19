function switchPrice() {
    var checkbox = document.getElementById("priceSwtichCb");
    var monthly = document.getElementsByClassName("monthly-price");
    var annually = document.getElementsByClassName("annually-price");

    for (i = 0; i < monthly.length; i++) {
        if (checkbox.checked == true) {
            monthly[i].style.display = "block";
            annually[i].style.display = "none";
        } else {
            monthly[i].style.display = "none";
            annually[i].style.display = "block";
        }
    }
}