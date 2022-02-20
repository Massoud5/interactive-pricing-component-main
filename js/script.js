const inputRange = document.getElementById("input-range");
const pageViews = document.querySelector(".object-span");

const mobPrice = document.querySelector(".mob-price");
const deskPrice = document.querySelector(".desk-price");
const mobPeriod = document.querySelector(".mob-period");
const deskPeriod = document.querySelector(".desk-period");

const inputCheck = document.getElementById("apple-switch");


let yearCalcul = ((inputRange.value * 12)-((inputRange.value * 12) * 0.25));


mobPrice.innerHTML = "$16.00"
deskPrice.innerHTML = "$16.00"
mobPeriod.textContent = " / month"
deskPeriod.textContent = " / month"


inputRange.oninput = function calcul(){
    
    let fullBar = ((this.value * 3.125)) + "%";
    
    inputRange.style.background = `linear-gradient(90deg,var(--Soft-Cyan) ${fullBar}, var(--Light-Grayish-Blue) 0%, var(--Light-Grayish-Blue) 50%)`;
    pageViews.innerHTML = 6.25 * inputRange.value + "K";
    if(!inputCheck.checked){
        mobPrice.innerHTML = "$" + inputRange.value + ".00";
        deskPrice.innerHTML = "$" + inputRange.value + ".00";
    }
    else{
        yearCalcul = ((inputRange.value * 12)-((inputRange.value * 12) * 0.25));
        mobPrice.innerHTML = "$" + yearCalcul + ".00";
        deskPrice.innerHTML = "$" + yearCalcul + ".00";
    }
}

inputCheck.addEventListener("click", function(){
    yearCalcul = ((inputRange.value * 12)-((inputRange.value * 12) * 0.25));
    if(!inputCheck.checked){
        mobPeriod.textContent = " / month";
        deskPeriod.textContent = " / month";

        mobPrice.innerHTML = "$" + inputRange.value + ".00";
        deskPrice.innerHTML = "$" + inputRange.value + ".00";
    }
    else{
        mobPeriod.textContent = " / year";
        deskPeriod.textContent = " / year";

        mobPrice.innerHTML = "$" + yearCalcul + ".00";
        deskPrice.innerHTML = "$" + yearCalcul + ".00";
    }
})